export interface UserType {
    _id: string;
    email?: string;
    username: string;
    avatar?: string;
    fullName?: string;
    bio?: string;
    dateOfBirth?: string;
    password?: string;
    followersCount?: number;
}

export interface PostType {
    _id: string;
    userRef: UserType;
    heading: string;
    description: string;
    images: string[];
    createdAt: string;
}

export interface FollowersType {
    follower: UserType;
    followed: UserType;
}
