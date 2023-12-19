import React from "react";
import { UserType } from "@/types/post.types";
import Container from "@/components/ui/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarFallBack } from "@/utils/formatting";
import FollowButton from "./FollowButton";
import Link from "next/link";
import SmallCard from "./SmallCard";

const UserProfileHead = ({ userData }: { userData: UserType }) => {
    return (
        <Container>
            <section className="flex gap-4 align-middle justify-center">
                <Avatar className="w-20 h-20">
                    <AvatarImage src={userData?.avatar} />
                    <AvatarFallback>
                        {getAvatarFallBack(userData?.username)}
                    </AvatarFallback>
                </Avatar>

                <section className="my-auto">
                    <p>{userData?.fullName}</p>
                    <p>{userData?.username}</p>

                    <p className="text-xs opacity-60">{userData?.bio}</p>
                </section>
                <section className="flex gap-4">
                    <SmallCard caption={"Posts"} number={4} />
                    <Link href={"/profile/followers"} className="h-full">
                        <SmallCard
                            caption={"Followers"}
                            number={userData?.followersCount}
                        />
                    </Link>
                </section>

                {userData._id ? <FollowButton toFollow={userData._id} /> : null}
            </section>
        </Container>
    );
};

export default UserProfileHead;
