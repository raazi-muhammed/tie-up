"use client";
import { io } from "socket.io-client";

import React, { FormEvent, useEffect, useMemo, useState } from "react";
import MainCenterContainer from "@/components/layout/mainCenterContainer";
import { getAPI } from "@/lib/API";
import InboxUserList from "@/feature/inbox/components/InboxUserList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MessageBubble, {
    MessageVariant,
} from "@/feature/inbox/components/MessageBubble";
import toast from "react-hot-toast";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

type MessageToDisplayType = {
    message: string;
    sender: string;
    receiver: string;
    time: string;
};

const UserInbox = () => {
    const currentSender = "me";
    const currentReceiver = "jobs";
    const [messageToDisplay, setMessagesToDisplay] = useState<
        MessageToDisplayType[]
    >([
        { message: "hello", sender: "me", receiver: "jobs", time: "now" },
        { message: "hai", sender: "jobs", receiver: "me", time: "now" },
        {
            message: "how are you?",
            sender: "me",
            receiver: "jobs",
            time: "now",
        },
        {
            message: "i'm fine, u?",
            sender: "jobs",
            receiver: "me",
            time: "now",
        },
        { message: "me too", sender: "me", receiver: "jobs", time: "now" },
        {
            message: "how is the wheater there?",
            sender: "me",
            receiver: "jobs",
            time: "now",
        },
    ]);

    const [followers, setFollowers] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        getAPI("/user/get-followers-list").then((response) => {
            if (!response?.success) return;
            setFollowers(response.followers);
        });
    });

    const socket = useMemo(() => io("http://localhost:5000"), [io]);

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message) {
            toast.error("Empty message");
            return;
        }
        const messageToAdd: MessageToDisplayType = {
            message: message,
            sender: currentSender,
            receiver: currentReceiver,
            time: "now",
        };
        let _messageToDisplay = messageToDisplay;
        _messageToDisplay.push(messageToAdd);
        setMessagesToDisplay(_messageToDisplay);

        socket.emit("send-message", message);

        console.log(message);
        setMessage("");
    };

    useEffect(() => {
        socket.on("receive-message", (message) => {
            console.log(message);

            const messageToAdd: MessageToDisplayType = {
                message: message,
                sender: currentReceiver,
                receiver: currentSender,
                time: "now",
            };

            let _messageToDisplay = messageToDisplay;
            _messageToDisplay.push(messageToAdd);
            setMessagesToDisplay(_messageToDisplay);
        });
    }, [socket]);

    return (
        <MainCenterContainer className="w-screen">
            <p>Inbox</p>
            <div className="w-screen h-screen">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="rounded-lg border"
                >
                    <ResizablePanel defaultSize={30}>
                        <aside className="bg-card">
                            <section>
                                {followers.map((f: any) => (
                                    <InboxUserList userData={f.follower} />
                                ))}
                            </section>
                        </aside>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={70}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={100}>
                                <section className="w-full p-2">
                                    <section>
                                        {messageToDisplay.map((message) => (
                                            <>
                                                {message.sender ===
                                                currentSender ? (
                                                    <MessageBubble
                                                        message={
                                                            message.message
                                                        }
                                                        time={message.time}
                                                        variant={
                                                            MessageVariant.RECEIVER
                                                        }
                                                    />
                                                ) : (
                                                    <MessageBubble
                                                        message={
                                                            message.message
                                                        }
                                                        time={message.time}
                                                        variant={
                                                            MessageVariant.SENDER
                                                        }
                                                    />
                                                )}
                                            </>
                                        ))}
                                    </section>
                                    <section className="w-full">
                                        <form
                                            onSubmit={handleSendMessage}
                                            className="flex w-full gap-4"
                                        >
                                            <Input
                                                value={message}
                                                onChange={(e) =>
                                                    setMessage(e.target.value)
                                                }
                                                type="text"
                                                placeholder="type your message here..."
                                            />
                                            <Button>Send</Button>
                                        </form>
                                    </section>
                                </section>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </MainCenterContainer>
    );
};

export default UserInbox;
