"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ name, image, projects }) => (
  <div className="flex-shrink-0 w-full md:w-1/3 px-4 mb-8">
    <div className="overflow-hidden">
      {/* Fixed aspect ratio container */}
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={`Project in ${name}`}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="p-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">{name}</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="text-emerald-700 mr-2">›</div>
            <p className='text-emerald-700 '>Tree Planted event</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      name: 'ILAHIA Collage',
      image: 'event01/image03.jpeg',
      projects: [
        'Resistance through reforestation in Guatemala',
        'Forests suspended between heaven and earth'
      ]
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className='bg-white h-screen'>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-12 text-emerald-800">
          <div>
            <h2 className="text-sm text-gray-600 mb-2">OUR PROJECTS AROUND THE WORLD</h2>
            <h1 className="md:text-6xl font-medium ">Event's<br />conducted</h1>
          </div>
          <div className="items-center space-x-4 hidden lg:block">
            <button className="text-emerald-800 hover:text-emerald-900">
              See all
            </button>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex overflow-hidden absolute">
          <div
            className="flex md:flex-row flex-col transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
