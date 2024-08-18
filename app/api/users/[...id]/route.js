// app/api/users/[id]/route.js
import { NextResponse } from "next/server";
const { data } = require("@/utils/db");

const users = data;
// GET for dynamic routes [id]
// export function GET(_, res) {
//   // console.log("Crude ID:", res); // output in terminal: { params: { id: '36' } } dynamic.
//   // console.log("Refined but String ID:", res.params.id); // output: 23 (str)
//   const userId = parseInt(res.params.id); // for strict comparison (===) in filter method.
//   // console.log("Integer ID:", userId); // output: 23 (int)

//   const user = users.filter((item) => item.id === userId);

//   return user.length === 0
//     ? NextResponse.json("user not found")
//     : NextResponse.json(user[0]); // since user is an array of single object.
// }

// GET to catch all routes [...id]
export function GET(_, res) {
  // console.log(res) // { params: { id: [ '2', 'noman', 'call' ] } }
  // console.log(res.params.id) // [ '2', 'noman', 'call' ]

  const userId = parseInt(res.params.id);
  // console.log(userId)

  const user = users.filter((item) => item.id === userId);

  return user.length === 0
  ? NextResponse.json("user not found")
  : NextResponse.json(user[0]); // since user is an array of single object.
}


export async function PUT(req, content) {
  let payload = await req.json();
  // console.log(payload); // postman>Body>raw>JSON

  payload.id = content.params.id;
  // console.log(payload.id);

  if (payload.id && payload.name && payload.age && payload.email) {
    return NextResponse.json({
      result: payload,
      success: true,
    });
  } else {
    return NextResponse.json({
      result: "some data is missing",
      success: false,
    });
  }
}

export function DELETE(req, content) {
  // console.log(content);
  let id = content.params.id; // params.id due to the folder name [id]

  if (id) {
    return NextResponse.json({
      result: "User deleted.",
      success: true,
    });
  } else {
    return NextResponse.json({
      result: "User not found.",
      success: false,
    });
  }
}
