import express from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { deleteMessage, getMessages, message, toggleFavourite } from "../controllers/message.controller.js";
const router = express.Router();

router.route("/:username").post(message);
router.route("/").get(isAuthenticated, getMessages);
router.route("/:id").delete(isAuthenticated, deleteMessage);
router.route("/:messageId/favourite").patch(isAuthenticated, toggleFavourite);

export default router;