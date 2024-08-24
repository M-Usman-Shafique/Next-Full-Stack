// app/showImages/page.jsx
"use client";
import { useEffect, useState } from "react";

export default function ShowImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    let data = await fetch("/api/uploadMongo");
    let result = await data.json();

    console.log(result);


    if (result.success) {
      setImages(result.images);
    } else {
      console.log("process failed.");
    }
  }
  return (
<div className="p-4 flex justify-center mt-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-screen-lg">
    {images.map((item) => (
      <div key={item._id} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src={`data:${item.contentType};base64,${Buffer.from(item.data).toString("base64")}`}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>
  );
}
