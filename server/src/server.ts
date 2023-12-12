import app from "./app";
import "./database/connectDb";

app.listen(process.env.PORT, () => {
    console.log(`Server Started\t: http://localhost:${process.env.PORT}`);
});
