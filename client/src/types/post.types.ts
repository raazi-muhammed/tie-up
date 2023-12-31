export interface UserType {
    _id: string;
    email?: string;
    username: string;
    avatar?: string;
    fullName?: string;
    bio?: string;
    dateOfBirth?: string;
    password?: string;
    followersCount: number;
}

export interface PostType {
    _id: string;
    userRef: UserType;
    heading: string;
    description: string;
    images: string[];
    createdAt: string;
    reaction: {
        likeCount: number;
        commentCount: number;
    };
}

export interface FollowersType {
    follower: UserType;
    followed: UserType;
}

export interface CommentType {
    _id: string;
    reacted: UserType;
    content: string;
    createdAt: string;
}
