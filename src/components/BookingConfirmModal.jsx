import React from 'react';
import { X, Calendar, Clock, MapPin, Video, CheckCircle2, Share2, Download } from 'lucide-react';

export default function BookingConfirmModal({ isOpen, bookingDetails, onClose }) {
  if (!isOpen || !bookingDetails) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-[390px] bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-[#EDE6E1]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#EDE6E1]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#487A64] bg-[#EBF5F0] px-2 py-0.5 rounded-full">
            ● Confirmed Appointment
          </span>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#FBF9F7] text-gray-500 hover:text-gray-800 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-4 text-center">
          <div className="w-12 h-12 rounded-full bg-[#EBF5F0] text-[#487A64] flex items-center justify-center mx-auto mb-2.5">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-extrabold text-[#1E252D]">
            You're All Set!
          </h3>
          <p className="text-xs text-[#6B7280] mt-0.5">
            Appointment reserved with {bookingDetails.advisor}
          </p>
        </div>

        {/* Details Card */}
        <div className="bg-[#FBF9F7] rounded-2xl p-4 border border-[#EDE6E1] space-y-2.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280]">Service:</span>
            <span className="font-bold text-[#1E252D]">{bookingDetails.service}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280]">Date & Time:</span>
            <span className="font-bold text-[#834F3A]">{bookingDetails.date} at {bookingDetails.time}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280]">Format:</span>
            <span className="font-bold text-[#1E252D] flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-[#834F3A]" />
              {bookingDetails.meetingType}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2">
          <button
            onClick={() => {
              alert("Calendar event (.ics) generated and added to your device calendar.");
              onClose();
            }}
            className="w-full h-11 bg-[#834F3A] hover:bg-[#A46B55] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs transition touch-press"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Apple / Google Calendar</span>
          </button>
          
          <button
            onClick={onClose}
            className="w-full h-10 bg-white border border-[#EDE6E1] text-[#1E252D] font-bold rounded-xl text-xs hover:bg-[#FBF9F7] transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
