import AdminDashBoardHeader from "@/pages/admin_dashboard/AdminDashBoardHeader";
import "./admin.css";
import { AdminTopMetricCardSection } from "@/pages/admin_dashboard/AdminTopMetricCardSection";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen w-full bg-admin-bg">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        {/* Header */}
        <AdminDashBoardHeader />

        {/* Dashboard Content */}
        <div className="flex-1 px-8 py-6 overflow-y-auto">
          {/* Section 1: Top Metrics Cards */}
          <AdminTopMetricCardSection />
          {/* Section 2: Core System Metrics */}
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 lg:col-span-6 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  📊 CPU Usage
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-md border border-admin-border bg-transparent text-admin-text-secondary text-xs">
                    1H
                  </button>
                  <button className="px-3 py-1.5 rounded-md border border-admin-border bg-transparent text-admin-text-secondary text-xs">
                    24H
                  </button>
                  <button className="px-3 py-1.5 rounded-md border border-admin-border bg-transparent text-admin-text-secondary text-xs">
                    7D
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-50 bg-admin-bg rounded-lg flex items-center justify-center text-admin-text-muted">
                CPU Usage Line Chart (0-100%)
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  💾 Memory (RAM) Usage
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-md border border-admin-border bg-transparent text-admin-text-secondary text-xs">
                    Details
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-50 bg-admin-bg rounded-lg flex items-center justify-center text-admin-text-muted">
                Memory Usage Chart (Used/Available/Cached)
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  💿 Disk Storage & I/O
                </div>
              </div>
              <div className="flex-1 min-h-50 bg-admin-bg rounded-lg flex items-center justify-center text-center text-admin-text-muted">
                Disk Usage: 256GB / 512GB
                <br />
                Read/Write Speeds
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  ⏱️ Uptime & Load Average
                </div>
              </div>
              <div className="flex-1 min-h-50 bg-admin-bg rounded-lg flex items-center justify-center text-center text-admin-text-muted">
                Uptime: 45d 12h 32m
                <br />
                Load: 1.5, 1.8, 2.1
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  📡 Network Traffic
                </div>
              </div>
              <div className="flex-1 min-h-50 bg-admin-bg rounded-lg flex items-center justify-center text-center text-admin-text-muted">
                RX: 125 Mbps
                <br />
                TX: 89 Mbps
              </div>
            </div>
          </div>
          {/* Section 3: Network Metrics */}
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 lg:col-span-8 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  📊 Network Bandwidth (Real-time)
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-md border border-admin-border bg-transparent text-admin-text-secondary text-xs">
                    🔍 Filter
                  </button>
                  <button className="px-3 py-1.5 rounded-md border border-admin-border bg-transparent text-admin-text-secondary text-xs">
                    ↕️ Sort
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-50 bg-admin-bg rounded-lg flex items-center justify-center text-center text-admin-text-muted">
                Network Traffic Over Time Chart
                <br />
                (Inbound RX vs Outbound TX)
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  🔌 Active Connections
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-[32px] font-bold text-admin-text-primary">
                    1,247
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Current Connections
                  </div>
                </div>
                <div className="min-h-30 bg-admin-bg rounded-lg flex items-center justify-center text-admin-text-muted">
                  Connection History
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  🌐 Latency/Ping Monitor
                </div>
              </div>
              <div className="flex-1 min-h-50 bg-admin-bg rounded-lg flex items-center justify-center text-admin-text-muted">
                Server Response Time Chart (ms)
              </div>
            </div>
          </div>
          {/* Section 4: Application & Services Metrics */}
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 lg:col-span-6 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  ⚙️ Service Status
                </div>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-admin-border">
                    <th className="p-3 text-left text-xs font-medium text-admin-text-muted uppercase">
                      Service
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-admin-text-muted uppercase">
                      Type
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-admin-text-muted uppercase">
                      Status
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-admin-text-muted uppercase">
                      Uptime
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-admin-border">
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Web Server
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Nginx
                    </td>
                    <td className="p-3">
                      <span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-admin-success-light text-admin-success">
                        Running
                      </span>
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      45d 12h
                    </td>
                  </tr>
                  <tr className="border-b border-admin-border">
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Database
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      PostgreSQL
                    </td>
                    <td className="p-3">
                      <span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-admin-success-light text-admin-success">
                        Running
                      </span>
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      45d 12h
                    </td>
                  </tr>
                  <tr className="border-b border-admin-border">
                    <td className="p-3 text-sm text-admin-text-secondary">
                      API Server
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Node.js
                    </td>
                    <td className="p-3">
                      <span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-admin-success-light text-admin-success">
                        Running
                      </span>
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      12d 8h
                    </td>
                  </tr>
                  <tr className="border-b border-admin-border">
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Cache
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Redis
                    </td>
                    <td className="p-3">
                      <span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-admin-warning-light text-admin-warning">
                        Warning
                      </span>
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      3d 2h
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-span-12 lg:col-span-6 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  🚀 Runtime Metrics
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[13px] text-admin-text-secondary">
                      JVM Heap Usage
                    </span>
                    <span className="text-[13px] text-admin-text-primary font-semibold">
                      65%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-admin-bg rounded-full overflow-hidden">
                    <div
                      className="h-full bg-admin-accent transition-all"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[13px] text-admin-text-secondary">
                      Event Loop Lag
                    </span>
                    <span className="text-[13px] text-admin-text-primary font-semibold">
                      12ms
                    </span>
                  </div>
                  <div className="w-full h-2 bg-admin-bg rounded-full overflow-hidden">
                    <div
                      className="h-full bg-admin-accent transition-all"
                      style={{ width: "24%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[13px] text-admin-text-secondary">
                      Garbage Collection
                    </span>
                    <span className="text-[13px] text-admin-text-primary font-semibold">
                      Active
                    </span>
                  </div>
                  <div className="min-h-20 bg-admin-bg rounded-lg flex items-center justify-center text-admin-text-muted">
                    GC Activity Chart
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  🗄️ Database Activity
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div>
                  <div className="text-[32px] font-bold text-admin-text-primary">
                    45/100
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Connection Pool
                  </div>
                </div>
                <div>
                  <div className="text-[32px] font-bold text-admin-text-primary">
                    2,547
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Queries per Second
                  </div>
                </div>
                <div>
                  <div className="text-[32px] font-bold text-admin-text-primary">
                    15ms
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Avg Query Time
                  </div>
                </div>
                <div>
                  <div className="text-[32px] font-bold text-admin-text-primary">
                    12.5GB
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Database Size
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Section 5: Alerts & Logs */}
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  ⚠️ HTTP Error Rates
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-admin-text-secondary">
                    2xx Success
                  </span>
                  <span className="text-base font-semibold text-admin-success">
                    98.5%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-admin-text-secondary">
                    4xx Client Errors
                  </span>
                  <span className="text-base font-semibold text-admin-warning">
                    1.2%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-admin-text-secondary">
                    5xx Server Errors
                  </span>
                  <span className="text-base font-semibold text-admin-error">
                    0.3%
                  </span>
                </div>
                <div className="min-h-25 bg-admin-bg rounded-lg flex items-center justify-center text-admin-text-muted">
                  HTTP Status Distribution
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-8 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  🚨 Recent Alerts
                </div>
                <button className="px-3 py-1.5 rounded-md border border-admin-border bg-transparent text-admin-text-secondary text-xs">
                  See All
                </button>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-admin-border">
                    <th className="p-3 text-left text-xs font-medium text-admin-text-muted uppercase">
                      Time
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-admin-text-muted uppercase">
                      Severity
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-admin-text-muted uppercase">
                      Message
                    </th>
                    <th className="p-3 text-left text-xs font-medium text-admin-text-muted uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-admin-border">
                    <td className="p-3 text-sm text-admin-text-secondary">
                      2 min ago
                    </td>
                    <td className="p-3">
                      <span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-admin-warning-light text-admin-warning">
                        Warning
                      </span>
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      RAM usage exceeds 85%
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Active
                    </td>
                  </tr>
                  <tr className="border-b border-admin-border">
                    <td className="p-3 text-sm text-admin-text-secondary">
                      15 min ago
                    </td>
                    <td className="p-3">
                      <span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-admin-success-light text-admin-success">
                        Info
                      </span>
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Backup completed successfully
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Resolved
                    </td>
                  </tr>
                  <tr className="border-b border-admin-border">
                    <td className="p-3 text-sm text-admin-text-secondary">
                      1 hour ago
                    </td>
                    <td className="p-3">
                      <span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-admin-error-light text-admin-error">
                        Critical
                      </span>
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      CPU at 100% for 5 minutes
                    </td>
                    <td className="p-3 text-sm text-admin-text-secondary">
                      Resolved
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  🔒 Security Logs
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 bg-admin-bg rounded-lg border border-admin-border">
                  <div className="text-[32px] font-bold text-admin-error">
                    12
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Failed SSH Attempts (24h)
                  </div>
                </div>
                <div className="p-5 bg-admin-bg rounded-lg border border-admin-border">
                  <div className="text-[32px] font-bold text-admin-warning">
                    3
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Security Warnings
                  </div>
                </div>
                <div className="p-5 bg-admin-bg rounded-lg border border-admin-border">
                  <div className="text-[32px] font-bold text-admin-success">
                    247
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Blocked IPs
                  </div>
                </div>
                <div className="p-5 bg-admin-bg rounded-lg border border-admin-border">
                  <div className="text-[32px] font-bold text-admin-text-primary">
                    99.8%
                  </div>
                  <div className="text-[13px] text-admin-text-muted">
                    Security Score
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Section 6: Hardware Health */}
          <div className="grid grid-cols-12 gap-5 mb-6">
            <div className="col-span-12 admin-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="text-base font-semibold text-admin-text-primary">
                  🌡️ Hardware Health (Physical Servers)
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <div className="min-h-30 bg-admin-bg rounded-lg flex flex-col items-center justify-center text-center text-admin-text-muted p-4">
                  <div className="text-sm mb-2">CPU Temp</div>
                  <div className="text-2xl font-bold text-admin-success">
                    58°C
                  </div>
                </div>
                <div className="min-h-30 bg-admin-bg rounded-lg flex flex-col items-center justify-center text-center text-admin-text-muted p-4">
                  <div className="text-sm mb-2">Motherboard</div>
                  <div className="text-2xl font-bold text-admin-success">
                    45°C
                  </div>
                </div>
                <div className="min-h-30 bg-admin-bg rounded-lg flex flex-col items-center justify-center text-center text-admin-text-muted p-4">
                  <div className="text-sm mb-2">Fan Speed</div>
                  <div className="text-2xl font-bold text-admin-accent">
                    2400 RPM
                  </div>
                </div>
                <div className="min-h-30 bg-admin-bg rounded-lg flex flex-col items-center justify-center text-center text-admin-text-muted p-4">
                  <div className="text-sm mb-2">GPU Temp</div>
                  <div className="text-2xl font-bold text-admin-warning">
                    72°C
                  </div>
                </div>
                <div className="min-h-30 bg-admin-bg rounded-lg flex flex-col items-center justify-center text-center text-admin-text-muted p-4">
                  <div className="text-sm mb-2">Power Usage</div>
                  <div className="text-2xl font-bold text-admin-text-primary">
                    450W
                  </div>
                </div>
                <div className="min-h-30 bg-admin-bg rounded-lg flex flex-col items-center justify-center text-center text-admin-text-muted p-4">
                  <div className="text-sm mb-2">Overall Health</div>
                  <div className="text-2xl font-bold text-admin-success">
                    Excellent
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
