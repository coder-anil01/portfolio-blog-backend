import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type: String
    },
    phone:{
        type: Number
    },
    email:{
        type: String
    },
    message:{
        type: String
    }
},{timestamps: true});

export default mongoose.model('contacts', contactSchema);