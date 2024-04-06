import Shift from "../model/shift.model.js";

const getAllShiftsByUserId = async (userId) => {
    try {
        return await Shift.find({ user: userId });
    } catch (error) {
        console.log("Error in service: " + error)
        throw error;
    }
}

const findExistingShift = async (shiftName, user) => {
    try {
        console.log("1");
        const existingShift = await Shift.findOne({ $and: [{ shiftName }, { user }] });
        console.log("2");
        if (!existingShift) {
            console.log("No existing shift found.");
            return null; // Return null if no document is found
        }
        return existingShift
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

const updateShiftById = async (id, budgetYear, shiftName, budgetSpent, budgetAvailable, userId) => {
    try {
        const updateShift = {

            budgetYear: budgetYear,
            shiftName: shiftName,
            budgetSpent: budgetSpent,
            budgetAvailable: budgetAvailable,
            user: userId

        };
        return await Shift.findByIdAndUpdate(id, updateShift, { new: true })
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

