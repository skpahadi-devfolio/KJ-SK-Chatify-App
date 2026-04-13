import mongoose from "mongoose";

export const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB is Connected SuccessFully!");
    } catch (error) {
        console.log("Mongodb Connection failed :"); 
    }
}

export default connectDb;