// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

import User from '../../../../model/User' // مسیر مدل کاربر شما


export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // مقایسه ساده
    if (password !== user.password) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error('Login error:', error); // چاپ خطا در کنسول
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
