// app/users/[userid]/update/page.jsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UpdateUser({ params }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // console.log(params); // { userid: '2' }
  const id = params.userid;
  // console.log(id); // 2

  useEffect(() => {
    getUserDetails(id);
  }, [id]);

  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    console.log(data);
    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let data = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({name, age, email})
      });
      data = await data.json();
      console.log('Updated user data:', data);

      if (data.success) {
        alert("User updated successfully!")
        setName("");
        setAge("");
        setEmail("");
      } else alert("some data is missing!")

  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-gray-200 p-8">
      {/* <h1 className="text-3xl font-bold mb-6">Update User Details</h1> */}
      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-6 bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-gray-200 bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
        />
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="text-gray-200 bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Age"
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-gray-200 bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
        <div className="flex justify-between">
          <Link
            href="/users"
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
}
