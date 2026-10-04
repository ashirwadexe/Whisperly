import express from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { getNotification } from '../controllers/notification.controller.js';
const router = express.Router();

router.route("/").get(isAuthenticated, getNotification);

export default router;