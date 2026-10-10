import User from "../models/authmodel.js"
import Chatbox from "../models/chatbox.js";

//All User list controller logic:-
export const getAllUsers = async(req, res) => {
    try {
        const currentUserId = req.user._id || req.user.id;
        const users = await User.find({ _id: { $ne: currentUserId } }).select("-password");

        if(!users || users.length === 0){
            return res.status(404).json({
                success: false,
                message: "No users found"
            })
        }
        
       return res.status(200).json({
            success: true,
            users: users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Fetch failed all users list"
        })
    }
}





//Single user controller logic:-
export const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");

        if(!user){
            return res.status(404).json({
                success: false, 
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "failed to fetch user"
        })
    }
}







// 1. My Chat Users list (Sirf inbox active chats ke liye)
export const getMyChatUsers = async (req, res) => {
    try {
        const currentUserId = req.user._id || req.user.id;

        // Fetch messages where logged-in user is sender OR receiver
        const messages = await Chatbox.find({
            $or: [{ sender: currentUserId }, { receiver: currentUserId }]
        });

        const chatPartnerIds = new Set();
        messages.forEach(msg => {
            if (msg.sender && msg.sender.toString() !== currentUserId.toString()) {
                chatPartnerIds.add(msg.sender.toString());
            }
            if (msg.receiver && msg.receiver.toString() !== currentUserId.toString()) {
                chatPartnerIds.add(msg.receiver.toString());
            }
        });

        const users = await User.find({ _id: { $in: Array.from(chatPartnerIds) } }).select("-password");

        return res.status(200).json({
            success: true,
            users: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch active chat list"
        });
    }
};