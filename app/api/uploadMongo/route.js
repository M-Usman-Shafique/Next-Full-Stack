// app/api/uploadMongo/route.js
import mongoose from "mongoose";
import { connectionStr } from "../products/route";
import { NextResponse } from "next/server";
import { Image } from "@/lib/model/image";

export async function GET() {
  await mongoose.connect(connectionStr);
  const images = await Image.find().select('name data contentType')

  return NextResponse.json({ success: true, images });
  
}

export async function POST(req) {
  await mongoose.connect(connectionStr);
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);

  const newImage = Image({
    name: file.name,
    data: buffer,
    contentType: file.type,
  });
  await newImage.save();
  return NextResponse.json({
    result: "successfully uploaded to MongoDB.",
    success: true,
  });
}