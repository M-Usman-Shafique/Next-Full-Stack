import { Product } from "@/lib/model/product"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const connectionStr = process.env.MONGODB_CONNECT;

export async function GET() {
    await mongoose.connect(connectionStr)
    const data = await Product.find();
    console.log(data)
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
    let product = new Product(payload)

    const data = await product.save();
    return NextResponse.json({result: data, success: true})
}