import mongoose from "mongoose";

export const connectDb = async()=>{
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/KJ&SK-Chatify-App')
        console.log("MongoDB is Connected SuccessFully!");
    } catch (error) {
        console.log("Mongodb Connection failed :"); 
    }
}

export default connectDb;