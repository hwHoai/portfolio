"use client";

import { useEffect, useState } from "react";

interface ServerStatusData {
  status: "online" | "high-load" | "offline";
  uptime: {
    seconds: number;
    formatted: string;
  };
  loadAverage: {
    "1min": number;
    "5min": number;
    "15min": number;
  };
  hostname: string;
  cpuCount: number;
  available: boolean;
  error?: string;
  message?: string;
}

export const AdminServerStatus = () => {
  const [statusData, setStatusData] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("/api/server/status");
        const data = await response.json();

        if (data.available) {
          setStatusData(data);
          setError(null);
        } else {
          setError(data.message || "Server status not available");
        }
      } catch (err) {
        setError("Failed to fetch server status");
        console.error("Status fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchStatus();

    // Refresh every 10 seconds
    const interval = setInterval(fetchStatus, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-gray-500 to-gray-700 p-4 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
        <div className="relative z-10">
          <div className="text-xs font-medium opacity-90 mb-1">
            Server Status
          </div>
          <div className="h-8 flex items-center">
            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !statusData) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-red-500 to-red-700 p-4 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
        <div className="relative z-10">
          <div className="text-xs font-medium opacity-90 mb-1">
            Server Status
          </div>
          <div className="text-2xl font-bold mb-1">Offline</div>
          <div className="flex items-center gap-1 text-xs">
            <span className="py-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-red-200 rounded-full"></span>
              Error
            </span>
            <span className="opacity-75">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  // Determine color based on status
  const isOnline = statusData.status === "online";
  const bgColor = isOnline
    ? "from-green-500 to-lime-600"
    : "from-yellow-500 to-orange-600";
  const statusText = isOnline ? "Online" : "High Load";
  const dotColor = isOnline ? "bg-green-200" : "bg-yellow-200";

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-linear-to-br ${bgColor} p-4 text-white shadow-lg`}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
      <div className="relative z-10">
        <div className="text-xs font-medium opacity-90 mb-1">Server Status</div>
        <div className="text-2xl font-bold mb-1">{statusText}</div>
        <div className="flex items-center gap-1 text-xs">
          <span className="py-0.5 flex items-center gap-1">
            <span
              className={`w-1.5 h-1.5 ${dotColor} rounded-full animate-pulse`}
            ></span>
            {statusData.uptime.formatted}
          </span>
          <span className="opacity-75">
            Load: {statusData.loadAverage["1min"]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminServerStatus;
