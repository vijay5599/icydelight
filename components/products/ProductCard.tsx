'use client';

import React from 'react';
import Link from 'next/link';
import { Eye, Star, ArrowRight } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-[2rem] p-4 sm:p-5 border-2 border-orange-100 shadow-sm hover:shadow-[0_12px_32px_rgba(255,138,0,0.12)] hover:border-orange-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Badges */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#FF8A00] border border-orange-200 shadow-sm">
          {product.categoryLabel}
        </span>
        {product.badge && (
          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF8A00] text-white shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Image Container with Hover Quick View */}
      <div className="relative w-full h-52 sm:h-56 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-[#FFF9F2] to-orange-50/60 mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Quick View Button on Hover */}
        {onQuickView && (
          <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="px-4 py-2.5 rounded-full bg-white text-[#14213D] hover:bg-[#FF8A00] hover:text-white font-black text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              aria-label={`Quick view ${product.name}`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="text-xs font-black text-[#14213D]">{product.rating}</span>
            <span className="text-[11px] text-gray-500 font-bold">({product.reviewsCount})</span>
          </div>

          {/* Title & Flavor */}
          <Link href={`/products/${product.slug}`} className="block group-hover:text-[#FF8A00] transition-colors">
            <h3 className="text-lg font-black text-[#14213D] line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 font-semibold line-clamp-1 mt-0.5">
            {product.flavor}
          </p>
        </div>

        {/* Bottom Bar: Price & Action */}
        <div className="pt-4 mt-3 border-t border-orange-100/80 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-black text-[#FF8A00]">
              {product.priceDisplay || 'XX Rs'}
            </span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="p-2.5 rounded-full bg-[#FFF9F2] hover:bg-[#FF8A00] text-[#FF8A00] hover:text-white transition-all duration-200 shadow-sm"
            aria-label={`Explore ${product.name}`}
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
