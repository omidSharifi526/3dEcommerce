


import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  id:{type:String}
});
  

const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer;

