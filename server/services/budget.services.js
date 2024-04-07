import Budget from "../model/budget.model.js"
import Shift from "../model/shift.model.js"

const getAllBudgetByUserId = async (userId) => {
    try {
        return await Budget.findOne({ user: userId })
    } catch (error) {
        console.log(error)
        throw error
    }
}

const addBudgetByUserId = async (userId) => {
    try {
        const newBudget = new Budget({
            totalBudgetSpent: 0,
            totalBudgetAvailable: 0,
            totalBudgetRemaining: 0,
            user: userId
        })
        return await newBudget.save();
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }

}
const getBudgetSpentAndBugdgetAvailable = async (userId) => {
    console.log("userId", userId);
    try {
        return await Shift.find({ user: userId }, { budgetSpent: 1, budgetAvailable: 1 });
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const updateTotalBudget = async (totalBudgetSpent, totalBudgetAvailable, totalBudgetRemaining, user) => {
    try {
        const existingBudget = await Budget.findOne({ user: user });

        if (!existingBudget) {
            throw new Error("Budget document not found for user: " + user);
        }

        existingBudget.totalBudgetSpent = totalBudgetSpent;
        existingBudget.totalBudgetAvailable = totalBudgetAvailable;
        existingBudget.totalBudgetRemaining = totalBudgetRemaining;

        return await existingBudget.save();

    } catch (error) {
        console.log("Error in service: ", error);
        throw error;
    }
}


export {
    addBudgetByUserId, getAllBudgetByUserId, getBudgetSpentAndBugdgetAvailable, updateTotalBudget
}

