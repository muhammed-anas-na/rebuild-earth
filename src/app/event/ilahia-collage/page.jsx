"use client";
import React, { useState, useEffect } from 'react';
import { Info, MapPin, Users, Tree, Award, Clock, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
export const metadata = {
  title: "Rebuild Earth for Tomorrow - Ilahia College Event",
  description: "Join us at Ilahia Arts and Science College for an event focused on carbon neutrality and sustainable practices.",
  keywords: "Ilahia College, event, carbon neutrality, sustainability",
};


const Event = () => {
  const [currentImage, setCurrentImage] = useState('');
  const details = {
    title: "Rebuild Earth for Tomorrow",
    location: "Ilahia Arts and Science College, Kerala",
    duration: "September 2024 – November 2024",
    projectCoordinators: [
      'Shoaib Yoosaph', 'Ali Akber TM', 
      'Beema Mol', 'Saniya Manoj', 
    ],
    studentLeaders: [
      'Fahad PJ', 'Muhammed Safwan',
      'Yaseen Sudeer', 'Afnas Ali',
      'Afshan PA', 'Muhammed Jabir'
    ],
    images: [
      '/ilahia-collage/image01.jpeg',
      '/ilahia-collage/image02.jpeg',
      '/ilahia-collage/image03.jpeg',
      '/ilahia-collage/image04.jpeg',
      '/ilahia-collage/image05.jpeg',
      '/ilahia-collage/image06.jpeg',
      '/ilahia-collage/image07.jpeg'
    ],
    participants: "700+ students",
    objective: "Raise awareness about carbon neutrality and promote sustainable practices through student engagement.",
    projectGoals: [
      'Raise awareness of carbon neutrality globally, with a focus on India',
      'Educate students on how individual actions contribute to reducing carbon emissions',
      'Encourage tree planting as a practical step toward carbon neutrality',
      'Introduce the Greeny Coins reward system to motivate participation in sustainable activities'
    ]
  };

  useEffect(() => {
    if (details.images.length > 0) {
      setCurrentImage(details.images[3]);
    }
  }, []);

  return (
    <>
      <Header/>
      <div className="bg-[#1E4D37] text-white p-4 sm:p-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left side - Image Section */}
            <div className="space-y-4 lg:space-y-6">
              <Card className="overflow-hidden rounded-2xl lg:rounded-3xl">
                <img
                  src={currentImage}
                  alt="Event showcase"
                  className="w-full h-48 sm:h-64 lg:h-96 object-cover"
                />
              </Card>
              
              {/* Image Gallery */}
              <div className="overflow-x-auto">
                <div className="flex gap-2 sm:gap-3">
                  {details.images.map((img, index) => (
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
                        className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-emerald-900/30 p-4 sm:p-6 rounded-2xl">
                <h1 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-3 sm:mb-4">
                  {details.title}
                </h1>
                
                <div className="space-y-2 sm:space-y-3">
                  <p className="flex items-center gap-2 sm:gap-3 text-emerald-100 text-sm sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    {details.location}
                  </p>
                  <p className="flex items-center gap-2 sm:gap-3 text-emerald-100 text-sm sm:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    {details.duration}
                  </p>
                  <p className="flex items-center gap-2 sm:gap-3 text-emerald-100 text-sm sm:text-base">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    {details.participants}
                  </p>
                </div>
              </div>

              {/* Other sections follow similar responsive pattern */}
              {['Objective', 'Project Goals', 'Team'].map((section) => (
                <div key={section} className="bg-emerald-900/30 p-4 sm:p-6 rounded-2xl">
                  <h2 className="text-xl sm:text-2xl font-semibold text-emerald-300 mb-3 sm:mb-4">
                    {section}
                  </h2>
                  {section === 'Objective' && (
                    <p className="text-sm sm:text-base text-emerald-100">
                      {details.objective}
                    </p>
                  )}
                  {section === 'Project Goals' && (
                    <ul className="space-y-1 sm:space-y-2 list-disc pl-4 sm:pl-5 text-sm sm:text-base text-emerald-100">
                      {details.projectGoals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </ul>
                  )}
                  {section === 'Team' && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium text-emerald-200 mb-1 sm:mb-2">
                          Project Coordinators
                        </h3>
                        <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base text-emerald-100">
                          {details.projectCoordinators.map((coordinator, index) => (
                            <li key={index}>{coordinator}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-emerald-200 mb-1 sm:mb-2">
                          Student Leaders
                        </h3>
                        <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base text-emerald-100">
                          {details.studentLeaders.map((leader, index) => (
                            <li key={index}>{leader}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;