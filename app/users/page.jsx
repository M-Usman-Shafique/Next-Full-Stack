import Link from "next/link";

const getUsers = async () => {
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}

export default async function page() {
    const users = await getUsers();
    console.log(users)

  return (
    <>
    <h1 className="text-white font-bold text-xl">Users List:</h1>
    {users.map((user) => (
       <div key={user.id}>
        <Link href={`users/${user.id}`} key={user.id} className="text-white">{user.name}</Link>
        <br />
       </div>
    ))}
    </>
  )
}