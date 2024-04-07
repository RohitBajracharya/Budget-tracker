import Budget from "../model/budget.model.js"

const getAllBudgetByUserId = async (userId) => {
    try {
        return await Budget.findOne({ user: userId })
    } catch (error) {
        console.log(error)
        throw error
    }
}

export {
    getAllBudgetByUserId
}

