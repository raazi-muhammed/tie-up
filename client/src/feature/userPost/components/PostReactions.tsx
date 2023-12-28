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
import { CommentType, PostType, UserType } from "@/types/post.types";
import { Textarea } from "@/components/ui/textarea";
import { getAPI, postAPI } from "@/lib/API";
import CommentCard from "./CommentCard";
import Spinner from "@/components/custom/Spinner";

enum LikeStatus {
    LOADING,
    LIKED,
    NOT_LIKED,
}
enum CommentStatus {
    NOT_OPENED = "NOT_OPENED",
    LOADING = "LOADING",
    SUBMITTING = "SUBMITTING",
    LOADED = "LOADED",
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
    const [isOpen, setIsOpen] = React.useState(false);
    const [comments, setComments] = useState<CommentType[]>([]);

    const [commentStatus, setCommentStatus] = useState<CommentStatus>(
        CommentStatus.NOT_OPENED
    );
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

    async function getComments() {
        setCommentStatus(CommentStatus.LOADING);
        const response = await getAPI("/post/get-comment-from-post", {
            postId: post._id,
        });
        console.log(response);
        setComments((response?.comments as CommentType[]) || []);
        setCommentCount((cc) => cc + 1);
        setCommentStatus(CommentStatus.LOADED);
    }

    const handleComment = async (e: SyntheticEvent) => {
        e.preventDefault();
        setCommentStatus(CommentStatus.SUBMITTING);

        const response = await postAPI(
            "/post/comment-on-post",
            { postId: post._id, content: comment },
            { showAlerts: true }
        );
        console.log(response);

        getComments();
        setComment("");
    };

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
                        <ReactionButton onClick={() => getComments()}>
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
                        <CommentCard key={comment._id} comment={comment} />
                    ))}
                    <Spinner
                        isLoading={commentStatus === CommentStatus.LOADING}
                    />
                    <form onSubmit={handleComment}>
                        <Textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment."
                        />
                        <div className="flex justify-between pt-2">
                            <Button
                                disabled={
                                    commentStatus === CommentStatus.SUBMITTING
                                }
                                variant="outline"
                                size="sm"
                            >
                                Cancel
                            </Button>
                            <Button
                                disabled={
                                    commentStatus === CommentStatus.SUBMITTING
                                }
                                size="sm"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </CollapsibleContent>
            </Collapsible>
        </>
    );
};

export default PostReactions;
