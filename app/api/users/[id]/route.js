// app/api/users/[id]/route.js
import { data } from "@/utils/db";
import { NextResponse } from "next/server";

let users = data;

export function GET(req, res) {
  console.log("Crude res. ID:", res); // output: { params: { id: '36' } } dynamic.
  console.log("Refined but String ID:", res.params.id); // output: 23
  const id = parseInt(res.params.id);
  console.log("Integer ID:", id);

  const userData = users.filter((user) => user.id === id);
  console.log(userData); // output: Dynamic user's data.
  return NextResponse.json(userData.length === 0 ? "No user found" : userData[0]);  // passing object by unpacking array.
}
