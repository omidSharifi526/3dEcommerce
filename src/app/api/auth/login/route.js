
import { NextResponse } from 'next/server';
import User from '../../../../model/User' // مسیر مدل کاربر شما
import bcrypt from 'bcryptjs';
import dbConnect from '../../../../dbConnect';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../../../../env';



export async function POST(req) {
  await dbConnect();

  try {

    // دریافت اطلاعات از درخواست
    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'کاربر پیدا نشد' }, { status: 404 });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return NextResponse.json({ error: 'رمز عبور اشتباه است' }, { status: 401 });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '1h', }
    );

    // اگر رمز درست بود، عملیات لاگین موفق انجام می‌شود
    return NextResponse.json({
      status: 200,
      message: "ورود با موفقیت انجام شد",
      data: {
        user: {
          id: user?._id,
          username: "mamreza",
          email: user.email,
          role: "admin"
        },
        token: token
      }
    });

  } catch (error) {
    console.error('Error in login:', error);
    return NextResponse.json({ error: 'مشکل در ورود به سیستم' }, { status: 500 });
  }
}
