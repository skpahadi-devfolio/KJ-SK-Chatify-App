//Auth middleware logic:-
import jwt from "jsonwebtoken";

export const authmiddleware = async(req, res, next) => {
    const authheader = req.headers.authorization;
    // console.log("AUTH HEADER:", req.headers.authorization);

    if(!authheader){
        return res.status(401).json({
            success: false,
            message: "No Token is Provided"
        })
    }

    const token = authheader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false, 
            message: "Invalid Token !"
        })
    }
}