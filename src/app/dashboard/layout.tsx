'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { Box } from "@mui/system";
import MiniDrawer from "./admin/page";



const DashboardLayout = ({ children }:any) => {
  // const router = useRouter();

  // useEffect(() => {
  //   const token = getCookie('jwt');

  //   if (!token) {
  //     router.push('/auth/login');
  //   }
  // }, [router]);

  return (
    <div className="dashboard-layout">
      <MiniDrawer >
        {children}
      </MiniDrawer>
    </div>
  );
};

export default DashboardLayout;
