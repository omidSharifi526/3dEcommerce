

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String },
    id:{ type: String},
    email: { type: String},
    password: { type: String },
    role: { type: String}, // برای تمایز بین ادمین و کاربران معمولی
  }, { timestamps: true });
  

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
