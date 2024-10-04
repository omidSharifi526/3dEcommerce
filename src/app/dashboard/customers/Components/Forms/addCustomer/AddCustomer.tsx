"use client"
import React from 'react';
import { Button,Box} from '@mui/material';
import { v4  as uuidv4 } from 'uuid';
import { customerFace } from '../../../types';
// import {Box,TextField} from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import FormLayout from '@/components/layout/formLayout/formLayout';
import TextField from '@/components/System/TextField/TextFiled';
import Grid from '@mui/material/Grid2';
import DatePickerr from '@/components/System/DatePicker/DatePicker';
// import 
// import { useAddCustomer } from '../../../hooks';

const AddCustomer = () => {
  // const{mutate:callAddCustomer}=useAddCustomer()
  // const mutation = useAddCustomer();
    const Submit = async (data:customerFace) => {
  
    
      const res = await fetch('/api/adminApi/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...data,id:uuidv4()}),
      });
    
      if (res.ok) {
        alert('User registered successfully!');
      } else {
        const errorText = await res.text(); // دریافت متن خطا
        alert('Error registering user: ' + errorText);
      }
    };

   
      // استفاده از useForm برای مدیریت فرم
      const { control,register,handleSubmit, formState: { errors } } = useForm<customerFace>();
    
      // تابع برای مدیریت ارسال فرم
      const onSubmit: SubmitHandler<customerFace> = (data:customerFace) => {
        console.log(data)
        // Submit(data)
        // callAddCustomer(data)
      };

  
    //   return <Box component={'form'}

    // onSubmit={handleSubmit(onSubmit)}
    //    >
    //     <TextField name="username"
    //         control={control}
    //         label="نام و نام خانوادگی"
    //         rules={{ required: 'نام و نام خانوادگی اجباری است' }}
    //         />

    // const CustomerSchema = new mongoose.Schema({
    //   username: { type: String, required: true },
    //   phonenumber: { type: String,required:true},
    //   email: { type: String},
    //   password: { type: String, required: true },
    //   id:{type:String},
    //   role:{type:String}
    // });


 



   

   

  return <Grid container spacing={1} component={'form'} flexGrow={1} onSubmit={handleSubmit(onSubmit)}  >
<FormLayout title="اطلاعات رسمی مشتری" key={'t'}>
  <Grid size={{xs:12,sm:2}}  >
 <TextField
          name="username"
          control={control}
          label="نام و نام خانوادگی"
          rules={{ required: ' الزامی' }}
        />
 </Grid>

  <Grid  size={{ xs: 12, sm: 2}} >
<TextField
          name="phonenumber"
          control={control}
          label="شماره تماس"
          rules={{ required: 'الزامی ' }}
        />
</Grid > 
<Grid  size={{ xs: 12, sm: 2}} >
<DatePickerr/>
</Grid > 
</FormLayout>

<Grid size={12}  >
      <button type="submit">Submit</button>
      </Grid>

      
  </Grid>

          {/* <Grid size={12} bgcolor={'gray'} flexGrow={1} component={'form'}  onSubmit={handleSubmit(onSubmit)}>
  


 

{/* <Grid  size={{xs:12,sm:2}}  >
          <TextField
          name="email"
          control={control}
          label="ایمیل"
          // rules={{ 
          //   required: 'الزامی', 
          //   pattern: {
          //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          //     message: 'Invalid email address'
          //   }
          // }}
        />
</Grid> */}


      {/* </Grid> */}

    
  

 
      
       
    
    
      

  


  // return ( <Box
  //   component="form"
  //   onSubmit={handleSubmit(onSubmit)}
  //   sx={{
  //     display: "flex",
  //     flexDirection: "column",
  //     gap: 2,
  //     width: "300px",
  //     margin: "0 auto",
  //   }}
  // >
  //   {/* فیلد نام کاربری */}
  //   <TextField
  //     label="Username"
  //     variant="outlined"
  //     {...register("username", { required: "Username is required" })}
  //     error={!!errors.username}
  //     helperText={errors.username?.message}
  //   />

  //   {/* فیلد ایمیل */}
  //   <TextField
  //     label="Email"
  //     variant="outlined"
  //     {...register("email", { 
  //       required: "Email is required", 
  //       pattern: {
  //         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  //         message: "Invalid email address"
  //       }
  //     })}
  //     error={!!errors.email}
  //     helperText={errors.email?.message}
  //   />

  //   {/* فیلد پسورد */}
  //   <TextField
  //     label="Password"
  //     variant="outlined"
  //     type="password"
  //     {...register("password", { required: "Password is required" })}
  //     error={!!errors.password}
  //     helperText={errors.password?.message}
  //   />

  //   {/* فیلد ID */}
  //   <TextField
  //     label="ID"
  //     variant="outlined"
  //     {...register("id", { required: "ID is required" })}
  //     error={!!errors.id}
  //     helperText={errors.id?.message}
  //   />

  //   {/* دکمه ارسال */}
  //   <Button type="submit" variant="contained" color="primary">
  //     Submit
  //   </Button>
  // </Box>


  


}


export default AddCustomer