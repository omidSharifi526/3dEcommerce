import React from 'react';
import { Button as MainButton } from '@mui/material';

const Button = (props:any) => {
    let{label,onClick}=props;
  return (
    <>
        <MainButton 
        onClick={()=>{
            onClick((prev:any)=>({...prev,modal:true,mode:'add'}))
        }}
        sx={{borderRadius:'9px',boxShadow:'20px'}} 
         variant='contained' 
         color='error'
          >
        <span style={{ color: 'white' }}>{label}</span>
        </MainButton>
        
    </>
  )
}

export default Button