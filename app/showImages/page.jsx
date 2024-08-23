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
    <div className="flex flex-wrap">
      {images.map((item) => (
        <div key={item._id}>
          <img
            src={`data:${item.contentType};base64,${Buffer.from(
              item.data
            ).toString("base64")}`}
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
}
