


import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  managerName: { type: String},
  phoneNumber: { type: String},
  address: { type: String },
  userName:{type:String},
  password:{type:String},
  role:{type:String},
  id:{type:String},
  email:{type:String},
  workBranch:{type:String}
});
  

const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer;

