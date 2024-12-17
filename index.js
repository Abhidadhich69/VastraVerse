import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./utils/connectDB.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB()
.then(() => {
    app.listen(port, () => console.log(`App is listening on port ${port}`));
})
.catch((error) => console.log(error))