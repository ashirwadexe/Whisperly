import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './src/configs/db.js';
import userRouter from './src/routes/user.route.js';
import messageRouter from './src/routes/message.route.js';

// forcing nodejs to use google or cloudflare's dns server
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);


dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Home")
});

// api's
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    connectDB()
});