"use client";

import { Button } from "@/components/ui/button";
import PostUser from "@/feature/userPost/components/PostUser";
import { UserType } from "@/types/post.types";
import React from "react";
import { FaVideo } from "react-icons/fa";

type Props = { user: UserType | null; handleCall: () => void };

const ChatHeader = ({ user, handleCall }: Props) => {
    return (
        <section>
            {!user ? (
                <p>Select a user</p>
            ) : (
                <div className="flex justify-between align-middle">
                    <PostUser username={user.username} avatar={user.avatar} />
                    <Button onClick={handleCall} variant="outline" size="icon">
                        <FaVideo size="1.5rem" />
                    </Button>
                </div>
            )}
        </section>
    );
};

export default ChatHeader;
