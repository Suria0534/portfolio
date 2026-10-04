import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

const isMongoConfigured = Boolean(MONGODB_URI && !MONGODB_URI.includes('<db_password>'));

if (!isMongoConfigured) {
  console.warn('⚠️ MongoDB Atlas not configured yet. Copy .env.example to .env and add your real Atlas password.');
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: process.env.DB_NAME || 'portfolio',
    });
    console.log('✅ MongoDB Atlas connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

if (isMongoConfigured) {
  connectDB();
}

app.get('/', (_req, res) => {
  res.json({
    message: 'Portfolio API is running',
    status: 'ok',
    database: process.env.DB_NAME || 'portfolio',
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Server healthy',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
