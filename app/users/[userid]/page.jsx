// const getUser = async (id) => {
//     let data = await fetch(`http://localhost:3000/api/users/${id}`);
//     data = await data.json();
//     return data;
// }

import Link from "next/link";

// export default async function page({ params }) {
//     const user = await getUser(params.userid);
//     console.log(user)
//   return (
//     <div className="text-white">
//     <h1 className="text-xl font-bold">User Detail:</h1>
//     <p>Name: {user.name}</p>
//     <p>Age: {user.age}</p>
//     <p>Course: {user.course}</p>
//     </div>
//   )
// }

const getUser = async (id) => {
  let data = await fetch(`http://localhost:3000/api/users/${id}`)
  return data = await data.json();
}
export default async function User({ params }) {
  console.log(params) // output: { userid: '4'}
console.log(params.userid) // output: 2
const id = params.userid;
let user = await getUser(id);

return (
  <div>
    <h1>User Details:</h1>
    <ul>
      <li>Name: {user.name}</li>
      <li>Age: {user.age}</li>
      <li>Course: {user.course}</li>
    </ul>
    <Link href="/users" className="underline text-blue-400">Go Back</Link>
  </div>
)
}