import mongoose, { Document } from "mongoose";
import { UserType } from "./user.modal";

export interface MessageType extends Document {
    conversationId: string;
    sender: UserType;
    content: UserType;
}

const messageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Conversation",
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model<MessageType>("Message", messageSchema);
