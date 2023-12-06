import mongoose from "mongoose";
const URL: string = process.env.DATABASE_URL || "url";

mongoose.connect(URL).then(() => console.log("Database status\t: Connected"));
