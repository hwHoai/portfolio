"use client";

import { useEffect, useState } from "react";

type TotalViewData = {
  period: string;
  totalViews: number;
};

interface TotalViewDataResponse {
  data: TotalViewData;
  isSuccess: string;
}

export const AdminTotalViewCard = () => {
  const [data, setData] = useState<TotalViewData | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "/api/dashboard/topmetric/total_view?days=30",
        );
        const data: TotalViewDataResponse = await response.json();
        setData(data.data);
        console.log("Fetched total view data:", data.data);
      } catch (error) {
        console.error("Error fetching portfolio view metrics:", error);
        return null;
      }
    })();
  }, []);
  return (
    <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 p-4 text-white shadow-lg">
      <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
      <div className="relative z-10">
        <div className="text-xs font-medium opacity-90 mb-1">Total views</div>
        <div className="text-2xl font-bold mb-1">
          {data?.totalViews.toLocaleString()}
        </div>
        <div className="flex items-center gap-1 text-xs py-0.5">
          over {data?.period}
        </div>
      </div>
    </div>
  );
};

export default AdminTotalViewCard;
