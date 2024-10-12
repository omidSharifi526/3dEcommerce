import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackeBarM(props:any) {
    let{show,text,updateModuleState,success}=props;
//   const handleClose = (
//     event?: React.SyntheticEvent | Event,
//     reason?: SnackbarCloseReason,
//   ) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     // setOpen(false);
//     updateModuleState((prev:any)=>({...prev,asyncStatus:true}))
//   };
  const handleClose=()=>{
    updateModuleState((prev:any)=>({...prev,asyncStatus:false}))
  }

  return (
    <div>

      <Snackbar 
      open={show} 
      autoHideDuration={6000} 
      onClose={handleClose} 
       anchorOrigin={{vertical: 'bottom',
        horizontal: 'right', }}
       >
        <Alert
          onClose={handleClose}
          severity={success?'success':'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
        {
            text
        }
        </Alert>
      </Snackbar>
    </div>
  );
}
