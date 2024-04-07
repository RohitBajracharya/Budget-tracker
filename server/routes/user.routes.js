import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { loginUser, logoutUser, registerUser } from "../controller/user.controller.js";

const userRouter = Router()

userRouter.route("/signup").post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/logout").post(verifyJWT, logoutUser)

export default userRouter