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
import { PostType, UserType } from "@/types/post.types";
import { Textarea } from "@/components/ui/textarea";
import { postAPI } from "@/lib/API";
import toast from "react-hot-toast";

type CommentType = {
    user: string;
    content: string;
};

enum LikeStatus {
    LOADING,
    LIKED,
    NOT_LIKED,
}

type Props = { post: PostType };
const PostReactions = ({ post }: Props) => {
    const [likeCount, setLikeCount] = useState<number>(
        post?.reaction?.likeCount || 0
    );
    const [commentCount, setCommentCount] = useState<number>(
        post?.reaction?.commentCount || 0
    );

    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<CommentType[]>([
        {
            user: "John",
            content: "This is a good post",
        },
    ]);

    const [likeStatus, setLikeStatus] = useState<LikeStatus>(
        LikeStatus.NOT_LIKED
    );

    const handleLikeClick = async () => {
        setLikeStatus(LikeStatus.LOADING);
        let response;
        if (likeStatus === LikeStatus.LIKED) {
            setLikeCount(likeCount - 1);
            response = await postAPI(
                "/post/dislike-post",
                { postId: post._id },
                { showAlerts: true }
            );
        } else {
            setLikeCount(likeCount + 1);
            response = await postAPI(
                "/post/like-post",
                { postId: post._id },
                { showAlerts: true }
            );
        }

        if (response.success) {
            toast.success(response?.message || "Successful");
            setLikeStatus(
                likeStatus === LikeStatus.LIKED
                    ? LikeStatus.NOT_LIKED
                    : LikeStatus.LIKED
            );
        } else {
            setLikeStatus(likeStatus);
            setLikeCount(likeCount);
            if (response.message === "Already liked") {
                setLikeStatus(LikeStatus.LIKED);
            }
        }
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
                <ReactionButton
                    disabled={likeStatus === LikeStatus.LOADING}
                    onClick={handleLikeClick}
                >
                    {likeStatus === LikeStatus.LIKED ? (
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
