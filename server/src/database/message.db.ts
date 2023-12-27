import { UserType } from "../modals/user.modal";
import { ConversationType } from "../modals/conversation.modal";
import Message from "../modals/message.modal";

export async function createMessage(
    conversationId: ConversationType,
    sender: UserType,
    content: string
) {
    return await Message.create({ conversationId, sender, content });
}

export async function getMessagesFromConversation(
    conversationId: ConversationType
) {
    return await Message.aggregate([
        { $match: { conversationId: conversationId._id } },
        {
            $lookup: {
                from: "users",
                localField: "sender",
                foreignField: "_id",
                as: "senderInfo",
            },
        },
        {
            $project: {
                sender: { $arrayElemAt: ["$senderInfo.username", 0] },
                conversationId: 1,
                content: 1,
                time: "$createdAt",
            },
        },
    ]);
}
