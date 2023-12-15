"use client";

import { getAPI } from "@/lib/API";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserPage = async () => {
    const response = await getAPI("/user/profile");
    return (
        <div>
            <p>UserPage</p>

            <p>{JSON.stringify(response)}</p>
            <Button>
                <Link href="/profile/newpost">New Post</Link>
            </Button>
            <Button>
                <Link href="/profile/setup">Set up Profile</Link>
            </Button>
        </div>
    );
};

export default UserPage;
