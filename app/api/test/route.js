import { Test } from "@/lib/model/test";
import { NextResponse } from "next/server";

export const connectionKey = process.env.connectionKey;

export async function GET() {
    await mongoose.connect(connectionKey)
    const data = await Test.find();

    return NextResponse.json({result: data, success: true})
}