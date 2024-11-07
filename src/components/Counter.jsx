import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [memberCount, setMemberCount] = useState(0);
  const [plantCount, setPlantCount] = useState(0);
  
  const targetMembers = 700;
  const targetPlants = 20;
  const animationDuration = 2000; // 2 seconds
  const fps = 60;
  
  useEffect(() => {
    const steps = fps * (animationDuration / 1000);
    const memberIncrement = targetMembers / steps;
    const plantIncrement = targetPlants / steps;
    
    let frame = 0;
    
    const animation = setInterval(() => {
      frame++;
      
      if (frame <= steps) {
        setMemberCount(prev => Math.min(Math.floor(memberIncrement * frame), targetMembers));
        setPlantCount(prev => Math.min(Math.floor(plantIncrement * frame), targetPlants));
      } else {
        clearInterval(animation);
      }
    }, 1000 / fps);
    
    return () => clearInterval(animation);
  }, []);
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-lg shadow-xl">
      <div className="flex gap-5 items-center">
        {/* Members Stats */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">👥</span>
            <h1 className="md:text-4xl font-bold text-white text-2xl">
              {memberCount.toLocaleString()} +
            </h1>
          </div>
          <p className="text-gray-300 text-center">total participants</p>
        </div>
        
        {/* Plants Stats */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">🌱</span>
            <h1 className="md:text-4xl font-bold text-white text-2xl">
              {plantCount.toLocaleString()} +
            </h1>
          </div>
          <p className="text-gray-300 text-center">tree planted</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;