'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { categories } from '@/data/categories';

export function CategorySection() {
  return (
    <section className="py-20 bg-[#FFF9F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 text-[#FF8A00] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Handcrafted Formats
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
              Explore Our <span className="text-[#FF8A00]">Categories</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl font-medium">
              From crunchy waffle cones to refreshing pure fruit candies, find the ideal sweet sensation for every craving.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-black text-[#FF8A00] hover:text-[#E67600] group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid with Playful Bento Rounded Corners */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className="group relative bg-white rounded-[2rem] p-4 border-2 border-orange-100 shadow-sm hover:shadow-[0_12px_28px_rgba(255,138,0,0.15)] hover:border-orange-300 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Top Mini Badge */}
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-orange-100 text-[#FF8A00] mb-3">
                {cat.badge}
              </span>

              {/* Category Circle Image with Hover Zoom */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-inner bg-orange-50 mb-3 border-2 border-orange-200 group-hover:border-[#FF8A00] transition-colors">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Name & Count */}
              <h3 className="text-sm sm:text-base font-black text-[#14213D] group-hover:text-[#FF8A00] transition-colors leading-tight">
                {cat.name}
              </h3>
              <p className="text-[11px] text-gray-500 font-bold mt-1">
                {cat.itemCount} Varieties
              </p>

              {/* Bottom Arrow */}
              <div className="mt-3 w-7 h-7 rounded-full bg-orange-50 text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
