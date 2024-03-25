const Shift = require("../model/shiftModel.js")
const { getAllShifts, findExistingShift, saveShift, findShiftById, updateShiftById, deleteShiftById } = require("../services/shiftService.js")

//get all shift
const getShift = async (req, res) => {
    try {
        const shifts = await getAllShifts();
        if (shifts.length === 0) {
            return res.status(404).json({ Message: "No Shift Avaiable." })
        }
        res.status(200).json(shifts)
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Error." })

    }
}

// to add new shift
const addShift = async (req, res) => {
    try {
        const { name, budgetSpent, budgetAvailable } = new Shift(req.body)
        const shiftExist = await findExistingShift(name);
        if (shiftExist) {
            return res.status(409).json({ Message: "Shift already Exist" })
        }
        const savedShift = await saveShift(name, budgetSpent, budgetAvailable);
        res.status(201).json(savedShift)
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
        res.status(204).json(updateShift)
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
        await deleteShiftById(id, req.body);
        res.status(204).json({ Message: "Shift deleted successfully" })
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Error." })
    }
}

module.exports = {
    getShift,
    addShift,
    updateShift,
    deleteShift
}