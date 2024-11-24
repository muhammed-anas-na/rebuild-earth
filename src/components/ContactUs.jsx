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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column - Contact Information */}
        <div className="w-full md:w-1/3 space-y-8">

          {/* Chat Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6" />
              <h3 className="text-lg font-medium">Chat to us</h3>
            </div>
            <p className="text-gray-400">Our friendly team is here to help.</p>
            <p className="text-gray-400">hi@untitledui.com</p>
          </div>

          {/* Visit Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6" />
              <h3 className="text-lg font-medium">Visit us</h3>
            </div>
            <p className="text-gray-400">Come say hello at our office HQ.</p>
            <p className="text-gray-400">
              100 Smith Street<br />
              Collingwood VIC 3066 AU
            </p>
          </div>

          {/* Call Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <h3 className="text-lg font-medium">Call us</h3>
            </div>
            <p className="text-gray-400">Mon-Fri from 8am to 5pm.</p>
            <p className="text-gray-400">+91 7561073184</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a href="https://www.facebook.com/profile.php?id=61567519301761&mibextid=ZbWKwL" __blank="true">
            <Facebook className="w-6 h-6 text-gray-400 hover:text-black cursor-pointer" />
            </a>
            <a href="https://youtube.com/@rebulidearth?si=w_cM7h40nif4P5MO">
                <Youtube className="w-6 h-6 text-gray-400 hover:text-black cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/rebuild_earth?igsh=M2kxbjI1c2V3NGdu">
            <Instagram className="w-6 h-6 text-gray-400 hover:text-black cursor-pointer"  />
            </a>
            <a href="https://wa.me/message/OPDUGZOGCJ2WN1">
                <MessageCircleMore  className="w-6 h-6 text-gray-400 hover:text-black cursor-pointer"  />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <Card className="w-full md:w-2/3 bg-white p-8 rounded-3xl">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold mb-4">
              Got ideas? We've got<br />the skills. Let's team up.
            </h2>
            <p className="text-lg mb-8">
              Tell us more about yourself and what you've got in mind.
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg border-gray-300 border bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  you@company.com
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg border-gray-300 border bg-transparent"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Tell us a little about the project...
                </label>
                <textarea
                  id="project"
                  rows={4}
                  className="w-full p-3 rounded-lg border-gray-300 border bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#14181f] text-white py-3 rounded-lg hover:bg-black transition-colors"
              >
                Let's get started!
              </button>
            </form>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
};

export default ContactUs;