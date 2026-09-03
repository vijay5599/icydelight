import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  lightMode?: boolean;
  className?: string;
}

export function BrandLogo({ lightMode = false, className = '' }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group shrink-0 ${className}`}>
      {/* Circular Ice Cream Emblem Badge */}
      <div className="relative w-12 h-12 rounded-full bg-[#14213D] flex items-center justify-center border-2 border-white shadow-md group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
        {/* Colorful ice cream scoops inside emblem */}
        <div className="relative flex flex-col items-center">
          {/* Top scoops */}
          <div className="flex items-center -space-x-1 mb-[-2px]">
            <span className="w-3 h-3 rounded-full bg-[#FF4B72] inline-block shadow-sm" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#00E5FF] inline-block shadow-sm z-10" />
            <span className="w-3 h-3 rounded-full bg-[#FFD700] inline-block shadow-sm" />
          </div>
          {/* Waffle Cone */}
          <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[13px] border-t-[#FFA726]" />
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0.5">
          <span className={`text-2xl font-black tracking-tight leading-none ${lightMode ? 'text-white' : 'text-[#14213D]'}`}>
            Icy<span className="text-[#FF8A00]">Delight</span>
          </span>
          <span className={`text-[10px] font-bold ${lightMode ? 'text-gray-300' : 'text-gray-400'}`}>®</span>
        </div>

        {/* 3 Stars */}
        <div className="flex items-center justify-center gap-1 my-0.5">
          <span className="text-[9px] text-[#FFA726]">★</span>
          <span className="text-[10px] text-[#FF8A00]">★</span>
          <span className="text-[9px] text-[#FFA726]">★</span>
        </div>

        {/* Tagline */}
        <span className={`text-[9px] font-bold italic tracking-wide ${lightMode ? 'text-gray-300' : 'text-[#14213D]/80'}`}>
          Make your choice right !!
        </span>
      </div>
    </Link>
  );
}
