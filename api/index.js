import express from 'express';
import mongoose from 'mongoose';

mongoose.connect
    (
    'mongodb+srv://pacthbtu:pacthbtu@pact-hbtu.coawe.mongodb.net/pact-hbtu?retryWrites=true&w=majority&appName=pact-hbtu'
    )
    .then(()=>{
        console.log('MongoDB is connected');
    }).catch(err=> {
        console.log(err);
    });


const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})