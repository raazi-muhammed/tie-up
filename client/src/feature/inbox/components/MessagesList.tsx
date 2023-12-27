import React, { Fragment } from "react";
import MessageBubble, { MessageVariant } from "./MessageBubble";

type MessageToDisplayType = {
    conversationId: string;
    content: string;
    sender: string;
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
                <Fragment key={message.time}>
                    {message.sender == sender ? (
                        <MessageBubble
                            message={message.content}
                            time={message.time}
                            variant={MessageVariant.RECEIVER}
                        />
                    ) : message.sender == receiver ? (
                        <MessageBubble
                            message={message.content}
                            time={message.time}
                            variant={MessageVariant.SENDER}
                        />
                    ) : null}
                </Fragment>
            ))}
        </>
    );
};

export default MessagesList;
