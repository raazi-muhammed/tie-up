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
                message: "Posted successfully",
            });
        }
    )
);

router.get(
    "/get-post",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            const postId = req.query.postId?.toString();

            let post;
            if (postId) {
                post = await getSinglePost(postId);
            } else return next(new ErrorHandler("User details invalid", 400));

            res.status(200).json({
                success: true,
                postData: post,
                message: "Posted successfully",
            });
        }
    )
);

router.get(
    "/posts-by-user",
    asyncErrorHandler(
        async (req: Request, res: Response, next: NextFunction) => {
            console.log(req.query);
            const userId = req.query.userId?.toString();

            let posts;
            if (userId) {
                posts = await getAllPostFromUser(userId);
            } else return next(new ErrorHandler("User details invalid", 400));

            res.status(200).json({
                success: true,
                posts,
                message: "Posted successfully",
            });
        }
    )
);

export default router;
