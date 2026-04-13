//Chatbox Page Model:-
import mongoose from "mongoose";

export const ChatboxSchema = new mongoose.Schema({
    message: {type: String, required: true, trim: true},
    sender: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, trim: true},
    receiver: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, trim: true}
},
{timestamps: true})

const Chatbox = mongoose.model("Chatbox", ChatboxSchema)
export default Chatbox;