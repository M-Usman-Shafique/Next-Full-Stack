// app/components/ui/infinite-moving-cards.jsx
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, [items]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "10s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="moving-cards w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-6 py-16 md:w-[450px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg"
            style={{
              background: "linear-gradient(180deg, rgba(75,85,99,0.7), rgba(17,24,39,0.7))",
            }}
            key={item.id}
          >
            <Link href={`/post/${item.id}`} className="no-underline text-[#E6EDF3]">
              {item.featuredImage && (
                <img
                  src={item.featuredImage}
                  alt={`Image for ${item.title}`}
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="px-4 py-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="text-gray-400">
                  {item.date} — by {item.author}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
