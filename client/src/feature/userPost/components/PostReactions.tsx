"use client";

import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React, { SyntheticEvent, useState } from "react";
import ReactionButton from "./ReactionButton";
import { BsHeart, BsHeartFill, BsChat, BsShare } from "react-icons/bs";
import { UserType } from "@/types/post.types";
import { Textarea } from "@/components/ui/textarea";

type CommentType = {
    user: string;
    content: string;
};

type Props = { postId: string };
const PostReactions = ({ postId }: Props) => {
    const [likeCount, setLikeCount] = useState<number>(0);
    const [commentCount, setCommentCount] = useState<number>(0);

    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<CommentType[]>([
        {
            user: "John",
            content: "This is a good post",
        },
    ]);
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked((il) => !il);
    };

    const handleComment = (e: SyntheticEvent) => {
        e.preventDefault();
        const newComment: CommentType = {
            user: "Raazi",
            content: comment,
        };

        setComments([...comments, newComment]);
        setComment("");
    };

    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <section className="flex">
                <ReactionButton onClick={handleLikeClick}>
                    {isLiked ? (
                        <>
                            <BsHeartFill /> {likeCount} Likes
                        </>
                    ) : (
                        <>
                            <BsHeart /> {likeCount} Likes
                        </>
                    )}
                </ReactionButton>
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger asChild>
                        <ReactionButton>
                            <BsChat /> {commentCount} Comment
                        </ReactionButton>
                    </CollapsibleTrigger>
                </Collapsible>
                <ReactionButton>
                    <BsShare /> Share
                </ReactionButton>
            </section>

            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleContent className="flex flex-col pt-4 gap-2">
                    {comments.map((comment) => (
                        <section className="w-full border rounded p-4">
                            <p>{comment.user}</p>
                            <p>{comment.content}</p>
                        </section>
                    ))}
                    <form onSubmit={handleComment}>
                        <Textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment."
                        />
                        <div className="flex justify-between pt-2">
                            <Button variant="outline" size="sm">
                                Cancel
                            </Button>
                            <Button size="sm"> Submit</Button>
                        </div>
                    </form>
                </CollapsibleContent>
            </Collapsible>
        </>
    );
};

export default PostReactions;
