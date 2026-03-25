import { User } from "../models/User.js";
import bcrypt from "bcryptjs";// create user
export const registerUser = async (req, res) => {
    try{
        const { fullName, username, email, password, confirmedPassword, mobile, address, city, state, pincode, dob, gender } = req.body;

        if(!fullName || !username || !email || !password || !confirmedPassword )
            return res.status(400).json({ message: "Please fill all the fields" });

        if(password!==confirmedPassword)
            return res.status(400).json({ message: "Passwords do not match" });

        //check if the user already exists
        const existing_user = await User.findOne({   // exisiting user will return an object which is true or null which is false
            $or: [{ email },{username}]    // $or is an operator that checks if either of the two conditions is true
        });

        if(existing_user)
            return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
                fullName,
                username,
                email,
                password: hashedPassword,
                mobile,
                address,
                city,
                state,
                pincode,
                dob,
                gender,
                profilePhoto: req.file ? req.file.path : ""
            });

        if(user)
            console.log("User created successfully");
            res.status(201).json(user);
    }catch(error){
        console.log("Error",error);
        res.status(500).json({message: "Internalllll server error"});
    }

};

export const getUsers = async (req, res) => {
    try{
        const user1 = await User.find()
        if(user1)
        {
            res.status(200).json(user1);
        }
        else
        {
            res.status(404).json({message: "Users not found"});
        }
    }catch(error){
        console.log("Error",error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(user)
        {
            res.status(200).json(user);
        }
        else
        {
            res.status(404).json({message: "User not found"});
        }
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

export const updateUser = async (req, res) => {
    try{
        const updateData = {...req.body};
        if(updateData.password)
        {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }

        const user = await User.findByIdAndUpdate(req.params.id, updateData, {new: true});

        if(user)
            res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};