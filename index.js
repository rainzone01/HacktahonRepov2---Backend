import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import db from './config/db.js'
import dotenv from 'dotenv'

import staffRoutes from './routes/staff.routes.js'
import eventRoutes from './routes/event.routes.js'
import locationRoutes from './routes/location.routes.js'
import attendanceRoutes from './routes/attendance.routes.js'
import userRoutes from './routes/users.routes.js'
import logsRoutes from  './routes/logs.routes.js'
import facialRecognitionRoutes from './routes/faceRecognition.routes.js';



const app = express()

dotenv.config();

db(); 

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
res.send('Express Working Properly')
})

app.listen(PORT, (req,res) => {
console.log(`The server is running in http://localhost:${PORT}`)
})

// Routes
app.use('/api/staff', staffRoutes);

app.use('/api/events', eventRoutes);

app.use('/api/location', locationRoutes);

app.use('/api/attendance', attendanceRoutes);

app.use('/api/users', userRoutes);

app.use('/api/logs', logsRoutes);

app.use('/api/face-recognition', facialRecognitionRoutes);


app.get('*', (req,res) => {
    res.send('Invalid route or URL')
})