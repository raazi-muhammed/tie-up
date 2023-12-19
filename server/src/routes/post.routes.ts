import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import Post from "../modals/post.modal";
import ErrorHandler from "../utils/ErrorHandler";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import { isUser } from "../middlewares/auth";
import { UserRequest } from "../types/request";
import {
    getAllPost,
    createPost,
    getAllPostFromUser,
    getSinglePost,
} from "../database/post.db";

router.post(
    "/new-post",
    isUser,
    asyncErrorHandler(
        async (req: UserRequest, res: Response, next: NextFunction) => {
            const { imageUrl, heading, description } = req.body;

            if (!heading || !description) {
                return next(new ErrorHandler("Bad request", 400));
            }

            if (!req.user) return next(new ErrorHandler("No valid user", 403));
            await createPost({
                userRef: req.user._id,
                heading,
                description,
                imageUrl,
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
            const posts = await getAllPost();
            res.status(200).json({
                success: true,
                posts,
            });
        }
    )
);

router.get(
    "/get-post",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            const postId = req.query.postId?.toString();

            if (!postId)
                return next(new ErrorHandler("User details invalid", 400));
            const post = await getSinglePost(postId);

            res.status(200).json({
                success: true,
                postData: post,
            });
        }
    )
);

router.get(
    "/posts-by-user",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            const userId = req.query.userId?.toString();
            if (!userId) {
                return next(new ErrorHandler("User details invalid", 400));
            }
            const posts = await getAllPostFromUser(userId);

            res.status(200).json({
                success: true,
                posts,
            });
        }
    )
);

export default router;
