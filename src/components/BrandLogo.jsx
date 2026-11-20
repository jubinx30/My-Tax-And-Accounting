import React from 'react';
import brandLogoImg from '../assets/brand-logo.jpg';

export default function BrandLogo({ size = "md", showText = false, textClasses = "", className = "" }) {
  const sizeMap = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${sizeMap[size] || sizeMap.md} rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center relative shadow-sm ${className}`}
      >
        <img
          src={brandLogoImg}
          alt="Count On Us Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {showText && (
        <div className={`flex flex-col text-left ${textClasses}`}>
          <span className="text-base font-bold text-[#1E252D] tracking-tight leading-tight">
            Count On Us
          </span>
          <span className="text-[10px] font-medium tracking-wider uppercase text-[#834F3A]">
            Tax & Accounting • Tampa, FL
          </span>
        </div>
      )}
    </div>
  );
}
