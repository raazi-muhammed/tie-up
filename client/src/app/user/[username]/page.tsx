import { getAPI } from "@/lib/API";
import React from "react";
import { notFound } from "next/navigation";
import UserProfileHead from "@/feature/userProfile/components/UserProfileHead";
import MainCenterContainer from "@/components/layout/mainCenterContainer";
import UserPosts from "@/feature/userProfile/components/UserPosts";

const UserPage = async ({ params }: { params: { username: string } }) => {
    const username = params.username;
    const response = await getAPI(`/user/get-user/${username}`);

    if (!response) {
        return notFound();
    }

    return (
        <MainCenterContainer>
            <UserProfileHead userData={response.userData} />
            <UserPosts userData={response.userData} />
        </MainCenterContainer>
    );
};

export default UserPage;
