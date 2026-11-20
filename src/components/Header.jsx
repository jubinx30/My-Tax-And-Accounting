import React from 'react';
import { Bell } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { mockUser } from '../data/mockData';

export default function Header({ 
  title = "Home", 
  unreadCount = 2, 
  onNotificationClick, 
  onProfileClick 
}) {
  return (
    <header className="sticky top-0 left-0 right-0 z-30 w-full border-b border-[#EDE6E1]/70 bg-[#FBF9F7]/95 backdrop-blur-sm">
      <div className="w-full max-w-lg mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Left brand logo with Tampa, FL submark */}
        <div className="flex items-center gap-2">
          <BrandLogo size="sm" />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#1E252D] tracking-tight leading-none">
              Count On Us
            </span>
            <span className="text-[9px] font-semibold tracking-wider uppercase text-[#834F3A] mt-0.5">
              TAMPA, FL
            </span>
          </div>
        </div>

      {/* Centered screen title */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-[15px] font-bold text-[#1E252D] tracking-tight">
          {title}
        </h1>
      </div>

        {/* Right notification bell with unread badge and user avatar */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onNotificationClick}
            aria-label="View notifications"
            className="relative p-2 rounded-full hover:bg-[#EDE6E1]/50 text-[#1E252D] transition-colors focus:outline-none touch-press"
          >
            <Bell className="w-5 h-5 text-[#1E252D]" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#BA5D48] rounded-full ring-2 ring-[#FBF9F7] animate-pulse" />
            )}
          </button>

          <button
            onClick={onProfileClick}
            aria-label="Open profile"
            className="relative rounded-full ring-1.5 ring-[#EDE6E1] hover:ring-[#834F3A] transition-all touch-press overflow-hidden"
          >
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-1 ring-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
