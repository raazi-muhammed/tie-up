import mongoose, { Document } from "mongoose";
import { UserType } from "./user.modal";

export interface PostType extends Document {
    userRef: UserType;
    heading: string;
    description: string;
    images: string[];
}

const postSchema = new mongoose.Schema(
    {
        userRef: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        heading: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: [String],
    },
    { timestamps: true }
);

export default mongoose.model<PostType>("Post", postSchema);
