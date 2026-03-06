# Server Power Monitoring Setup (Software-Estimated)

## Overview

This system monitors real-time power consumption of your Linux server using **Software-Based CPU Usage Estimation**. It reads CPU usage from `/proc/stat` and estimates power consumption using linear interpolation, then calculates the estimated monthly electricity cost in VND.

> **Note**: This method is used because the hardware does NOT support Intel RAPL (the `/sys/class/powercap/` directory is empty on older hardware).

## Features Implemented

- ✅ Backend API to read CPU usage from `/proc/stat`
- ✅ Real-time CPU usage calculation (samples twice with 1-second delay)
- ✅ Software-based power estimation using linear interpolation
  - Idle: 15W (0% CPU)
  - Maximum: 65W (100% CPU)
  - Formula: `Current_Watts = 15 + ((65 - 15) * (CPU_Usage / 100))`
- ✅ Monthly cost calculation in VND (formula: watts × 24h × 30d ÷ 1000 × 3000 VND/kWh)
- ✅ Frontend component with auto-refresh every 5 seconds
- ✅ Graceful error handling (no crashes, no log spam)
- ✅ Spinner loading state instead of "Loading..." text

## How It Works

### Power Estimation Algorithm

1. **Read CPU stats** from `/proc/stat` at time T1
2. **Wait 1 second**
3. **Read CPU stats** from `/proc/stat` at time T2
4. **Calculate CPU usage percentage**:
   ```
   CPU_Usage = 100 - ((idle_diff / total_diff) * 100)
   ```
5. **Estimate power consumption** (linear interpolation):
   ```
   Current_Watts = 15W + ((65W - 15W) * (CPU_Usage / 100))
   ```
6. **Calculate monthly cost**:
   ```
   Monthly_kWh = Current_Watts × 24h × 30d ÷ 1000
   Monthly_Cost = Monthly_kWh × 3000 VND
   ```

## No Permissions Required!

Unlike Intel RAPL, reading `/proc/stat` requires **NO special permissions**. It works out-of-the-box on any Linux system.

## API Endpoint

**GET** `/api/server/power`

### Response (Success):

```json
{
  "method": "software-estimated",
  "cpuUsagePercent": 45.23,
  "estimatedWatts": 37.62,
  "idleWatts": 15,
  "maxWatts": 65,
  "monthlyCostVND": 81206,
  "monthlyCostVNDFormatted": "81.206",
  "available": true,
  "timestamp": "2026-03-06T10:30:00.000Z"
}
```

### Response (CPU Stats Not Available):

```json
{
  "error": "CPU stats unavailable",
  "message": "Unable to read /proc/stat. Ensure running on Linux.",
  "cpuUsagePercent": 0,
  "estimatedWatts": 0,
  "monthlyCostVND": 0,
  "available": false
}
```

## Monthly Cost Calculation

```
Monthly Cost (VND) = Estimated_Watts × 24 hours × 30 days ÷ 1000 × 3000 VND/kWh

Example (at 50% CPU usage):
  CPU Usage: 50%
  Estimated Watts: 15W + ((65W - 15W) × 0.5) = 40W

  Monthly kWh = 40W × 24h × 30d ÷ 1000 = 28.8 kWh
  Monthly Cost = 28.8 kWh × 3000 VND = 86,400 VND
```

## Component Location

- **Backend API**: `src/app/api/server/power/route.ts`
- **Frontend Component**: `src/components/cards/AdminTotalPower.tsx`
- **Used In**: `src/pages/admin_dashboard/AdminTopMetricCardSection.tsx`

## Testing

### On Windows (Development)

The component will show "CPU stats unavailable" since `/proc/stat` is Linux-only.

### On Linux Server (Production)

1. No special setup required!
2. Deploy Next.js app
3. Visit `/admin` dashboard
4. Card should show real-time CPU usage % and estimated power consumption

## Troubleshooting

### "CPU stats unavailable" Error

- Verify you're running on Linux
- Check `/proc/stat` exists: `cat /proc/stat | head -n 1`
- Ensure the process has read permissions (it should by default)

### Displayed Power Seems Wrong

You can adjust the power estimation constants in `src/app/api/server/power/route.ts`:

```typescript
const IDLE_WATTS = 15; // Adjust based on your measured idle power
const MAX_WATTS = 65; // Adjust based on your measured max power
```

**How to measure your actual values:**

- Use a Kill-A-Watt meter or similar hardware power meter
- Measure idle power (no load)
- Measure max power (run `stress --cpu $(nproc)`)
- Update the constants accordingly

## Configuration

Edit constants in `src/app/api/server/power/route.ts`:

```typescript
const IDLE_WATTS = 15; // Base idle power draw
const MAX_WATTS = 65; // Maximum power at 100% CPU
const VND_PER_KWH = 3000; // Update with current electricity rate
```

## Why Software Estimation?

**Intel RAPL** is the preferred method for accurate power measurement, but it:

- Only works on newer Intel CPUs (Sandy Bridge and later)
- Requires special kernel modules and permissions
- May not work on laptops with dead batteries or old hardware

**Software estimation** using CPU usage:

- Works on ANY Linux system
- Requires no permissions (reads `/proc/stat`)
- No log spam or ENOENT errors
- Reasonably accurate for cost estimation purposes

## Security Notes

- `/proc/stat` is read-only and world-readable (no security risk)
- No external hardware or network access required
- All calculations done server-side
- Frontend only displays data (no sensitive info)
- Graceful error handling prevents crashes
