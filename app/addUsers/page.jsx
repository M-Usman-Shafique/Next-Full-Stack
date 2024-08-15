"use client";
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
    <>
      <h1 className="text-center">Add New User</h1>
      <form
        onSubmit={addUser}
        className="flex flex-col gap-8 justify-center items-center"
      >
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="text-gray-500 p-2"
        />
        <input
          type="text"
          id="age"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          className="text-gray-500 p-2"
        />
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-gray-500 p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-2 py-1 rounded-md"
        >
          + Add User
        </button>
      </form>
    </>
  );
}
