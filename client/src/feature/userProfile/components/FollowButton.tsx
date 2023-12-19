"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getAPI, postAPI } from "@/lib/API";
import toast from "react-hot-toast";

const FollowButton = ({ toFollow }: { toFollow: string }) => {
    const [alreadyFollows, setAlreadyFollows] = useState(false);
    useEffect(() => {
        getAPI("/user/already-follows", {
            toFollow: toFollow,
        }).then((response) => {
            console.log(response);
            if (response?.success && response?.isFollowing) {
                setAlreadyFollows(true);
            }
        });
    }, []);

    async function handleFollow() {
        const response = await postAPI(
            "user/follow-user",
            {
                toFollow: toFollow,
            },
            { showAlerts: true }
        );

        if (response.success) {
            toast.success(response.message);
            setAlreadyFollows(true);
        }
    }

    async function handleUnFollow() {
        const response = await postAPI(
            "user/un-follow-user",
            {
                toUnFollow: toFollow,
            },
            { showAlerts: true }
        );

        if (response.success) {
            toast.success(response.message);
            setAlreadyFollows(false);
        }
    }
    return (
        <>
            {alreadyFollows ? (
                <Button className="my-auto" onClick={handleUnFollow}>
                    Unfollow
                </Button>
            ) : (
                <Button className="my-auto" onClick={handleFollow}>
                    Follow
                </Button>
            )}
        </>
    );
};

export default FollowButton;
