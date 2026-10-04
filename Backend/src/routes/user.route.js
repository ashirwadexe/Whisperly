import express from 'express';
import { deleteAccount, login, logout, openMessageLink, register, userProfile } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticated, userProfile);
router.route("/delete").delete(isAuthenticated, deleteAccount);
router.route("/:username").get(openMessageLink);

export default router