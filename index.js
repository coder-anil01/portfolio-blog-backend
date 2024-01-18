import express from "express";
import dotenv from 'dotenv';
import connectToDatabase from "./db.js";
import blogRoutes from './routes/blogRoutes.js'

const app = express();
dotenv.config();
const PORT = 3000;
connectToDatabase();
app.use(express.json())

app.use('/api/v1/blog', blogRoutes)

app.get('/', (req, res) => {
  res.send('WELCOME TO BACKEND OF CODER ANIL')
})

app.listen(PORT, ()=>{
    console.log(`Server is runing on ${PORT}`);
})