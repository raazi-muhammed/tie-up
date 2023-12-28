import mongoose, { Document } from "mongoose";
import { UserType } from "./user.modal";
import { PostType } from "./post.modal";

export enum ReactionTypesEnum {
    LIKE = "LIKE",
    COMMENT = "COMMENT",
    SHARE = "SHARE",
}

export interface ReactionType extends Document {
    post: PostType;
    type: ReactionTypesEnum;
    reacted: UserType;
    content?: string;
    createdAt: string;
}

const reactionSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Post",
        },
        reacted: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        type: {
            type: String,
            enum: ReactionTypesEnum,
            required: true,
        },
        content: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model<ReactionType>("Reaction", reactionSchema);
