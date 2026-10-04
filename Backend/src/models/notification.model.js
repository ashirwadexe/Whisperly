import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    relatedMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    type: {
        type: String,
        enum: ['NEW_MESSAGE'],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, { timestamps: true});

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;