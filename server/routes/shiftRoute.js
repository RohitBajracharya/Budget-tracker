const express = require("express");
const { addShift, deleteShift, getShift, updateShift } = require("../controller/shiftController.js");

const route = express.Router();
route.get("/", getShift)
route.post("/add-shift", addShift)
route.put("/update-shift/:id", updateShift)
route.delete("/delete-shift/:id", deleteShift)

module.exports = route;