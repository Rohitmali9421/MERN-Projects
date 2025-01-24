import React from 'react';
import ChatBackground from "../assets/ChatBackground.png";

function Start() {
  return (
<div className="w-full h-screen bg-blue-400 flex items-center">
      {/* Main Chat Container */}
      <div
        className="w-full h-full flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${ChatBackground})` }}
      >
        {/* Chat Header */}
        <div className="bg-white w-full h-12 flex items-center px-4 shadow-md sticky top-0">
          <h2 className="text-lg font-bold">Start</h2>
        </div>

        <div>
          Start conversation
        </div>

        
      </div>
    </div>
  );
}

export default Start;
