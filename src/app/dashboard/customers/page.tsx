"use client"
import React from 'react';
import DataGrid from '@/components/System/DataGrid/DataGrid';
import Customer from '@/model/Customer';
import AddCustomer from './Components/Forms/addCustomer/AddCustomer';
import { useState,useEffect } from 'react';
import {useGetustomers} from './hooks/index'

const page =   () => {
  // const customers = await Customer.find();
  const [loaduing, setloaduing] = useState(true);
  const [customers, setCustomers] = useState([]);
  const { data, error, isLoading } = useGetustomers();


  if (
    isLoading
  ) {
    return <h2>loading...</h2>
  }



  return (
    <div> 
        <DataGrid  rows={data || [] }  />
        <AddCustomer/>
    </div>
  )
}

export default page