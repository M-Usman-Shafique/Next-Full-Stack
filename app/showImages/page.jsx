"use client";
import { useEffect, useState } from "react";

export default function ShowImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    try {
      let response = await fetch("/api/uploadMongo");
      let result = await response.json();
      if (result.success) {
        setImages(result.images);
      } else {
        console.error("Failed to fetch images.");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 flex justify-center mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-screen-lg">
        {images.map((item) => (
          <div key={item._id} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
            <img
              src={item.data}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
