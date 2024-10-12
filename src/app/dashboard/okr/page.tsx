'use client'
import React from 'react';
import { Box,Grid } from '@mui/system';
import RegularBandHighlight from '@/components/System/Charts/Gauge/PieChart';
import { Typography } from '@mui/material';

const okr = () => {
  return (
    <Grid container   >
 <Grid size={{xs:12,sm:6}}  >
 <Box sx={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center'}}  >
      <RegularBandHighlight/>
      <Typography>
        ارتقای رقم فروش بین المللی
      </Typography>
      </Box>
 </Grid>
 <Grid size={{xs:12,sm:6}}  >
 <Box sx={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center'}}  >
      <RegularBandHighlight/>
      <Typography>
        افزایش نرخ بازدید در سایت های داخلی
      </Typography>
      </Box>
 </Grid>
    </Grid>
  )
}

export default okr
