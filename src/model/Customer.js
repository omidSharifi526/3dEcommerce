


import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phonenumber: { type: String,required:true},
  email: { type: String},
  password: { type: String, required: true },
  id:{type:String},
  role:{type:String}
});
  

const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer;

