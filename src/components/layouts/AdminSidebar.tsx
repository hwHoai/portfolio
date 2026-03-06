export const AdminSidebar = () => {
  return (
    <div className="w-60 bg-admin-sidebar border-r border-admin-border p-6 flex flex-col gap-8">
      <div className="flex items-center gap-3 text-lg font-semibold text-admin-text-primary px-2">
        <div>Hữu Hoài</div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-[11px] uppercase text-admin-text-muted px-3 py-2 tracking-wider">
          General
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-admin-accent-light text-admin-accent cursor-pointer">
          <span>Dashboard</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Payment</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Customers</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Message</span>
          <span className="ml-auto px-2 py-0.5 rounded-full text-[11px] bg-admin-accent text-white">
            8
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-[11px] uppercase text-admin-text-muted px-3 py-2 tracking-wider">
          Products
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Product</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Invoice</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Analytics</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Automation</span>
          <span className="ml-auto px-2 py-0.5 rounded-full text-[11px] bg-admin-accent text-white">
            BETA
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-[11px] uppercase text-admin-text-muted px-3 py-2 tracking-wider">
          Settings
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Security</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-admin-text-secondary hover:bg-admin-hover hover:text-admin-text-primary cursor-pointer transition-colors">
          <span>Help</span>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;