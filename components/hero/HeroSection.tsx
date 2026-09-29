'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-black uppercase tracking-wider"
            >
              <Award className="w-4 h-4 text-[#FF8A00]" />
              <span>Make Your Choice Right !!</span>
            </motion.div>

            {/* Big Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#14213D] tracking-tight leading-[0.95]">
                Life is Better
              </h1>
              <h1 className="pb-2.5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#FF8A00] via-[#FFA726] to-[#E11D48] bg-clip-text text-transparent tracking-tight leading-[0.95]">
                With IcyDelight
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 font-medium max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Deliciously crafted artisanal ice creams, fruit dollies, and desi kulfis made with farm-fresh dairy and 100% natural ingredients.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                href="/products"
                className="orange-pill-btn px-8 py-4 rounded-full text-white text-sm sm:text-base font-bold inline-flex items-center gap-2.5 shadow-lg group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/store-locator"
                className="dark-pill-btn px-7 py-4 rounded-full text-white text-sm sm:text-base font-bold inline-flex items-center gap-2 shadow-md"
              >
                <span>Locate Parlour</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Real Product Box Cutouts */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
            {/* Liquid Juice Splash Background Artwork */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Splash Glow */}
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#FFA726]/40 via-[#FF8A00]/25 to-[#E11D48]/20 rounded-full blur-3xl animate-pulse-glow" />
            </div>

            {/* Floating Mango Dolly Box (Left) */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-6, -4, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-20 w-36 sm:w-48 h-64 sm:h-80 flex items-center justify-center drop-shadow-2xl"
            >
              <img
                src="/images/products/mango-dolly.png"
                alt="Mango Dolly Box"
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Center Main Hero: Almond Bar Box */}
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [2, 4, 2] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="relative z-30 w-40 sm:w-52 h-72 sm:h-96 -ml-8 sm:-ml-12 flex items-center justify-center drop-shadow-2xl"
            >
              <img
                src="/images/products/almond-bar.png"
                alt="Almond Bar Box"
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Floating Raspberry Dolly Box (Right) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [8, 10, 8] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="relative z-10 w-32 sm:w-44 h-60 sm:h-76 -ml-6 sm:-ml-8 flex items-center justify-center drop-shadow-2xl"
            >
              <img
                src="/images/products/raspberry-dolly.png"
                alt="Raspberry Dolly Box"
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
