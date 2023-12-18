import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { getFormattedDate } from "@/utils/formatting";
import { PostType } from "@/types/post.types";
import { BsHeart, BsChat, BsShare } from "react-icons/bs";
import ReactionButton from "./components/ReactionButton";
import PostUser from "./components/PostUser";
import {
    Image,
    ImageContainer,
    ImageFallback,
} from "@/components/custom/image";

const CardPost = ({ post }: { post: PostType }) => {
    return (
        <Card className="w-full max-w-[35rem] mb-4">
            <CardHeader>
                <PostUser
                    username={post.userRef.username}
                    avatar={post.userRef.avatar}
                />
            </CardHeader>
            <CardContent>
                <Link href={`/post/${post._id}`}>
                    <ImageContainer>
                        <Image src={post.images[0]} />
                        <ImageFallback />
                    </ImageContainer>
                </Link>
                <section className="p-2">
                    <p className="font-bold mb-1 capitalize">{post.heading}</p>
                    <p className="text-sm opacity-60">{post.description}</p>
                </section>
            </CardContent>
            <CardFooter className="grid">
                <section className="flex">
                    <ReactionButton>
                        <BsHeart /> Like
                    </ReactionButton>
                    <ReactionButton>
                        <BsChat /> Comment
                    </ReactionButton>
                    <ReactionButton>
                        <BsShare /> Share
                    </ReactionButton>
                </section>
                <p className="text-sm opacity-60 p-4 pb-1">
                    {getFormattedDate(post.createdAt)}
                </p>
            </CardFooter>
        </Card>
    );
};

export default CardPost;
