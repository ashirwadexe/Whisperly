import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        trim: true,
        max: (500, "The message should be less than 500 characters."),
        min: (5, "The message should be more than 5 characters."),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    favourite: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);
export default Message;