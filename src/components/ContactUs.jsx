"use client";
import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Dribbble, MessageSquare, Users, Phone, MessageCircleMore, Instagram } from 'lucide-react';
import { Card } from "@/components/ui/card";
import Header from './Header';

const ContactUs = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen p-4 md:p-8 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
      <Card className="w-full bg-white p-6 md:p-8 rounded-3xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-black">
              Connect with us
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-700">
              Tell us more about yourself and what you've got in mind.
            </p>

            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 md:p-3 rounded-lg border-gray-300 border bg-transparent text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium mb-2 text-gray-700">
                  Number
                </label>
                <input
                  type="tel"
                  id="number"
                  className="w-full p-2 md:p-3 rounded-lg border-gray-300 border bg-transparent text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2 text-gray-700">
                  Tell us a little about the project...
                </label>
                <textarea
                  id="project"
                  rows={4}
                  className="w-full p-2 md:p-3 rounded-lg border-gray-300 border bg-transparent text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#14181f] text-white p-2 md:py-3 rounded-lg hover:bg-black transition-colors"
              >
                Let's get started!
              </button>
            </form>
          </div>
        </Card>
        
        {/* Left Column - Contact Information */}


        <div className="space-y-6 md:space-y-8">
          {/* Chat Section */}
          <div className="p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-6 h-6" />
              <h3 className="text-lg font-medium">Chat to us</h3>
            </div>
            <p className="text-gray-400 text-sm">Our friendly team is here to help.</p>
            <p className="text-gray-300 font-medium">rebulidearth12@gmail.com</p>
          </div>

          {/* Call Section */}
          <div className="p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-6 h-6" />
              <h3 className="text-lg font-medium">Call us</h3>
            </div>
            <p className="text-gray-400 text-sm">Mon-Fri from 8am to 5pm.</p>
            <p className="text-gray-300 font-medium">+91 7561073184</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start p-4">
            <a href="https://www.facebook.com/profile.php?id=61567519301761&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://youtube.com/@rebulidearth?si=w_cM7h40nif4P5MO" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://www.instagram.com/rebuild_earth?igsh=M2kxbjI1c2V3NGdu" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition-colors"  />
            </a>
            <a href="https://wa.me/message/OPDUGZOGCJ2WN1" target="_blank" rel="noopener noreferrer">
              <MessageCircleMore className="w-6 h-6 text-gray-400 hover:text-white transition-colors"  />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
       
      </div>
    </div>
    </>
  );
};

export default ContactUs;