import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210';
    const message = 'Hi! I am interested in KK Projects. Please share more details.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppChat;