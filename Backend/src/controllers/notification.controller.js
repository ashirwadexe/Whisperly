import Notification from "../models/notification.model.js";


// GET NOTIFICATION
// GET /api/notifications
export const getNotification = async (req, res) => {
    try {
        const userId = req.user;

        let totalNotifications = await Notification.countDocuments({
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


// GET UNREAD NOTIFICATIONS
// GET: /api/notifications/unread-count  
export const getUnreadNotificationCount = async (req, res) => {
    try {
        const userId = req.user;

        let count = await Notification.countDocuments({
            user: userId._id,
            isRead: false
        });

        return res.status(200).json({
            success: true,
            totalUnreadNotifications: count
        });

    } catch (error) {
        console.log("Get unread notification count error: ", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    };
};

// MARK ALL AS READ
// PATCH: /api/notifications/read-all
export const markAllAsRead = async (req, res) => {
    try {
        const userId = req.user;

        await Notification.updateMany(
            {
                user: userId._id,
                isRead: false
            },
            {
                $set: {
                    isRead: true
                }
            }
        );

        return res.status(200).json({
            success: true,
            message: "All notifications marked as read!"
        });

    } catch (error) {
        console.log("Mark all notifications as read error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};