export interface UserType {
    email: string;
    username: string;
    password: string;
}

export interface PostType {
    userRef: UserType;
    heading: string;
    description: string;
    images: string[];
    createdAt: string;
}
