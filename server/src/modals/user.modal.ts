import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserToken } from "../types/token";

export interface UserObjectType {
    _id?: string;
    email?: string;
    username: string;
    avatar?: string;
    fullName?: string;
    bio?: string;
    dateOfBirth?: string;
    password?: string;
}

export interface UserType extends Document, UserObjectType {
    _id: string;
    password: string;
    email: string;
    comparePassword: (enteredPassword: string) => Promise<boolean>;
    signToken: () => string;
}

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
        },
        avatar: {
            type: String,
        },
        dateOfBirth: {
            type: String,
        },
        bio: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (this: UserType, next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.signToken = function (): string {
    const user: UserToken = {
        _id: this._id,
        username: this.username,
    };
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

export default mongoose.model<UserType>("User", userSchema);
