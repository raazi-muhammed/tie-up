"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { postAPI } from "@/lib/API";
import toast from "react-hot-toast";

const FollowButton = ({ toFollow }: { toFollow: string }) => {
    async function handleFollow() {
        const response = await postAPI(
            "user/follow-user",
            {
                toFollow: toFollow,
            },
            { showAlerts: true }
        );
        console.log("HI", response);

        if (response.success) {
            toast.success(response.message);
        }
    }
    return <Button onClick={handleFollow}>Follow</Button>;
};

export default FollowButton;
