"use client";
import React, { useEffect, useState } from 'react';
import { Info, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const Event = ({title, description, location, image}) => {
  const [currentImage, setCurrentImage] = useState('');
  
  useEffect(() => {
    setCurrentImage(image[3]);
  }, []);

  return (
    <>
      <Header/>
      <div className="bg-[#1E4D37] p-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Image Section */}
            <div className="space-y-4">
              <Card className="overflow-hidden rounded-3xl">
                <img
                  src={currentImage}
                  alt="Event image"
                  className="w-full h-96 object-cover"
                />
              </Card>
              
              {/* Image Gallery */}
              <div className="relative">
                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-2">
                    {image.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(img)}
                        className={`flex-shrink-0 ${
                          currentImage === img 
                            ? 'ring-2 ring-emerald-300' 
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-emerald-300 space-y-6">
              <div className="uppercase tracking-wider text-sm">Context</div>
              
              <h1 className="text-4xl font-semibold text-emerald-300 leading-tight">
                {title}
              </h1>
              
              <p className='flex items-center text-xs gap-2'>
                <MapPin size={20} />
                {location}
              </p>
              
              <div className="space-y-4">
                <p className="text-white/90">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;