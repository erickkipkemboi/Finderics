import React from 'react';
import { MessageSquare } from 'lucide-react'; // Import the WhatsApp-like icon from shadcn

const WhatsappContact: React.FC = () => {
  const whatsappNumber = '+25493042033'; // Replace with your WhatsApp number
  const message = 'Hello, I would like to know more about your services.'; // Default message
  
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};

export default WhatsappContact;
