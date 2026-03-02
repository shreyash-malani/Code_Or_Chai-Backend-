import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
import errorHandler from "./middlewares/error.middleware.js";

// after all routes
app.use(errorHandler);


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"})) //when we fill the form these is used 

app.use(express.urlencoded({extended: true,limit:"16kb"})) //these is used when the data is from url 

app.use(express.static ("public"))
app.use(cookieParser())

//routes
import userRouter from "./routes/user.routes.js"

// how will it look when we use above line 
//http://localhost:8000/api/v1/users/register

//routes declaration 
app.use("/api/v1/users",userRouter)

export  {app}