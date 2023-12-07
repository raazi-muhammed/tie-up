import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

interface UserType extends Document {
    email: string;
    username: string;
    password: string;
    comparePassword: (enteredPassword: string) => Promise<boolean>;
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

export default mongoose.model<UserType>("User", userSchema);
