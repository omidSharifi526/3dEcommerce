// mockOrders.ts
const mockOrders = [
    {
      id: 1,
      orderNumber: 'ORD10001',
      customerName: 'مشتری 1',
      orderDate: '2024-12-01',
      status: 'در حال پردازش',
      totalAmount: 500000,
      items: [
        { itemName: 'محصول 1', quantity: 2, price: 200000 },
        { itemName: 'محصول 2', quantity: 1, price: 100000 },
      ],
    },
    {
      id: 2,
      orderNumber: 'ORD10002',
      customerName: 'مشتری 2',
      orderDate: '2024-12-02',
      status: 'تحویل داده شده',
      totalAmount: 300000,
      items: [
        { itemName: 'محصول 3', quantity: 3, price: 100000 },
      ],
    },
    {
      id: 3,
      orderNumber: 'ORD10003',
      customerName: 'مشتری 3',
      orderDate: '2024-12-03',
      status: 'آماده تحویل',
      totalAmount: 700000,
      items: [
        { itemName: 'محصول 4', quantity: 1, price: 300000 },
        { itemName: 'محصول 5', quantity: 2, price: 200000 },
      ],
    },
    {
      id: 4,
      orderNumber: 'ORD10004',
      customerName: 'مشتری 4',
      orderDate: '2024-12-04',
      status: 'لغو شده',
      totalAmount: 0,
      items: [],
    },
    {
      id: 5,
      orderNumber: 'ORD10005',
      customerName: 'مشتری 5',
      orderDate: '2024-12-05',
      status: 'در حال پردازش',
      totalAmount: 600000,
      items: [
        { itemName: 'محصول 6', quantity: 2, price: 300000 },
      ],
    },
    {
      id: 6,
      orderNumber: 'ORD10006',
      customerName: 'مشتری 6',
      orderDate: '2024-12-06',
      status: 'تحویل داده شده',
      totalAmount: 200000,
      items: [
        { itemName: 'محصول 7', quantity: 1, price: 200000 },
      ],
    },
    {
      id: 7,
      orderNumber: 'ORD10007',
      customerName: 'مشتری 7',
      orderDate: '2024-12-07',
      status: 'آماده تحویل',
      totalAmount: 450000,
      items: [
        { itemName: 'محصول 8', quantity: 3, price: 150000 },
      ],
    },
    {
      id: 8,
      orderNumber: 'ORD10008',
      customerName: 'مشتری 8',
      orderDate: '2024-12-08',
      status: 'در حال پردازش',
      totalAmount: 800000,
      items: [
        { itemName: 'محصول 9', quantity: 4, price: 200000 },
      ],
    },
    {
      id: 9,
      orderNumber: 'ORD10009',
      customerName: 'مشتری 9',
      orderDate: '2024-12-09',
      status: 'لغو شده',
      totalAmount: 0,
      items: [],
    },
    {
      id: 10,
      orderNumber: 'ORD10010',
      customerName: 'مشتری 10',
      orderDate: '2024-12-10',
      status: 'تحویل داده شده',
      totalAmount: 1000000,
      items: [
        { itemName: 'محصول 10', quantity: 5, price: 200000 },
      ],
    },
  ];
  
  
  import { GridColDef } from '@mui/x-data-grid';

   const orderColumns: GridColDef[] = [
    {
      field: 'orderNumber',
      headerName: 'شماره سفارش',
      width: 180,
      align: 'center',
      headerAlign: 'center',
      flex: 1,
    },
    {
      field: 'customerName',
      headerName: 'نام مشتری',
      width: 180,
      align: 'center',
      headerAlign: 'center',
      flex: 1,
    },
    {
      field: 'orderDate',
      headerName: 'تاریخ سفارش',
      width: 180,
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      renderCell: (params) => new Date(params.value).toLocaleDateString('fa-IR'),
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      width: 180,
      align: 'center',
      headerAlign: 'center',
      flex: 1,
    },
    {
      field: 'totalAmount',
      headerName: 'مبلغ کل (تومان)',
      width: 180,
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      renderCell: (params) => `${params.value.toLocaleString()} تومان`,
    },
    {
      field: 'itemsCount',
      headerName: 'تعداد اقلام',
      width: 180,
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      renderCell: (params) => params?.value?.length, // نمایش تعداد اقلام در سفارش
    }
  ];
  

  export {
    
    orderColumns,
    mockOrders
  }