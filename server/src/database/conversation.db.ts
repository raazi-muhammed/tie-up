import Conversation, { ConversationType } from "../modals/conversation.modal";
import { UserType } from "../modals/user.modal";
import { v4 as uuidv4 } from "uuid";

export async function getConversation(members: UserType[]) {
    return await Conversation.findOne({
        members: {
            $all: members,
            $size: members.length,
        },
    });
}

export async function getConversationById(id: string) {
    return await Conversation.findOne({
        conversationId: id,
    });
}

export async function createConversation(members: UserType[]) {
    if (members.length < 2) {
        console.log("Not enough members");
        return;
    }
    const conversationId = uuidv4();
    return await Conversation.create({ conversationId, members: members });
}
