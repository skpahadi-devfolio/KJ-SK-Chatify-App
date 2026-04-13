import User from "../models/authmodel.js"

//All User list controller logic:-
export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find().select("-password");

        if(!users || users.length === 0){
            return res.status(404).json({
                success: false,
                message: "No users found"
            })
        }

        return res.status(200).json({
            success: true,
            users
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