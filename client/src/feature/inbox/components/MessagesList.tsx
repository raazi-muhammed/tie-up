import React from "react";
import MessageBubble, { MessageVariant } from "./MessageBubble";

type MessageToDisplayType = {
    message: string;
    sender: string;
    receiver: string;
    time: string;
};

type Props = {
    messageToDisplay: MessageToDisplayType[];
    sender: string | undefined;
    receiver: string | undefined;
};

const MessagesList = ({ messageToDisplay, sender, receiver }: Props) => {
    return (
        <>
            {messageToDisplay.map((message) => (
                <>
                    {message.sender == sender &&
                    message.receiver == receiver ? (
                        <MessageBubble
                            message={message.message}
                            time={message.time}
                            variant={MessageVariant.RECEIVER}
                        />
                    ) : message.sender == receiver ? (
                        <MessageBubble
                            message={message.message}
                            time={message.time}
                            variant={MessageVariant.SENDER}
                        />
                    ) : null}
                </>
            ))}
        </>
    );
};

export default MessagesList;
