import { data } from "@/utils/db";
import { NextResponse } from "next/server";

let users = data;

export function GET() {  // Test at http://localhost:3000/api
  return NextResponse.json(users);
}

export async function POST(req) {

  // console.log(req); // too much data
  let payload = await req.json();
  console.log(payload) // { name: 'Mehdi', age: 30, email: 'mehdi@test.com' }
  const {name, age, email} = payload;
  console.log(name, age, email); // Mehdi 32 mehdi@test.com

  if (name && age && email) {
    return NextResponse.json({ result: "post successful", success: true });
  } else {
    return NextResponse.json({ result: "some data is missing", success: false });
  }
}

export async function DELETE(req) {  // Testing: { "name": "John Doe"}
  try {
    const { name } = await req.json();

    const index = users.findIndex(user => user.name === name);

    if (index === -1) {
      return NextResponse.json({ error: "User not found" });
    }

    users = users.filter(user => user.name !== name);

    return NextResponse.json({ message: "User deleted successfully!", data: users });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req) {  // Testing: {"name": "John Doe", "newCourse": "Algorithms"}
  try {
    const { name, newCourse } = await req.json();

    const index = users.findIndex(user => user.name === name);

    if (index === -1) {
      return NextResponse.json({ error: "User not found" });
    }

    users[index] = { ...users[index], course: newCourse };

    return NextResponse.json({ message: "User course updated successfully", data: users });
  } catch (error) {
    return NextResponse.json(error);
  }
}
