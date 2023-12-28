import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CommentType } from "@/types/post.types";
import { getAvatarFallBack, getFormattedDate } from "@/utils/formatting";
import React from "react";

type Props = { comment: CommentType };

const CommentCard = ({ comment }: Props) => {
    return (
        <section className="w-full border rounded p-4">
            <section className="flex justify-between mb-2">
                <div className="flex align-middle gap-2">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={comment.reacted.avatar} />
                        <AvatarFallback>
                            {getAvatarFallBack(comment.reacted.username)}
                        </AvatarFallback>
                    </Avatar>
                    <p className="text-xs opacity-50 mt-auto mb-1">
                        {comment.reacted.username}
                    </p>
                </div>
                <p className="text-xs opacity-50">
                    {getFormattedDate(comment.createdAt)}
                </p>
            </section>
            <p>{comment.content}</p>
        </section>
    );
};

export default CommentCard;
