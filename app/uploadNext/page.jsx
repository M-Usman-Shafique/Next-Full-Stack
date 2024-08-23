"use client";
import { useState } from "react";
import { TbBrandNextjs } from "react-icons/tb";

export default function UploadNext() {
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }
    const data = new FormData();
    data.set("file", file);

    let result = await fetch("/api/uploadNext", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    if (result.success) {
      alert("File uploaded successfully");
      setFile(null);
    } else {
      alert("File upload failed.");
    }
  }

   return (
    <div className="flex justify-center min-h-screen mt-10">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center max-w-[30%] h-[35vh] p-6 bg-gray-100 rounded-lg shadow-lg space-y-4"
    >
      <h1 className="text-xl font-bold flex items-center text-black"><TbBrandNextjs className="inline-block text-2xl mr-1"/>Next.JS</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0])}
        className="w-full text-gray-300 border-2 border-gray-600 bg-black rounded-lg p-2"
      />
      <button
        type="submit"
        className="w-full bg-black py-2 px-4 rounded-lg"
      >
        Upload
      </button>
    </form>
    </div>
  );
}