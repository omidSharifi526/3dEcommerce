"use client"
import React from 'react';
import DataGrid from '@/components/System/DataGrid/DataGrid';
import Customer from '@/model/Customer';
import AddCustomer from './Components/Forms/addCustomer/AddCustomer';
import { useState,useEffect } from 'react';
import {useGetustomers} from './hooks/index';
import ModuleLayout from '@/components/layout/modules/layout';
import ModalLayout from '@/components/layout/modal/layout'

const page =   () => {
  // const customers = await Customer.find();
  const [loaduing, setloaduing] = useState(true);
  const [customers, setCustomers] = useState([]);
  const { data, error, isLoading } = useGetustomers();
  const [customerModuleState, setCustomerModuleState] = useState<any>({mode:null});



  useEffect(() => {
  
    console.log(customerModuleState)
  
  }, [customerModuleState])
  


  if (
    isLoading
  ) {
    return <h2>loading...</h2>
  }

  const renderModalModuleContent=()=>{
    let{mode}=customerModuleState;
    switch (mode) {
      case 'add':
        return  <AddCustomer/>

        break;
    
      default:
        break;
    }
  }



  return (
        <ModuleLayout 
        addButton={true} 
        PersianModuleName={'مشتری'}  
        updateModuleState={setCustomerModuleState}  
         >
          {
           customerModuleState.modal  &&  <ModalLayout  
            open={customerModuleState?.modal} 
            setOpen={setCustomerModuleState}   >
              {
              renderModalModuleContent()
              }
            </ModalLayout>
          }
          <DataGrid rows={[]}  />
          
        </ModuleLayout>
  )
}

export default page