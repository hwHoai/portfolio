# Server Power Monitoring Setup

## Overview

This system monitors real-time power consumption of your Linux server using Intel RAPL (Running Average Power Limit) and calculates the estimated monthly electricity cost in VND.

## Features Implemented

- ✅ Backend API to read Intel RAPL power consumption from `/sys/class/powercap/`
- ✅ Real-time CPU wattage calculation (samples twice with 1-second delay)
- ✅ System offset of +15W for motherboard, drives, etc.
- ✅ Monthly cost calculation in VND (formula: watts × 24h × 30d ÷ 1000 × 3000 VND/kWh)
- ✅ Frontend component replacing AdminTotalRevenue card
- ✅ Auto-refresh every 5 seconds
- ✅ Graceful error handling when RAPL is unavailable

## Linux Permissions Setup

### Grant Non-Root Access to RAPL Files

Run these commands on your Linux server to allow your application to read power consumption data:

```bash
# Method 1: Using chmod (simplest, but resets on reboot)
sudo chmod -R a+r /sys/class/powercap/intel-rapl/intel-rapl:0/

# Method 2: Using udev rules (persistent across reboots)
# Create a udev rule file
sudo nano /etc/udev/rules.d/99-intel-rapl.rules

# Add this line to the file:
SUBSYSTEM=="powercap", KERNEL=="intel-rapl:*", RUN+="/bin/chmod -R a+r /sys/class/powercap/intel-rapl/"

# Reload udev rules
sudo udevadm control --reload-rules
sudo udevadm trigger

# Reboot to apply (or manually run chmod as in Method 1 for immediate effect)
sudo reboot
```

### Verify Permissions

```bash
# Check if you can read the energy file
cat /sys/class/powercap/intel-rapl/intel-rapl:0/energy_uj

# Should output a large number (microjoules)
# Example: 342895123456
```

## API Endpoint

**GET** `/api/server/power`

### Response (Success):

```json
{
  "cpuWatts": 8.45,
  "systemOffsetWatts": 15,
  "totalWatts": 23.45,
  "monthlyCostVND": 50544,
  "monthlyCostVNDFormatted": "50.544",
  "available": true,
  "timestamp": "2026-03-06T10:30:00.000Z"
}
```

### Response (RAPL Not Available):

```json
{
  "error": "RAPL not available",
  "message": "Cannot read /sys/class/powercap/. Run on Linux with Intel CPU and proper permissions.",
  "cpuWatts": 0,
  "totalWatts": 0,
  "monthlyCostVND": 0,
  "available": false
}
```

## Monthly Cost Calculation

```
Monthly Cost (VND) = Total Watts × 24 hours × 30 days ÷ 1000 × 3000 VND/kWh

Example:
  CPU: 8W
  System Offset: +15W
  Total: 23W

  Monthly kWh = 23W × 24h × 30d ÷ 1000 = 16.56 kWh
  Monthly Cost = 16.56 kWh × 3000 VND = 49,680 VND
```

## Component Location

- **Backend API**: `src/app/api/server/power/route.ts`
- **Frontend Component**: `src/components/cards/AdminTotalRevenue.tsx`
- **Used In**: `src/pages/admin_dashboard/AdminTopMetricCardSection.tsx`

## Testing

### On Windows (Development)

The component will show "Power Monitoring Not Available" since RAPL is Linux-only.

### On Linux Server (Production)

1. Ensure Intel CPU with RAPL support (most Intel CPUs since Sandy Bridge)
2. Apply permission commands above
3. Deploy Next.js app
4. Visit `/admin` dashboard
5. Card should show real-time power consumption and VND cost

## Troubleshooting

### "RAPL not available" Error

- Verify you're running on Linux
- Check Intel CPU support: `ls /sys/class/powercap/`
- Apply permission commands
- Check file exists: `ls -la /sys/class/powercap/intel-rapl/intel-rapl:0/energy_uj`

### Permission Denied

```bash
# Re-run chmod command
sudo chmod -R a+r /sys/class/powercap/intel-rapl/

# Check current permissions
ls -la /sys/class/powercap/intel-rapl/intel-rapl:0/
```

### Reading Shows 0 Watts

- Verify CPU is under load
- Check multiple RAPL domains: `ls /sys/class/powercap/intel-rapl/`
- You may need to adjust the domain (intel-rapl:0 vs intel-rapl:1)

## Configuration

Edit constants in `src/app/api/server/power/route.ts`:

```typescript
const SYSTEM_OFFSET_WATTS = 15; // Adjust based on your hardware
const VND_PER_KWH = 3000; // Update with current electricity rate
```

## Security Notes

- RAPL files are read-only by design (no security risk)
- No external hardware or network access required
- All calculations done server-side
- Frontend only displays data (no sensitive info)
