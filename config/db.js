import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); 
  }
};

export default db;


// async function connect() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch(err) {
//     console.error("MongoDB failed to connect");
//     process.exit(1);
//   }
// } 