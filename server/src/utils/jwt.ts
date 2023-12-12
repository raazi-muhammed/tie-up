import { Response } from "express";
import { UserType } from "../modals/user.modal";
import jwt from "jsonwebtoken";
import { UserToken, TokenName } from "../types/token";

export function sendToken(user: UserType, tokenName: TokenName, res: Response) {
    const token = user.signToken();

    res.status(200)
        .cookie(tokenName, token, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Set expiration to 30 days from now
            httpOnly: true,
        })
        .json({
            success: true,
        });
}

export function decodeJWT(token: string): UserToken {
    return jwt.verify(token, process.env.JWT_SECRET) as UserToken;
}
