import mongoose from 'mongoose'

const testSchema = mongoose.Schema({
name: String,
price: Decimal128,
color: String,
})

export const Test = mongoose.models.tests || mongoose.model("tests", testSchema)