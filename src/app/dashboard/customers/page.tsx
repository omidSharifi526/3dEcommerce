"use client"
import React from 'react';
import DataGrid from '@/components/System/DataGrid/DataGrid';
import Customer from '@/model/Customer';
import AddCustomer from './Components/Forms/addCustomer/AddCustomer';
import { useState,useEffect } from 'react';
import {useGetustomers,useDeleteCustomer} from './hooks/index';
import ModuleLayout from '@/components/layout/modules/layout';
import ModalLayout from '@/components/layout/modal/layout';
import DrawerLayout from '@/components/layout/drawer/drawer';
import { GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import SnackeBarM from '@/components/System/Snackbar/Snackbar';
import { EditCustomer } from './Components/Forms/EditCustomer/EditCustomer';
import AlertDialog from '@/components/System/AlertDialog/AlertDialog';
import TextField from '@/components/System/TextField/TextFiled';


const page =() => {
  const{mutate:deleteCustomer,data:deleteData,isSuccess}=useDeleteCustomer()
  const { data, error, isLoading } = useGetustomers();
  const [customerModuleState, setCustomerModuleState] = useState<any>({mode:null});
  const[customerSelected,setCustomerSelected]=useState<any>(null)


 

  const handleFormSubmit = (data:any) => {
    console.log(data);
    // اینجا می‌تونی داده‌ها رو به MongoDB بفرستی
  };

  useEffect(() => {
if (isSuccess) {
  setCustomerModuleState((prev:any)=>({...prev,
    alertDialog:false,
    snackText:'با موفقیت انجام شد',
    asyncStatus:true,
    asyncOprationState:true}))
}
  
  
  }, [deleteData])

  useEffect(() => {
    

    console.log(customerSelected)
  
 
  }, [customerSelected])
  



  
  



  


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
                <AddCustomer onCloseForm={setCustomerModuleState}  />
               </>
               break;

               case 'edit':
                return <>
                        <EditCustomer
                        customerSelected={customerSelected}
                         onCloseForm={setCustomerModuleState}
                           />
                       </>
                       break;
               

    
      default:
        break;
    }

  }

   const columns: GridColDef[] = [
    { 
      field: 'companyName',
        headerName: 'نام شرکت ',
        width: 150,
        align:'center',
        headerAlign:'center',flex:1 },
    { 
      field: 'managerName',
       headerName: 'نام مدیر عامل',
        width: 150,
        align:'center',
        headerAlign:'center',
        flex:1,
        
      },
      { 
        field: 'address',
         headerName: 'آدرس',
          width: 150,
          align:'center',
          headerAlign:'center',
          flex:1,
          
        },
        { 
        field: 'workBranch',
        headerName: 'شاخه کاری',
        width: 150,align:'center',
        headerAlign:'center',
        flex:1,
        // renderCell(params:any) {
        //   let{value}=params;
        //   return <Box>
        //      {
        //       value
        //      }
        //   </Box>
        // },
      },
    { field: 'email', headerName: 'ایمیل',  width: 150,  flex:1,
      align:'center',
      headerAlign:'center' },
    { field: 'phoneNumber', headerName: 'شماره تماس',width: 150,  flex:1,
      align:'center',
      headerAlign:'center'},
  ];

 
 



  return (
        <ModuleLayout 
        addButton={true} 
        PersianModuleName={'مشتری'}  
        updateModuleState={setCustomerModuleState}  
         >
          {

            customerModuleState?.modal && <ModalLayout  
            title='مشتری'
            mode={customerModuleState?.mode}
            open={customerModuleState?.modal} 
            setOpen={setCustomerModuleState} >
              {
              renderModalModuleContent()
              }
            </ModalLayout>

          }

          {/* {
            customerModuleState?.drawer && <DrawerLayout  
            title='مشتری'   
            open={customerModuleState?.drawer} 
            setOpen={setCustomerModuleState} 
            >
             
              </DrawerLayout>
          } */}
          <DataGrid 
          columns={columns  || []} 
          rows={data || []} 
          setModuleState={setCustomerModuleState}
          setRowSelected={setCustomerSelected}
           />

           {
            customerModuleState?.asyncStatus && <SnackeBarM 
             success={customerModuleState?.asyncStatus}
             text={customerModuleState?.snackText || ''}
             show={customerModuleState?.asyncStatus} 
             updateModuleState={setCustomerModuleState}
             
             />
           }

           {
            customerModuleState?.alertDialog && <AlertDialog 
            onClose={setCustomerModuleState}
            show={customerModuleState?.alertDialog}  
            rowSelectedId={customerSelected?.id}
            deleteHook={deleteCustomer}
            />
           }

        </ModuleLayout>
  )
}

export default page