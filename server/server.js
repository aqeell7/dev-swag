import express from 'express'
import connectDb from './config/db.js'
import Productroutes from './routes/productRoutes.js'
import cors from 'cors';

const app = express()
const PORT = 5000
connectDb()

app.use(express.json())
app.use(cors())
app.use('/api/products',Productroutes)

app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})