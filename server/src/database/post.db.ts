import Post from "../modals/post.modal";

export async function getAllPost() {
    return await Post.find({}).limit(10).populate("userRef");
}

export async function getSinglePost(postId: string) {
    return await Post.findOne({ _id: postId }).limit(10).populate("userRef");
}

export async function getAllPostFromUser(userId: string) {
    return await Post.find({ userRef: userId }).limit(10).populate("userRef");
}

export async function changePostLikeBy(postId: string, changeBy: number) {
    return await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { "reaction.likeCount": changeBy } },
        { upsert: true }
    );
}

type CreatePostType = {
    userRef: string;
    heading: string;
    description: string;
    imageUrl: string;
};

export async function createPost(data: CreatePostType) {
    await Post.create({
        userRef: data.userRef,
        heading: data.heading,
        description: data.description,
        images: [data.imageUrl],
    });
}
