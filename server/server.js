import express from 'express'
import connectDb from './config/db.js'

const app = express()
const PORT = 5000
connectDb()

app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})