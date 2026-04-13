//Contact Page Model:-
import mongoose from "mongoose";

export const ContactSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    message: {type: String, required: true, trim: true}
},
{timestamps: true})

const Contact = mongoose.model("Contact", ContactSchema)
export default Contact;