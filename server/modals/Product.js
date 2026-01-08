import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  image: String,
  price: Number
});

export default mongoose.model('Product', productSchema);
