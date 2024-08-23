"use client";
import { useState } from "react";
import { BiLogoMongodb } from "react-icons/bi";
import ShowImages from "../showImages/page";

export default function UploadMongo() {
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(file)

    if (!file) {
      alert("Please select a file.");
      return;
    }
    const data = new FormData();
    data.append("file", file);

    let result = await fetch("/api/uploadMongo", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    console.log(result)
    if (result.success) {
      alert("File uploaded successfully");
      setFile(null);
    } else {
      alert("File upload failed.");
    }
  };

  return (
    <>
    <div className="flex justify-center mt-10">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center max-w-[30%] h-[35vh] p-6 bg-gray-800 rounded-lg shadow-lg space-y-4"
    >
      <h1 className="text-lg flex items-center text-green-500"><BiLogoMongodb className="inline-block text-2xl"/>MongoDB</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0])}
        className="w-full text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-lg p-2"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-black py-2 px-4 rounded-lg"
      >
        Upload
      </button>
    </form>
    </div>
    <ShowImages />
    </>
  );
}
