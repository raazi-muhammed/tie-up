import Post from "../modals/post.modal";

export async function getAllPost() {
    return await Post.find({}).limit(10).populate("userRef");
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
