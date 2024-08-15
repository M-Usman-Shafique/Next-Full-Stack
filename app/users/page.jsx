// import Link from "next/link";
import Link from "next/link";

const getUsers = async () => {
  let data = await fetch("http://localhost:3000/api/users");
  return (data = await data.json());
};
export default async function Users() {
  const users = await getUsers();
  return (
    <div>
      <h1>User List:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
