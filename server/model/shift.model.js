import { Schema, model } from "mongoose";

const shiftSchema = new Schema({
    shiftName: {
        type: String,
        required: true,
        unique: true,
    },
    budgetYear: {
        type: Number,
        required: true,
    },
    budgetSpent: {
        type: Number,
        required: true,
    },
    budgetAvailable: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export default model("Shift", shiftSchema)