// app/api/uploadMongo/route.js
import mongoose from "mongoose";
import { connectionStr } from "../products/route";
import { NextResponse } from "next/server";
import { Image } from "@/lib/model/image";

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;
  await mongoose.connect(connectionStr);
  isConnected = true;
}

export async function GET() {
  await connectToDatabase();
  const images = await Image.find().select("name data contentType");

  return NextResponse.json({ success: true, images });
}

export async function POST(req) {
  await connectToDatabase();
  const data = await req.formData();
  const files = data.getAll("files");

  if (files.length === 0) {
    return NextResponse.json({ message: "No files uploaded", success: false });
  }

  const promises = files.map(async (file) => {
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    const newImage = new Image({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });

    return newImage.save();
  });

  await Promise.all(promises);

  return NextResponse.json({
    result: "successfully uploaded to MongoDB.",
    success: true,
  });
}
