import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });
import "./db/connectDb";

const app = express();

app.use(express.static("public"));

app.post("/api/v1/create-account", (req, res) => {
    console.log(req.body);
});

app.listen(process.env.PORT, () => {
    console.log("Server Started\t: http://localhost:3000");
});
