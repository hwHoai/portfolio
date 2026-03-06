"use client";

import { useEffect, useState } from "react";

interface PowerData {
  method: string;
  cpuUsagePercent: number;
  estimatedWatts: number;
  idleWatts: number;
  maxWatts: number;
  monthlyCostVND: number;
  monthlyCostVNDFormatted: string;
  available: boolean;
  error?: string;
  message?: string;
}

export const AdminTotalPower = () => {
  const [powerData, setPowerData] = useState<PowerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPowerData = async () => {
      try {
        const response = await fetch("/api/server/power");
        const data = await response.json();

        if (data.available) {
          setPowerData(data);
          setError(null);
        } else {
          setError(data.message || "Power monitoring not available");
        }
      } catch (err) {
        setError("Failed to fetch power data");
        console.error("Power fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchPowerData();

    // Refresh every 5 seconds
    const interval = setInterval(fetchPowerData, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-orange-500 to-red-600 p-4 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
        <div className="relative z-10">
          <div className="text-xs font-medium opacity-90 mb-1">
            Power Consumption
          </div>
          <div className="h-8 flex items-center">
            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !powerData) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-gray-500 to-gray-700 p-4 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
        <div className="relative z-10">
          <div className="text-xs font-medium opacity-90 mb-1">
            Power Consumption
          </div>
          <div className="text-sm font-semibold mb-1">Not Available</div>
          <div className="text-xs opacity-75">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-orange-500 to-red-600 p-4 text-white shadow-lg">
      <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
      <div className="relative z-10">
        <div className="text-xs font-medium opacity-90 mb-1">
          Cost per month
        </div>
        <div className="text-2xl font-bold mb-1">
          {powerData.monthlyCostVNDFormatted} ₫
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="py-0.5">{powerData.estimatedWatts}W</span>
          <span className="opacity-75">
            (CPU: {powerData.cpuUsagePercent}%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminTotalPower;
