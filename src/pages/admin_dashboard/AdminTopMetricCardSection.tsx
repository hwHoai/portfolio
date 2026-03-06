import AdminPortfolioViewCard from "@/components/cards/AdminPortfolioViewCard";
import AdminServerStatus from "@/components/cards/AdminServerStatus";
import AdminTotalRevenue from "@/components/cards/AdminTotalRevenue";
import AdminTotalViewCard from "@/components/cards/AdminTotalViewCard";

export const AdminTopMetricCardSection = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Total Views - Blue gradient */}
      <AdminTotalViewCard />
      {/* Portfolio Views - Purple gradient */}
      <AdminPortfolioViewCard />
      {/* Total Money - Green gradient */}
      <AdminTotalRevenue />
      {/* Server Status - Cyan gradient */}
      <AdminServerStatus />
    </div>
  );
};

export default AdminTopMetricCardSection;
