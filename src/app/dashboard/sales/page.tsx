"use client";
import React, { useState, useEffect } from 'react';
import DataGrid from '@/components/System/DataGrid/DataGrid';
import ModuleLayout from '@/components/layout/modules/layout';
import ModalLayout from '@/components/layout/modal/layout';
import DrawerLayout from '@/components/layout/drawer/drawer';
import { GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import SnackeBarM from '@/components/System/Snackbar/Snackbar';
import AlertDialog from '@/components/System/AlertDialog/AlertDialog';
// import AddSale from './Components/Forms/AddSale/AddSale';
// import EditSale from './Components/Forms/EditSale/EditSale';
// import { useGetSales, useDeleteSale } from './hooks/index';

const SalesPage = () => {
//   const { mutate: deleteSale, data: deleteData, isSuccess } = useDeleteSale();
//   const { data, error, isLoading } = useGetSales();
  const [salesModuleState, setSalesModuleState] = useState<any>({ mode: null });
  const [saleSelected, setSaleSelected] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

//   useEffect(() => {
//     if (isSuccess) {
//       setSalesModuleState((prev: any) => ({
//         ...prev,
//         alertDialog: false,
//         snackText: 'با موفقیت انجام شد',
//         asyncStatus: true,
//         asyncOperationState: true,
//       }));
//     }
//   }, [deleteData]);

//   useEffect(() => {
//     console.log(saleSelected);
//   }, [saleSelected]);

//   if (isLoading) {
//     return <h2>در حال بارگذاری...</h2>;
//   }

const mockSales = [
    {
      id: 1,
      saleNumber: 'SAL10001',
      customerName: 'مشتری 1',
      saleDate: '2024-12-01',
      totalAmount: 500000,
      items: [
        { itemName: 'محصول 1', quantity: 2, price: 200000 },
        { itemName: 'محصول 2', quantity: 1, price: 100000 },
      ],
      paymentStatus: 'پرداخت شده',
    },
    {
      id: 2,
      saleNumber: 'SAL10002',
      customerName: 'مشتری 2',
      saleDate: '2024-12-02',
      totalAmount: 300000,
      items: [
        { itemName: 'محصول 3', quantity: 3, price: 100000 },
      ],
      paymentStatus: 'پرداخت نشده',
    },
    {
      id: 3,
      saleNumber: 'SAL10003',
      customerName: 'مشتری 3',
      saleDate: '2024-12-03',
      totalAmount: 700000,
      items: [
        { itemName: 'محصول 4', quantity: 1, price: 300000 },
        { itemName: 'محصول 5', quantity: 2, price: 200000 },
      ],
      paymentStatus: 'پرداخت شده',
    },
    {
      id: 4,
      saleNumber: 'SAL10004',
      customerName: 'مشتری 4',
      saleDate: '2024-12-04',
      totalAmount: 600000,
      items: [
        { itemName: 'محصول 6', quantity: 2, price: 300000 },
      ],
      paymentStatus: 'پرداخت نشده',
    },
    {
      id: 5,
      saleNumber: 'SAL10005',
      customerName: 'مشتری 5',
      saleDate: '2024-12-05',
      totalAmount: 900000,
      items: [
        { itemName: 'محصول 7', quantity: 3, price: 300000 },
      ],
      paymentStatus: 'پرداخت شده',
    },
    {
      id: 6,
      saleNumber: 'SAL10006',
      customerName: 'مشتری 6',
      saleDate: '2024-12-06',
      totalAmount: 400000,
      items: [
        { itemName: 'محصول 8', quantity: 2, price: 200000 },
      ],
      paymentStatus: 'پرداخت نشده',
    },
    {
      id: 7,
      saleNumber: 'SAL10007',
      customerName: 'مشتری 7',
      saleDate: '2024-12-07',
      totalAmount: 250000,
      items: [
        { itemName: 'محصول 9', quantity: 1, price: 250000 },
      ],
      paymentStatus: 'پرداخت شده',
    },
    {
      id: 8,
      saleNumber: 'SAL10008',
      customerName: 'مشتری 8',
      saleDate: '2024-12-08',
      totalAmount: 850000,
      items: [
        { itemName: 'محصول 10', quantity: 2, price: 400000 },
        { itemName: 'محصول 11', quantity: 1, price: 50000 },
      ],
      paymentStatus: 'پرداخت شده',
    },
    {
      id: 9,
      saleNumber: 'SAL10009',
      customerName: 'مشتری 9',
      saleDate: '2024-12-09',
      totalAmount: 720000,
      items: [
        { itemName: 'محصول 12', quantity: 3, price: 240000 },
      ],
      paymentStatus: 'پرداخت نشده',
    },
    {
      id: 10,
      saleNumber: 'SAL10010',
      customerName: 'مشتری 10',
      saleDate: '2024-12-10',
      totalAmount: 1000000,
      items: [
        { itemName: 'محصول 13', quantity: 5, price: 200000 },
      ],
      paymentStatus: 'پرداخت شده',
    },
  ];
  

  const renderModalModuleContent = () => {
    let { mode } = salesModuleState;
    switch (mode) {
      case 'add':
        // return <AddSale onCloseForm={setSalesModuleState} />;
      case 'edit':
        return (
        //   <EditSale saleSelected={saleSelected} onCloseForm={setSalesModuleState} />
        <></>
        );
      default:
        break;
    }
  };

  const columns: GridColDef[] = [
    { field: 'saleNumber', headerName: 'شماره فروش', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'customerName', headerName: 'نام مشتری', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'saleDate', headerName: 'تاریخ فروش', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'totalAmount', headerName: 'مبلغ کل', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'paymentStatus', headerName: 'وضعیت پرداخت', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
  ];

  return (
    <ModuleLayout
      addButton={true}
      PersianModuleName={'فروش'}
      updateModuleState={setSalesModuleState}
    >
      {salesModuleState?.modal && (
        <ModalLayout
          title="فروش"
          mode={salesModuleState?.mode}
          open={salesModuleState?.modal}
          setOpen={setSalesModuleState}
        >
          {renderModalModuleContent()}
        </ModalLayout>
      )}

      <DataGrid
        columns={columns || []}
        rows={mockSales || []}
        setModuleState={setSalesModuleState}
        setRowSelected={setSaleSelected}
      />

      {salesModuleState?.asyncStatus && (
        <SnackeBarM
          success={salesModuleState?.asyncStatus}
          text={salesModuleState?.snackText || ''}
          show={salesModuleState?.asyncStatus}
          updateModuleState={setSalesModuleState}
        />
      )}

      {salesModuleState?.alertDialog && (
        <AlertDialog
          onClose={setSalesModuleState}
          show={salesModuleState?.alertDialog}
          rowSelectedId={saleSelected?.id}
        //   deleteHook={deleteSale}
        />
      )}
    </ModuleLayout>
  );
};

export default SalesPage;
