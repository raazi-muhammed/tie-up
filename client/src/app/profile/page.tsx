"use client";

import { getAPI } from "@/lib/API";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserProfileHead from "@/feature/userProfile/components/UserProfileHead";
import MainCenterContainer from "@/components/layout/mainCenterContainer";
import UserPosts from "@/feature/userProfile/components/UserPosts";

const UserPage = async () => {
    const response = await getAPI("/user/profile");
    if (!response) return;
    let needsToSetupProfile = true;
    if (
        response.user.avatar &&
        response.user.username &&
        response.user.fullName
    ) {
        needsToSetupProfile = false;
    }
    return (
        <MainCenterContainer>
            {needsToSetupProfile ? (
                <>
                    <p>
                        Hello {response?.user?.fullName || ""}, please setup
                        your profile
                    </p>
                    <Button>
                        <Link href="/profile/setup">Set up Profile</Link>
                    </Button>
                </>
            ) : (
                <section>
                    <nav className="top-0 flex justify-end">
                        <Button variant="outline">
                            <Link href="/profile/newpost">New Post</Link>
                        </Button>
                    </nav>
                    <UserProfileHead userData={response.user} />
                    <hr className="m-5" />
                    <UserPosts userData={response.user} />
                </section>
            )}
        </MainCenterContainer>
    );
};

export default UserPage;
