import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

mongoose.connect
    (process.env.MONGO)
    .then(()=>{
        console.log('MongoDB is connected');
    }).catch(err=> {
        console.log(err);
    });

    const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.htnl'));
});

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});