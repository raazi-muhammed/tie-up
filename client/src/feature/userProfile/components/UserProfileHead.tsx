import React from "react";
import { UserType } from "@/types/post.types";
import Container from "@/components/ui/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarFallBack } from "@/utils/formatting";

const UserProfileHead = ({ userData }: { userData: UserType }) => {
    return (
        <Container>
            <section className="flex gap-4">
                <Avatar className="w-20 h-20">
                    <AvatarImage src={userData?.avatar} />
                    <AvatarFallback>
                        {getAvatarFallBack(userData?.username)}
                    </AvatarFallback>
                </Avatar>

                <section>
                    <p>{userData?.fullName}</p>
                    <p>{userData?.username}</p>
                    <p className="text-xs opacity-60">{userData?.bio}</p>
                </section>
            </section>
        </Container>
    );
};

export default UserProfileHead;
