import mongoose from "mongoose";

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

export default mongoose.model("shifts", shiftSchema)