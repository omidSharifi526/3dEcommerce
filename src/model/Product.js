const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  stock: { type: Number, required: true },  // موجودی محصول در انبار
  images: [{ type: String }],
}, { timestamps: true });

// بررسی می‌کند که مدل از قبل وجود دارد یا خیر، تا از تعریف مجدد جلوگیری شود
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
