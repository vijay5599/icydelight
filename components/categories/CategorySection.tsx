'use client';

import React from 'react';
import Link from 'next/link';

export function CategorySection() {
  const categoryItems = [
    {
      name: 'Ice Candy',
      slug: 'ice-candy',
      image: '/images/products/ice-candy-orange.png',
      emoji: '🍊'
    },
    {
      name: 'Cups',
      slug: 'cups',
      image: '/images/products/strawberry-cup.png',
      emoji: '🍨'
    },
    {
      name: 'Chocobars',
      slug: 'chocobars',
      image: '/images/products/mini-chocobar.png',
      emoji: '🍫'
    },
    {
      name: 'Cones',
      slug: 'cones',
      image: '/images/products/chocolate-cone.png',
      emoji: '🍦'
    },
    {
      name: 'Family Packs',
      slug: 'family-packs',
      image: '/images/products/family-pack-tub.png',
      emoji: '🍧'
    },
    {
      name: 'Sundaes',
      slug: 'sundaes',
      image: '/images/products/cassata-slice.png',
      emoji: '🍒'
    },
    {
      name: 'Traditional Kulfis',
      slug: 'kulfi',
      image: '/images/products/mava-kulfi.png',
      emoji: '🍮'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 lg:-mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Floating White Category Bar */}
      <div className="bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-orange-100/80 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center">
          {categoryItems.map((item) => (
            <Link
              key={item.name}
              href={`/products?category=${item.slug}`}
              className="group flex flex-col items-center justify-center p-2 rounded-2xl hover:bg-[#FFF9F2] transition-all duration-300"
            >
              {/* Image Cutout Container */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <span className="text-xs sm:text-sm font-bold text-[#14213D] group-hover:text-[#FF8A00] transition-colors text-center">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
