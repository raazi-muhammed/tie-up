import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import User, { UserObjectType, UserType } from "../modals/user.modal";
import ErrorHandler from "../utils/ErrorHandler";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import { sendToken } from "../utils/jwt";
import { isUser } from "../middlewares/auth";
import { UserRequest } from "../types/request";
import { TokenName } from "../types/token";
import { addFollower } from "../database/follower.db";
import { getUserByUsername, setUpUser } from "../database/user.db";

router.post(
    "/sign-up",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            const userData = req.body;
            const { email, username, password } = userData;
            if (!email || !username || !password) {
                return next(new ErrorHandler("Invalid input", 400));
            }

            const userAlready = await User.findOne({
                $or: [{ email: email }, { username: username }],
            });
            if (userAlready) {
                return next(new ErrorHandler("Username or email taken", 400));
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
            const { username, password } = req.body;
            if (!username || !password) {
                return next(new ErrorHandler("Invalid input", 400));
            }

            const user = await User.findOne({ email: username });

            if (!user) return next(new ErrorHandler("User not found", 404));

            const isPasswordMatch = await user.comparePassword(password);
            if (!isPasswordMatch) {
                return next(new ErrorHandler("Password doesn't match", 401));
            }

            sendToken(user, TokenName.USER, res);
        }
    )
);

router.get(
    "/profile",
    isUser,
    asyncErrorHandler(
        async (req: UserRequest, res: Response, next: NextFunction) => {
            res.status(200).json({
                success: true,
                user: req.user,
            });
        }
    )
);

router.post(
    "/setup-user",
    isUser,
    asyncErrorHandler(
        async (req: UserRequest, res: Response, next: NextFunction) => {
            let userId;
            if (req.user) {
                userId = req.user._id;
            } else return next(new ErrorHandler("No user", 400));

            const {
                avatar,
                bio,
                dateOfBirth,
                fullName,
                username,
            }: {
                avatar: string;
                bio: string;
                dateOfBirth: string;
                fullName: string;
                username: string;
            } = req.body;

            const userData: UserObjectType = {
                bio: bio,
                dateOfBirth: dateOfBirth,
                fullName: fullName,
                username: username,
                avatar: avatar,
            };

            const data = await getUserByUsername(userData.username);
            if (data) {
                return next(new ErrorHandler("Username taken", 404));
            }

            await setUpUser(userId, userData);

            res.status(200).json({
                success: true,
                user: req.user,
            });
        }
    )
);

router.get(
    "/get-user/:username",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            const username = req.params.username;
            const data = await getUserByUsername(username);
            if (!data) {
                return next(new ErrorHandler("User not found", 404));
            }
            res.status(200).json({
                success: true,
                userData: data,
            });
        }
    )
);

router.post(
    "/follow-user",
    isUser,
    asyncErrorHandler(
        async (req: UserRequest, res: Response, next: NextFunction) => {
            const userId = req.userId;

            const { toFollow } = req.body;
            console.log(userId, toFollow);

            const didFollow = await addFollower(userId, toFollow);

            if (!didFollow) {
                return next(new ErrorHandler("Cannot follow the user", 400));
            }

            res.status(200).json({
                success: true,
                message: "Followed the user",
            });
        }
    )
);

export default router;
