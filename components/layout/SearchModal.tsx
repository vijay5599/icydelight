'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight, Sparkles, IceCream } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
}

export function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>(products);

  useEffect(() => {
    if (query.trim() === '') {
      setResults(products.slice(0, 6));
    } else {
      const q = query.toLowerCase();
      const filtered = products.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.flavor.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
      setResults(filtered);
    }
  }, [query]);

  // Handle escape key
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-2xl border border-orange-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-6 py-4 border-b border-orange-100 bg-[#FFF9F2]/70">
          <Search className="w-6 h-6 text-[#FF8A00] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search flavor, cone, chocobar, sundae..."
            className="w-full bg-transparent text-lg text-[#14213D] placeholder:text-gray-400 focus:outline-none font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 mr-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-[#FF8A00] rounded-full hover:bg-orange-50 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-6 py-2.5 bg-[#FFF9F2]/40 border-b border-orange-50 flex items-center gap-2 overflow-x-auto text-xs font-semibold text-gray-600">
          <span className="flex items-center gap-1 text-[#FF8A00] shrink-0">
            <Sparkles className="w-3.5 h-3.5" /> Popular:
          </span>
          {['Belgian Truffle', 'FrostBerry', 'Alphonso Mango', 'Salted Caramel', 'Ice Pops'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3 py-1 rounded-full bg-white border border-orange-200/60 hover:border-[#FF8A00] hover:text-[#FF8A00] transition-colors whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 md:p-6 space-y-3">
          {results.length === 0 ? (
            <div className="text-center py-12">
              <IceCream className="w-12 h-12 text-orange-300 mx-auto mb-3 animate-bounce" />
              <p className="text-base font-bold text-[#14213D]">No icy treats found for &quot;{query}&quot;</p>
              <p className="text-sm text-gray-500 mt-1">Try searching for &quot;Mango&quot;, &quot;Chocobar&quot;, or &quot;Cone&quot;</p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                className="group flex items-center justify-between p-3 rounded-2xl hover:bg-[#FFF9F2] transition-colors border border-transparent hover:border-orange-100"
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-orange-50 shrink-0 border border-orange-100 flex items-center justify-center p-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-[#FF8A00]">
                        {product.categoryLabel}
                      </span>
                      {product.isBestSeller && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500 text-white">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={onClose}
                      className="text-base font-bold text-[#14213D] hover:text-[#FF8A00] transition-colors line-clamp-1 mt-0.5"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-gray-500 line-clamp-1">{product.flavor}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-base font-extrabold text-[#14213D]">${product.price.toFixed(2)}</span>
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="p-2 rounded-full bg-orange-50 text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Found {results.length} delicious product{results.length === 1 ? '' : 's'}</span>
          <Link
            href="/products"
            onClick={onClose}
            className="font-bold text-[#FF8A00] hover:underline flex items-center gap-1"
          >
            View all products <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
