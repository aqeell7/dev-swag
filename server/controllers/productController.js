import Product from "../models/Product.js"

export const getProducts = async (req,res)=>{
  try{
    const products = await Product.find({})
    res.status(200).json(products)
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

export const createProduct = async (req,res)=>{
  const product = req.body;

  if(!product.title || product.price == null || !product.category){
    return res.status(400).json({message:"Please provide all the required fields"})
  }

  try{
    const newProduct = await Product.create(product);
    res.status(201).json(newProduct);
  }catch(error){
    res.status(500).json({message:error.message})
  }
}