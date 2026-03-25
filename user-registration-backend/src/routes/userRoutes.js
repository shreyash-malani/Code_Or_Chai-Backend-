import express from "express";
import upload from "../middleware/upload.js";
import {
    registerUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

const router = express.Router();

// 🔥 CREATE USER (with image upload)
router.post("/", upload.single("profilePhoto"), registerUser);

// CRUD APIs (no file upload needed)
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;