'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, Heart } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#FFF9F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Honest Scoops
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
              Loved by <span className="text-[#FF8A00]">Real Foodies</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl">
              Hear what dessert connoisseurs, families, and partner distributors have to say about IcyDelight.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white hover:bg-[#FF8A00] hover:text-white text-[#14213D] border border-orange-100 transition-all shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white hover:bg-[#FF8A00] hover:text-white text-[#14213D] border border-orange-100 transition-all shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] p-7 border border-orange-100/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-orange-200" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-orange-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFA726]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#14213D]">{item.name}</h4>
                    <p className="text-xs text-gray-400 font-medium">{item.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block font-semibold">Fav Flavor:</span>
                  <span className="text-xs font-bold text-[#FF8A00] line-clamp-1">{item.favoriteFlavor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
