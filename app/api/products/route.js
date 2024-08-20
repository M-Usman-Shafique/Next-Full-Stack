import { Product } from "@/lib/model/product"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const connectionStr = process.env.MONGODB_URI;

export async function GET() {
    await mongoose.connect(connectionStr)
    const data = await Product.find();
    // find: retrieves multiple documents that match a specified query.
    // console.log(data)
    return NextResponse.json({result: data, success: true})
}

// ============== Sending Data without Postman>Body>raw>JSON ============= //
// export async function POST() {
//     await mongoose.connect(connectionStr)
//     let product = new Product({
//         name: "Apple i14",
//         price: "100000",
//         company:"Apple",
//         color:"Golden",
//         category:"Mobile",
//     })

//     const data = await product.save();
//     return NextResponse.json({result: data, success: true})
// }

// =========== Sending Data with Postman>Body>raw>JSON ========== //
export async function POST(req) {
    const payload = await req.json();

    await mongoose.connect(connectionStr)

    // creating new document instance of the Product model: 
    let product = new Product(payload)

    // Saving thenew product document to the MongoDB database:
    const data = await product.save();

    return NextResponse.json({result: data, success: true})
}