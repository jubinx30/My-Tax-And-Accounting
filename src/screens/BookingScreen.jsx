import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Info,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  BookOpen,
  Users,
  Layers,
  PieChart,
  PhoneCall
} from 'lucide-react';
import { serviceCategories, availableDates, timeSlots, mockAdvisor } from '../data/mockData';

export default function BookingScreen({ onConfirmBooking }) {
  const [meetingType, setMeetingType] = useState('zoom'); // 'zoom' or 'in-person'
  const [selectedService, setSelectedService] = useState('tax-prep');
  const [selectedDate, setSelectedDate] = useState('18');
  const [selectedTime, setSelectedTime] = useState('2:00 PM');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'file-spreadsheet': return <FileSpreadsheet className="w-5 h-5 text-[#834F3A]" />;
      case 'book-open': return <BookOpen className="w-5 h-5 text-[#834F3A]" />;
      case 'users': return <Users className="w-5 h-5 text-[#834F3A]" />;
      case 'layers': return <Layers className="w-5 h-5 text-[#834F3A]" />;
      case 'pie-chart': return <PieChart className="w-5 h-5 text-[#834F3A]" />;
      default: return <PhoneCall className="w-5 h-5 text-[#834F3A]" />;
    }
  };

  const handleBookingSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const chosenService = serviceCategories.find(s => s.id === selectedService)?.title || 'Tax Advisory';
      const chosenDateObj = availableDates.find(d => d.date === selectedDate);
      onConfirmBooking({
        service: chosenService,
        date: chosenDateObj ? chosenDateObj.full : `Oct ${selectedDate}`,
        time: selectedTime,
        meetingType: meetingType === 'zoom' ? 'Zoom HD Consultation' : 'In-Person (Tampa Office)',
        advisor: mockAdvisor.name,
      });
    }, 600);
  };

  const currentServiceName = serviceCategories.find(s => s.id === selectedService)?.title;

  return (
    <div className="flex-1 flex flex-col px-5 pt-3 pb-28 space-y-4">
      {/* Title & Meeting Type Switcher */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-[#1E252D] tracking-tight">
            Book Appointment
          </h2>
          <p className="text-[11px] text-[#6B7280]">
            Count On Us Tampa Office
          </p>
        </div>

        {/* In-Person vs Zoom toggle */}
        <div className="bg-[#EDE6E1]/70 p-0.5 rounded-full flex items-center">
          <button
            onClick={() => setMeetingType('in-person')}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-full transition ${
              meetingType === 'in-person'
                ? 'bg-white text-[#1E252D] shadow-sm'
                : 'text-[#6B7280] hover:text-[#1E252D]'
            }`}
          >
            IN-PERSON
          </button>
          <button
            onClick={() => setMeetingType('zoom')}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-full transition flex items-center gap-1 ${
              meetingType === 'zoom'
                ? 'bg-[#834F3A] text-white shadow-sm'
                : 'text-[#6B7280] hover:text-[#1E252D]'
            }`}
          >
            <Video className="w-3 h-3" />
            ZOOM
          </button>
        </div>
      </div>

      {/* 1. SELECT SERVICE */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
            1. Select Service
          </label>
          <span className="text-[10px] font-semibold text-[#834F3A] bg-[#EDE6E1]/60 px-2 py-0.5 rounded-full">
            {currentServiceName} selected
          </span>
        </div>

        {/* 2x3 interactive grid of selectable tiles */}
        <div className="grid grid-cols-2 gap-2.5">
          {serviceCategories.map((serv) => {
            const isSelected = selectedService === serv.id;
            return (
              <div
                key={serv.id}
                onClick={() => setSelectedService(serv.id)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer relative touch-press flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#834F3A] shadow-card ring-1 ring-[#834F3A]'
                    : 'bg-white border-[#EDE6E1] hover:border-[#834F3A]/40 shadow-ambient'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition ${
                    isSelected ? 'bg-[#834F3A]/10 text-[#834F3A]' : 'bg-[#FBF9F7] text-gray-600'
                  }`}>
                    {getServiceIcon(serv.icon)}
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-[#834F3A] text-white flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#1E252D]">
                    {serv.title}
                  </h4>
                  <p className="text-[10px] text-[#6B7280] leading-tight mt-0.5">
                    {serv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. SELECT DATE */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
            2. Select Date
          </label>
          <span className="text-[10px] font-semibold text-[#1E252D]">
            October 2024
          </span>
        </div>

        {/* Horizontal scrollable date pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {availableDates.map((item) => {
            const isSelected = selectedDate === item.date;
            return (
              <button
                key={item.date}
                onClick={() => setSelectedDate(item.date)}
                className={`flex-shrink-0 w-14 py-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-150 touch-press ${
                  isSelected
                    ? 'bg-[#1E252D] text-white shadow-card scale-105'
                    : 'bg-white border border-[#EDE6E1] text-[#1E252D] hover:border-[#834F3A]/40 shadow-ambient'
                }`}
              >
                <span className={`text-[10px] font-semibold ${isSelected ? 'text-gray-300' : 'text-[#6B7280]'}`}>
                  {item.day}
                </span>
                <span className="text-base font-black tabular-nums mt-0.5">
                  {item.date}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. AVAILABLE TIMES */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
            3. Available Times
          </label>
          <span className="text-[10px] font-semibold text-[#834F3A] bg-[#EDE6E1]/50 px-2 py-0.5 rounded-full">
            ● Eastern Time
          </span>
        </div>

        {/* Time slot chips */}
        <div className="flex flex-wrap gap-2">
          {timeSlots.map((time) => {
            const isSelected = selectedTime === time;
            return (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 touch-press ${
                  isSelected
                    ? 'bg-white border-2 border-[#834F3A] text-[#834F3A] shadow-sm'
                    : 'bg-white border border-[#EDE6E1] text-[#1E252D] hover:border-[#834F3A]/40 shadow-ambient'
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sticky Primary CTA */}
      <div className="pt-2">
        <button
          onClick={handleBookingSubmit}
          disabled={isSubmitting}
          className="w-full h-12 bg-[#834F3A] hover:bg-[#A46B55] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-floating transition duration-150 touch-press disabled:opacity-75"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>Confirm Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Office Notes & Regulatory disclaimer */}
      <div className="bg-[#EDE6E1]/40 rounded-2xl p-3 border border-[#EDE6E1] text-center">
        <p className="text-[10px] text-[#6B7280] leading-relaxed">
          <strong className="text-[#1E252D]">Tampa Office:</strong> Mon–Fri 10am–6pm • Sat 9am–4pm EST<br />
          30-day advance booking guarantee • Free reschedule up to 24 hrs prior
        </p>
      </div>
    </div>
  );
}
