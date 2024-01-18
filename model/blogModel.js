import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    },
    video_url:{
        type: String,
    }
},{timestamps: true});

export default mongoose.model('blogs', blogSchema);