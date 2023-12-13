import User from "../modals/user.modal";

export async function getUser(username: string) {
    return await User.findOne({ username });
}
