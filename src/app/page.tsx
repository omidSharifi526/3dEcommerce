
import Product from "../model/Product";
import User from "../model/User";
import Order from "../model/Order";
import Customer from "../model/Customer";
import Category from "../model/Category";
import dbConnect from '../dbConnect';
import Link from 'next/link';
// import {Box} from '@mui/material'
// import {connectToMongoDB} from '../dbConnect'
import { Box, Button, Container, Typography } from '@mui/material';
import { Padding } from "@mui/icons-material";

export default async function Home() {
  await dbConnect()
  const products = await Product.find();
  const users = await User.find();
  const orders = await Order.find();
  const customers = await Customer.find()
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
         px:'20px'}}
  >

  <Box>
  <Typography variant="h6" gutterBottom>
      Welcome to Our Website
    </Typography>
  </Box>
    
    <div style={{ display: 'flex', gap: '20px' }}>
      <Link href="auth/login">
        <Button variant="contained" color="primary" size="large">
          Login
        </Button>
      </Link>

      <Link href="auth/signup">
        <Button variant="outlined" color="secondary" size="large">
          Sign Up
        </Button>
      </Link>
    </div>

  </Box>
  );
}
