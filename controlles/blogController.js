import blogModel from "../model/blogModel.js";

const password = "coder8987ani";

// => CREATE BLOG
export const createBlog = async (req, res) => {
    try {
        const { title, description, image, video_url, pass } = req.body;
        if(password == pass){
            const blog = await new blogModel({title, description, image, video_url}).save();
            res.status(200).send({
                success: true,
                message: "Blog Created Successfully",
                blog,
            })
        }else{ res.status(401).send({
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

// => GET ALL BLOGS
export const getBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find();
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