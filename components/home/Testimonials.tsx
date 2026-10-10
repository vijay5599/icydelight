'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonial = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get 3 visible testimonials wrapping around the list
  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-[#FFF9F2] relative overflow-hidden border-t border-orange-100/60">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Customer Reviews & Ratings
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
              Loved by <span className="text-[#FF8A00]">Ice Cream Lovers</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl">
              Discover what dessert connoisseurs, foodies, and families love most about IcyDelight&apos;s handcrafted flavors.
            </p>
          </div>

          {/* Rating Summary & Controls */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-orange-100 shadow-sm">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-sm font-black text-[#14213D]">4.9 / 5</span>
              <span className="text-xs text-gray-400">(1,200+ Reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white hover:bg-[#FF8A00] hover:text-white text-[#14213D] border border-orange-100 transition-all shadow-sm hover:shadow-md active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white hover:bg-[#FF8A00] hover:text-white text-[#14213D] border border-orange-100 transition-all shadow-sm hover:shadow-md active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-white rounded-[28px] p-7 border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-[#14213D] ml-1.5">{item.rating}.0</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#FFF9F2] flex items-center justify-center text-orange-300 group-hover:bg-orange-100 group-hover:text-[#FF8A00] transition-colors">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-orange-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF8A00] shadow-sm">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-black text-[#14213D]">{item.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <p className="text-xs text-gray-400 font-medium">{item.role}</p>
                    {item.location && (
                      <p className="text-[11px] text-gray-400">{item.location}</p>
                    )}
                  </div>
                </div>

                {item.favoriteFlavor && (
                  <div className="text-right max-w-[120px]">
                    <span className="text-[10px] text-gray-400 block font-semibold uppercase tracking-wider">Fav:</span>
                    <span className="text-xs font-bold text-[#FF8A00] line-clamp-1">{item.favoriteFlavor}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
