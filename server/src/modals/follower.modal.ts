import mongoose, { Document } from "mongoose";
import { UserType } from "./user.modal";

export interface FollowerType extends Document {
    follower: UserType;
    followed: UserType;
    followedAt: string[];
}

const followerSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    followed: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    followedAt: {
        type: Date,
        default: new Date(),
    },
});

export default mongoose.model<FollowerType>("Follower", followerSchema);
