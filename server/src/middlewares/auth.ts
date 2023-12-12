import { Response, NextFunction } from "express";
import { decodeJWT } from "../utils/jwt";
import User from "../modals/user.modal";
import { UserRequest } from "../types/request";
import { TokenName } from "../types/token";

export const isUser = async (
    req: UserRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const userToken: string = req.cookies[TokenName.USER];
        const decoded = decodeJWT(userToken);
        const user = await User.findOne({ _id: decoded._id });

        if (user) req.user = user;
        else throw new Error();
        next();
    } catch (error: any) {
        console.log(error.message);
    }
};
