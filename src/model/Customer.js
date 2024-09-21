const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    postalCode: { type: String },
    country: { type: String, required: true },
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }], // ارتباط با سفارشات مشتری
}, { timestamps: true });

// module.exports = mongoose.model('Customer', customerSchema);


const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema



    
);

export default Customer;

