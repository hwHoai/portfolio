import Image from "next/image";

export const AdminDashBoardHeader = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-admin-sidebar border-b border-admin-border">
      <div className="text-md font-semibold text-admin-text-primary">
        Dashboard
      </div>
      <div className="flex items-center gap-3">
        <span className="text-admin-text-primary">Welcome back,</span>{" "}
        <span className="font-bold text-admin-accent">Hữu Hoài</span>
        <Image width={12} height={12} src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default AdminDashBoardHeader;