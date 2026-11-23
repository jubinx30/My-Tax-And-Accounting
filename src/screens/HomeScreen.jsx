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
  ShieldAlert,
  FileText,
  Sparkles
} from 'lucide-react';
import { mockUser, mockAdvisor, mockReturnStatus, mockActivities, mockDocuments } from '../data/mockData';

export default function HomeScreen({ 
  onNavigate, 
  onOpenUpload, 
  onOpenMessage, 
  onOpenDoc,
  onOpenTaxStatus
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
          className="flex items-center gap-2 bg-white border border-[#EDE6E1] py-1 pl-2.5 pr-2 rounded-full shadow-ambient cursor-pointer hover:border-[#834F3A] transition touch-press"
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
          <div className="w-6 h-6 rounded-full bg-[#EDE6E1]/60 flex items-center justify-center text-[#834F3A] ml-0.5">
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Dark Hero Status Card */}
      <div 
        className="rounded-2xl p-4 text-white relative overflow-hidden shadow-card"
        style={{
          background: 'linear-gradient(135deg, #1E252D 0%, #2A323D 60%, #362923 100%)',
          boxShadow: '0 8px 24px -4px rgba(30, 37, 45, 0.25)'
        }}
      >
        {/* Subtle decorative glows */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#834F3A]/25 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#A7D7C5]/10 rounded-full blur-xl pointer-events-none" />

        {/* Card Header Row */}
        <div className="flex items-start justify-between relative z-10">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#E8B298]">
                TAX YEAR {mockReturnStatus.taxYear}
              </span>
              <span className="text-[9px] font-bold text-gray-300 bg-white/10 px-1.5 py-0.5 rounded">
                1040 Joint
              </span>
            </div>
            <h3 className="text-sm font-bold text-white tracking-tight mt-0.5">
              Federal & Florida Return
            </h3>
          </div>
          <span 
            onClick={onOpenTaxStatus}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#BA5D48]/25 text-[#FFB4A2] border border-[#BA5D48]/40 shadow-sm cursor-pointer hover:bg-[#BA5D48]/40 transition"
            title="Click to view tax return progress & milestone breakdown"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF896B] animate-pulse" />
            {mockReturnStatus.status} • Stage 3/4
          </span>
        </div>

        {/* 4-Step Milestone Progress Pipeline */}
        <div 
          onClick={onOpenTaxStatus}
          className="mt-3 pt-3 border-t border-white/10 relative z-10 cursor-pointer hover:opacity-90 transition"
          title="Click to view full milestone breakdown"
        >
          <div className="grid grid-cols-4 gap-1 text-center">
            {mockReturnStatus.milestones.map((ms, idx) => {
              const isCompleted = ms.status === 'completed';
              const isActive = ms.status === 'active';
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="flex items-center w-full mb-1">
                    <div className={`h-[2px] w-full ${idx === 0 ? 'invisible' : isCompleted || isActive ? 'bg-[#A7D7C5]' : 'bg-white/15'}`} />
                    <div 
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0 transition-all ${
                        isCompleted 
                          ? 'bg-[#487A64] text-white ring-2 ring-[#487A64]/30' 
                          : isActive 
                          ? 'bg-[#E8B298] text-[#1E252D] ring-2 ring-[#E8B298]/40 font-black animate-pulse' 
                          : 'bg-white/15 text-gray-400'
                      }`}
                    >
                      {isCompleted ? '✓' : idx + 1}
                    </div>
                    <div className={`h-[2px] w-full ${idx === mockReturnStatus.milestones.length - 1 ? 'invisible' : isCompleted ? 'bg-[#A7D7C5]' : 'bg-white/15'}`} />
                  </div>
                  <span className={`text-[9px] font-medium truncate w-full ${
                    isActive ? 'text-[#E8B298] font-bold' : isCompleted ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {ms.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Circular Progress & Stage Details */}
        <div 
          onClick={onOpenTaxStatus}
          className="mt-3 flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-2.5 backdrop-blur-sm relative z-10 cursor-pointer group transition touch-press"
          title="Click circular graph to view return progress & milestone breakdown"
        >
          {/* SVG Circular Progress Meter */}
          <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg className="w-12 h-12 -rotate-90 transform" viewBox="0 0 48 48">
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
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#A7D7C5] uppercase tracking-wide">
                {mockReturnStatus.stageTitle}
              </span>
              <span className="text-[9px] text-[#E8B298] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                Details <ChevronRight className="w-2.5 h-2.5" />
              </span>
            </div>
            <p className="text-[10px] text-gray-200 mt-0.5 line-clamp-1 leading-snug">
              {mockReturnStatus.stageDescription}
            </p>
          </div>
        </div>

        {/* Interactive Draft Preview / Action Row */}
        <div 
          onClick={() => onOpenDoc ? onOpenDoc(mockDocuments[0]) : onNavigate('docs')}
          className="mt-2.5 flex items-center justify-between bg-black/20 hover:bg-black/35 border border-white/10 rounded-xl px-2.5 py-1.5 transition cursor-pointer group touch-press relative z-10"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-5 h-5 rounded-md bg-[#834F3A]/40 flex items-center justify-center text-[#E8B298] flex-shrink-0">
              <FileText className="w-3 h-3" />
            </div>
            <span className="text-[10px] text-gray-200 truncate font-medium">
              Draft 1040 v1.2 ready for review
            </span>
          </div>
          <span className="text-[10px] font-bold text-[#E8B298] group-hover:text-white flex items-center gap-0.5 flex-shrink-0 transition ml-2">
            View Draft <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
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
