"use client";
import React from "react";

const VideoPlayer = () => {
  return (
    <div className="relative w-full h-auto rounded-lg overflow-hidden md:px-20 mb-10">
      {/* Text Overlay */}
      <h1
        className="absolute top-14 left-1/2 transform -translate-x-1/2 text-white text-4xl md:text-6xl font-bold line-clamp-6 font-sans text-center px-4"
      >
        We fight the climate crisis with high social impact reforestation.
      </h1>

      {/* Video */}
      <video
        src="/video01.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-xl"
      />
    </div>
  );
};

export default VideoPlayer;
