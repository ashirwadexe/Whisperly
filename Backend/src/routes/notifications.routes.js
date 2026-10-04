import express from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { getNotification, getUnreadNotificationCount, markAllAsRead } from '../controllers/notification.controller.js';
const router = express.Router();

router.route("/").get(isAuthenticated, getNotification);
router.route("/unread-count").get(isAuthenticated, getUnreadNotificationCount);
router.route("/read-all").patch(isAuthenticated, markAllAsRead);

export default router;