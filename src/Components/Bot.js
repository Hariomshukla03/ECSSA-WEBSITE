import React, { useEffect } from "react";

const BotPenguinChat = () => {
  useEffect(() => {
    // Prevent multiple script injections
    if (!document.getElementById("botpenguin-widget")) {
      const script = document.createElement("script");
      script.id = "botpenguin-widget";
      script.src = "https://cdn.botpenguin.com/website-bot.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* BotPenguin Chatbot will be automatically injected by the script */}
    </div>
  );
};

export default BotPenguinChat;