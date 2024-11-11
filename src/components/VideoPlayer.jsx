"use client";
import React from "react";

const VideoPlayer = () => {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden md:px-20 mb-10">
      {/* Text Overlay */}
      <h1
        className="absolute top-14 left-32 text-white text-6xl font-bold line-clamp-6 font-sans"
       
      >
        We fight the climate<br/> crisis with high social<br/> impact reforestation.
      </h1>
      
      {/* Video */}
      <video
        src="/video01.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[600px] object-cover rounded-xl"
      />
    </div>
  );
};

export default VideoPlayer;
