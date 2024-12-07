"use client"
import React, { useState, useEffect } from 'react';
import DataGrid from '@/components/System/DataGrid/DataGrid';
// import AddProduct from './Components/Forms/addProduct/AddProduct';
// import { useGetProducts, useDeleteProduct } from './hooks/index';
import ModuleLayout from '@/components/layout/modules/layout';
import ModalLayout from '@/components/layout/modal/layout';
import { GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import SnackeBarM from '@/components/System/Snackbar/Snackbar';
// import { EditProduct } from './Components/Forms/EditProduct/EditProduct';
import AlertDialog from '@/components/System/AlertDialog/AlertDialog';
import { productDatacolumns,mockProductsData } from './statics';

const page = () => {
  // const { mutate: deleteProduct, data: deleteData, isSuccess } = useDeleteProduct();
  // const { data, error, isLoading } = useGetProducts();
  const [productModuleState, setProductModuleState] = useState<any>({ mode: null });
  const [productSelected, setProductSelected] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    console.log(data);
    // ارسال داده‌ها به MongoDB یا هر سروری
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     setProductModuleState((prev: any) => ({
  //       ...prev,
  //       alertDialog: false,
  //       snackText: 'با موفقیت انجام شد',
  //       asyncStatus: true,
  //       asyncOprationState: true
  //     }));
  //   }
  // }, [deleteData]);



  // if (isLoading) {
  //   return <h2>loading...</h2>;
  // }

  const renderModalModuleContent = () => {
    let { mode } = productModuleState;
    switch (mode) {
      case 'add':
        return <></>;
      case 'edit':
        return <></>;
      default:
        break;
    }
  };



  return (
    <ModuleLayout
      addButton={true}
      PersianModuleName={'محصولات'}
      updateModuleState={setProductModuleState}
    >
      {productModuleState?.modal && (
        <ModalLayout
          title='محصول'
          mode={productModuleState?.mode}
          open={productModuleState?.modal}
          setOpen={setProductModuleState}
        >
          {renderModalModuleContent()}
        </ModalLayout>
      )}

      <DataGrid
        columns={productDatacolumns || []}
        rows={mockProductsData || []}
        setModuleState={setProductModuleState}
        setRowSelected={setProductSelected}
      />

      {productModuleState?.asyncStatus && (
        <SnackeBarM
          success={productModuleState?.asyncStatus}
          text={productModuleState?.snackText || ''}
          show={productModuleState?.asyncStatus}
          updateModuleState={setProductModuleState}
        />
      )}

      {productModuleState?.alertDialog && (
        <AlertDialog
          onClose={setProductModuleState}
          show={productModuleState?.alertDialog}
          rowSelectedId={productSelected?.id}
          // deleteHook={deleteProduct}
        />
      )}
    </ModuleLayout>
  );
};

export default page;
