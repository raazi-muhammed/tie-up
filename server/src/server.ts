import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });
import "./db/connectDb";
import userRoutes from "./routes/user.routes";
import errorHandler from "./middlewares/errorHandler";

import cors from "cors";
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true, //access-control-allow-credentials:true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/v1/user", userRoutes);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Server Started\t: http://localhost:${process.env.PORT}`);
});
