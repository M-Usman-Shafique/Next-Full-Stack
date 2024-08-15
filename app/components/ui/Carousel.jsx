// app/components/ui/Carousel.jsx
"use client";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { useEffect, useState } from "react";
import { getPosts } from "../../api/getPosts";

function Carousel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data.posts))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={posts} direction="right" speed="fast" />
      </div>
    </div>
  );
}

export default Carousel;
