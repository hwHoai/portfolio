import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import os from "os";

/**
 * Read system uptime from /proc/uptime (Linux)
 * Returns uptime in seconds, or null if not on Linux
 */
async function getSystemUptime(): Promise<number | null> {
  try {
    const data = await fs.readFile("/proc/uptime", "utf-8");
    const uptimeSeconds = parseFloat(data.split(" ")[0]);
    return uptimeSeconds;
  } catch {
    // Fallback to os.uptime() on non-Linux systems
    return os.uptime();
  }
}

/**
 * Format uptime seconds into readable string
 * Example: "45d 12h 30m"
 */
function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const parts: string[] = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);

  return parts.length > 0 ? parts.join(" ") : "0m";
}

/**
 * Get load average (1min, 5min, 15min)
 */
function getLoadAverage(): number[] {
  return os.loadavg();
}

/**
 * Get system hostname
 */
function getHostname(): string {
  return os.hostname();
}

/**
 * Get platform info
 */
function getPlatformInfo() {
  return {
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    arch: os.arch(),
  };
}

export async function GET() {
  try {
    const uptimeSeconds = await getSystemUptime();

    if (uptimeSeconds === null) {
      return NextResponse.json(
        {
          error: "Unable to read system uptime",
          available: false,
        },
        { status: 503 },
      );
    }

    const uptimeFormatted = formatUptime(uptimeSeconds);
    const loadAvg = getLoadAverage();
    const hostname = getHostname();
    const platform = getPlatformInfo();

    // Determine status based on load average
    // Simple heuristic: if 1-min load is less than CPU count, system is healthy
    const cpuCount = os.cpus().length;
    const isHealthy = loadAvg[0] < cpuCount * 1.5; // 150% threshold

    return NextResponse.json({
      status: isHealthy ? "online" : "high-load",
      uptime: {
        seconds: Math.floor(uptimeSeconds),
        formatted: uptimeFormatted,
      },
      loadAverage: {
        "1min": Math.round(loadAvg[0] * 100) / 100,
        "5min": Math.round(loadAvg[1] * 100) / 100,
        "15min": Math.round(loadAvg[2] * 100) / 100,
      },
      hostname,
      platform,
      cpuCount,
      available: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching server status:", error);
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
