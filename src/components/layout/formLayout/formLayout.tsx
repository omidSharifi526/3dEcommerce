import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface FormLayoutProps {
  title: string; // عنوان فرم
  children: ReactNode; // قسمت‌های مختلف فرم
}

const FormLayout: React.FC<FormLayoutProps> = ({ title, children }) => {
  return (
    <Grid container flexGrow={1} flexWrap={'wrap'} sx={{ padding: 1, borderRadius: '8px',marginBottom:'30px', boxShadow:4, }}>

    <Grid size={12} py={2} display="flex" alignItems="center" >
      <Typography variant="caption" component="p" sx={{ px: 3 }}>
        {title}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          height: '2px',
          borderRadius:'0.2rem', // ارتفاع خط جداکننده
          background: 'linear-gradient(to right, rgba(190, 49, 68, 0) 0%, rgba(190, 49, 68, 0.5) 20%, #303841 40%, #3A4750 70%, #BE3144 100%)', // گرادیانت خطی با تبدیل تدریجی
        }}
      />
    </Grid>
 
    
      <Box sx={{ flexGrow: 1 }}>
      
       <Grid container spacing={1} >
       {
        children
       }
       </Grid>
    
      </Box>


    
  
  </Grid>
  );
};

export default FormLayout;
