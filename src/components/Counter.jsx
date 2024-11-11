import { Sprout } from 'lucide-react';
import React from 'react';

const Counter = () => {
  return (
    <div className="h-svh flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="text-[#1E4D37] bg-white flex flex-col justify-between px-8 py-8 rounded-xl gap-4">
          <span className="flex items-center gap-2">
            <Sprout />
            <p>Trees Planted</p>
          </span>
          <h1 className="text-5xl font-bold">1.2M</h1>
        </div>
        <div className="text-[#1E4D37] bg-white flex flex-col justify-between px-8 py-8 rounded-xl gap-4">
          <span className="flex items-center gap-2">
            <Sprout />
            <p>Family Supported</p>
          </span>
          <h1 className="text-5xl font-bold">1.2+</h1>
        </div>
        <div className="text-[#1E4D37] bg-white flex flex-col justify-between px-8 py-8 rounded-xl gap-4">
          <span className="flex items-center gap-2">
            <Sprout />
            <p>Partner Companies</p>
          </span>
          <h1 className="text-5xl font-bold">1.2+</h1>
        </div>
        <div className="text-[#1E4D37] bg-white flex flex-col justify-between px-8 py-8 rounded-xl gap-4">
          <span className="flex items-center gap-2">
            <Sprout />
            <p>Species Planted</p>
          </span>
          <h1 className="text-5xl font-bold">1.2+</h1>
        </div>
        <div className="text-[#1E4D37] bg-white flex flex-col justify-between px-8 py-8 rounded-xl gap-4">
          <span className="flex items-center gap-2">
            <Sprout />
            <p>Active Projects</p>
          </span>
          <h1 className="text-5xl font-bold">1.2+</h1>
        </div>
        <div className="text-[#1E4D37] bg-white flex flex-col justify-between px-8 py-8 rounded-xl gap-4">
          <span className="flex items-center gap-2">
            <Sprout />
            <p>Hectares Reforested</p>
          </span>
          <h1 className="text-5xl font-bold">1.2+</h1>
        </div>
      </div>
    </div>
  );
};

export default Counter;