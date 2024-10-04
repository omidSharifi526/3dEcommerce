'use client'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { Box } from "@mui/system";
import MiniDrawer from "./admin/page";
import UserDrawer from "./user/page";


const DashboardLayout = ({ children }:any) => {
  const [role, setRole] = useState<any>('')

  useEffect(() => {
    const role = getCookie('role');
   setRole(role)

  }, []);

 

  if (role==='customer') {
    return <div className="dashboard-layout">
    <UserDrawer >
      {children}
    </UserDrawer>
  </div>
  }
  

  return (

    <div className="dashboard-layout">
      <MiniDrawer >
        {children}
      </MiniDrawer>
    </div>

  );
};

export default DashboardLayout;
