"use client"
import React from 'react';
import { Button } from '@mui/material';
import { v4  as uuidv4 } from 'uuid';




// firstName: { type: String, required: true },
// lastName: { type: String, required: true },
// email: { type: String, required: true, unique: true },
// phoneNumber: { type: String },
// address: {
//   street: { type: String },
//   city: { type: String },
//   postalCode: { type: String },
//   country: { type: String, required: true },
// },
// orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }], // ارتباط با سفارشات مشتری
// }

const AddCustomer = () => {

    const handleSubmit = async (e: React.FormEvent) => {
  
    
      const res = await fetch('/api/adminApi/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'mamizapoasdor', // اطمینان از اینکه نام کاربری به درستی ارسال می‌شود
          email: 'omuygfasdfi@gmail.com',
          password: '741',
          id:uuidv4()
        }),
      });
    
      if (res.ok) {
        alert('User registered successfully!');
      } else {
        const errorText = await res.text(); // دریافت متن خطا
        alert('Error registering user: ' + errorText);
      }
    };
      

  


  return (<div>
        <Button variant="contained" 
        onClick={(e:any)=>{
          handleSubmit(e);
        }} 
        color="primary">
            AddCos
        </Button>
    </div>
  )
}

export default AddCustomer