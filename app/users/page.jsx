// import Link from "next/link";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteUser from "../components/DeleteUser";

const getUsers = async () => {
  let data = await fetch("http://localhost:3000/api/users");
  return (data = await data.json());
};
export default async function Users() {
  const users = await getUsers();
  return (
    <div className="flex flex-col justify-center items-center p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-slate-300">User List</h1>
      <ul className="w-full max-w-md space-y-4">
        {users.map((user) => (
          <li key={user.id} className="bg-gray-800 shadow-lg rounded-lg p-4">
            <div className="flex justify-between items-center">
              <Link
                href={`/users/${user.id}`}
                className="text-lg font-medium text-gray-200 hover:underline"
              >
                {user.name}
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href={`/users/${user.id}/update`}
                  className="text-gray-200 opacity-40 hover:opacity-70 text-lg"
                >
                  <FaEdit />
                </Link>
                <DeleteUser id={user.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link
        href="/"
        className="mt-8 text-blue-600 hover:underline text-lg font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
}
