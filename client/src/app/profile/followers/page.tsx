"use client";

import UserListCard from "@/feature/userProfile/components/UserListCard";
import { getAPI } from "@/lib/API";
import { FollowersType } from "@/types/post.types";
import React from "react";

const FollowersPage = async () => {
    const response = await getAPI("/user/get-followers-list");
    if (!response?.success) return;
    const followers: FollowersType[] = response.followers;

    return (
        <div>
            {followers.map((f) => (
                <UserListCard userData={f.follower} />
            ))}
        </div>
    );
};

export default FollowersPage;
