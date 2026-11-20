import React from 'react';
import { Wifi, Battery } from 'lucide-react';

export default function StatusBar({ dark = false }) {
  return (
    <div className={`w-full px-6 pt-3 pb-1 flex items-center justify-between text-xs select-none ${dark ? 'text-white' : 'text-[#1E252D]'}`}>
      {/* Time */}
      <span className="font-semibold tracking-tight text-[13px] pl-1">9:41</span>
      
      {/* Dynamic Island / Notch Pill */}
      <div className="w-24 h-4 bg-black/90 rounded-full mx-auto -mt-1 hidden sm:block shadow-inner" />

      {/* Status Icons */}
      <div className="flex items-center gap-1.5 pr-1">
        {/* Cellular bars */}
        <div className="flex items-end gap-[1.5px] h-2.5">
          <span className={`w-[2.5px] h-1 rounded-sm ${dark ? 'bg-white' : 'bg-[#1E252D]'}`} />
          <span className={`w-[2.5px] h-1.5 rounded-sm ${dark ? 'bg-white' : 'bg-[#1E252D]'}`} />
          <span className={`w-[2.5px] h-2 rounded-sm ${dark ? 'bg-white' : 'bg-[#1E252D]'}`} />
          <span className={`w-[2.5px] h-2.5 rounded-sm ${dark ? 'bg-white' : 'bg-[#1E252D]'}`} />
        </div>
        <Wifi className="w-3.5 h-3.5" strokeWidth={2.5} />
        <Battery className="w-4 h-4 ml-0.5" strokeWidth={2.5} />
      </div>
    </div>
  );
}
