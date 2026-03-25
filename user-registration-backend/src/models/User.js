import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false  //what is the meaning of the line when we run the query to find the user and when we dispplay the data of the user we will display the password to not show the password we have used select: false so it will automatically hiide the password 
    },

    //Contact Details 
    mobile: {
        type: String,
        required: [true,"Please enter a mobile number"],
        match: [/^[0-9]{10}$/, "Enter valid 10-digit mobile number"]
    },

     address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    pincode: {
        type: String,
        required: true,
        match: [/^[0-9]{6}$/, "Enter valid 6-digit pincode"]
    },

    // Personal Details 
    dob: {
        type: Date,
        required: true
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
        lowercase: true
    },

    profilePhoto: {
        type: String, // file path
        default: ""
    }
},{timestamps: true});

export const User = mongoose.model('User', userSchema);
