import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async ()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Mongo connection done",connectionInstance);

    }catch(error){
        console.log("connection failed while connected with Mongo",error.message);
        process.exit(1);
    }
}

export default connectDB;