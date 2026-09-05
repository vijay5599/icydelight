import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  lightMode?: boolean;
  className?: string;
}

export function BrandLogo({ lightMode = false, className = '' }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group shrink-0 ${className}`}>
      {/* Official High-Res IcyDelight Circular Badge Emblem */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
        <img
          src="/images/logo.png"
          alt="IcyDelight Official Logo"
          className="w-full h-full object-contain drop-shadow-sm"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0.5">
          <span className={`text-xl sm:text-2xl font-black tracking-tight leading-none ${lightMode ? 'text-white' : 'text-[#14213D]'}`}>
            Icy<span className="text-[#FF8A00]">Delight</span>
          </span>
          <span className={`text-[10px] font-bold ${lightMode ? 'text-gray-300' : 'text-gray-400'}`}>®</span>
        </div>

        {/* Tagline */}
        <span className={`text-[9px] font-bold italic tracking-wide mt-0.5 ${lightMode ? 'text-gray-300' : 'text-[#14213D]/80'}`}>
          Make your choice right !!
        </span>
      </div>
    </Link>
  );
}
