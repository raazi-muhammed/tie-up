"use client";
import { io } from "socket.io-client";

import React, { FormEvent, useEffect, useMemo, useState } from "react";
import MainCenterContainer from "@/components/layout/mainCenterContainer";
import { getAPI } from "@/lib/API";
import InboxUserList from "@/feature/inbox/components/InboxUserList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { UserType } from "@/types/post.types";
import ChatHeader from "../../feature/inbox/components/ChatHeader";
import MessagesList from "@/feature/inbox/components/MessagesList";

type MessageToDisplayType = {
    message: string;
    sender: string;
    receiver: string;
    time: string;
};

const UserInbox = () => {
    const [currentSender, setCurrentSender] = useState<UserType | null>(null);
    const [currentReceiver, setCurrentReceiver] = useState<UserType | null>(
        null
    );

    const [messageToDisplay, setMessagesToDisplay] = useState<
        MessageToDisplayType[]
    >([]);

    const [followers, setFollowers] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        getAPI("/user/get-followers-list").then((response) => {
            if (!response?.success) return;
            console.log(response.user);
            setCurrentSender(response.user);
            setFollowers(response.followers);
        });
    }, []);

    const socket = useMemo(() => io("http://localhost:5000"), [io]);

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message) {
            toast.error("Empty message");
            return;
        }

        if (!currentReceiver || !currentSender) {
            console.log("no sender or receiver, while sending");
            return;
        }

        const messageToAdd: MessageToDisplayType = {
            message: message,
            sender: currentSender.username,
            receiver: currentReceiver.username,
            time: "s now",
        };
        let _messageToDisplay = messageToDisplay;
        _messageToDisplay.push(messageToAdd);
        setMessagesToDisplay(_messageToDisplay);

        socket.emit(
            "send-message",
            currentSender.username,
            currentReceiver.username,
            message
        );

        console.log("Sendering msg to add", messageToAdd);

        setMessage("");

        return () => socket.off("send-message");
    };

    const selectConversation = (person: UserType) => {
        console.log(person.username);
        setCurrentReceiver(person);
    };

    useEffect((): any => {
        socket.on("receive-message", ({ from, to, message }) => {
            const messageToAdd: MessageToDisplayType = {
                message: message,
                sender: from,
                receiver: to,
                time: "r now",
            };

            console.log("Recevied msg to add", messageToAdd);

            let _messageToDisplay = messageToDisplay;
            _messageToDisplay.push(messageToAdd);
            setMessagesToDisplay(_messageToDisplay);
        });

        return () => socket.off("receive-message");
    }, [socket]);

    return (
        <MainCenterContainer className="w-screen">
            <div className="w-screen h-screen">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="rounded-lg border"
                >
                    <ResizablePanel defaultSize={30}>
                        <aside className="h-screen overflow-y-auto p-2">
                            <p className="text-3xl font-bold m-2">Inbox</p>
                            <section className="flex flex-col gap-2 h-full">
                                {followers.map((f: any) => (
                                    <section
                                        onClick={() =>
                                            selectConversation(f.follower)
                                        }
                                    >
                                        <InboxUserList userData={f.follower} />
                                    </section>
                                ))}
                            </section>
                            <p className="text-xs opacity-60">
                                currentSender: {currentSender?.username}
                            </p>
                        </aside>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={70}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel
                                className="relative"
                                defaultSize={100}
                            >
                                <section className="w-full p-2 h-screen flex flex-col justify-end ">
                                    <section className="w-full absolute top-0 p-6">
                                        <ChatHeader user={currentReceiver} />
                                    </section>
                                    <section className="px-2 py-24 overflow-y-auto">
                                        <MessagesList
                                            messageToDisplay={messageToDisplay}
                                            sender={currentSender?.username}
                                            receiver={currentReceiver?.username}
                                        />
                                    </section>
                                    <section className="w-full absolute bottom-0 p-6">
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
