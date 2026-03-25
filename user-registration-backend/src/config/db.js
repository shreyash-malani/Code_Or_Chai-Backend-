import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected to the database");
    }
    catch(error){
        console.log(error.message);
    }
}

export default connectDB;