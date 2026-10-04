import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import messageFromValidator from "../validators/message.validator.js";

// MESSAGE FORM
// POST: /api/messages/:username
export const message = async (req, res) => {
    try {
        const username = req.params;
        const usernameExist = await User.findOne(username);
        if(!usernameExist) {
            return res.status(400).json({
                message: "Receiver not exist, wrong link!",
                success: false
            });
        };

        const result = messageFromValidator.safeParse(req.body);
         if(!result.success) {
            return res.status(400).json({
                message: "Validation failed!",
                success: false,
                error: result.error.flatten()
            });
        };

        const userId = usernameExist._id;
        const { message } = result.data;

        const messageData = await Message.create({
            message,
            user: userId
        });

        return res.status(201).json({
            message: "Message sent!",
            success: true,
            messageData
        });

    } catch (error) {
        console.log("Message form error: ", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    };
};

// GET MESSAGES
//GET: /api/messages/
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        return res.status(200).json({
            message: "Messages retrieved successfully",
            success: true,
            messages
        });
    } catch (error) {
        console.log("Get all messages error: ", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    };
};

// DELETE MESSAGE
// DELETE: /api/messages/:messageId
export const deleteMessage = async (req, res) => {
    try {
        const messageId = req.params.id;
        const messageExist = await Message.findById(messageId);
        if(!messageExist) {
            return res.status(404).json({
                message:"Message not exist!",
                success: false
            });
        };

        // check ownership of the message
        const userId = req.user._id;
        if(messageExist.user.toString() !== userId.toString()) {
            return res.status(400).json({
                message: "You cant delete this message!",
                success: false
            });
        };

        await Message.findByIdAndDelete(messageId);

        return res.status(200).json({
            message: "Message Deleted!",
            success: true
        });

    } catch (error) {
        console.log("Delete messages error: ", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    };
};

// MESSAGE STATS
//GET: /api/messages/stats
export const messageStats = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Stats messages error: ", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    };
};

// FAVOURITE MESSAGES  
// PATCH: /api/messages/:id/favourite
export const toggleFavourite = async (req, res) => {
    try {
        const { messageId } = req.params;
        const userId = req.user._id;

        const message = await Message.findOne({
            _id: messageId,
            user: userId
        });

        if(!message) {
            return res.status(404).json({
                message: "Message not found!",
                success: false
            });
        };

        message.favourite = !message.favourite;
        await message.save();

        return res.status(200).json({
            message: message.favourite 
                ? "Message is added to favourite!"
                : "Message is removed from favourite!",
            success: true,
            favourite: message.favourite
        });

    } catch (error) {
        console.log("toggle Favourite messages error: ", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    };
};

// GET ALL FAVOURITE MESSAGES
// GET: /api/messages/favourite
export const getFavouriteMessages = async (req, res) => {
    try {
        const userId = req.user._id;

        const messages = await Message.find({
            user: userId,
            favourite: true
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            messages
        });

    } catch (error) {
        console.log("Get Favourite messages error:", error);

        return res.status(500).json({
            message: error.message,
            success: false
        });
    };
};