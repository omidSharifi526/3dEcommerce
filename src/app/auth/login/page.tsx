// src/app/auth/login/page.tsx
'use client';
import { useState,useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Avatar, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();


  const onSubmit = async({email,password}:any) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email,password }),
    });

    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem('token', token); // ذخیره توکن
    router.push('/dashboard/overview');
      
    } else {
      alert('Invalid credentials');
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
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name='email'
          autoComplete="email"
          autoFocus
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}
          // helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register('password', { required: 'Password is required' })}
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
          Sign In
        </Button>
      </Box>
    </Box>
  </Container>
  

 
  );
}
