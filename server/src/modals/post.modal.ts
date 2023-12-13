import mongoose, { Document } from "mongoose";

export interface PostType extends Document {
    userRef: string;
    heading: string;
    description: string;
}

const postSchema = new mongoose.Schema(
    {
        userRef: {
            type: String,
            required: true,
        },
        heading: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model<PostType>("Post", postSchema);
