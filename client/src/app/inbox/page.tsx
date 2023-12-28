"use client";
import { io } from "socket.io-client";

import React, { FormEvent, useEffect, useMemo, useState } from "react";
import MainCenterContainer from "@/components/layout/mainCenterContainer";
import { getAPI, postAPI } from "@/lib/API";
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
    conversationId: string;
    content: string;
    sender: string;
    time: string;
};

const UserInbox = () => {
    const [currentSender, setCurrentSender] = useState<UserType | null>(null);
    const [currentReceiver, setCurrentReceiver] = useState<UserType | null>(
        null
    );
    const [conversationId, setConversationId] = useState<string | null>(null);

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

    const handleCall = async () => {
        if (!currentReceiver || !currentSender || !conversationId) {
            console.log("no sender or receiver, or not id, while sending");
            return;
        }

        const messageToAdd: MessageToDisplayType = {
            content: `Join the call at http://localhost:3000/inbox/call/${conversationId}`,
            sender: currentSender.username,
            conversationId,
            time: new Date().toString(),
        };
        let _messageToDisplay = messageToDisplay;
        _messageToDisplay.push(messageToAdd);
        setMessagesToDisplay(_messageToDisplay);

        socket.emit(
            "send-message",
            currentSender.username,
            conversationId,
            `Join the call at http://localhost:3000/inbox/call/${conversationId}`
        );
    };
    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message) {
            toast.error("Empty message");
            return;
        }

        if (!currentReceiver || !currentSender || !conversationId) {
            console.log("no sender or receiver, or not id, while sending");
            return;
        }

        const messageToAdd: MessageToDisplayType = {
            content: message,
            sender: currentSender.username,
            conversationId,
            time: new Date().toString(),
        };
        let _messageToDisplay = messageToDisplay;
        _messageToDisplay.push(messageToAdd);
        setMessagesToDisplay(_messageToDisplay);

        socket.emit(
            "send-message",
            currentSender.username,
            conversationId,
            message
        );

        console.log("Sendering msg to add", messageToAdd);
        const res = await postAPI("/inbox/send-message", {
            conversationId,
            message,
        });
        console.log(res);

        setMessage("");

        return () => socket.off("send-message");
    };

    const selectConversation = async (person: UserType) => {
        console.log(person.username);
        setCurrentReceiver(person);
        const response = await getAPI(
            `/inbox/get-conversation?sendTo=${person.username}`
        );
        console.log(response);
        setMessagesToDisplay(response.messages);
        if (response.success) {
            setConversationId(response.conversationId);
            socket.emit("join-conversation", response.conversationId);
        }
    };

    useEffect((): any => {
        socket.on("receive-message", ({ from, conversationId, message }) => {
            const messageToAdd: MessageToDisplayType = {
                content: message,
                sender: from,
                conversationId,
                time: new Date().toString(),
            };

            console.log("Received msg to add", messageToAdd);

            let _messageToDisplay = messageToDisplay;
            _messageToDisplay.push(messageToAdd);
            setMessagesToDisplay(_messageToDisplay);
        });
    }, [socket]);

    return (
        <MainCenterContainer className="w-screen">
            <div style={{ width: "min(100rem, 100vw)" }} className="h-screen">
                <ResizablePanelGroup direction="horizontal">
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
                                <section className="w-full h-screen flex flex-col justify-end ">
                                    <section className="w-full absolute top-0 p-6 backdrop-blur-lg bg-opacity-60 bg-black z-20">
                                        <ChatHeader
                                            user={currentReceiver}
                                            handleCall={handleCall}
                                        />
                                    </section>
                                    <section className="px-2 py-24 overflow-y-auto">
                                        <MessagesList
                                            messageToDisplay={messageToDisplay}
                                            sender={currentSender?.username}
                                            receiver={currentReceiver?.username}
                                        />
                                    </section>
                                    <section className="w-full absolute bottom-0 p-6 backdrop-blur-lg bg-opacity-60 bg-black">
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
