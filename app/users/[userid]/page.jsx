const getUser = async (id) => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data;
}

export default async function page({ params }) {
    const user = await getUser(params.userid);
    console.log(user)
  return (
    <div className="text-white">
    <h1 className="text-xl font-bold">User Detail:</h1>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <p>Course: {user.course}</p>
    </div>
  )
}