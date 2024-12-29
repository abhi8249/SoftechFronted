"use client";

import React, { useState } from 'react';
import { MessageSquare, X, Send, Minimize2, Maximize2 } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      content: 'Hello! 👋 How can I help you today?',
      timestamp: new Date()
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatHistory(prev => [...prev, {
      type: 'user',
      content: message,
      timestamp: new Date()
    }]);

    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'bot',
        content: 'Thanks for your message! Our team will get back to you soon.',
        timestamp: new Date()
      }]);
    }, 1000);

    setMessage('');
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center gap-2"
        >
          <MessageSquare size={24} />
          <span className="hidden md:inline">Chat with us</span>
        </button>
      )}

      {isOpen && (
        <div className={`bg-white rounded-lg shadow-xl w-[350px] transition-all duration-300 ${isMinimized ? 'h-[60px]' : 'h-[500px]'}`}>
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare size={20} />
              <span className="font-medium">Softtech Support</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleChat} className="hover:bg-blue-700 p-1 rounded">
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button onClick={closeChat} className="hover:bg-blue-700 p-1 rounded">
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-[380px] overflow-y-auto p-4 space-y-4">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-lg p-3 ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="border-t p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
