import User from "../models/user.model.js";
import { userLoginValidator, userRegisterValidator } from "../validators/user.validator.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register
// POST: /api/auth/register
export const register = async (req, res) => {
    try {
        // validating user data using zod
        const result = userRegisterValidator.safeParse(req.body);
        if(!result.success) {
            return res.status(400).json({
                message: "Validation failed!",
                success: false,
                error: result.error.flatten()
            });
        };

        // validated user data
        const { username, email, password } = result.data;

        // check username unique or not
        const usernameExist = await User.findOne({ username});
        if(usernameExist) {
            return res.status(400).json({
                message: "Username already exist, try another!",
                success: false
            });
        };

        // check email exist or not
        const emailExist = await User.findOne({ email });
        if(emailExist) {
            return res.status(400).json({
                message: "Email already exist, try another!",
                success: false
            });
        };

        // hash password to store in db
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user account in db
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        return res.status(200).json({
            message: "Account created!",
            success: true,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        });


    } catch (error) {
        console.log("Registeration error: ", error);
        return res.status(500).json({
            message: error.message
        });
    };
};

// login
// POST: /api/auth/login
export const login = async (req, res) => {
    try {
        const result = userLoginValidator.safeParse(req.body);
        if(!result.success) {
            return res.status(400).json({
                message: "Validation failed - Login",
                success: false,
                error: result.error.flatten()
            });
        };

        const { email, password } = result.data;

        // check user exist or not
        let user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({
                message: "Email not found!",
                success: false
            });
        };

        // compare password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(401).json({
                message: "Wrong Password",
                success: false
            });
        };

        // create token
        const tokenData = {
            userId: user._id
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "7d"});

        user = {
            _id: user._id,
            username: user.username,
            email: user.email,
        };

        return res.status(200).cookie("token", token, {maxAge: 7*24*60*60*1000, httpOnly: true, sameSite:'strict'}).json({
            message: `Welcome, ${user.username}!`,
            success: true,
            user
        });

    } catch (error) {
        console.log("Login error: ", error);
        return res.status(500).json({
            message: error.message
        });
    };
};

// logout
// GET: /api/auth/logout
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge: 0, httpOnly: true, sameSite: "strict"}).json({
            message: "Logged out!",
            success: true
        });
    } catch (error) {
        console.log("Logout error: ", error);
        return res.status(500).json({
            message: error.message
        });
    };
};