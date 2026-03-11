
import mongoose from 'mongoose';
import dotenv from "dotenv";
import connectDB from './db/db.js';

dotenv.config({
    path: './env'
});





connectDB()

















// In javascript there is a if-e like concept to immediately execute the code
/*  THESE WOULD BE ONE APPROACH TO RUN THE SERVER
import express from 'express';
const app = express();


(async() => {
    try
    {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', (err) => {   // this is an event listener for the app
            console.error('ERROR: ', err);
            throw err;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port http://localhost:${process.env.PORT}`);
        })
    }catch(error) {
        console.error("ERROR: ", error);
        throw error;
    }

})()
*/