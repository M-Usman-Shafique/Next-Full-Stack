"use client"

import { HiOutlineTrash } from "react-icons/hi2";

export default function DeleteUser({ id }) {

    const handleDelete = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE"});
            data = await data.json();
            
            if (data.success) {
                alert("User is deleted.")
            } else {
                alert("User is not deleted.")
            }

    }
  return <button onClick={handleDelete} className="text-gray-200 opacity-40 hover:opacity-70 text-lg">
    <HiOutlineTrash />
  </button>
}