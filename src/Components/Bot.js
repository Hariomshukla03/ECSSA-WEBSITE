import React, { useState } from 'react';

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 mb-6 mr-6 z-50">
      <button
        onClick={toggleChat}
        className="flex items-center p-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out relative"
      >
        <div className="text-red-500 bg-white rounded-sm text-xs font-semibold p-2 relative mr-2 mb-16">
          <span>Chat with me!</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-l-8 ml-12 mb-1 border-r-8 border-t-8 border-t-transparent border-b-8 border-b-white"></div>
        </div>
        <img
          className={`w-12 h-12 transform transition-transform duration-600 ${!isOpen ? 'animate-bounce' : ''}`}
          src="/assets/whitelogo.png"
          alt="Chat Bot"
        />
      </button>

      {isOpen && (
        <div className={`transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="w-[22rem] h-[28rem] rounded-lg shadow-lg overflow-hidden bg-white mt-2">
            <div className="w-full h-full overflow-y-auto">
              <iframe
                style={{ height: '100%', width: '100%' }}
                frameBorder="0"
                src="https://www.chatbase.co/chatbot-iframe/xaDnWqPovLXCrfLdUkh_E"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bot;
