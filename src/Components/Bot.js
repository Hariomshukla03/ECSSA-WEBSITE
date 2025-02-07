import React, { useEffect } from "react";

const BotPenguinChat = () => {
  useEffect(() => {
    if (!document.getElementById("botpenguin-widget")) {
      const script = document.createElement("script");
      script.id = "botpenguin-widget";
      script.src = "https://cdn.botpenguin.com/website-bot.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return null; // No UI needed, the chatbot loads itself
};

export default BotPenguinChat;
