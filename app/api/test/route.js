import { Test } from "@/lib/model/test";
import mongoose from "mongoose"
import { NextResponse } from "next/server";


export const connectionKey = process.env.MONGODB.URI;
export async function GET() {
    await mongoose.connect(connectionKey)
    let data = await Test.find();
    console.log(data)

    return NextResponse.json({result: data, success: true})
}