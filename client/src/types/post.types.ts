export interface UserType {
    _id?: string;
    email?: string;
    username: string;
    avatar?: string;
    fullName?: string;
    bio?: string;
    dateOfBirth?: string;
    password?: string;
}

export interface PostType {
    userRef: UserType;
    heading: string;
    description: string;
    images: string[];
    createdAt: string;
}
