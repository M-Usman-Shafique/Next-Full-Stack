import mongoose from 'mongoose'

const testSchema = mongoose.Schema({
    name: String,
    price: String,
    color: String,
})

export const Test = mongoose.models.tests || mongoose.model("tests", testSchema)