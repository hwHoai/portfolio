import { NextResponse } from "next/server";
import { promises as fs } from "fs";

// Intel RAPL path for CPU power consumption
const RAPL_PATH = "/sys/class/powercap/intel-rapl/intel-rapl:0/energy_uj";

// Constants
const SYSTEM_OFFSET_WATTS = 15; // Additional power for motherboard, drives, etc.
const VND_PER_KWH = 3000; // Price per kWh in VND
const HOURS_PER_DAY = 24;
const DAYS_PER_MONTH = 30;

/**
 * Read Intel RAPL energy counter in microjoules
 * Returns null if file cannot be read (not on Linux, no permissions, etc.)
 */
async function readRAPLEnergy(): Promise<number | null> {
  try {
    const data = await fs.readFile(RAPL_PATH, "utf-8");
    return parseInt(data.trim(), 10);
  } catch (error) {
    // Gracefully handle cases where RAPL is not available
    console.error("Failed to read RAPL energy:", error);
    return null;
  }
}

/**
 * Calculate CPU power consumption in Watts by sampling RAPL twice
 */
async function calculateCPUWatts(): Promise<number | null> {
  const energy1 = await readRAPLEnergy();
  if (energy1 === null) return null;

  // Wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const energy2 = await readRAPLEnergy();
  if (energy2 === null) return null;

  // Calculate power in Watts
  // Energy is in microjoules, time is 1 second
  const energyDiff = energy2 - energy1;
  const watts = energyDiff / 1_000_000; // Convert microjoules/second to Watts

  return watts;
}

/**
 * Calculate estimated monthly electricity cost in VND
 */
function calculateMonthlyCost(totalWatts: number): number {
  // Formula: watts * 24 hours * 30 days / 1000 * VND_per_kWh
  const kWh = (totalWatts * HOURS_PER_DAY * DAYS_PER_MONTH) / 1000;
  return Math.round(kWh * VND_PER_KWH);
}

export async function GET() {
  try {
    const cpuWatts = await calculateCPUWatts();

    if (cpuWatts === null) {
      // RAPL not available - return mock data or error
      return NextResponse.json(
        {
          error: "RAPL not available",
          message:
            "Cannot read /sys/class/powercap/. Run on Linux with Intel CPU and proper permissions.",
          cpuWatts: 0,
          totalWatts: 0,
          monthlyCostVND: 0,
          available: false,
        },
        { status: 503 },
      );
    }

    // Add system offset
    const totalWatts = cpuWatts + SYSTEM_OFFSET_WATTS;
    const monthlyCostVND = calculateMonthlyCost(totalWatts);

    return NextResponse.json({
      cpuWatts: Math.round(cpuWatts * 100) / 100, // Round to 2 decimal places
      systemOffsetWatts: SYSTEM_OFFSET_WATTS,
      totalWatts: Math.round(totalWatts * 100) / 100,
      monthlyCostVND,
      monthlyCostVNDFormatted: monthlyCostVND.toLocaleString("vi-VN"),
      available: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error calculating power consumption:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
        available: false,
      },
      { status: 500 },
    );
  }
}
