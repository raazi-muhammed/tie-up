import { Response, NextFunction, Request } from "express";
import { decodeJWT } from "../utils/jwt";
import User from "../modals/user.modal";
import { UserRequest } from "../types/request";
import { TokenName } from "../types/token";
import ErrorHandler from "../utils/ErrorHandler";

export const isUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userToken: string = req.cookies[TokenName.USER];
        const decoded = decodeJWT(userToken);
        const user = await User.findOne({ _id: decoded._id });

        if (user) {
            (req as UserRequest).user = user;
            (req as UserRequest).userId = user._id;
        } else next(new ErrorHandler("No user found", 404));
        next();
    } catch (error: any) {
        next(new ErrorHandler(error.message, 401));
    }
};
