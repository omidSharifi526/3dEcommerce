
import Product from "../model/Product";
import User from "../model/User";
import Order from "../model/Order";
import Customer from "../model/Customer";
import Category from "../model/Category";
import dbConnect from '../dbConnect';
import Link from 'next/link';
import Image from "next/image";
import { Box, Button, Container, Typography } from '@mui/material';
import Img from './dashboard/Statics/partsImg.jpg'
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
         flexDirection:'column',
         px:'20px'}}
  >
<Box  sx={{width:'100%',display:'flex',justifyContent:'space-between',p:1}}  >
  
<Box>
  <Typography variant="h6" >
       به فروشگاه ایران یدک  خوش آمدید
    </Typography>
     
     
</Box>
    
  <Box>
  <div style={{ display: 'flex', gap: '20px',padding:10 }}>
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
</Box>
    

    <Box sx={{width:'100%',display:'flex',justifyContent:'center'}} >
      <Image src={Img} alt="t"  />
    </Box>

  </Box>
  );
}
