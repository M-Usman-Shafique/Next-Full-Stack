// app/api/route.js
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ name: "Ali", age: 30, city: "Egypt" });
}

export function POST() {
  return NextResponse.json("post successfull");
}

export function PUT() {
  return NextResponse.json("successfully upadated");
}

export function DELETE() {
  return NextResponse.json("successfully deleted");
}
