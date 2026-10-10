//Chatbox Controller Logic:-
import Chatbox from "../models/chatbox.js";


//Get method api controller:-
export const getchatbyuserId = async(req, res) => {
    try {
        const myId = req.user.id;
        const otherUserId = req.params.user_id;

        const messages = await Chatbox.find({
            $or: [
                {sender: myId, receiver: otherUserId},
                {sender: otherUserId, receiver: myId}
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

        const myId = req.user.id;

        if(!message || !receiver){
            return res.status(400).json({
                success: false,
                message: "Please Enter a message"
            })
        }
        const chatMessage = await Chatbox.create({message, receiver, sender: myId})
        return res.status(200).json({
            success: true, 
            message: "message sent successFully!",
            chatMessage
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to Load Your messsage Try Again"
        })
    }
}