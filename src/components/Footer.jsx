import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, MessageCircleMore } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1E4D37] text-white py-16 absolute">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src="logo.jpg" alt="Rebuild Earth Logo" className="h-20 rounded-full" />
            </div>
            <p className="text-sm opacity-90 max-w-xs">
              Together we rebuild our Earth through sustainable reforestation and carbon neutrality initiatives.
            </p>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Initiatives</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80">› Tree Planting Programs</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Carbon Offset</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Government Partnerships</a></li>
            </ul>
          </div>

          {/* Projects & About */}
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Projects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80">› Current Projects</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Carbon Neutrality</a></li>
            </ul>
            
            <h3 className="font-medium mt-8 mb-4 uppercase text-sm tracking-wide">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80">› About Rebuild Earth</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Environmental Impact</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Join Our Mission</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:opacity-80">› Environmental Education</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Carbon Calculator</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› News & Updates</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Get Involved</h3>
            <ul className="space-y-2 mb-8">
              <li><a href="#" className="text-sm hover:opacity-80">› Plant a Tree</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Start a Forest</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Volunteer</a></li>
              <li><a href="#" className="text-sm hover:opacity-80">› Support Our Cause</a></li>
            </ul>
            <img src="/api/placeholder/120/60" alt="Government Initiative Badge" className="h-16" />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-end mb-12 space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61567519301761&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://youtube.com/@rebulidearth?si=w_cM7h40nif4P5MO" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/rebuild_earth?igsh=M2kxbjI1c2V3NGdu" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://wa.me/message/OPDUGZOGCJ2WN1" target="_blank" rel="noopener noreferrer">
                <MessageCircleMore className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="hover:opacity-80">Privacy Policy</a>
            <a href="#" className="hover:opacity-80">Terms of Service</a>
            <a href="#" className="hover:opacity-80">Accessibility</a>
            <a href="#" className="hover:opacity-80">Government Initiative</a>
          </div>
          <div className="text-sm opacity-90">
            © 2024 Rebuild Earth. All rights reserved.<br />
            A Government initiative for a sustainable future.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;