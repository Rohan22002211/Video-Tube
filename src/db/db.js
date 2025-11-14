import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/wingametube`);
        console.log("Mongo connection done",connectionInstance);

    }catch(error){
        console.log("connection failed while connected with Mongo",error.message)
    }
}

export default connectDB;