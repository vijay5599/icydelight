'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Store as StoreIcon, 
  Navigation, 
  Clock, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';

export function StoreLocatorCTA() {
  const cities = ['Mumbai', 'Bengaluru', 'Delhi NCR', 'Hyderabad', 'Pune', 'Kolkata', 'Chennai', 'Ahmedabad'];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#14213D] via-[#1E2E54] to-[#14213D] text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF8A00]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFA726]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFA726] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" /> Over 250+ Parlours & Retail Kiosks
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Find an <span className="text-[#FF8A00]">IcyDelight</span> Near You
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Craving that velvety Belgian Truffle chocobar or fresh Alfonso Mango cup? Step into our experiential dessert lounges or grab a tub from your neighborhood partner supermarket.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/store-locator"
                  className="gradient-orange-btn px-8 py-4 rounded-full text-white text-sm font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all group"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Find Nearby Store</span>
                </Link>

                <Link
                  href="/distributor#retail"
                  className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
                >
                  <Building2 className="w-4 h-4 text-[#FFA726]" />
                  <span>Become Retailer</span>
                </Link>
              </div>

              {/* Quick City Tags */}
              <div className="pt-4">
                <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider mb-2">
                  Popular Parlour Locations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <Link
                      key={city}
                      href={`/store-locator?city=${city.toLowerCase()}`}
                      className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-gray-300 hover:text-white transition-colors"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Map Illustration & Floating Store Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-md h-[320px] sm:h-[380px] rounded-[28px] bg-[#243354]/60 border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* SVG Stylized Map Grid */}
                <div className="absolute inset-0 opacity-25 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFA726" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Animated Pulsing Location Pins */}
                <div className="absolute top-12 left-16 z-20 flex items-center gap-2">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FF8A00]"></span>
                  </span>
                  <span className="text-xs font-black bg-white/90 text-[#14213D] px-2 py-0.5 rounded-full shadow-md">
                    Mumbai Flagship
                  </span>
                </div>

                <div className="absolute bottom-20 right-12 z-20 flex items-center gap-2">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFA726] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FFA726]"></span>
                  </span>
                  <span className="text-xs font-black bg-white/90 text-[#14213D] px-2 py-0.5 rounded-full shadow-md">
                    Bengaluru Hub
                  </span>
                </div>

                <div className="absolute top-28 right-24 z-20 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                  </span>
                  <span className="text-[11px] font-bold bg-white/90 text-[#14213D] px-2 py-0.5 rounded-full shadow-md">
                    Delhi NCR Express
                  </span>
                </div>

                {/* Card overlay at bottom of map preview */}
                <div className="relative z-30 mt-auto bg-white text-[#14213D] p-4 rounded-2xl shadow-xl flex items-center justify-between border border-orange-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF8A00] flex items-center justify-center">
                      <StoreIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black">Bandra Linking Road Flagship</h4>
                      <p className="text-xs text-gray-500">Open today until 1:00 AM</p>
                    </div>
                  </div>

                  <Link
                    href="/store-locator"
                    className="p-2 rounded-full bg-[#FFF9F2] hover:bg-[#FF8A00] text-[#FF8A00] hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
