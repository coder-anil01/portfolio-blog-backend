import express from 'express';
import { createBlog, deleteBlog, getBlogs } from '../controlles/blogController.js';

const route = express.Router();

route.post('/create', createBlog);

route.get('/get', getBlogs);

route.post('/delete/:id', deleteBlog);

export default route;