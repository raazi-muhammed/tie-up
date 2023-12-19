import {
    Image,
    ImageContainer,
    ImageFallback,
} from "@/components/custom/image";
import Container from "@/components/ui/container";
import { getAPI } from "@/lib/API";
import { PostType, UserType } from "@/types/post.types";
import Link from "next/link";
import React from "react";

const UserPosts = async ({ userData }: { userData: UserType }) => {
    const response = await getAPI(`/post/posts-by-user`, {
        userId: userData._id,
    });
    const posts: PostType[] = response.posts;

    return (
        <Container>
            <section className="grid grid-cols-3 gap-6 p-4">
                {posts.map((post) => (
                    <Link href={`/post/${post._id}`}>
                        <ImageContainer>
                            <Image src={post.images[0]} alt={post.heading} />
                            <ImageFallback />
                        </ImageContainer>
                    </Link>
                ))}
            </section>
        </Container>
    );
};

export default UserPosts;
