import contactModel from "../model/contactModel.js";

export const createContact = async (req, res) => {
    try {
        const {name, phone, email, message} = req.body;
        await new contactModel({name, phone, email, message}).save();
            res.status(200).send({
                success: true,
                message: "Form Summited",
            })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        })
    }
}

export const getMessage = async (req, res) => {
    try {
        const {pass} = req.body;
        if(pass == "Coder8987anil"){
            const messages = await contactModel.find();
            res.status(200).send({
                success: true,
                message: "All Messages",
                total: messages.length,
                messages,
            })
        }else{
            res.status(401).send({
                status: false,
                message: "Unauthorize Access"
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        })
    }
}