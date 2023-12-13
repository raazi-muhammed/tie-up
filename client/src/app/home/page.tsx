import { getAPI } from "@/lib/API";
import React from "react";
import { Card } from "@/components/ui/card";
import { PostType } from "@/types/post.types";

const HomePage = async () => {
    const response = await getAPI("/post/all-post");
    const posts: PostType[] = response.posts;

    return (
        <main className="p-8">
            <section>
                {posts.map((post) => (
                    <Card className="min-w-[400px] mb-2 p-4">
                        <p>H: {post.heading}</p>
                        <p>D: {post.description}</p>
                        <p>C: {post.createdAt}</p>
                    </Card>
                ))}
            </section>
        </main>
    );
};

export default HomePage;
