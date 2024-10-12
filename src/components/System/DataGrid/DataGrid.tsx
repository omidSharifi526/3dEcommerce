'use client'
import React,{useCallback,useMemo} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, width } from '@mui/system';
import { DataGrid as MainDataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
// import { faIR as faIR } from '@mui/material/locale';
import { faIR } from '@mui/x-data-grid/locales';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const DataGrid = ({rows,columns,setModuleState,setRowSelected}:any) => {

const initialEditRow=(row:any)=>{
  setModuleState((prev:any)=>({...prev,modal:true,mode:'edit'}));

  setRowSelected(row)
}

const initialDeleteRow=(row:any)=>{
  setModuleState((prev:any)=>({...prev,alertDialog:true}));
  console.log(row)
  setRowSelected(row)
}





  const opColumn=[{
    
      field:'addOpration',
      headerName:'',
      align:'center',
      menubar:false,
      headerAlign:'center',
      width:150,     
      renderCell:({row}:any)=>{
       return <Box display={'flex'} p={1} justifyContent={'center'} alignItems={'center'} columnGap={1}  >
        <IconButton onClick={()=>{
          initialEditRow(row)
        }}  >
          <EditIcon  color='info' fontSize='small' />
        </IconButton>
        <IconButton onClick={()=>{
          initialDeleteRow(row)
        }}  >
          <DeleteIcon color='error'  fontSize='small'  />
        </IconButton>
       </Box>
      }

  }]

  return ( <Box>
    <MainDataGrid 
    
    // localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
    disableColumnMenu
    localeText={faIR.components.MuiDataGrid.defaultProps.localeText} 
    rows={rows} columns={[...columns,...opColumn]} 
    hideFooter 
     />
{/* 
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack> */}
  </Box>
  
  )
}

export default DataGrid