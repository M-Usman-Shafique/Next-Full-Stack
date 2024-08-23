"use client";
import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }
    const data = new FormData();
    data.set("file", file);

    let result = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    if (result.success) {
      alert("File uploaded successfully");
    } else {
      alert("File upload failed.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg space-y-4"
    >
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0])}
        className="w-full text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Upload
      </button>
    </form>
  );
}
