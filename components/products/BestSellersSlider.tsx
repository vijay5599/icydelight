'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Sparkles, 
  ArrowRight, 
  Pause, 
  Play,
  Award
} from 'lucide-react';
import { products } from '@/data/products';

export function BestSellersSlider() {
  const bestSellers = products.filter(p => p.isBestSeller);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bestSellers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bestSellers.length) % bestSellers.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex, bestSellers.length]);

  const currentProduct = bestSellers[currentIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE4EC] text-[#FF4B72] text-xs font-black uppercase tracking-wider mb-3 border border-rose-200">
              <Award className="w-3.5 h-3.5 text-[#FF8A00]" /> Hall of Fame
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
              Our Iconic <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF4B72] bg-clip-text text-transparent">Best Sellers</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl font-medium">
              The masterpieces our patrons order again and again. Handcrafted with passion, loved by millions.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-[#FFF9F2] hover:bg-orange-100 text-[#14213D] transition-colors border border-orange-200 shadow-sm"
              aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#FF8A00]" />}
            </button>
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-[#FFF9F2] hover:bg-[#FF8A00] hover:text-white text-[#14213D] transition-all border border-orange-200 shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-[#FFF9F2] hover:bg-[#FF8A00] hover:text-white text-[#14213D] transition-all border border-orange-200 shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Card */}
        {currentProduct && (
          <div className="relative bg-gradient-to-br from-[#FFF9F2] via-orange-50/70 to-rose-50/50 rounded-[3rem] p-6 sm:p-10 lg:p-14 border-4 border-orange-100 shadow-2xl overflow-hidden transition-all duration-500">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFA726]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF4B72]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Product Visual with Sticker Border */}
              <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md h-72 sm:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#FF8A00] text-white text-xs font-black uppercase tracking-wider shadow-md">
                    {currentProduct.badge || '★ Bestseller'}
                  </div>
                </div>
              </div>

              {/* Product Story & Info */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black uppercase px-3.5 py-1 rounded-full bg-orange-100 text-[#FF8A00]">
                      {currentProduct.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-black bg-white px-3 py-1 rounded-full border border-orange-200">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{currentProduct.rating}</span>
                      <span className="text-gray-400 font-semibold">({currentProduct.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14213D] tracking-tight leading-tight">
                    {currentProduct.name}
                  </h3>
                  <p className="text-base sm:text-lg font-black text-[#FF8A00] mt-1">
                    {currentProduct.flavor}
                  </p>
                </div>

                {/* Narrative / Story */}
                <div className="bg-white/90 backdrop-blur-sm p-5 rounded-3xl border-2 border-orange-100 shadow-sm space-y-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#FF4B72] block">
                    The Artisan Story ✨
                  </span>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold">
                    &ldquo;{currentProduct.story}&rdquo;
                  </p>
                </div>

                {/* Pricing & Chunky Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#14213D]">${currentProduct.price.toFixed(2)}</span>
                    {currentProduct.originalPrice && (
                      <span className="text-base font-semibold text-gray-400 line-through">
                        ${currentProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/products/${currentProduct.slug}`}
                    className="btn-chunky-primary px-7 py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span>Taste This Treat</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/store-locator"
                    className="btn-chunky-white px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider"
                  >
                    Find in Store
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide Pagination Dots */}
            <div className="mt-8 pt-6 border-t border-orange-200/80 flex items-center justify-center gap-2">
              {bestSellers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-[#FF8A00]'
                      : 'w-2.5 bg-orange-200 hover:bg-orange-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
