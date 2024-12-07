import { GridColDef } from "@mui/x-data-grid";

const productDatacolumns: GridColDef[] = [
    { field: 'productName', headerName: 'نام محصول', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'category', headerName: 'دسته‌بندی', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'price', headerName: 'قیمت', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'quantity', headerName: 'موجودی', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'description', headerName: 'توضیحات', width: 150, align: 'center', headerAlign: 'center', flex: 1 },
  ];

   const mockProductsData = [
    {
      id: 1,
      productName: 'محصول A',
      category: 'دسته‌بندی 1',
      price: 100000,
      stock: 50,
      creationDate: '2024-11-01',
      status: 'موجود',
    },
    {
      id: 2,
      productName: 'محصول B',
      category: 'دسته‌بندی 2',
      price: 200000,
      stock: 30,
      creationDate: '2024-11-15',
      status: 'تمام شده',
    },
    {
      id: 3,
      productName: 'محصول C',
      category: 'دسته‌بندی 1',
      price: 150000,
      stock: 100,
      creationDate: '2024-10-25',
      status: 'موجود',
    },
    {
      id: 4,
      productName: 'محصول D',
      category: 'دسته‌بندی 3',
      price: 50000,
      stock: 10,
      creationDate: '2024-09-20',
      status: 'موجود',
    },
    {
      id: 5,
      productName: 'محصول E',
      category: 'دسته‌بندی 2',
      price: 250000,
      stock: 0,
      creationDate: '2024-12-01',
      status: 'تمام شده',
    },
  ];
  


  export {
    productDatacolumns,
    mockProductsData
  }