import Shift from "../model/shiftModel.js";

//get all shift
export const getShift = async (req, res) => {
    try {
        const shifts = await Shift.find();
        if (shifts.length === 0) {
            return res.json({ Message: "No Shift Avaiable." })
        }
        res.json(shifts)
    } catch (error) {
        return res.json({ Message: "Internal Server Error." })

    }
}

// to add new shift
export const addShift = async (req, res) => {
    try {
        const shiftData = new Shift(req.body)
        const { name } = shiftData;
        const shiftExist = await Shift.findOne({ name })
        if (shiftExist) {
            return res.json({ Message: "Shift already Exist" })
        }
        const savedShift = await shiftData.save();
        res.json(savedShift)
    } catch (error) {
        return res.json({ Message: "Internal Server Error." })
    }
}

//to update shift
export const updateShift = async (req, res) => {
    try {
        const id = req.params.id
        const shiftExist = await Shift.findOne({ _id: id })
        if (!shiftExist) {
            return res.json({ Message: "Shift not found" })
        }
        const updateShift = await Shift.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updateShift)
    } catch (error) {
        return res.json({ Message: "Internal Server Error." })

    }
}

// to delete shift
export const deleteShift = async (req, res) => {
    try {
        const id = req.params.id
        const shiftExist = await Shift.findOne({ _id: id })
        if (!shiftExist) {
            return res.json({ Message: "Shift not found" })
        }
        await Shift.findByIdAndDelete(id, req.body, { new: true });
        res.json({ Message: "Shift deleted successfully" })
    } catch (error) {
        return res.json({ Message: "Internal Server Error." })
    }
}