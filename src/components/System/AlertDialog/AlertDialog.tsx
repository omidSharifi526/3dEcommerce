import * as React from 'react';
import {Button,Box,Typography} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertDialog({show,onClose,rowSelectedId,deleteHook}:any) {

console.log(rowSelectedId);

  const handleClose = () => {
    onClose((prev:any)=>({...prev,alertDialog:false}))
  };

  const initialDelete=()=>{
    deleteHook(rowSelectedId)
  }

  return (
    <React.Fragment>
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{p:0.5}}
      >
        <DialogTitle id="alert-dialog-title" sx={{width:'100%'}} >
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center', background: 'radial-gradient(circle at left, #BE3144, #3A4750 60%, #303841 100%)',boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',p:0,borderRadius:2,minWidth:'400px'}}>
    <Typography variant='body2' sx={{color:'white',px:2}}  >
    از حذف اطمینان دارید؟
    </Typography>
    <Box sx={{px:2,pt:1}}>
        <ErrorOutlineIcon color='warning'  />
    </Box>
       </Box>
        </DialogTitle>


        <DialogContent sx={{mt:2}}>
          <DialogContentText id="alert-dialog-description">
          {/* */}
          <Typography variant='body2' sx={{px:2}}  >
          بعد از انجام امکان بازیابی وجود ندارد 
         </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{p:2}}>
          {/* <Button onClick={handleClose}>لغو</Button>
          <Button onClick={handleClose} autoFocus>
            بله 
          </Button> */}
         
            <Button onClick={initialDelete} sx={{borderRadius:'9px',boxShadow:'20px'}} color='error' variant="contained" endIcon={<DoneIcon />}>
            حذف
            </Button>
            <Button onClick={handleClose} sx={{borderRadius:'9px',boxShadow:'20px'}} color='info' variant="outlined" endIcon={<CloseIcon />}>
             لغو
            </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
