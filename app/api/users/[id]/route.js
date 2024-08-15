// app/api/users/[id]/route.js
import { NextResponse } from "next/server";
const { data } = require("@/utils/db");

const users = data;

export function GET(_, res) {
  console.log("Crude ID:", res); // output in terminal: { params: { id: '36' } } dynamic.
  console.log("Refined but String ID:", res.params.id); // output: 23

  const userId = parseInt(res.params.id); // for strict comparison (===) in filter method.
  console.log("Integer ID:", userId);

  const user = users.filter((item) => item.id === userId);

  return user.length === 0
    ? NextResponse.json("user not found")
    : NextResponse.json(user[0]); // since user is an array of single object.
}
