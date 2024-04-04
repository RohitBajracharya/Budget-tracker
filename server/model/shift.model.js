import { Schema, model } from "mongoose";

const shiftSchema = new Schema({
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

export default model("Shift", shiftSchema)