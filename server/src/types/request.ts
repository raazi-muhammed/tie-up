import { Request } from "express";
import { UserType } from "../modals/user.modal";

export interface UserRequest extends Request {
    user?: UserType;
}
