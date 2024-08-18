import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const getUserDetails = async (id) => {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data;
};

export default async function User({ params }) {
  console.log(params); // output: { userid: '4'}
  console.log(params.userid); // output: 2
  const id = params.userid;
  let user = await getUserDetails(id);

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-slate-300">User Details</h1>
      <ul className="relative bg-gray-800 rounded-lg px-6 py-5 w-full max-w-sm shadow-lg">
        <Link
          href={`/users/${user.id}/update`}
          className="absolute top-4 right-3 text-gray-200 opacity-40 hover:opacity-70 text-lg"
        >
          <FaEdit />
        </Link>
        <li className="mb-4">
          <span className="font-semibold">Name:</span> {user.name}
        </li>
        <li className="mb-4 text-slate-200">
          <span className="font-semibold">Age:</span> {user.age}
        </li>
        <li className="mb-4 text-slate-200">
          <span className="font-semibold">Email:</span> {user.email}
        </li>
      </ul>
      <Link
        href="/users"
        className="mt-8 text-blue-400 hover:underline text-lg font-medium"
      >
        Go Back
      </Link>
    </div>
  );
}
