import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });
import userRoutes from "./routes/user.routes";
import postRoutes from "./routes/post.routes";
import errorHandler from "./middlewares/errorHandler";

import cors from "cors";
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/api/v1/test", (req, res) => {
    res.status(200).json({
        success: true,
        data: { data: "data" },
    });
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", postRoutes);

app.use(errorHandler);

export default app;
