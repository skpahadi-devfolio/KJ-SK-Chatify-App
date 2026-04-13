//Auth controller Logic for Both Signup and Login Page:-
import User from "../models/authmodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//Signup Controller Logic:-
export const signupUser = async(req, res) => {
    try {
    const{name, email, password, confirmpassword} = req.body;

        if(!name || !email || !password || !confirmpassword){
        return res.status(400).json({
            success: false,
            message: "Please Fill Empty Field"
        })
    }

    //Confirm password check
    if(password != confirmpassword){
        return res.status(400).json({
            success: false,
            message: "Password not Match Re Enter Password"
        })
    }

    //if User exits with same email
    const existUser = await User.findOne({email});
    if(existUser){
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }

    //hashing password:-
    const hashpassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({name, email, password: hashpassword});

    //jwt Token generate:-
    const token = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )
    return res.status(201).json({
        success: true, 
        message: "You SignUp SuccessFully!",
        user,
        token
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Server Error Signup Failed:"
        })  
    }
}






//Login Controller Logic:-
export const loginUser = async(req, res) => {
    try {
        const{email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please Fill Empty Field"
            })
        }

        const user = await User.findOne({email});

        //Wrong email or password for Login
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not Found"
            })
        }
        
        //password check:-
        const match = await bcrypt.compare(password, user.password);

        if(!match){
            return res.status(400).json({
                success: false,
                message: "Invalid Password Try Again"
            })
        }

        //jwt token generate:-
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )
        return res.status(200).json({
            success: true,
            message: "You Login SuccessFully!",
            user,
            token
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error Login Failed:"
        })
    }
}