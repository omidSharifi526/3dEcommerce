import React from 'react';
import { Box } from '@mui/system';
import { DataGrid as MainDataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const DataGrid = ({rows}:any) => {
  // const rows: GridRowsProp = [
  //   { id: 1, col1: 'Hello', col2: 'World' },
  //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  //   { id: 3, col1: 'MUI', col2: 'is Amazing' },
  // ];
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // email: { type: String, required: true, unique: true },
  // phoneNumber: { type: String },
  
  const columns: GridColDef[] = [
    { field: 'username', headerName: 'نام ', width: 150 },
    { field: 'lastName', headerName: 'نام خانوادگی', width: 150 },
    { field: 'email', headerName: 'ایمیل', width: 50 },
    { field: 'phoneNumber', headerName: 'شماره تماس', width: 150 },
  ];
  return (
    <Box sx={{padding:'50px'}}  >
      <MainDataGrid   rows={rows} columns={columns}   />
    </Box>
  )
}

export default DataGrid