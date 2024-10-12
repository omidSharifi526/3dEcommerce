'use client'
import React from 'react';
import ChartLine from '@/components/System/ChartLine/ChartLine';
import CompositionExample from '@/components/System/Charts/Ggauge/Ggauge';
import { Box,Grid } from '@mui/system';
import { Typography } from '@mui/material';
const page = () => {
  return (
    <Grid container  >
       <Grid size={{xs:12,sm:6}}   >
       <ChartLine   />
       </Grid>
       <Grid size={{xs:12,sm:6}} >
       <Box py={2} sx={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center'}}  >
       <CompositionExample/>
       <Typography>
    موجودی RX45 
       </Typography>
       </Box>
       </Grid>
    </Grid>
  )
}

export default page