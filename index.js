import express from "express";
import dotenv from 'dotenv';
import connectToDatabase from "./db.js";
import blogRoutes from './routes/blogRoutes.js'
import contactRoute from './routes/contactRoute.js'
import cors from "cors"

const app = express();
dotenv.config();
const PORT = 8000;
connectToDatabase();
app.use(express.json())
app.use(cors());

app.use('/api/v1/blog', blogRoutes)
app.use('/api/v1/contact', contactRoute)

app.get('/', (req, res) => {
  res.send('WELCOME TO BACKEND OF CODER ANIL')
})

app.listen(PORT, ()=>{
    console.log(`Server is runing on ${PORT}`);
})