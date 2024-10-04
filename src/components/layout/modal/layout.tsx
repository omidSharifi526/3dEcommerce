



import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid2';
import { IconButton } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { modalPropFace } from './types';
// import { borderRadius } from '@mui/system';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',

  boxShadow: 44,
  p: 1.5,
  borderRadius:'10px'
};



export default function ModalLayout(props:modalPropFace) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
// let{}=props
  

  

  let{open,setOpen,title,children,mode,width}=props;
  const handleClose = () => {
    setOpen((prev:any)=>({...prev,modal:false,mode:null}))
  };

  return (

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container sx={{...style,width:width?width:'90%'}}  >
        <Grid size={12} sx={{width:'100%',borderRadius:'12px',p:0.5,mb:2,
          background: 'radial-gradient(circle at left, #BE3144, #3A4750 60%, #303841 100%)',boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}   >
      <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',

          color: '#fff',}}   >
       <Typography variant='body2' sx={{p:'5px'}}>
        {
          mode==='add'?'  افزودن ': mode==='edit'?'ویرایش':''
        }
       
        {
          title
        }
       </Typography>
     <IconButton onClick={handleClose} size='small' color='error'  >
        <CloseRounded/>
     </IconButton>
      </Box>
        </Grid>


         <Grid size={12}  >
         {
          children
         }
         </Grid>
        </Grid>
      </Modal>
   
  );
}
