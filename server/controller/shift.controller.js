import { deleteShiftById, findExistingShift, findShiftById, getAllShiftsByUserId, saveShift, updateShiftById } from "../services/shift.services.js";

//get all shift
const getShift = async (req, res) => {
    try {
        const shifts = await getAllShiftsByUserId(req.user._id);
        console.log("shifts", shifts)
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
        console.log("budgetYear", budgetYear)
        const userId = req.user._id
        const shiftExist = await findExistingShift(shiftName, userId);
        if (shiftExist) {
            return res.status(409).json({ Message: "Shift already Exist" })
        }
        console.log("1")
        const savedShift = await saveShift(shiftName, budgetYear, budgetSpent, budgetAvailable, userId);
        console.log("Saved")
        res.status(201).json({ Success: true, message: "Shift added successfully", savedShift })
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Error." })
    }
}

//to update shift
const updateShift = async (req, res) => {
    try {
        const id = req.params.id
        const shiftExist = await findShiftById(id);
        if (!shiftExist) {
            return res.status(404).json({ Message: "Shift not found" })
        }
        const updateShift = await updateShiftById(id, req);
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
        if (!shiftExist) {
            return res.status(404).json({ Message: "Shift not found" })
        }
        const deletedShift = await deleteShiftById(id);
        res.status(200).json({ Success: true, Message: "Shift deleted successfully", deletedShift })
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Error." })
    }
}


export {
    addShift, deleteShift, getShift, updateShift
};

