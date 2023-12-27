import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import asyncErrorHandler from "../utils/asyncErrorHandler";
import { isUser } from "../middlewares/auth";
import {
    createConversation,
    getConversation,
    getConversationById,
} from "../database/conversation.db";
import {
    createMessage,
    getMessagesFromConversation,
} from "../database/message.db";
import { UserRequest } from "../types/request";
import { getUserByUsername } from "../database/user.db";
import { UserType } from "../modals/user.modal";
import ErrorHandler from "../utils/ErrorHandler";

router.get(
    "/get-conversation",
    isUser,
    asyncErrorHandler(
        async (req: UserRequest, res: Response, next: NextFunction) => {
            const sendTo = req.query?.sendTo?.toString();

            const members: UserType[] = [req.user];

            console.log("sendTo", sendTo);
            if (sendTo) {
                let otherUser = await getUserByUsername(sendTo);
                if (otherUser) members.push(otherUser);
            } else {
                console.log("No other user");
            }

            const conversation = await getConversation(members);
            if (conversation) {
                const messages = await getMessagesFromConversation(
                    conversation
                );

                res.status(200).json({
                    success: true,
                    conversationId: conversation.conversationId,
                    messages,
                });
                return;
            }

            const newConversation = await createConversation(members);
            if (!newConversation)
                return next(
                    new ErrorHandler("Cannot create new conversation", 500)
                );

            res.status(200).json({
                success: true,
                conversationId: newConversation.conversationId,
            });
        }
    )
);

router.post(
    "/send-message",
    isUser,
    asyncErrorHandler(
        async (req: UserRequest, res: Response, next: NextFunction) => {
            const { conversationId, message } = req.body;

            const conversation = await getConversationById(conversationId);
            if (!conversation) {
                return next(new ErrorHandler("No conversation", 500));
            }

            await createMessage(conversation, req.user, message);

            res.status(200).json({
                success: true,
            });
        }
    )
);

export default router;
