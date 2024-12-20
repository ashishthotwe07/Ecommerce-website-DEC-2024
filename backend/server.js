// Importing dependencies
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cloudinary from "cloudinary";
import { connectDB } from './config/db.js';


// Initialize environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // CORS for secure cross-origin requests
app.use(cookieParser()); // Parse cookies
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

// Connect to the database
connectDB();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define routes
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
