import { Router } from "express";
import { getAllBudget } from "../controller/budget.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const budgetRouter = Router();
budgetRouter.route("/").get(verifyJWT, getAllBudget)

export default budgetRouter