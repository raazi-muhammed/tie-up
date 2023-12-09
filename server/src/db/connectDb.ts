import mongoose from "mongoose";
const URL: string = process.env.DATABASE_URL;

if (URL) {
    mongoose
        .connect(URL)
        .then(() => console.log("Database status\t: Connected"));
} else console.log("Database status\t: Cannot Connect");
