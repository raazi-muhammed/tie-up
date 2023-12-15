import User, { UserObjectType, UserType } from "../modals/user.modal";

export async function getUserByUsername(username: string) {
    return await User.findOne({ username });
}

export async function setUpUser(userId: string, data: UserObjectType) {
    return await User.findOneAndUpdate(
        { _id: userId },
        {
            fullName: data.fullName,
            username: data.username,
            bio: data.bio,
            dateOfBirth: data.dateOfBirth,
            avatar: data.avatar,
        }
    );
}
