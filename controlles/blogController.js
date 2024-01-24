import blogModel from "../model/blogModel.js";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDNEARY_NAME,
    api_key: process.env.CLOUDNEARY_API_KEY,
    api_secret: process.env.CLOUDNEARY_API_SECRET,
  });

const password = process.env.PASSWORD;

// => CREATE BLOG
export const createBlog = async (req, res) => {
    try {
        const { title, description, video_url, pass } = req.body;
        const image = req?.body?.description;
        if(password == pass){
            const hostImage = await cloudinary.uploader.upload(image, { folder: "dealhub" })
        if(hostImage){
            console.log(hostImage)
            const blog = await new blogModel({title, description, image: hostImage?.url, video_url}).save();
            res.status(200).send({
                success: true,
                message: "Blog Created Successfully",
                blog,
            })
        }
        }
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// => GET ALL BLOGS
export const getBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find().sort({ createdAt: -1});
        res.status(200).send({
            success: true,
            message: "All Blogs",
            blogs,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// => DELETE BLOG
export const deleteBlog = async (req, res) => {
    try {
        const {pass} = req.body;
        const {id} = req.params;
        console.log(pass)
        if( password == pass ){
            const blog = await blogModel.findByIdAndDelete(id);
            res.status(200).send({
                success: true,
                message: "Delete Blog",
                blog,
            })
        }else{
            res.status(401).send({
                success: false,
                message: "Unauthorized Access"
            })
        }
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        })
    }
}