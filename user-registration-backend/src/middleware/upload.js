import multer from "multer";

// Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");   // folder where image files will be stored and imp things that uploads folder should be in root directory 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Initialize multer
const upload = multer({ storage });

export default upload;