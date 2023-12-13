import { getAPI } from "@/lib/API";
import React from "react";
import { Card } from "@/components/ui/card";
import { PostType } from "@/types/post.types";
import Link from "next/link";

const HomePage = async () => {
    const response = await getAPI("/post/all-post");
    const posts: PostType[] = response.posts;

    return (
        <main className="p-8">
            <section>
                {posts.map((post) => (
                    <Card className="min-w-[400px] mb-2 p-4">
                        <Link
                            href={`user/${post.userRef.username}`}
                            className="hover:underline"
                        >
                            User: {post.userRef.username}
                        </Link>
                        <p>Heading: {post.heading}</p>
                        <p>Content: {post.description}</p>
                        <p>Posted at: {post.createdAt}</p>
                    </Card>
                ))}
            </section>
        </main>
    );
};

export default HomePage;
