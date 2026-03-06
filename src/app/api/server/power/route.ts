import { NextResponse } from "next/server";
import { promises as fs } from "fs";

// Power estimation constants (Software-based)
const IDLE_WATTS = 15; // Base idle power draw
const MAX_WATTS = 65; // Maximum power draw at 100% CPU
const VND_PER_KWH = 3000; // Price per kWh in VND
const HOURS_PER_DAY = 24;
const DAYS_PER_MONTH = 30;

interface CPUStats {
  idle: number;
  total: number;
}

/**
 * Read CPU stats from /proc/stat
 * Returns null if unable to read (not on Linux, etc.)
 */
async function readCPUStats(): Promise<CPUStats | null> {
  try {
    console.log("[Power API] Reading CPU stats from /proc/stat");
    const data = await fs.readFile("/proc/stat", "utf-8");
    const lines = data.split("\n");
    const cpuLine = lines.find((line) => line.startsWith("cpu "));

    if (!cpuLine) {
      console.warn("[Power API] CPU line not found in /proc/stat");
      return null;
    }

    // cpu  user nice system idle iowait irq softirq steal guest guest_nice
    const parts = cpuLine.split(/\s+/).slice(1).map(Number);
    const idle = parts[3] + parts[4]; // idle + iowait
    const total = parts.reduce((acc, val) => acc + val, 0);

    console.log(`[Power API] CPU stats read: idle=${idle}, total=${total}`);
    return { idle, total };
  } catch (error) {
    console.error("[Power API] Error reading CPU stats:", error);
    return null;
  }
}

/**
 * Calculate CPU usage percentage by sampling /proc/stat twice
 * Returns percentage from 0 to 100, or null if unable to calculate
 */
async function calculateCPUUsage(): Promise<number | null> {
  try {
    console.log("[Power API] Starting CPU usage calculation");
    const stats1 = await readCPUStats();
    if (!stats1) {
      console.warn("[Power API] First CPU stats read failed");
      return null;
    }

    // Wait 1 second for accurate measurement
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const stats2 = await readCPUStats();
    if (!stats2) {
      console.warn("[Power API] Second CPU stats read failed");
      return null;
    }

    const idleDiff = stats2.idle - stats1.idle;
    const totalDiff = stats2.total - stats1.total;

    if (totalDiff === 0) return 0;

    const cpuUsage = 100 - (idleDiff / totalDiff) * 100;
    const clampedUsage = Math.max(0, Math.min(100, cpuUsage));
    console.log(
      `[Power API] CPU usage calculated: ${clampedUsage.toFixed(2)}%`,
    );
    return clampedUsage; // Clamp to 0-100
  } catch (error) {
    console.error("[Power API] Error calculating CPU usage:", error);
    return null;
  }
}

/**
 * Estimate power consumption based on CPU usage
 * Uses linear interpolation: Current_Watts = IDLE_WATTS + ((MAX_WATTS - IDLE_WATTS) * (CPU_Usage / 100))
 */
function estimatePowerFromCPU(cpuUsagePercent: number): number {
  const watts = IDLE_WATTS + ((MAX_WATTS - IDLE_WATTS) * cpuUsagePercent) / 100;
  const roundedWatts = Math.round(watts * 100) / 100;
  console.log(
    `[Power API] Power estimated: ${roundedWatts}W for ${cpuUsagePercent.toFixed(2)}% CPU usage`,
  );
  return roundedWatts; // 2 decimal places
}

/**
 * Calculate estimated monthly electricity cost in VND
 */
function calculateMonthlyCost(totalWatts: number): number {
  const kWh = (totalWatts * HOURS_PER_DAY * DAYS_PER_MONTH) / 1000;
  return Math.round(kWh * VND_PER_KWH);
}

export async function GET() {
  console.log("[Power API] GET request received");
  try {
    const cpuUsage = await calculateCPUUsage();

    if (cpuUsage === null) {
      // CPU stats not available - graceful fallback
      console.warn("[Power API] Returning 503 - CPU stats unavailable");
      return NextResponse.json(
        {
          error: "CPU stats unavailable",
          message: "Unable to read /proc/stat. Ensure running on Linux.",
          cpuUsagePercent: 0,
          estimatedWatts: 0,
          monthlyCostVND: 0,
          available: false,
        },
        { status: 503 },
      );
    }

    const estimatedWatts = estimatePowerFromCPU(cpuUsage);
    const monthlyCostVND = calculateMonthlyCost(estimatedWatts);

    console.log(
      `[Power API] Success - Watts: ${estimatedWatts}W, Monthly cost: ${monthlyCostVND} VND`,
    );
    return NextResponse.json({
      method: "software-estimated",
      cpuUsagePercent: Math.round(cpuUsage * 100) / 100,
      estimatedWatts,
      idleWatts: IDLE_WATTS,
      maxWatts: MAX_WATTS,
      monthlyCostVND,
      monthlyCostVNDFormatted: monthlyCostVND.toLocaleString("vi-VN"),
      available: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    // Catch-all error handler
    console.error("[Power API] Unhandled error in GET handler:", error);
    console.error(
      "[Power API] Error stack:",
      error instanceof Error ? error.stack : "N/A",
    );
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Power estimation failed",
        available: false,
      },
      { status: 500 },
    );
  }
}
