import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import Post from "../modals/post.modal";
import ErrorHandler from "../utils/ErrorHandler";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import { isUser } from "../middlewares/auth";
import { UserRequest } from "../types/request";

router.post(
    "/new-post",
    isUser,
    asyncErrorHandler(
        async (req: UserRequest, res: Response, next: NextFunction) => {
            const { heading, description } = req.body;
            if (!heading || !description) {
                return next(new ErrorHandler("Bad request", 400));
            }

            if (!req.user) return next(new ErrorHandler("No valid user", 403));

            const post = await Post.create({
                userRef: req.user._id,
                heading,
                description,
            });

            res.status(200).json({
                success: true,
                message: "Posted successfully",
            });
        }
    )
);

router.get(
    "/all-post",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            const posts = await Post.find({}).limit(10);
            res.status(200).json({
                success: true,
                posts,
                message: "Posted successfully",
            });
        }
    )
);

export default router;
