const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    budgetSpent: {
        type: Number,
        required: true,
    },
    budgetAvailable: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Shift", shiftSchema)