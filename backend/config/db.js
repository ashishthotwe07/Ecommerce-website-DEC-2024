import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// Database connection
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); 
  }
};
