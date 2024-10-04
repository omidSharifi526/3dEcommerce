// src/app/api/auth/signup/route.ts

import dbConnect from '../../../../dbConnect';
import User from '../../../../model/User';

export async function POST(req) {
  await dbConnect();
  const { email, password,role,id,username } = await req.json();
  // بررسی وجود کاربر
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response('User already exists', { status: 400 });
  }

  // هش کردن رمز عبور
 

  // ایجاد کاربر جدید
  const newUser = new User({email,role,password,id,username});
  await newUser.save();

  return new Response('User created', { status: 201 });

}
