import React from 'react';
import { X, Bell, Clock, FileCheck, Receipt, Calendar, ArrowRight } from 'lucide-react';

export default function NotificationDrawer({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "Invoice INV-2024-084 Generated",
      desc: "Your 2024 Tax Prep bill of $450.00 is ready for review.",
      time: "2 hours ago",
      icon: Receipt,
      actionTab: 'bills'
    },
    {
      id: 2,
      title: "Stage 3 Progress: Deductions Updated",
      desc: "Marcus Vance optimized $1,250 in qualifying Schedule C expenses.",
      time: "Yesterday",
      icon: FileCheck,
      actionTab: 'home'
    },
    {
      id: 3,
      title: "Upcoming Zoom Advisory",
      desc: "Consultation scheduled for Mar 18 at 2:30 PM EST.",
      time: "2 days ago",
      icon: Calendar,
      actionTab: 'booking'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-0 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-[360px] h-full bg-[#FBF9F7] border-l border-[#EDE6E1] shadow-2xl flex flex-col p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#EDE6E1]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#834F3A]/10 text-[#834F3A] flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <h3 className="text-base font-extrabold text-[#1E252D]">
              Activity Alerts
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-gray-500 hover:text-gray-800 flex items-center justify-center transition border border-[#EDE6E1]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 py-4 space-y-3 overflow-y-auto">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                onClick={() => {
                  onNavigate(n.actionTab);
                  onClose();
                }}
                className="bg-white border border-[#EDE6E1] rounded-2xl p-3.5 shadow-ambient hover:border-[#834F3A]/50 transition cursor-pointer touch-press"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] text-[#834F3A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#1E252D] leading-tight">
                      {n.title}
                    </h4>
                    <p className="text-[11px] text-[#6B7280] mt-1 leading-snug">
                      {n.desc}
                    </p>
                    <span className="text-[9px] text-[#9CA3AF] mt-1 block">
                      {n.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full h-11 bg-white border border-[#EDE6E1] text-[#1E252D] font-bold rounded-xl text-xs hover:bg-[#EDE6E1]/40 transition"
        >
          Close Drawer
        </button>
      </div>
    </div>
  );
}
