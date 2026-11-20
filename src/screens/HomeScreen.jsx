import React from 'react';
import { 
  MapPin, 
  MessageSquare, 
  Upload, 
  Calendar, 
  CreditCard, 
  PiggyBank, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  Calculator, 
  Receipt, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { mockUser, mockAdvisor, mockReturnStatus, mockActivities } from '../data/mockData';

export default function HomeScreen({ 
  onNavigate, 
  onOpenUpload, 
  onOpenMessage, 
  onOpenDoc 
}) {
  return (
    <div className="flex-1 flex flex-col px-5 pt-3 pb-24 space-y-4">
      {/* Location chip & greeting header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#834F3A] bg-[#EDE6E1]/60 px-2.5 py-0.5 rounded-full w-fit mb-1">
            <MapPin className="w-3 h-3 text-[#834F3A]" />
            <span>Tampa, FL Office</span>
          </div>
          <h2 className="text-xl font-extrabold text-[#1E252D] tracking-tight">
            Hello, Sarah
          </h2>
        </div>

        {/* Assigned Advisor Avatar Chip */}
        <div 
          onClick={onOpenMessage}
          className="flex items-center gap-2 bg-white border border-[#EDE6E1] py-1 px-2.5 rounded-full shadow-ambient cursor-pointer hover:border-[#834F3A] transition touch-press"
          title="Chat with assigned CPA Marcus Vance"
        >
          <div className="relative">
            <img 
              src={mockAdvisor.avatar} 
              alt={mockAdvisor.name} 
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full ring-1 ring-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-[#1E252D] leading-tight">
              Marcus Vance
            </span>
            <span className="text-[9px] text-[#487A64] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Assigned CPA
            </span>
          </div>
        </div>
      </div>

      {/* Dark Hero Status Card */}
      <div 
        className="rounded-2xl p-3.5 text-white relative overflow-hidden shadow-card"
        style={{
          background: 'linear-gradient(135deg, #1E252D 0%, #2A323D 60%, #362923 100%)',
          boxShadow: '0 8px 24px -4px rgba(30, 37, 45, 0.25)'
        }}
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#834F3A]/20 rounded-full blur-2xl pointer-events-none" />

        {/* Card Header Row */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#E8B298]">
              TAX YEAR {mockReturnStatus.taxYear}
            </span>
            <h3 className="text-sm font-bold text-white tracking-tight">
              {mockReturnStatus.form}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#BA5D48]/25 text-[#FFB4A2] border border-[#BA5D48]/40">
            <Clock className="w-2.5 h-2.5" />
            {mockReturnStatus.status}
          </span>
        </div>

        {/* Circular Progress & Stage */}
        <div className="mt-2.5 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-2 backdrop-blur-sm">
          {/* SVG Circular Progress Meter */}
          <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
            <svg className="w-11 h-11 -rotate-90 transform" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                className="text-white/15"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#E8B298"
                strokeWidth="4"
                strokeDasharray={125.66}
                strokeDashoffset={125.66 * (1 - mockReturnStatus.progressPercent / 100)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[11px] font-black tracking-tighter text-white tabular-nums">
                {mockReturnStatus.progressPercent}%
              </span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-[10.5px] font-semibold text-[#A7D7C5] uppercase tracking-wide">
              {mockReturnStatus.stageTitle}
            </div>
            <p className="text-[10px] text-gray-300 line-clamp-1">
              Marcus is finalizing state deductions & depreciation.
            </p>
          </div>
        </div>

        {/* Assigned CPA Row inside hero card */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <img 
              src={mockAdvisor.avatar} 
              alt={mockAdvisor.name}
              className="w-5 h-5 rounded-full object-cover ring-1 ring-[#834F3A] flex-shrink-0" 
            />
            <span className="text-[11px] text-gray-200 truncate">
              Assigned CPA: <span className="font-semibold text-white">{mockAdvisor.name}</span>
            </span>
          </div>
          <button
            onClick={onOpenMessage}
            className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#FFD7C2] hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-lg transition touch-press flex-shrink-0"
          >
            <MessageSquare className="w-2.5 h-2.5" />
            Message
          </button>
        </div>
      </div>

      {/* Side-by-side Metric Tiles */}
      <div className="grid grid-cols-2 gap-3">
        {/* Metric 1: Refund Estimate */}
        <div 
          onClick={() => onNavigate('bills')}
          className="bg-white border border-[#EDE6E1] rounded-2xl p-3.5 shadow-ambient flex flex-col justify-between hover:border-[#834F3A]/40 transition cursor-pointer touch-press"
        >
          <div className="flex items-center justify-between text-[#834F3A]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
              Refund Est.
            </span>
            <div className="w-7 h-7 rounded-full bg-[#FDF5F2] flex items-center justify-center">
              <PiggyBank className="w-3.5 h-3.5 text-[#834F3A]" />
            </div>
          </div>
          <div className="mt-1">
            <span className="text-lg font-black text-[#1E252D] tabular-nums tracking-tight">
              ${mockReturnStatus.refundEstimate.toLocaleString()}
            </span>
            <span className="text-[10px] font-semibold text-[#6B7280] ml-1">USD</span>
          </div>
          <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-[#487A64] bg-[#EBF5F0] px-2 py-0.5 rounded-full w-fit">
            <span>{mockReturnStatus.refundDifference}</span>
          </div>
        </div>

        {/* Metric 2: Upcoming Consultation */}
        <div 
          onClick={() => onNavigate('booking')}
          className="bg-white border border-[#EDE6E1] rounded-2xl p-3.5 shadow-ambient flex flex-col justify-between hover:border-[#834F3A]/40 transition cursor-pointer touch-press"
        >
          <div className="flex items-center justify-between text-[#834F3A]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
              Upcoming
            </span>
            <div className="w-7 h-7 rounded-full bg-[#F5EFE9] flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-[#834F3A]" />
            </div>
          </div>
          <div className="mt-1">
            <span className="text-xs font-black text-[#1E252D] tracking-tight block">
              {mockReturnStatus.upcomingEvent.date}
            </span>
            <span className="text-[10px] font-medium text-[#6B7280]">
              {mockReturnStatus.upcomingEvent.title}
            </span>
          </div>
          <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-[#834F3A] bg-[#EDE6E1]/50 px-2 py-0.5 rounded-full w-fit">
            <span>Zoom Advisory</span>
          </div>
        </div>
      </div>

      {/* 4 Quick Action Rounded Buttons */}
      <div className="grid grid-cols-4 gap-2.5 pt-1">
        {[
          { label: 'Upload', icon: Upload, action: onOpenUpload },
          { label: 'Book', icon: Calendar, action: () => onNavigate('booking') },
          { label: 'Pay', icon: CreditCard, action: () => onNavigate('bills') },
          { label: 'Message', icon: MessageSquare, action: onOpenMessage },
        ].map((btn, idx) => {
          const Icon = btn.icon;
          return (
            <button
              key={idx}
              onClick={btn.action}
              className="flex flex-col items-center justify-center py-2.5 px-1 bg-white border border-[#EDE6E1] rounded-2xl hover:border-[#834F3A] shadow-ambient transition touch-press group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FBF9F7] group-hover:bg-[#834F3A]/10 flex items-center justify-center text-[#834F3A] transition">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-[#1E252D] mt-1.5">
                {btn.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Recent Activity List */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-[#1E252D]">Recent Activity</h3>
          <button 
            onClick={() => onNavigate('docs')}
            className="text-xs font-semibold text-[#834F3A] hover:underline"
          >
            See all
          </button>
        </div>

        <div className="bg-white border border-[#EDE6E1] rounded-2xl divide-y divide-[#EDE6E1] shadow-ambient overflow-hidden">
          {mockActivities.map((act) => {
            const isCompleted = act.statusType === 'sage';
            const isInReview = act.statusType === 'terracotta';

            return (
              <div
                key={act.id}
                onClick={() => onNavigate('docs')}
                className="p-3.5 flex items-center justify-between hover:bg-[#FBF9F7] transition cursor-pointer touch-press"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
                    {act.id === 'act-1' && <FileCheck className="w-4 h-4 text-[#487A64]" />}
                    {act.id === 'act-2' && <Calculator className="w-4 h-4 text-[#BA5D48]" />}
                    {act.id === 'act-3' && <Receipt className="w-4 h-4 text-[#834F3A]" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E252D]">{act.title}</h4>
                    <p className="text-[10px] text-[#6B7280]">{act.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      isCompleted
                        ? 'bg-[#EBF5F0] text-[#487A64]'
                        : isInReview
                        ? 'bg-[#FDF5F2] text-[#BA5D48]'
                        : 'bg-[#FFF8E6] text-[#A66E14]'
                    }`}
                  >
                    {act.status}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
