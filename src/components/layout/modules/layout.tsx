
import Button from "@/components/System/Button/Button";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Box} from "@mui/material";
import { bgcolor } from "@mui/system";


export default function moduleLayout(props:any) {
 let{children,addButton,PersianModuleName,englishModuleName,updateModuleState}=props;

    return     <Grid container spacing={5}>
            <Grid size={10} sx={{bgcolor:'#303841',borderRadius:'10px'}}>
            <Grid container >
                <Grid size={4}  >
                    
                </Grid>
           <Grid size={8}>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',px:'25px',width:'100%'}}   >
          <Typography sx={{pt:0.5}} >
            {
                PersianModuleName
            }
            </Typography>
          </Box>
           </Grid>
            <Grid>
            
            </Grid>
            </Grid>
            </Grid>
            <Grid size={2} >
           <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}  >
           {
            addButton && <Button 
            onClick={updateModuleState}
            label={'افزودن'}   />
           }
           </Box>
            </Grid>




       
            <Grid size={12} sx={{display:'flex',flexDirection:'column'}}   >
            {
                children
            }
            </Grid>
           </Grid>
    
}


