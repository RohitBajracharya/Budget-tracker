import { Router } from "express";
import { addShift, deleteShift, getShift, updateShift } from "../controller/shift.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const shiftRouter = Router();
shiftRouter.route("/").get(verifyJWT, getShift)
shiftRouter.route("/add-shift").post(verifyJWT, addShift)
shiftRouter.route("/update-shift/:id").put(verifyJWT, updateShift)
shiftRouter.route("/delete-shift/:id").delete(verifyJWT, deleteShift)


export default shiftRouter;