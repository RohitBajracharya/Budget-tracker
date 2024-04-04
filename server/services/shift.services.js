import Shift from "../model/shift.model.js";

const getAllShifts = async () => {
    try {
        return await Shift.find();
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const findExistingShift = async (name) => {
    try {
        return await Shift.findOne({ name })
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const saveShift = async (name, budgetSpent, budgetAvailable) => {
    const newShift = new Shift({
        name: name,
        budgetSpent: budgetSpent,
        budgetAvailable: budgetAvailable,
    });
    try {
        return await newShift.save()
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const findShiftById = async (id) => {
    try {
        return await Shift.findOne({ _id: id })
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const updateShiftById = async (id, req) => {
    try {
        return await Shift.findByIdAndUpdate(id, req.body, { new: true })
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const deleteShiftById = async (id) => {
    try {
        return await Shift.findByIdAndDelete(id, { new: true })
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

export {
    deleteShiftById, findExistingShift, findShiftById, getAllShifts, saveShift, updateShiftById
};

