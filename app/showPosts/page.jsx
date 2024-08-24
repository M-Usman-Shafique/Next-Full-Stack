"use client";
import { useEffect, useState } from "react";

export default function ShowPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      let response = await fetch("/api/uploadPosts");
      let result = await response.json();
      if (result.success) {
        setPosts(result.posts);
      } else {
        console.error("Failed to fetch posts.");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 flex flex-col items-center mt-4">
      {posts.map((post) => (
        <div key={post._id} className="w-full max-w-screen-lg mb-6">
          <h2 className="text-lg font-bold mb-2">{post.caption}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {post.images.map((image, index) => (
              <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.data}
                  alt={image.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}