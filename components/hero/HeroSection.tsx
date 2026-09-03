'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Handshake, 
  Star, 
  ShieldCheck, 
  Heart, 
  Award,
  IceCream
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFE3EB]/40 to-[#FFF5F7]">
      {/* Background Soft Glow Orbs & Wave Details */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#FF3366]/20 via-[#FF8A73]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-200/30 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Wave in Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          <path
            d="M-100 400 C 300 200, 600 600, 1000 350 C 1200 200, 1400 450, 1600 300"
            stroke="#FF8A73"
            strokeWidth="4"
            strokeDasharray="12 12"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subheadline & Chunky Action Buttons */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Top Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-rose-200 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#FF3366] animate-ping" />
              <span className="text-xs md:text-sm font-black text-[#2A1220] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF3366]" /> 100% Real Farm Milk & Mountain Berries
              </span>
            </motion.div>

            {/* Main Punchy Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-[#2A1220] tracking-tight leading-[1.05]"
            >
              Life tastes better with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FF3366] via-[#FF8A73] to-[#FF3366] bg-clip-text text-transparent underline decoration-[#FF8A73]/40">
                FrostBerry
              </span>{' '}
              Ice Cream
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 font-semibold max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              High-voltage frozen indulgence made using real orchard fruits, rich whole milk, and single-origin chocolate. Churned to silky perfection without artificial stabilizers.
            </motion.p>

            {/* Chunky Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-3xl bg-[#FF3366] text-white text-base font-black uppercase tracking-tight shadow-[6px_6px_0px_0px_#2A1220] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/distributor"
                className="w-full sm:w-auto px-8 py-4 rounded-3xl bg-white border-2 border-rose-200 text-[#2A1220] text-base font-black uppercase tracking-tight shadow-[6px_6px_0px_0px_rgba(42,18,32,0.12)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Handshake className="w-5 h-5 text-[#FF3366]" />
                <span>Become Distributor</span>
              </Link>
            </motion.div>

            {/* Social Proof & Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-gray-700 border-t border-rose-200/80"
            >
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl border border-rose-200 shadow-sm">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-black text-[#2A1220]">4.9 / 5.0 (15,000+ Scoops)</span>
              </div>

              <div className="flex items-center gap-1.5 font-black text-gray-800 bg-white px-3.5 py-2 rounded-2xl border border-rose-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Zero Artificial Colors</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Featured Ice Cream with Floating Fruits & Bakery Stickers */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] flex items-center justify-center">
              {/* Ripple Circles */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#FF8A73]/40 animate-spin-slow" />
              <div className="absolute w-[88%] h-[88%] rounded-full bg-gradient-to-tr from-[#FF8A73]/25 to-[#FF3366]/15 blur-xl" />
              <div className="absolute w-[76%] h-[76%] rounded-full bg-white shadow-2xl border-4 border-[#FFE3EB]" />

              {/* Main Featured Ice Cream Image with Float Animation */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-20 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group"
              >
                <img
                  src="https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=1000&q=85"
                  alt="FrostBerry Bliss Ice Cream"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-black uppercase tracking-wider bg-[#FF3366] px-3 py-1 rounded-full shadow-md">
                      Chef Specialty
                    </span>
                    <h4 className="text-xl font-black mt-1">FrostBerry Bliss Cone</h4>
                    <p className="text-xs text-rose-200 font-bold">Wild Mountain Berry & Cream Swirl</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Sticker 1: Strawberry (Top Left) */}
              <motion.div
                animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-3 sm:top-2 sm:left-2 z-30 bg-white p-3.5 rounded-3xl shadow-[0_10px_25px_rgba(42,18,32,0.12)] border-2 border-rose-200 flex items-center gap-2.5"
              >
                <span className="text-2xl">🍓</span>
                <div>
                  <span className="text-xs font-black text-[#2A1220] block">Real Strawberries</span>
                  <span className="text-[10px] text-[#FF3366] font-black uppercase">Handpicked Daily</span>
                </div>
              </motion.div>

              {/* Floating Sticker 2: Orange / Citrus (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-5 -right-2 sm:bottom-4 sm:right-0 z-30 bg-white p-3.5 rounded-3xl shadow-[0_10px_25px_rgba(42,18,32,0.12)] border-2 border-orange-200 flex items-center gap-2.5"
              >
                <span className="text-2xl">🍊</span>
                <div>
                  <span className="text-xs font-black text-[#2A1220] block">Valencia Citrus</span>
                  <span className="text-[10px] text-[#FF8A73] font-black uppercase">Cold-Pressed</span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Cream & Milk Splash (Top Right) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-6 -right-5 sm:top-10 sm:-right-4 z-30 bg-gradient-to-r from-[#FF3366] to-[#FF8A73] text-white p-3.5 rounded-3xl shadow-[0_10px_25px_rgba(255,51,102,0.3)] flex items-center gap-2 border-2 border-white"
              >
                <span className="text-xl">🥛</span>
                <div>
                  <span className="text-xs font-black block">100% Whole Milk</span>
                  <span className="text-[9px] text-rose-100 uppercase tracking-wider font-extrabold">Never Powdered</span>
                </div>
              </motion.div>

              {/* Floating Sticker 4: Mint Leaf (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute bottom-6 left-0 z-30 bg-white px-3.5 py-2 rounded-full shadow-lg border-2 border-emerald-200 flex items-center gap-1.5 text-xs font-black text-emerald-800"
              >
                <span>🍃 Fresh Mint Sprigs</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
