import { Test } from "@/lib/model/test";
import { NextResponse } from "next/server";

export const connectionKey = process.env.connectionKey;

export async function GET() {
    await mongoose.connect(connectionKey)
    const data = await Test.find();

    return NextResponse.json({result: data, success: true})
}

export async function POST(req) {
    const payload = await req.json();

    await mongoose.connection(connectionKey)

    const test = new Test(payload)
    const data = await test.save();

    return NextResponse.json({result: data, success: true})
}