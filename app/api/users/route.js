import { data } from "@/utils/db";
import { NextResponse } from "next/server";

let users = data;

export function GET() {
  // Test at http://localhost:3000/api
  return NextResponse.json(users);
}

export async function POST(req) {
  // console.log(req); // too much data
  let payload = await req.json();
  // console.log(payload); // postman>Body>raw>JSON: { name: 'Mehdi', age: 30, email: 'mehdi@test.com' }
  const { name, age, email } = payload;
  // console.log(name, age, email); // Mehdi 32 mehdi@test.com

  if (name && age && email) {
    users.push(payload);
    return NextResponse.json({
      result: "post successful",
      success: true,
      data: users,
    });
  } else {
    return NextResponse.json({
      message: "some data is missing",
      success: false,
    });
  }
}

export async function DELETE(req) {
  try {
    const { name } = await req.json();

    const index = users.findIndex((user) => user.name === name);

    if (index === -1) {
      return NextResponse.json({ error: "User not found" });
    }

    users = users.filter((user) => user.name !== name);

    return NextResponse.json({
      message: "User deleted successfully!",
      data: users,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(req) {

  let payload = await req.json();
  // console.log(payload)

    const { id, newName } = payload;
    // console.log(id, newName)

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
      return NextResponse.json({ message: "User not found" });
    } else {
      users[index] = { ...users[index], name: newName }  // {"id" : 4, "newName" : "Mehdi"} in postman
      return NextResponse.json({
        message: "Username updated successfully",
        data: users,
      });
    }
}
