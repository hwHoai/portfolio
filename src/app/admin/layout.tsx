import AdminSidebar from "@/components/layouts/AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
