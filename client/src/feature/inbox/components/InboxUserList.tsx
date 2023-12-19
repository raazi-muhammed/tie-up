import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/types/post.types";
import { getAvatarFallBack } from "@/utils/formatting";
import React from "react";

const InboxUserList = ({ userData }: { userData: UserType }) => {
    return (
        <section className="flex gap-4 rounded p-2 hover:bg-card">
            <Avatar className="w-10 h-10">
                <AvatarImage src={userData?.avatar} />
                <AvatarFallback>
                    {getAvatarFallBack(userData?.username)}
                </AvatarFallback>
            </Avatar>
            <section className="w-40">
                <p>{userData.fullName}</p>
            </section>
        </section>
    );
};

export default InboxUserList;
