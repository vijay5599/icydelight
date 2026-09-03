'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF9F2] via-[#FFF3E0]/30 to-[#FFF9F2]">
      {/* Background Soft Cream & Milk Flow Waves */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none -z-10 opacity-70">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 900 600" fill="none">
          <path
            d="M 200 0 C 400 100, 300 400, 900 300 L 900 0 Z"
            fill="#FFE8D1"
            opacity="0.5"
          />
          <path
            d="M 400 0 C 600 200, 500 500, 900 450 L 900 0 Z"
            fill="#FFA726"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Headline & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            {/* Orange Kicker */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-base sm:text-lg md:text-xl font-bold text-[#FF8A00] tracking-tight">
                Life is Better
              </span>
            </motion.div>

            {/* Big Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#14213D] tracking-tight leading-[0.95]">
                With
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#14213D] tracking-tight leading-[0.95]">
                IcyDelight
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 font-medium max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Deliciously crafted ice creams made with natural ingredients and real fruit.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex justify-center lg:justify-start"
            >
              <Link
                href="/products"
                className="orange-pill-btn px-8 py-4 rounded-full text-white text-sm sm:text-base font-bold inline-flex items-center gap-2.5 shadow-lg group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Orange Popsicle, Packaging Wrapper & Splash */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
            {/* Liquid Juice Splash Background Artwork */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Splash Glow */}
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#FFA726]/40 via-[#FF8A00]/25 to-transparent rounded-full blur-2xl animate-pulse-glow" />
            </div>

            {/* Floating Orange Fruit Slice (Left) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-2 sm:left-6 top-1/3 z-20 w-24 h-24 sm:w-32 sm:h-32"
            >
              <img
                src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&q=80"
                alt="Fresh Orange Slice"
                className="w-full h-full object-cover rounded-full shadow-lg border-2 border-white"
              />
            </motion.div>

            {/* Floating Whole Orange Half (Right) */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute right-0 sm:right-4 bottom-12 z-20 w-24 h-24 sm:w-32 sm:h-32"
            >
              <img
                src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=400&q=80"
                alt="Ripe Orange Fruit"
                className="w-full h-full object-cover rounded-full shadow-lg border-2 border-white"
              />
            </motion.div>

            {/* Main Center Product Composite */}
            <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-6">
              {/* Product Packaging Wrapper Simulation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-36 sm:w-44 h-72 sm:h-88 rounded-2xl bg-white shadow-2xl border border-gray-100 p-3 flex flex-col justify-between overflow-hidden rotate-[-4deg]"
              >
                <div className="text-center pt-2">
                  <div className="w-8 h-8 rounded-full bg-[#14213D] mx-auto flex items-center justify-center text-[10px] text-white font-bold mb-1">
                    ★
                  </div>
                  <span className="text-sm font-black text-[#14213D] block">IcyDelight</span>
                  <span className="text-[8px] font-bold text-gray-500 italic block">Make your choice right !!</span>
                </div>

                {/* Wrapper Center Artwork */}
                <div className="relative w-full h-36 rounded-xl bg-gradient-to-b from-[#FF8A00] to-[#FFA726] p-2 flex flex-col items-center justify-center text-white shadow-inner">
                  <div className="w-10 h-16 rounded-t-full bg-orange-200 border-2 border-white shadow-sm mb-1" />
                  <span className="text-xs font-black uppercase tracking-wider">ICE CANDY</span>
                  <span className="text-[10px] font-bold text-orange-100">ORANGE</span>
                </div>

                <div className="text-center pb-1">
                  <span className="text-[9px] font-bold text-emerald-600 block">✓ 100% Real Fruit Pulp</span>
                </div>
              </motion.div>

              {/* Real Orange Ice Candy Popsicle on Stick */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="relative w-40 sm:w-52 h-80 sm:h-96 flex flex-col items-center rotate-[6deg]"
              >
                {/* Frozen Ice Candy Bar Body */}
                <div className="w-32 sm:w-40 h-56 sm:h-68 rounded-t-[3rem] rounded-b-2xl bg-gradient-to-b from-[#FF6F00] via-[#FF8A00] to-[#FFA726] shadow-2xl border-4 border-orange-200/60 relative overflow-hidden flex items-center justify-center">
                  {/* Frost & Liquid Glisten */}
                  <div className="absolute top-2 left-4 w-4 h-36 bg-white/30 rounded-full blur-[1px] -rotate-6" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent" />
                  <span className="text-3xl opacity-30">🍊</span>
                </div>

                {/* Wooden Popsicle Stick */}
                <div className="w-8 sm:w-10 h-24 sm:h-28 bg-[#E6C280] rounded-b-xl border-x-2 border-b-2 border-[#C9A057] shadow-md -mt-2" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
