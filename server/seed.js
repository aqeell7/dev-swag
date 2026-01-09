import mongoose from 'mongoose';
import connectDb from './config/db.js'
import Product from './models/Product.js'
import dotenv from 'dotenv'

dotenv.config();

const seedProducts = async ()=>{
  try{
    await connectDb()
    console.log('database connected')

    await Product.deleteMany({})
    console.log('items cleared')

    const response = await fetch(`https://fakestoreapi.com/products`)
    let data = await response.json()
    console.log('data fetched')

    await Product.insertMany(data)
    console.log('products inserted succesfully')

    await mongoose.connection.close()
    console.log('mongo db connection dropped')
    process.exit(0)

    }catch(error){

    console.error("seeding failed", error.message)
    process.exit(1)
  }
}

seedProducts()