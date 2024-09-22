// src/app/dashboard/layout.js
// import DrawerMenu from '../../components/DrawerMenu'; // اگر Drawer جدا ایجاد کرده‌اید
import MiniDrawer from "./admin/page";
const DashboardLayout = ({ children }:any) => {
  return (
    <div className="dashboard-layout">
      <MiniDrawer />
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
