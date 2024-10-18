import React, { useState } from 'react';
import logo from "../assets/whitelogo.png";

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 mb-6 mr-6">
      
      <button
        onClick={toggleChat}
        className="flex items-center p-2 rounded-lg shadow-lg  transition-all duration-300 ease-in-out relative"
      >
        
        <div className="bg-white text-red-500 text-xs font-semibold p-2 rounded-lg relative mr-2 mb-16">
          <span>Chat with me!</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-l-8 ml-12 mb-1 border-r-8 border-t-8 border-t-transparent border-b-8 border-b-white"></div>
        </div>
        
        <img 
          className={`w-12 h-12 transform transition-transform duration-600 ${!isOpen ? 'animate-bounce' : ''}`} 
          src={logo} 
          alt="Chat Bot" 
        />
      </button>

   
      {isOpen && (
        <div className={`transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="w-[22rem] h-[28rem] rounded-lg shadow-lg overflow-hidden bg-white mt-2">
            <iframe
              style={{ height: '100%', width: '100%' }}
              frameBorder="0"
              src="https://widget.botsonic.com/CDN/index.html?service-base-url=https%3A%2F%2Fapi-azure.botsonic.ai&token=deba5580-6bcf-47ee-bb56-8855cdc7862f&base-origin=https%3A%2F%2Fbot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https%3A%2F%2Fbot.writesonic.com%2Fbots%2F738840fa-22c9-47e1-86fd-65fe3622ac0b%2Fconnect"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Bot;
