"use client"
import React,{useEffect} from 'react';
import { Button,Box} from '@mui/material';
import { v4  as uuidv4 } from 'uuid';
import { customerFace } from '../../../types';
// import {Box,TextField} from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import FormLayout from '@/components/layout/formLayout/formLayout';
import TextField from '@/components/System/TextField/TextFiled';
import Grid from '@mui/material/Grid2';
import DatePickerr from '@/components/System/DatePicker/DatePicker';
import RegularButton from '@/components/System/RegularButton/RegularButton';
import { useUpdateCustomer } from '../../../hooks';


export const EditCustomer = (props:any) => {
  let{onCloseForm,customerSelected}=props
const{mutate:callUpdateCustomer,data:updateCustomerData,isSuccess}=useUpdateCustomer()

  
  const initialCloseForm=()=>{
    onCloseForm((prev:any)=>({...prev,modal:false}))
  }


   
      // استفاده از useForm برای مدیریت فرم
      const { control,register,handleSubmit, formState: { errors } } = useForm<customerFace>({defaultValues:{...customerSelected}});
      const onSubmit: SubmitHandler<customerFace> = (data:customerFace) => {
        console.log(data)
        callUpdateCustomer(data)
     
      };

      useEffect(() => {
        
      if (isSuccess) {
      onCloseForm((prev:any)=>({...prev,
        modal:false,
        snackText:'با موفقیت انجام شد',
        asyncStatus:true,
        asyncOprationState:true}))
        
      }
       
      }, [updateCustomerData])







  return (
    <Grid container spacing={1} component={'form'} flexGrow={1} onSubmit={handleSubmit(onSubmit)}  >
  <Grid size={12}  >
  <FormLayout title="اطلاعات رسمی مشتری" key={'t'}>
  <Grid size={{xs:12,sm:2}}  >
 <TextField
          name="companyName"
          control={control}
          label="نام شرکت"
          rules={{ required: ' الزامی' }}
        />
 </Grid>

 <Grid size={{xs:12,sm:2}}  >
 <TextField
          name="managerName"
          control={control}
          label="نام مدیر عامل"
          rules={{ required: ' الزامی' }}
        />
 </Grid>

 <Grid size={{xs:12,sm:2}}  >
 <TextField
          name="phoneNumber"
          control={control}
          label="تلفن تماس"
          rules={{ required: ' الزامی' }}
        />
 </Grid>

 <Grid size={{xs:12,sm:2}}  >
 <TextField
          name="address"
          control={control}
          label="آدرس"
          rules={{ required: ' الزامی' }}
        />
 </Grid>

 <Grid size={{xs:12,sm:2}}  >
 <TextField
          name="email"
          control={control}
          label="ایمیل"
          rules={{ required: ' الزامی' }}
        />
 </Grid>



  <Grid  size={{ xs: 12, sm: 2}} >
<TextField
          name="workBranch"
          control={control}
          label="شاخه کاری"
          rules={{ required: 'الزامی ' }}
        />
</Grid > 



</FormLayout>
  </Grid>

<FormLayout title="اطلاعات کاربری" key={'y'}>
<Grid  size={{ xs: 12, sm: 2}} >
<TextField
          name="userName"
          control={control}
          label="نام کاربری"
          rules={{ required: 'الزامی ' }}
        />
</Grid > 

<Grid  size={{ xs: 12, sm: 2}} >
<TextField
          name="password"
          control={control}
          label="رمز عبور"
          rules={{ required: 'الزامی ' }}
        />
</Grid > 
</FormLayout>

<Grid  size={12}  >

<Box  sx={{width:'100%',p:2,display:'flex',justifyContent:'end',columnGap:2}}  >

<RegularButton 
type={'submit'} 
label='ثبت'  
onClick={()=>{}} 
 />

<RegularButton 
type={'button'} 
label='لغو'  
onClick={initialCloseForm} 

 />
 

</Box>


 </Grid>
  </Grid>
  )
}
