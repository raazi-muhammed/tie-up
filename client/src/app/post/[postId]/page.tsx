import MainCenterContainer from "@/components/layout/mainCenterContainer";
import CardPost from "@/feature/userPost/CardPost";
import { getAPI } from "@/lib/API";
import React from "react";

const SinglePost = async ({ params }: { params: { postId: string } }) => {
    const response = await getAPI("post/get-post", { postId: params.postId });

    console.log(response);
    return (
        <MainCenterContainer>
            <CardPost post={response.postData} />
        </MainCenterContainer>
    );
};

export default SinglePost;
