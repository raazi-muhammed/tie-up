import { PostType } from "../modals/post.modal";
import Reaction, { ReactionTypesEnum } from "../modals/reaction.modal";
import { UserType } from "../modals/user.modal";

export async function addReaction(
    post: PostType,
    user: UserType,
    type: ReactionTypesEnum,
    content?: string
) {
    if (content && type === ReactionTypesEnum.COMMENT) {
        return await Reaction.create({ post, reacted: user, type, content });
    } else {
        return await Reaction.create({ post, reacted: user, type });
    }
}

export async function removeReaction(
    post: PostType,
    user: UserType,
    type: ReactionTypesEnum
) {
    return await Reaction.deleteOne({ post, reacted: user, type });
}

export async function getReaction(
    postId: string,
    user: UserType,
    type: ReactionTypesEnum
) {
    return await Reaction.findOne({ post: postId, reacted: user, type });
}

export async function getCommentsFromPost(postId: string) {
    return await Reaction.find({
        post: postId,
        type: ReactionTypesEnum.COMMENT,
    }).populate("reacted");
}
