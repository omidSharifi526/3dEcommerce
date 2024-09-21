

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // role: { type: String, enum: ['admin', 'user'], default: 'user' }, // برای تمایز بین ادمین و کاربران معمولی
  }, { timestamps: true });
  

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;