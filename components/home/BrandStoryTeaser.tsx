'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Heart, Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { timelineMilestones } from '@/data/timeline';

export function BrandStoryTeaser() {
  return (
    <section className="py-20 bg-[#FFF9F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Lifestyle Imagery */}
          <div className="lg:col-span-5 relative">
            {/* Main Image */}
            <div className="relative w-full h-[420px] sm:h-[500px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=80"
                alt="IcyDelight artisanal ice cream making"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#FF8A00] px-3 py-1 rounded-full">
                    Our Philosophy
                  </span>
                  <h4 className="text-2xl font-black">Real Food, Pure Joy</h4>
                  <p className="text-xs text-orange-100">Every batch slow-churned from scratch daily.</p>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF8A00] flex items-center justify-center font-black text-xl">
                100%
              </div>
              <div>
                <span className="text-sm font-extrabold text-[#14213D] block">Natural Cream</span>
                <span className="text-xs text-gray-500">Zero Artificial Flavouring</span>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Milestone Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Born from Obsession
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight leading-tight">
                Crafting Frozen Smiles Since <span className="text-[#FF8A00]">2018</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                IcyDelight began with a simple rebellion against synthetic, air-pumped supermarket tubs. We set out to resurrect the lost art of true creamery churn: whole milk from partner dairy farms, sun-ripened single-origin fruits, and Belgian cocoa.
              </p>
            </div>

            {/* 4-Step Timeline */}
            <div className="space-y-4 pt-2">
              {timelineMilestones.map((item, idx) => (
                <div
                  key={item.year}
                  className="group relative bg-white p-4 sm:p-5 rounded-2xl border border-orange-100/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FF8A00] to-[#FFA726] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0 shadow-sm">
                    {item.year}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-[#14213D] group-hover:text-[#FF8A00] transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-orange-50 text-[#FF8A00] border border-orange-100 shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold mt-0.5">{item.subtitle}</p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#FF8A00] hover:text-[#E67600] group"
              >
                <span>Read the complete IcyDelight Story & Farm Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
