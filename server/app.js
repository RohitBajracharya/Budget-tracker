import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser())

import shiftRouter from "./routes/shift.routes.js";
import userRouter from "./routes/user.routes.js";

app.use("/api/shift", shiftRouter)
app.use("/api/users", userRouter)


export { app };

