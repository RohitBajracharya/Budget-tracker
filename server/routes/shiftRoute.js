import express from "express";
import { addShift, deleteShift, getShift, updateShift } from "../controller/shiftController.js";

const route = express.Router();
route.get("/", getShift)
route.post("/add-shift", addShift)
route.put("/update-shift/:id", updateShift)
route.delete("/delete-shift/:id", deleteShift)

export default route;