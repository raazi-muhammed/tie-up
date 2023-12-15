import { getAPI } from "@/lib/API";
import React from "react";
import { PostType } from "@/types/post.types";
import CardPost from "@/feature/userPost/CardPost";
import MainCenterContainer from "@/components/layout/mainCenterContainer";

const HomePage = async () => {
    const response = await getAPI("/post/all-post");
    const posts: PostType[] = response.posts;

    return (
        <MainCenterContainer>
            <section>
                {posts.map((post) => (
                    <CardPost post={post} />
                ))}
            </section>
        </MainCenterContainer>
    );
};

export default HomePage;
