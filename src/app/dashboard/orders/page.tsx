'use client'

import React,{useState} from 'react';
import DataGrid from '@/components/System/DataGrid/DataGrid';
import ModuleLayout from '@/components/layout/modules/layout';
import ModalLayout from '@/components/layout/modal/layout';
import SnackeBarM from '@/components/System/Snackbar/Snackbar';
import AlertDialog from '@/components/System/AlertDialog/AlertDialog';
import { ModuleState } from '@/interfaces';
import { mockOrders,orderColumns } from './statics';

const page = () => {


  const [ordersModuleState, setOrdersModuleState] = useState<ModuleState|null>(null);
  const[orderSelected,setOrderSelected]=useState<any>(null)



  const renderModalModuleContent=()=>{
  
    if (ordersModuleState!==null) {
      
    let{mode}=ordersModuleState;
    switch (mode) {
      case 'add':
        return <>
                {/* <AddCustomer onCloseForm={setOrdersModuleState}  /> */}
               </>
               break;

              //  case 'edit':
              //   return <>
              //           <EditCustomer
              //           customerSelected={customerSelected}
              //            onCloseForm={setCustomerModuleState}
              //              />
              //          </>
              //          break;
               

    
      default:
        break;
    }
    }

  }






  return (
    <ModuleLayout 
    addButton={true} 
    PersianModuleName={'سفارشات'}  
    updateModuleState={setOrdersModuleState}  
     >
      {

ordersModuleState?.modal && <ModalLayout  
        title='سفارش'
        mode={ordersModuleState?.mode}
        open={ordersModuleState?.modal} 
        setOpen={setOrdersModuleState}
        
        >
          {
          renderModalModuleContent()
          }
        </ModalLayout>

      }

{/* mockOrders,orderColumns */}
  
      <DataGrid 
      columns={ orderColumns} 
      rows={mockOrders} 
      setModuleState={setOrdersModuleState}
      setRowSelected={setOrderSelected}
       />

       {
        ordersModuleState?.asyncStatus && <SnackeBarM 
         success={ordersModuleState?.asyncStatus}
         text={ordersModuleState?.snackText || ''}
         show={ordersModuleState?.asyncStatus} 
         updateModuleState={setOrdersModuleState}
         
         />
       }

       {
        ordersModuleState?.alertDialog && <AlertDialog 
        onClose={setOrdersModuleState}
        show={ordersModuleState?.alertDialog}  
        rowSelectedId={orderSelected?.id}
        deleteHook={()=>({})}
        />
       }

    </ModuleLayout>
  )
}

export default page