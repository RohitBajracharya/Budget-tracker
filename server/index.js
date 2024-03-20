import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import route from "./routes/shiftRoute.js";

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })
}).catch(error => console.log(error));

app.use("/api/shift", route)