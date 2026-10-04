import Notification from "../models/notification.model.js";


// GET NOTIFICATION
// GET /api/notifications
export const getNotification = async (req, res) => {
    try {
        const userId = req.user;

        const totalNotifications = await Notification.countDocuments({
            user: userId._id
        });

        return res.status(200).json({
            success: true,
            totalNotifications
        });
        
    } catch (error) {
        console.log("Get notification error: ", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    };
};