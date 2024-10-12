import React from 'react';
import { Button as MainButton } from '@mui/material';


// interface Bu

interface ButtonProps {
    label: string;
  onClick:any
  type:any // عنوان فرم
  
}

const RegularButton = (props:ButtonProps) => {
    let{label,onClick,type}=props;
  return (
    <>
        <MainButton 
        type={type}
        onClick={onClick}
        color={label==='لغو'?'error':'primary'}
        sx={{borderRadius:'9px',boxShadow:'20px',px:'30px'}} 
         variant='outlined' 
        //  sx={{}}
         
          >
         <span >{label}</span>
        </MainButton>
        
    </>
  )
}

export default RegularButton