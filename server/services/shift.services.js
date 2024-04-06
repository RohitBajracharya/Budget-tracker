import Shift from "../model/shift.model.js";

const getAllShiftsByUserId = async (userId) => {
    try {
        return await Shift.find({ user: userId });
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const findExistingShift = async (shiftName, userId) => {
    try {
        return await Shift.findOne({ $and: [{ shiftName }, { userId }] })
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const saveShift = async (shiftName, budgetYear, budgetSpent, budgetAvailable, userId) => {
    const newShift = new Shift({
        budgetYear: budgetYear,
        shiftName: shiftName,
        budgetSpent: budgetSpent,
        budgetAvailable: budgetAvailable,
        user: userId
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
    deleteShiftById, findExistingShift, findShiftById, getAllShiftsByUserId, saveShift, updateShiftById
};

