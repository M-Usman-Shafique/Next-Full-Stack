import { data } from "@/utils/db";
import { NextResponse } from "next/server";

let users = data;

export function GET(req) {  // Test at http://localhost:3000/api
  return NextResponse.json(users);
}

export async function POST(req) {  // Test via Postman: Body>raw.JSON: { "name": "John Doe",  "age": 28,  "course": "Python"}
  try {
    const { name, age, course } = await req.json();

    const newUser = { name, age, course };

    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json(error);
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
