
import Product from "../model/Product";
import User from "../model/User";
import Order from "../model/Order";
import Customer from "../model/Customer";
import Category from "../model/Category";
import dbConnect from '../dbConnect';
import Link from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
export default async function Home() {
  await dbConnect()
  const products = await Product.find();
  const users = await User.find();
  const orders = await Order.find();
  
  const categorys = await Category.find();


  let productName = 'testAval';
  let madeIn = 'UnderStar';
  let storeCode = '152885';
  let price = 15522


  async function newProduct(params: any) {
    'use server'
    let newProduct = new Product({ productName, madeIn, storeCode, price });
    await newProduct.save();
  }

  return (

    <Box
    sx={{ display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         height: '10vh',
         width:'100% !important',
         fontFamily:"iranSans",
         px:'20px'}}
  >

  <Box>
  <Typography variant="h6" gutterBottom>
       به فروشگاه آزمایشی ما خوش آمدید
    </Typography>
  </Box>
    
    <div style={{ display: 'flex', gap: '20px' }}>
      <Link href="auth/login">
        <Button variant="contained" color="primary" size="large">
          ورود
        </Button>
      </Link>

      <Link href="auth/signup">
        <Button variant="outlined" color="secondary" size="large">
         ثبت نام
        </Button>
      </Link>
    </div>

  </Box>
  );
}
