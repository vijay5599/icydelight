'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  IceCream, 
  ArrowUpDown,
  Filter,
  Check
} from 'lucide-react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { Product } from '@/types';
import { ProductCard } from '@/components/products/ProductCard';
import { QuickViewModal } from '@/components/products/QuickViewModal';

export function ProductCatalogClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...products];

    // Category Filter
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.flavor.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filters Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-[28px] border border-orange-100 shadow-sm mb-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by flavor, name, or ingredients..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] placeholder:text-gray-400 focus:outline-none focus:border-[#FF8A00] text-sm font-medium"
            />
          </div>

          {/* Sort Selector */}
          <div className="md:col-span-6 flex items-center justify-end gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-[#FF8A00]" />
              <span>Sort By:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3.5 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-bold focus:outline-none focus:border-[#FF8A00]"
            >
              <option value="popular">Most Popular & Bestsellers</option>
              <option value="rating">Highest Rated (★)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="pt-2 border-t border-orange-50 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-[#FF8A00] text-white shadow-md'
                : 'bg-orange-50/60 text-[#14213D] hover:bg-orange-100'
            }`}
          >
            All Products ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.slug
                  ? 'bg-[#FF8A00] text-white shadow-md'
                  : 'bg-orange-50/60 text-[#14213D] hover:bg-orange-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm font-bold text-gray-500">
          Showing <span className="text-[#14213D] font-black">{filteredAndSortedProducts.length}</span> delicious treats
        </p>

        {selectedCategory !== 'all' && (
          <button
            onClick={() => setSelectedCategory('all')}
            className="text-xs font-bold text-[#FF8A00] hover:underline"
          >
            Clear Category Filter
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[32px] border border-orange-100 p-8">
          <IceCream className="w-16 h-16 text-orange-300 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-black text-[#14213D]">No ice cream treats matched your filter</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
            Try resetting your search query or selecting a different category from the top tabs.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-6 gradient-orange-btn px-6 py-3 rounded-full text-white text-xs font-bold shadow-md"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setActiveProduct(p)}
            />
          ))}
        </div>
      )}

      {/* Quick View Dialog */}
      <QuickViewModal
        product={activeProduct}
        isOpen={!!activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}
