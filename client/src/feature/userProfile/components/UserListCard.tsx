import { UserType } from "@/types/post.types";
import React from "react";
import FollowButton from "./FollowButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarFallBack } from "@/utils/formatting";

const UserListCard = ({ userData }: { userData: UserType }) => {
    return (
        <section className="flex gap-4">
            <Avatar className="w-10 h-10">
                <AvatarImage src={userData?.avatar} />
                <AvatarFallback>
                    {getAvatarFallBack(userData?.username)}
                </AvatarFallback>
            </Avatar>
            <section className="w-40">
                <p>{userData.fullName}</p>
                <p>{userData.username}</p>
            </section>
            <FollowButton toFollow={userData._id} />
        </section>
    );
};

export default UserListCard;
