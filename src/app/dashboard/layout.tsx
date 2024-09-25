import { Box } from "@mui/system";
import MiniDrawer from "./admin/page";
const DashboardLayout = ({ children }:any) => {
  return (
    <div className="dashboard-layout">
      <MiniDrawer />
      <main className="">
        <Box sx={{padding:'50px'}}    >
        {children}
        </Box>
      </main>
    </div>
  );
};

export default DashboardLayout;
