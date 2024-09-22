"use client"

import React,{useEffect,useState} from 'react';
// import adminPanel from './admin/page'
import AdminPanel from './admin/page';
import UserPanel from './user/page';



const page = () => {
  const [role, setRole] = useState('admin');

  return (
    <div>{

          role==='admin'? 
          <AdminPanel>
           <h1  className='mt-52'   >
           adminPanel
           </h1>
          </AdminPanel>
          :
          <UserPanel>
           <h1  className='mt-52'   >
           adminPanel
           </h1>
          </UserPanel>

      }</div>
  )
}

export default page