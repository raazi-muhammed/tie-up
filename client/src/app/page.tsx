import MainCenterContainer from "@/components/layout/mainCenterContainer";
import { PostType } from "@/types/post.types";
import { getAPI } from "@/lib/API";
import CardPost from "@/feature/userPost/CardPost";
import UserNavBar from "@/feature/layout/components/UserNavBar";

export default async function Home() {
    const response = await getAPI("/post/all-post");
    const posts: PostType[] = response.posts;

    return (
        <main className="min-h-screen">
            {/*  <Navbar /> */}
            <UserNavBar />
            <MainCenterContainer>
                <section>
                    {posts.map((post) => (
                        <CardPost post={post} />
                    ))}
                </section>
            </MainCenterContainer>
        </main>
    );
}
