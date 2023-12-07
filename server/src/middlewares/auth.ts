import { Request, Response, NextFunction } from "express";

export const isUser = (req: Request, res: Response, next: NextFunction) => {
    next();
};
