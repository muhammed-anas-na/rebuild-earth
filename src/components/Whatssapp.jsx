// components/WhatsAppButton.js
import { MessageCircle } from 'lucide-react';
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+917561073184" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
     <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
