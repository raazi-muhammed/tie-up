import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import User from "../modals/user.modal";
import ErrorHandler from "../utils/ErrorHandler";
import asyncErrorHandler from "../utils/asyncErrorHandler";

router.post(
    "/sign-up",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            console.log(req.body);

            const userData = req.body;
            const { email, username, password } = userData;

            const userAlready = await User.findOne({
                $or: [{ email: email }, { username: username }],
            });
            if (userAlready) {
                return next(new ErrorHandler("username or email taken", 500));
            }

            const user = await User.create(userData);

            res.status(200).json({
                success: true,
                data: user,
            });
        }
    )
);

router.post(
    "/login",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            console.log(req.body);

            const { username, password } = req.body;
            const user = await User.findOne({ email: username });

            if (!user) return next(new ErrorHandler("User not found", 400));

            const isPasswordMatch = await user.comparePassword(password);
            if (!isPasswordMatch)
                return next(new ErrorHandler("Password doesn't match", 401));

            res.status(200).json({
                success: true,
                data: user,
            });
        }
    )
);

export default router;
