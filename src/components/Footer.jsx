import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Music } from 'lucide-react'; // for TikTok icon

const Footer = () => {
  return (
    <footer className="bg-[#1E4D37] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src="logo.jpg" alt="Logo" className="h-20 rounded-full" />
            </div>
            <p className="text-sm opacity-90 max-w-xs">
              We build an equitable future for the environment and for people.
            </p>
          </div>

          {/* Companies */}
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Companies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80">› Overview companies</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Services</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Partners</a></li>
            </ul>
          </div>

          {/* Projects & About */}
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Projects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80">› Our projects</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Carbon Project</a></li>
            </ul>
            
            <h3 className="font-medium mt-8 mb-4 uppercase text-sm tracking-wide">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80">› About us</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Impact</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Work with us</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Contacts</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80">› Magazine</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Glossary</a></li>
            </ul>
          </div>

          {/* Web-App & Certification */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium uppercase text-sm tracking-wide">Web-App</h3>
              <span className="text-sm">Eng</span>
            </div>
            <ul className="space-y-2 mb-8">
              <li><a href="#" className="text-sm hover:opacity-80">› Plant tree</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Plant forest</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Redeem tree</a></li>
            </ul>
            <img src="/api/placeholder/120/60" alt="B Corp Certification" className="h-16" />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-end mb-12 space-x-6">
          <Instagram className="w-6 h-6 hover:opacity-80 cursor-pointer" />
          <Facebook className="w-6 h-6 hover:opacity-80 cursor-pointer" />
          <Linkedin className="w-6 h-6 hover:opacity-80 cursor-pointer" />
          <Music className="w-6 h-6 hover:opacity-80 cursor-pointer" /> {/* TikTok */}
          <Youtube className="w-6 h-6 hover:opacity-80 cursor-pointer" />
        </div>

        {/* Bottom Links and Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="hover:opacity-80">Privacy policy</a>
            <a href="#" className="hover:opacity-80">Cookies preferences</a>
            <a href="#" className="hover:opacity-80">Cookies policy</a>
            <a href="#" className="hover:opacity-80">Credits</a>
          </div>
          <div className="text-sm opacity-90">
            Copyright 2023 © zeroCO2. C.F./P.IVA 15448901007.<br />
            REA RM 1591762. Capitale sociale 34.035,60€
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;