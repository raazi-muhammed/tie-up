import { Response } from "express";
import User, { UserType } from "../modals/user.modal";

export enum tokenName {
    USER = "__tie-up-user",
}

export function sendToken(user: UserType, tokenName: tokenName, res: Response) {
    const token = user.signToken();

    console.log(token);

    res.status(200)
        .cookie(tokenName, token, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1),
            secure: true,
            httpOnly: true,
        })
        .json({
            success: true,
        });
}
