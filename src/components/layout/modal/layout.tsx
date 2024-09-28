// import Button from "@/components/System/Button/Button";
// import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { IconButton } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
// import {Box} from "@mui/material";









// export default function moduleLayout(props:any) {
//  let{children,addButton,PersianModuleName,englishModuleName,updateModuleState}=props;

//     return     <Grid container spacing={5}>
//             <Grid size={12} sx={{display:'flex',flexDirection:'column'}}   >
//             {
//                 children
//             }
//             </Grid>
//            </Grid>
    
// }




import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 44,
  p: 2,
};



export default function ModalLayout(props:any) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  

  

  let{open,setOpen,children}=props;
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
        <Grid container sx={style}  >
        <Grid size={12}    >
      <Box sx={{width:'100%',display:'flex',justifyContent:'space-between'}}   >
       <Typography>
        عنوان
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
