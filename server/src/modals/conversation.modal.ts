import mongoose, { Document } from "mongoose";
import { UserType } from "./user.modal";

export interface ConversationType extends Document {
    conversationId: string;
    members: UserType[];
}

const conversationSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        required: true,
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    ],
});

export default mongoose.model<ConversationType>(
    "Conversation",
    conversationSchema
);
