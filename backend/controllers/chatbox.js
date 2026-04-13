//Chatbox Controller Logic:-
import Chatbox from "../models/chatbox.js";


//Get method api controller:-
export const getchatbyuserId = async(req, res) => {
    try {
        const {user_id} = req.params;

        const messages = await Chatbox.find({
            $or: [
                {sender: req.user.id, receiver: user_id},
                {sender: user_id, receiver: req.user.id}
            ]
        }).sort({createdAt: 1});
        return res.status(200).json({
            success: true,
            messages: messages || []
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to Load Message"
        })
    }
}


//Post method api controller
export const ChatboxMessage = async(req, res) => {
    try {
        const{message, receiver} = req.body;

        const sender = req.user.id;

        if(!message || !receiver){
            return res.status(400).json({
                success: false,
                message: "Please Enter a message"
            })
        }
        const chatMessage = await Chatbox.create({message, sender, receiver})
        return res.status(200).json({
            success: true, 
            message: "message sent successFully!",
            chatMessage
        })
        
    } catch (error) {
        console.log("ERROR:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to Load Your messsage Try Again"
        })
    }
}