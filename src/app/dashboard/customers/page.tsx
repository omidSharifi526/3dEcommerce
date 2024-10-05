"use client"
import React from 'react';
import DataGrid from '@/components/System/DataGrid/DataGrid';
import Customer from '@/model/Customer';
import AddCustomer from './Components/Forms/addCustomer/AddCustomer';
import { useState,useEffect } from 'react';
import {useGetustomers} from './hooks/index';
import ModuleLayout from '@/components/layout/modules/layout';
import ModalLayout from '@/components/layout/modal/layout';
import DrawerLayout from '@/components/layout/drawer/drawer';
// import FormBuilder from '@/components/admin/FormBuilder/FormBuilder';
// import DynamicForm from './Components/Forms/DynamicForm/DynamicForm';
// import AddCustomer from './Components/Forms/addCustomer/AddCustomer';

const page =   () => {
  // const customers = await Customer.find();
  const [loaduing, setloaduing] = useState(true);
  const [customers, setCustomers] = useState([]);
  const { data, error, isLoading } = useGetustomers();
  const [customerModuleState, setCustomerModuleState] = useState<any>({mode:null});


 

  const handleFormSubmit = (data:any) => {
    console.log(data);
    // اینجا می‌تونی داده‌ها رو به MongoDB بفرستی
  };

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
        return <>
        <h1>فرم ثبت مشتری</h1>
        {/* <DynamicForm  /> */}
        </>

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
            customerModuleState.modal && <ModalLayout  
            title='مشتری'
            mode={customerModuleState?.mode}
            open={customerModuleState?.modal} 
            setOpen={setCustomerModuleState}   >
              {
              renderModalModuleContent()
              }
            </ModalLayout>
          }

          {
            customerModuleState?.drawer && <DrawerLayout  
            title='مشتری'   
            open={customerModuleState?.drawer} 
            setOpen={setCustomerModuleState} 
            >
             {
              <AddCustomer/>
             }
              </DrawerLayout>
          }
          <DataGrid rows={data}  />

        </ModuleLayout>
  )
}

export default page