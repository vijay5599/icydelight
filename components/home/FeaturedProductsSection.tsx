'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Flame, Star } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types';
import { ProductCard } from '@/components/products/ProductCard';
import { QuickViewModal } from '@/components/products/QuickViewModal';

export function FeaturedProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const categoriesFilter = [
    { id: 'all', label: 'All Delights 🍨' },
    { id: 'cones', label: 'Waffle Cones 🍦' },
    { id: 'chocobars', label: 'Chocobars 🍫' },
    { id: 'sundaes', label: 'Sundaes 🍒' },
    { id: 'cups', label: 'Cups 🥭' },
    { id: 'ice-pops', label: 'Fruit Pops 🍓' },
    { id: 'family-packs', label: 'Family Tubs 🍧' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products.slice(0, 8)
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE4EC] text-[#FF4B72] text-xs font-black uppercase tracking-wider mb-3 shadow-sm border border-rose-200">
              <Sparkles className="w-3.5 h-3.5" /> Curated Flavor Collection
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
              Featured <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF4B72] bg-clip-text text-transparent">Creations</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl font-medium">
              Slow-churned small batches made with pure milk, Ratnagiri Alphonso mangoes, wild berries, and Belgian chocolate.
            </p>
          </div>

          <Link
            href="/products"
            className="btn-chunky-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white text-xs sm:text-sm font-black uppercase tracking-wider self-start md:self-auto"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categoriesFilter.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-200 whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-[#14213D] text-white shadow-md'
                  : 'bg-[#FFF9F2] text-[#14213D] hover:bg-orange-100/80 border-2 border-orange-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setActiveProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Dialog */}
      <QuickViewModal
        product={activeProduct}
        isOpen={!!activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
}
