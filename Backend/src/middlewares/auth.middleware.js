import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const isAuthenticated = async (req, res, next) => {
    try {

        const token = req.cookies.token;
        if(!token) {
            return res.status(401).json({
                message: "User is not authenticated!",
                success: false
            });
        };

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if(!decode) {
            return res.status(401).json({
                message: "User is not authenticated!",
                success: false
            });
        };

        const user = await User.findById( decode.userId );
        if(!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        };

        req.user = user;

        next();
        
    } catch (error) {
        console.log("Authentication middleware error: ", error);
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false
        });
    };
};