import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarFallBack } from "@/utils/formatting";

type PostUserType = {
    username: string;
    avatar: string | undefined;
};

const PostUser = ({ username, avatar }: PostUserType) => {
    return (
        <section className="flex gap-4">
            <Avatar>
                <AvatarImage src={avatar} />
                <AvatarFallback>{getAvatarFallBack(username)}</AvatarFallback>
            </Avatar>
            <Link
                href={`/user/${username}`}
                className="hover:underline my-auto"
            >
                {username}
            </Link>
        </section>
    );
};

export default PostUser;
