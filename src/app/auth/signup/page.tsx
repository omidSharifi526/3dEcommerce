// src/app/auth/signup/page.tsx
'use client';
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { Container, TextField, Button, Typography, Box, Avatar, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { v4  as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';




// username: { type: String, required: true, unique: true },
// email: { type: String, required: true, unique: true },
// password: { type: String, required: true },
// role: { type: String, enum: ['admin', 'user'], default: 'user' }, // برای تمایز بین ادمین و کاربران معمولی
// }, { timestamps: true });






export default function SignUp() {
  const router=useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();


// role
  const handleCustomerRegister = async (data:any) => {
    console.log(data)
    let{password,email}=data;
   
    const hashedPassword = await bcrypt.hash(password, 10);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ...data,
        password:hashedPassword,
        id:uuidv4(),
        role:"customer",
        }),
    });

    if (res.ok) {
      alert('ثبت نام با موفقیت انجام شد');
      router.push('login');
    } else {
      alert('Error registering user');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <AccountCircleOutlinedIcon />
      </Avatar>
      <Typography sx={{my:'20px'}} component="h4" variant="h5">
        اطلاعات مورد نظر را وارد کنید
      </Typography>
      <Box component="form" onSubmit={handleSubmit(handleCustomerRegister)} noValidate sx={{ mt: 1 }}>

      <TextField
          margin="normal"
          fullWidth
          id="email"
          size='small'
          label="نام (شخص یا شرکت)"
          {...register('username', { required: 'نام کاربری الزامیست' })}
          error={!!errors.email}
          // helperText={errors.email ? errors.email.message : ''}
        />

        <TextField
          margin="normal"
          fullWidth
          id="phonenumber"
          size='small'
          label="شماره تماس"
          
          {...register('phonenumber', { required: 'شماره تماس الزامیست' })}
          error={!!errors.email}
          // helperText={errors.email ? errors.email.message : ''}
        />


        <TextField
          margin="normal"
          fullWidth
          size='small'
          id="email"
          label="ایمیل"
          // name='email'
          autoComplete="email"
          autoFocus
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}

        />
        <TextField
          margin="normal"
          fullWidth
          // name="password"
          label="رمز عبور"
          size='small'
          type="password"
          id="password"
          autoComplete="current-password"
          {...register('password', { required: 'برای ورود به بنل کاربری الزامیست' })}
          error={!!errors.password}
          // helperText={errors.password ? errors.password.message : ''}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          ثبت نام 
        </Button>
      </Box>
    </Box>
  </Container>
  );
}
