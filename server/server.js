import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Configuration
dotenv.config();

// Constants
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(PORT, async() => {
    console.log(`Application is running on port: ${PORT}`);
})

