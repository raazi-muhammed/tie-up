import React from "react";

export enum MessageVariant {
    SENDER = "primary",
    RECEIVER = "secondary",
}
type MessageBubbleType = {
    message: string;
    time: string;
    variant: MessageVariant;
};
const MessageBubble = ({ message, time, variant }: MessageBubbleType) => {
    return (
        <section
            className={`w-fit mb-3 ${
                variant === MessageVariant.SENDER
                    ? "ms-0 me-auto"
                    : "ms-auto me-0"
            }`}
        >
            <div
                className={`p-2 px-4 rounded ${
                    variant === MessageVariant.SENDER ? "bg-primary" : "bg-card"
                }`}
            >
                <p>{message}</p>
            </div>
            <p
                className={`text-xs opacity-60 ${
                    variant === MessageVariant.SENDER
                        ? "ms-3 me-auto text-left"
                        : "ms-auto me-3 text-right"
                }`}
            >
                {time}
            </p>
        </section>
    );
};

export default MessageBubble;
