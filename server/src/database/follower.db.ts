import Follower from "../modals/follower.modal";
import { changeFollowerCount } from "./user.db";

export async function addFollower(
    follower: string,
    followed: string
): Promise<boolean> {
    const alreadyFollowed = await Follower.findOne({ follower, followed });

    if (alreadyFollowed) return false;

    await Follower.create({ follower, followed });
    await changeFollowerCount(followed);
    return true;
}
