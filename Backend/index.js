import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './src/configs/db.js';
import userRouter from './src/routes/user.route.js';
import messageRouter from './src/routes/message.route.js';
import notificationRouter from './src/routes/notifications.routes.js';
import cors from 'cors';

// forcing nodejs to use google or cloudflare's dns server
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    "http://localhost:5173",
    "https://localhost:5173",
    process.env.CLIENT_URL, 
].filter(Boolean); 

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests without an Origin header, such as server-to-server requests
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Home")
});

// api's
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);
app.use("/api/notifications", notificationRouter);

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
