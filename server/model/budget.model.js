import { Schema, model } from "mongoose";

const budgetSchema = new Schema({
    totalBudgetSpent: {
        type: Number,
        default: 0
    },
    totalBudgetAvailable: {
        type: Number,
        default: 0
    },
    totalBudgetRemaining: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export default model("Budget", budgetSchema)