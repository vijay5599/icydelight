'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  DollarSign, 
  Megaphone, 
  Snowflake, 
  Clock, 
  ArrowRight, 
  Download, 
  CheckCircle2 
} from 'lucide-react';

export function DistributorBanner() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const perks = [
    { icon: DollarSign, title: 'Attractive Margin' },
    { icon: Megaphone, title: 'Marketing Support' },
    { icon: Snowflake, title: 'Cold Chain Support' },
    { icon: Clock, title: 'Timely Delivery' }
  ];

  return (
    <section className="relative overflow-hidden my-6">
      {/* Top Cream Drip Wave */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mb-1">
        <svg
          className="relative block w-full h-8 sm:h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
            fill="#FF8A00"
          />
        </svg>
      </div>

      {/* Main Orange Banner Body */}
      <div className="bg-gradient-to-r from-[#FF8A00] via-[#FFA726] to-[#FF8A00] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating Orange Slice (Left) */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 pointer-events-none opacity-90 hidden sm:block">
          <img
            src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=300&q=80"
            alt="Orange slice"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Floating Waffle Cone Ice Cream (Right) */}
        <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-32 h-44 sm:w-44 sm:h-56 pointer-events-none hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=400&q=80"
            alt="Waffle Cone"
            className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-12 border-2 border-white/50"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center lg:pr-40">
            {/* Left Column: Heading & Subtext */}
            <div className="md:col-span-5 space-y-2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Become Our <br className="hidden sm:inline" />
                Distributor
              </h2>
              <p className="text-xs sm:text-sm text-orange-100 font-medium max-w-sm mx-auto md:mx-0">
                Join the IcyDelight family and grow your business with us.
              </p>
            </div>

            {/* Middle Column: 4 Perks Bullets */}
            <div className="md:col-span-4 space-y-2.5">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <perk.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {perk.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column: 2 Pill Action Buttons */}
            <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <Link
                href="/distributor"
                className="white-pill-btn px-6 py-3 rounded-full text-xs sm:text-sm font-black text-[#14213D] text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleDownloadBrochure}
                className="dark-pill-btn px-6 py-3 rounded-full text-xs sm:text-sm font-black text-white text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Download Brochure</span>
                <Download className="w-4 h-4" />
              </button>

              {downloadSuccess && (
                <div className="text-[11px] font-bold text-white bg-[#0E1B33] px-3 py-1.5 rounded-xl text-center animate-fadeIn">
                  ✓ Brochure downloading...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cream Drip Wave */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          className="relative block w-full h-8 sm:h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
            fill="#0E1B33"
          />
        </svg>
      </div>
    </section>
  );
}
