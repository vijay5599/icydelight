'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FeaturedProductsSection() {
  const featuredList = [
    {
      id: 'mango-dolly',
      name: 'Mango Dolly',
      category: 'Ice Candy',
      flavor: 'Alphonso Mango',
      tag: '100% Real Mango',
      bgColor: '#FFF5CC',
      image: '/images/products/mango-dolly.png',
      slug: 'mango-dolly'
    },
    {
      id: 'raspberry-dolly',
      name: 'Raspberry Dolly',
      category: 'Ice Candy',
      flavor: 'Wild Raspberry',
      tag: 'Berry Delight',
      bgColor: '#FFE4EC',
      image: '/images/products/raspberry-dolly.png',
      slug: 'raspberry-dolly'
    },
    {
      id: 'almond-bar',
      name: 'Almond Bar Box',
      category: 'Chocobars',
      flavor: 'Roasted Almonds',
      tag: 'Gourmet Box',
      bgColor: '#F5EBE6',
      image: '/images/products/almond-bar.png',
      slug: 'almond-bar'
    },
    {
      id: 'chocolate-pistachio',
      name: 'Chocolate Pistachio',
      category: 'Chocobars',
      flavor: 'Pistachio Choco',
      tag: 'Nutty Crunch',
      bgColor: '#F7FEE7',
      image: '/images/products/chocolate-pistachio.png',
      slug: 'chocolate-pistachio'
    },
    {
      id: 'kesar-pista-box',
      name: 'Kesar Pista Kulfi',
      category: 'Kulfi',
      flavor: 'Kashmiri Saffron',
      tag: 'Royal Kulfi',
      bgColor: '#FEF3C7',
      image: '/images/products/kesar-pista-box.png',
      slug: 'kesar-pista-box'
    },
    {
      id: 'mava-kulfi-prism',
      name: 'Mava Kulfi Royal Box',
      category: 'Kulfi',
      flavor: 'Desi Rabdi',
      tag: 'Prism Royal',
      bgColor: '#E6F8F2',
      image: '/images/products/mava-kulfi-prism.png',
      slug: 'mava-kulfi-prism'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with orange underline */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Creations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14213D] tracking-tight">
            Our Featured Products
          </h2>
          {/* Small orange underline bar */}
          <div className="w-16 h-1 bg-[#FF8A00] mx-auto mt-3 rounded-full" />
        </div>

        {/* 6-Card Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {featuredList.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.slug}`}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-3 flex flex-col justify-between"
            >
              {/* Colored Card Image Box */}
              <div 
                className="w-full h-40 sm:h-48 rounded-2xl flex items-center justify-center p-2 relative overflow-hidden mb-3"
                style={{ backgroundColor: item.bgColor }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Title & Badge Row */}
              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-bold text-gray-400 block uppercase">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-bold text-[#FF8A00] bg-orange-50 px-1.5 py-0.5 rounded-md border border-orange-100/60 whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#14213D] group-hover:text-[#FF8A00] transition-colors line-clamp-1">
                  {item.flavor}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Center Button: View All Products */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="dark-pill-btn px-8 py-3.5 rounded-full text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-md"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
