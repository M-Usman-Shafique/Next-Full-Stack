"use client";
import Link from "next/link";
import { useState } from "react";

export default function addUsers() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async (e) => {
    e.preventDefault();

    let res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });

    res = await res.json();
    console.log(res); // {result: 'post successful', success: true}
    console.log(name, age, email);

    res.success
      ? alert("User is created successfully!")
      : alert("Fill all required fields & try again!");

    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-200 p-8">
      <form
        onSubmit={addUser}
        className="flex flex-col gap-6 bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
      <h1 className="text-2xl font-bold text-center">Add New User</h1>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="text-gray-200 bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          id="age"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          className="text-gray-200 bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-gray-200 bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Add User
        </button>
      <Link href="/" className="text-blue-600 text-center hover:underline">Back to Home</Link>
      </form>
    </div>
  );
}
