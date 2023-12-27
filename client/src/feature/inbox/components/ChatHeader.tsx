import PostUser from "@/feature/userPost/components/PostUser";
import { UserType } from "@/types/post.types";
import React from "react";

type Props = { user: UserType | null };

const ChatHeader = ({ user }: Props) => {
    return (
        <div>
            {!user ? (
                <p>Select a user</p>
            ) : (
                <PostUser username={user.username} avatar={user.avatar} />
            )}
        </div>
    );
};

export default ChatHeader;
