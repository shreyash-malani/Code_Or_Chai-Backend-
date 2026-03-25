import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./src/Routes/userRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// 🔥 Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/users", userRoutes);

// DB Connection
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});