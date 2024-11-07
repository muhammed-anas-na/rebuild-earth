"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import NumberCounter from '@/components/Counter';
import Counter from '@/components/Counter';

const backgroundImages = [
  'image01.jpg', // Replace with actual image URLs
  'image02.jpg',
  'image03.jpg ',
    'image04.jpg '
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <img src='logo.jpg' className='h-10 rounded-full'/>
              <div className="hidden lg:block text-green-600 md:text-2xl font-bold">Rebuild Earth</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-green-400">HOME</a>
              <a href="#" className="text-white hover:text-green-400">SERVICES</a>
              <a href="#" className="text-white hover:text-green-400">PROJECTS</a>
              <a href="#" className="text-white hover:text-green-400">PAGES</a>
              <a href="#" className="text-white hover:text-green-400">SHOP</a>
              <a href="#" className="text-white hover:text-green-400">BLOG</a>
              <a href="#" className="text-white hover:text-green-400">CONTACT</a>
            </div>
            <button className="bg-green-600 text-white text-sm px-3 md:px-6 md:py-2 rounded-full hover:bg-green-700">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Carousel */}
      <div className="relative h-screen overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-black lg:text-6xl md:text-6xl text-white mb-4">
              Don't Forget to nature your trees
            </h1>
            {/* <p className="text-lg md:text-xl text-white mb-8">
              Imagine stepping into your own outdoor paradise. Something beautiful is blooming soon!
              Stay tuned as we unveil the secret to transforming your garden into a lush haven.
            </p> */}

            <div>
              <Counter/>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <button className="text-sm md:w-64 md:text-xl px-16 py-3 bg-green-600 text-white md:px-6 md:py-2 rounded-lg hover:bg-green-700">
                View Projects
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-green-600' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;