import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"], // custom validator with custom error message can also be added here
        unique:true
    }
},{ timestamps:true }) //gives two field created At and updated At automatically

export const User = mongoose.model("User",userSchema)