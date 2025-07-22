import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '919488133430'; // Replace with your number
  const message = 'Hello!';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
    >
      <img
        src="https://img.icons8.com/ios-filled/25/ffffff/whatsapp.png"
        alt="WhatsApp"
        className="w-6 h-6"
      />
      <span className="hidden sm:inline font-medium">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
