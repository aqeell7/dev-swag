import express from 'express'
import connectDb from './config/db.js'
import Productroutes from './routes/productRoutes.js'
import cors from 'cors';
import path from "path";

const app = express()
const PORT = 5000
connectDb()
const __dirname = path.resolve()

app.use(express.json())
app.use(cors())
app.use('/api/products',Productroutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})