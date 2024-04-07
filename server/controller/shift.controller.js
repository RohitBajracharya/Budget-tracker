import { getBudgetSpentAndBugdgetAvailable, updateTotalBudget } from "../services/budget.services.js";
import { deleteShiftById, findExistingShift, findShiftById, getAllShiftsByUserId, saveShift, updateShiftById } from "../services/shift.services.js";

//get all shift
const getShift = async (req, res) => {
    try {
        const shifts = await getAllShiftsByUserId(req.user._id);
        if (shifts.length === 0) {
            return res.status(404).json({ Message: "No Shift Avaiable." })
        }
        res.status(200).json({ Success: true, Message: "All Shift retrieved", shifts })
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Error." })

    }
}

// to add new shift
const addShift = async (req, res) => {
    try {
        const { budgetYear, shiftName, budgetSpent, budgetAvailable } = req.body
        const userId = req.user._id
        const user = req.user
        const shiftExist = await findExistingShift(shiftName, user);

        if (shiftExist) {
            return res.status(409).json({ Message: "Shift already Exist" })
        }
        const savedShift = await saveShift(shiftName, budgetYear, budgetSpent, budgetAvailable, userId);

        const budget = await getBudgetSpentAndBugdgetAvailable(userId)
        let totalBudgetSpent = 0;
        let totalBudgetAvailable = 0;
        let totalBudgetRemaining = 0;

        budget.forEach((item) => {
            totalBudgetSpent += item.budgetSpent;
            totalBudgetAvailable += item.budgetAvailable;
        });
        totalBudgetRemaining = totalBudgetAvailable - totalBudgetSpent;
        await updateTotalBudget(totalBudgetSpent, totalBudgetAvailable, totalBudgetRemaining, userId)
        res.status(201).json({ Success: true, message: "Shift added successfully", savedShift })
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Error." })
    }
}

//to update shift
const updateShift = async (req, res) => {
    try {
        console.log("body: ", req.body)
        const { budgetYear, shiftName, budgetSpent, budgetAvailable } = req.body

        const userId = req.user._id
        const shiftId = req.params.id
        console.log("userId", userId)
        console.log("shiftId", shiftId)
        const shiftExist = await findShiftById(shiftId);
        if (!shiftExist) {
            return res.status(404).json({ Message: "Shift not found" })
        }

        const updateShift = await updateShiftById(shiftId, budgetYear, shiftName, budgetSpent, budgetAvailable, userId);
        const budget = await getBudgetSpentAndBugdgetAvailable(userId)
        let totalBudgetSpent = 0;
        let totalBudgetAvailable = 0;
        let totalBudgetRemaining = 0;

        budget.forEach((item) => {
            totalBudgetSpent += item.budgetSpent;
            totalBudgetAvailable += item.budgetAvailable;
        });
        totalBudgetRemaining = totalBudgetAvailable - totalBudgetSpent;
        await updateTotalBudget(totalBudgetSpent, totalBudgetAvailable, totalBudgetRemaining, userId)
        res.status(200).json({ Success: true, Message: "Shift updated Successfully", updateShift })
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Error." })

    }
}

// to delete shift
const deleteShift = async (req, res) => {

    try {

        const id = req.params.id
        const shiftExist = await findShiftById(id);
        console.log("shiftExit", shiftExist);
        const userId = shiftExist.user
        if (!shiftExist) {
            return res.status(404).json({ Message: "Shift not found" })
        }
        const deletedShift = await deleteShiftById(id);
        console.log("11");
        const budget = await getBudgetSpentAndBugdgetAvailable(userId)
        console.log("budget:", budget)
        console.log("id", userId);
        let totalBudgetSpent = 0;
        let totalBudgetAvailable = 0;
        let totalBudgetRemaining = 0;

        budget.forEach((item) => {
            totalBudgetSpent += item.budgetSpent;
            totalBudgetAvailable += item.budgetAvailable;
        });
        totalBudgetRemaining = totalBudgetAvailable - totalBudgetSpent;
        console.log('new', await updateTotalBudget(totalBudgetSpent, totalBudgetAvailable, totalBudgetRemaining, userId));
        await updateTotalBudget(totalBudgetSpent, totalBudgetAvailable, totalBudgetRemaining, userId)
        res.status(200).json({ Success: true, Message: "Shift deleted successfully", deletedShift })
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Error." })
    }
}


export {
    addShift, deleteShift, getShift, updateShift
};

