"use client";

import React, { FormEvent, useEffect, useState } from "react";
import MainCenterContainer from "@/components/layout/mainCenterContainer";
import { getAPI } from "@/lib/API";
import InboxUserList from "@/feature/inbox/components/InboxUserList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MessageBubble, {
    MessageVariant,
} from "@/feature/inbox/components/MessageBubble";

const UserInbox = () => {
    const [followers, setFollowers] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        getAPI("/user/get-followers-list").then((response) => {
            if (!response?.success) return;
            setFollowers(response.followers);
        });
    });

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(message);
        setMessage("");
    };

    return (
        <MainCenterContainer>
            <p>Inbox</p>
            <div className="flex min-w-max border w-[100vw] p-3 min-h-screen">
                <aside>
                    <section>
                        {followers.map((f: any) => (
                            <InboxUserList userData={f.follower} />
                        ))}
                    </section>
                </aside>
                <section className="w-full p-2">
                    <section>
                        <MessageBubble
                            message={"hooi"}
                            time={"now"}
                            variant={MessageVariant.SENDER}
                        />
                        <MessageBubble
                            message={"hooi"}
                            time={"now"}
                            variant={MessageVariant.SENDER}
                        />
                        <MessageBubble
                            message={"hooi"}
                            time={"now"}
                            variant={MessageVariant.RECEIVER}
                        />
                    </section>
                    <section className="w-full">
                        <form
                            onSubmit={handleSendMessage}
                            className="flex w-full gap-4"
                        >
                            <Input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                type="text"
                                placeholder="type your message here..."
                            />
                            <Button>Send</Button>
                        </form>
                    </section>
                </section>
            </div>
        </MainCenterContainer>
    );
};

export default UserInbox;
