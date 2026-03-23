
import mongoose from 'mongoose';
import dotenv from "dotenv";
import connectDB from './db/db.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({
    path: './env'
});

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: '16kb'})); // this is used when we have send the data in json format
app.use(express.urlencoded({extended: true, limit: '16kb'})); // this is used when we have send the data in form
app.use(express.static('public')); // this is used to serve the static files like images, css, js etc from the public folder

app.use(cookieParser());



connectDB()
.then(() => {
    
    app.on('error', (err) => {   // this is an event listener for the app
        console.error('ERROR: ', err);
        throw err;
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("ERROR: MongoDB Connection Failed !! ", error);
})

















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