import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  ShieldCheck, 
  Calendar, 
  ChevronRight,
  TrendingUp,
  Receipt
} from 'lucide-react';
import { mockReturnStatus, mockAdvisor, mockDocuments } from '../data/mockData';

export default function TaxProgressModal({ 
  isOpen, 
  onClose, 
  onOpenMessage, 
  onOpenDoc 
}) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed md:absolute inset-0 z-50 flex items-end justify-center p-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-h-[92%] md:max-h-[88%] bg-white rounded-t-3xl shadow-2xl border border-[#EDE6E1] flex flex-col transform transition-all overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="p-5 pb-3 border-b border-[#EDE6E1] flex-shrink-0 bg-white">
          {/* Drag handle pill */}
          <div className="w-10 h-1 bg-[#EDE6E1] rounded-full mx-auto mb-3" />

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#834F3A] bg-[#EDE6E1]/60 px-2 py-0.5 rounded-full">
                  TAX YEAR {mockReturnStatus.taxYear}
                </span>
                <span className="text-[10px] font-bold text-[#487A64] bg-[#EBF5F0] px-2 py-0.5 rounded-full">
                  Form 1040 Joint
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-[#1E252D] tracking-tight">
                Return Status & Milestones
              </h3>
              <p className="text-[11px] text-[#6B7280]">
                Federal & Florida No-State-Income-Tax Return
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#FBF9F7] text-gray-500 hover:text-gray-800 flex items-center justify-center transition border border-[#EDE6E1] flex-shrink-0 ml-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 pt-3.5 space-y-4">
          {/* Hero Progress Summary Card */}
          <div 
            className="rounded-2xl p-4 text-white relative overflow-hidden shadow-card flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #1E252D 0%, #2A323D 60%, #362923 100%)',
            }}
          >
            <div className="flex items-center gap-4 relative z-10">
              {/* Circular Progress Gauge */}
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="currentColor"
                    strokeWidth="5"
                    className="text-white/15"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="#E8B298"
                    strokeWidth="5"
                    strokeDasharray={163.36}
                    strokeDashoffset={163.36 * (1 - mockReturnStatus.progressPercent / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-black tracking-tight text-white tabular-nums">
                    {mockReturnStatus.progressPercent}%
                  </span>
                  <span className="text-[8px] font-bold text-[#E8B298] uppercase tracking-tighter">
                    Done
                  </span>
                </div>
              </div>

              {/* Stage Info */}
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#BA5D48]/30 text-[#FFB4A2] border border-[#BA5D48]/40 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF896B] animate-pulse" />
                  Stage {mockReturnStatus.stage} of {mockReturnStatus.totalStages} • {mockReturnStatus.status}
                </div>
                <h4 className="text-sm font-bold text-white truncate">
                  {mockReturnStatus.stageTitle}
                </h4>
                <p className="text-[10px] text-gray-300 mt-0.5 line-clamp-2 leading-relaxed">
                  {mockReturnStatus.stageDescription}
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar inside Hero */}
            <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[10px] relative z-10">
              <div className="bg-white/10 rounded-xl p-2 border border-white/10">
                <span className="text-gray-300 block text-[9px]">Est. Completion</span>
                <span className="font-extrabold text-[#E8B298] text-xs">
                  {mockReturnStatus.estCompletion}
                </span>
                <span className="text-[9px] text-gray-400 block mt-0.5">
                  {mockReturnStatus.daysRemaining} days before IRS deadline
                </span>
              </div>
              <div className="bg-white/10 rounded-xl p-2 border border-white/10">
                <span className="text-gray-300 block text-[9px]">Estimated Refund</span>
                <span className="font-extrabold text-[#A7D7C5] text-xs">
                  ${mockReturnStatus.refundEstimate.toLocaleString()}
                </span>
                <span className="text-[9px] text-[#A7D7C5]/90 block mt-0.5">
                  {mockReturnStatus.refundDifference}
                </span>
              </div>
            </div>
          </div>

          {/* 4-Step Detailed Timeline */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                Milestone Breakdown
              </h4>
              <span className="text-[10px] text-[#834F3A] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#487A64]" /> CPA Verified
              </span>
            </div>

            <div className="relative pl-6 space-y-3.5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#EDE6E1]">
              {mockReturnStatus.milestones.map((ms, index) => {
                const isCompleted = ms.status === 'completed';
                const isActive = ms.status === 'active';
                const isPending = ms.status === 'pending';

                return (
                  <div key={ms.id || index} className="relative group">
                    {/* Timeline Node Icon */}
                    <div 
                      className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all ${
                        isCompleted 
                          ? 'bg-[#487A64] border-[#487A64] text-white' 
                          : isActive 
                          ? 'bg-[#834F3A] border-[#834F3A] text-white ring-4 ring-[#834F3A]/20 animate-pulse' 
                          : 'bg-white border-[#DDD5CC] text-gray-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : isActive ? (
                        <span>3</span>
                      ) : (
                        <Clock className="w-3 h-3 text-gray-400" />
                      )}
                    </div>

                    {/* Stage Content Card */}
                    <div 
                      className={`p-3 rounded-xl border transition-all ${
                        isActive 
                          ? 'bg-[#FDF8F5] border-[#834F3A]/40 shadow-sm' 
                          : isCompleted 
                          ? 'bg-[#FBF9F7] border-[#EDE6E1]' 
                          : 'bg-white border-[#F0EBE6] opacity-75'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center flex-wrap gap-1.5">
                            <span className="text-xs font-bold text-[#1E252D] leading-tight">
                              {ms.title || `Stage ${ms.id}: ${ms.label}`}
                            </span>
                            {isActive && (
                              <span className="text-[9px] font-bold px-2 py-0.5 bg-[#834F3A] text-white rounded-full flex-shrink-0">
                                In Progress
                              </span>
                            )}
                            {isCompleted && (
                              <span className="text-[9px] font-bold px-2 py-0.5 bg-[#EBF5F0] text-[#487A64] rounded-full flex-shrink-0">
                                Completed
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-[#834F3A] flex-shrink-0 whitespace-nowrap pt-0.5">
                          {ms.date || (isCompleted ? 'Completed' : 'Pending')}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#6B7280] mt-1.5 leading-snug">
                        {ms.description || (
                          isCompleted 
                            ? 'All required documents and forms verified.' 
                            : isActive 
                            ? 'Assigned CPA is actively reviewing deductions.' 
                            : 'Awaiting completion of previous stage.'
                        )}
                      </p>

                      {/* Stage-specific contextual highlight */}
                      {isActive && (
                        <div className="mt-2 pt-2 border-t border-[#834F3A]/15 flex items-center justify-between">
                          <span className="text-[10px] text-[#834F3A] font-medium flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#BA5D48]" />
                            Draft 1040 v1.2 ready for your review
                          </span>
                          <button
                            onClick={() => {
                              onClose();
                              if (onOpenDoc) onOpenDoc(mockDocuments[0]);
                            }}
                            className="text-[10px] font-bold text-[#834F3A] hover:underline flex items-center gap-0.5 touch-press"
                          >
                            View Draft <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Assigned CPA Contact Strip */}
          <div className="p-3 bg-[#FBF9F7] border border-[#EDE6E1] rounded-2xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img 
                  src={mockAdvisor.avatar} 
                  alt={mockAdvisor.name} 
                  className="w-9 h-9 rounded-full object-cover border border-[#EDE6E1]"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#1E252D]">
                    {mockAdvisor.name}
                  </span>
                  <span className="text-[9px] text-[#487A64] font-semibold bg-[#EBF5F0] px-1.5 py-0.5 rounded">
                    CPA
                  </span>
                </div>
                <p className="text-[10px] text-[#6B7280]">
                  {mockAdvisor.license} • Online now
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                if (onOpenMessage) onOpenMessage();
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-[#834F3A] bg-white border border-[#EDE6E1] px-3 py-1.5 rounded-xl hover:border-[#834F3A] transition shadow-xs touch-press"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat</span>
            </button>
          </div>
        </div>

        {/* Primary Action Buttons (Pinned to bottom of modal) */}
        <div className="p-4 border-t border-[#EDE6E1] bg-white flex gap-2 flex-shrink-0">
          <button
            onClick={() => {
              onClose();
              if (onOpenDoc) onOpenDoc(mockDocuments[0]);
            }}
            className="flex-1 h-11 bg-[#834F3A] hover:bg-[#A46B55] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs transition shadow-sm touch-press"
          >
            <FileText className="w-4 h-4" />
            <span>Review Draft 1040 v1.2</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 h-11 bg-white border border-[#EDE6E1] text-[#1E252D] font-bold rounded-xl text-xs hover:bg-[#FBF9F7] transition touch-press"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
