import React from 'react';
import { Home, FileText, Calendar, ReceiptText, User } from 'lucide-react';

export default function BottomNav({ currentTab, setTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'docs', label: 'Docs', icon: FileText },
    { id: 'booking', label: 'Book', icon: Calendar, isCenter: true },
    { id: 'bills', label: 'Bills', icon: ReceiptText },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="sticky bottom-0 left-0 right-0 w-full bg-white border-t border-[#EFEAE5] shadow-[0_-4px_20px_rgba(131,79,58,0.04)] select-none z-40">
      <nav 
        aria-label="Main Navigation"
        className="grid grid-cols-5 w-full items-end max-w-lg mx-auto px-1 pt-2 pb-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;

          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                type="button"
                className="flex flex-col items-center justify-end group focus:outline-none cursor-pointer"
              >
                {/* Elevated circular action button */}
                <div 
                  className={`w-[52px] h-[52px] -mt-6 rounded-full bg-[#834F3A] flex items-center justify-center border-[3.5px] border-white shadow-[0_8px_18px_-2px_rgba(131,79,58,0.36),0_2px_6px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:brightness-105 group-active:scale-95 ${
                    isActive ? 'scale-105 ring-2 ring-[#834F3A]/30' : ''
                  }`}
                >
                  <Icon 
                    className="w-[22px] h-[22px] text-white" 
                    strokeWidth={2.2} 
                  />
                </div>

                {/* Center item label */}
                <span className="text-[11px] font-semibold text-[#834F3A] mt-1.5 leading-tight tracking-tight">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              type="button"
              className="flex flex-col items-center justify-end group focus:outline-none cursor-pointer"
            >
              {/* Icon & Label pill container */}
              <div 
                className={`w-[60px] py-1.5 flex flex-col items-center justify-center rounded-[20px] transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#F5ECE5] text-[#834F3A]' 
                    : 'bg-transparent text-[#64748B] hover:text-[#1E252D] group-hover:bg-[#F5ECE5]/40'
                }`}
              >
                <Icon 
                  className="w-[19px] h-[19px] transition-transform duration-200 group-hover:scale-105" 
                  strokeWidth={isActive ? 2.1 : 1.8} 
                />
                <span 
                  className={`text-[11px] mt-0.5 leading-tight tracking-tight ${
                    isActive ? 'font-semibold text-[#834F3A]' : 'font-medium text-[#64748B]'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
