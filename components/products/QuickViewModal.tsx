'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  X, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  Check, 
  Layers, 
  AlertTriangle 
} from 'lucide-react';
import { Product } from '@/types';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [selectedPack, setSelectedPack] = useState<string>('');

  useEffect(() => {
    if (product) {
      setSelectedPack(product.packSizes[0] || '');
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-[32px] shadow-2xl border border-orange-100 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 hover:bg-orange-100 text-gray-500 hover:text-[#FF8A00] transition-colors shadow-md backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large Product Visual */}
        <div className="md:w-1/2 relative bg-gradient-to-br from-[#FFF9F2] via-orange-50/70 to-amber-100/40 p-6 sm:p-8 flex flex-col items-center justify-center min-h-[300px] md:min-h-full overflow-hidden">
          {product.badge && (
            <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#FF8A00] text-white text-xs font-black shadow-md tracking-wide">
              {product.badge}
            </div>
          )}

          {/* Background Radial Glow */}
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-orange-200/50 blur-2xl pointer-events-none" />

          <div className="relative w-full h-64 sm:h-80 flex items-center justify-center p-3 z-10">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain mx-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-700 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-orange-100/80 z-10">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Farm-Fresh Dairy & Real Fruits</span>
          </div>
        </div>

        {/* Right Side: Product Details & Specs */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#FF8A00]">
                {product.categoryLabel}
              </span>
              <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-gray-400 font-normal">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-[#14213D] leading-tight">
              {product.name}
            </h3>
            <p className="text-sm font-semibold text-[#FF8A00] mt-1">{product.flavor}</p>
          </div>

          <div className="flex items-baseline gap-3 pb-3 border-b border-gray-100">
            <span className="text-3xl font-black text-[#FF8A00]">
              {product.priceDisplay || 'XX Rs'}
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              In Stock at Parlours
            </span>
          </div>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Pack Sizes */}
          {product.packSizes && product.packSizes.length > 0 && (
            <div>
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                Select Pack Size:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {product.packSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedPack(size)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold border text-left transition-all ${
                      selectedPack === size
                        ? 'border-[#FF8A00] bg-orange-50 text-[#FF8A00] shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Nutrition Mini Matrix */}
          <div className="bg-[#FFF9F2] p-3.5 rounded-2xl border border-orange-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#14213D] mb-2">
              <Flame className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>Nutrition Highlights (per serving):</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-white p-2 rounded-xl border border-orange-100">
                <span className="text-[10px] text-gray-400 block font-semibold">Calories</span>
                <span className="text-xs font-extrabold text-[#14213D]">{product.nutrition.calories} kcal</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-orange-100">
                <span className="text-[10px] text-gray-400 block font-semibold">Total Fat</span>
                <span className="text-xs font-extrabold text-[#14213D]">{product.nutrition.totalFat}</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-orange-100">
                <span className="text-[10px] text-gray-400 block font-semibold">Protein</span>
                <span className="text-xs font-extrabold text-[#14213D]">{product.nutrition.protein}</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-orange-100">
                <span className="text-[10px] text-gray-400 block font-semibold">Sugars</span>
                <span className="text-xs font-extrabold text-[#14213D]">{product.nutrition.sugars}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <Link
              href={`/products/${product.slug}`}
              onClick={onClose}
              className="gradient-orange-btn w-full py-3.5 rounded-2xl text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md"
            >
              <span>View Full Story & Recipe</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/store-locator"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-[#FFF9F2] hover:bg-orange-100 border border-orange-200 text-[#14213D] font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Locate Parlour</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
