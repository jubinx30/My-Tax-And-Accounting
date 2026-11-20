import React, { useState } from 'react';
import { X, Send, CheckCheck, Phone, Video } from 'lucide-react';
import { mockAdvisor } from '../data/mockData';

export default function MessageAdvisorModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'advisor',
      text: "Hi Sarah! I've analyzed your 2024 Schedule C deductions. We found an additional $1,250 in eligible business mileage and home office write-offs.",
      time: "10:14 AM"
    },
    {
      id: 2,
      sender: 'user',
      text: "That's wonderful Marcus! Does that impact our federal refund estimate?",
      time: "10:18 AM"
    },
    {
      id: 3,
      sender: 'advisor',
      text: "Yes, exactly! Your refund estimate jumped from $4,470 to $4,820. Let's do a quick 15-min Zoom on Mar 18 to finalize the electronic signature.",
      time: "10:20 AM"
    }
  ]);
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: 'Just now'
    };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // Simulated reply from Marcus
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'advisor',
          text: "Got it, Sarah! Updating your advisory file now. Look forward to our consultation.",
          time: 'Just now'
        }
      ]);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg h-[85vh] sm:h-[600px] bg-white rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl border border-[#EDE6E1] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chat Header */}
        <div className="px-4 py-3 bg-[#1E252D] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img 
                src={mockAdvisor.avatar} 
                alt={mockAdvisor.name} 
                className="w-9 h-9 rounded-full object-cover ring-1 ring-white"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-1 ring-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold leading-tight">{mockAdvisor.name}</h3>
              <p className="text-[10px] text-[#A7D7C5]">CPA • Online now (Tampa)</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => alert("Starting secure voice call with Marcus Vance...")}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FBF9F7]">
          <div className="text-center my-1">
            <span className="text-[10px] font-semibold text-[#834F3A] bg-[#EDE6E1]/70 px-2.5 py-0.5 rounded-full">
              End-to-End Encrypted Advisory Session
            </span>
          </div>

          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div 
                key={msg.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm ${
                    isUser 
                      ? 'bg-[#834F3A] text-white rounded-br-sm' 
                      : 'bg-white text-[#1E252D] border border-[#EDE6E1] rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
                <div className="flex items-center gap-1 text-[9px] text-[#9CA3AF] mt-0.5 px-1">
                  <span>{msg.time}</span>
                  {isUser && <CheckCheck className="w-3 h-3 text-[#834F3A]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#EDE6E1] flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message to Marcus..."
            className="flex-1 px-3.5 py-2.5 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl text-xs text-[#1E252D] placeholder-[#9CA3AF] focus:outline-none focus:border-[#834F3A]"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="w-10 h-10 rounded-xl bg-[#834F3A] hover:bg-[#A46B55] text-white flex items-center justify-center transition disabled:opacity-40"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
