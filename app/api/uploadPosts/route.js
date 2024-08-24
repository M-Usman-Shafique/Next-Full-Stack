import mongoose from 'mongoose';
import { connectionStr } from "../products/route";
import { NextResponse } from "next/server";
import { Post } from "@/lib/model/post";

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;
  await mongoose.connect(connectionStr);
  isConnected = true;
}

export async function POST(req) {
  await connectToDatabase();
  const data = await req.formData();
  const caption = data.get("caption");
  const files = data.getAll("files");

  if (files.length === 0) {
    return NextResponse.json({ message: "No files uploaded", success: false });
  }

  const images = await Promise.all(files.map(async (file) => {
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    return {
      name: file.name,
      data: buffer,
      contentType: file.type,
    };
  }));

  const newPost = new Post({
    caption: caption,
    images: images,
  });

  await newPost.save();

  return NextResponse.json({
    result: "successfully uploaded to MongoDB.",
    success: true,
  });
}

export async function GET() {
  await connectToDatabase();
  const posts = await Post.find();

  // Convert image data to base64
  const postsWithBase64 = posts.map(post => ({
    ...post.toObject(),
    images: post.images.map(image => ({
      ...image,
      data: `data:${image.contentType};base64,${image.data.toString('base64')}`
    }))
  }));

  return NextResponse.json({ success: true, posts: postsWithBase64 });
}
