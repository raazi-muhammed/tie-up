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

export async function alreadyFollows(
    follower: string,
    followed: string
): Promise<boolean> {
    const alreadyFollowed = await Follower.findOne({ follower, followed });

    if (alreadyFollowed) return true;
    else return false;
}

export async function removeFollower(
    follower: string,
    followed: string
): Promise<boolean> {
    const data = await Follower.deleteOne({ follower, followed });
    if (data.deletedCount > 0) {
        await changeFollowerCount(followed, -1);
        return true;
    } else return false;
}

export async function getFollowersOfUser(userId: string) {
    return await Follower.find({ followed: userId }).populate("follower");
}
