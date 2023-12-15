import { getAPI } from "@/lib/API";
import React from "react";

import { PostType } from "@/types/post.types";
import CardPost from "@/feature/userPost/CardPost";

const HomePage = async () => {
    const response = await getAPI("/post/all-post");
    const posts: PostType[] = response.posts;

    return (
        <main className="p-8">
            <section>
                {posts.map((post) => (
                    <CardPost post={post} />
                ))}
            </section>
        </main>
    );
};

export default HomePage;
