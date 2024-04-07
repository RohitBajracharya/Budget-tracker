import { getAllBudgetByUserId } from "../services/budget.services.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const getAllBudget = async (req, res) => {
    try {
        const userId = req.user._id
        const budgets = await getAllBudgetByUserId(userId)
        if (!budgets) {
            return res.status(400).json(new ApiError(400, "Budget is empty."))
        }
        return res.status(200).json(new ApiResponse(200, budgets, "All budgets retrived"))
    } catch (error) {
        return res.status(500)
            .json(new ApiError(500, "Failed to get Budget detail"))
    }
}

export {
    getAllBudget
}

