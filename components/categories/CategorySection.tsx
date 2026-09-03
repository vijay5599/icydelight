'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function CategorySection() {
  const categoryItems = [
    {
      name: 'Ice Candy',
      slug: 'ice-candy',
      image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=300&q=80',
      emoji: '🍊'
    },
    {
      name: 'Cups',
      slug: 'cups',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=300&q=80',
      emoji: '🍨'
    },
    {
      name: 'Chocobars',
      slug: 'chocobars',
      image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=300&q=80',
      emoji: '🍫'
    },
    {
      name: 'Cones',
      slug: 'cones',
      image: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=300&q=80',
      emoji: '🍦'
    },
    {
      name: 'Family Packs',
      slug: 'family-packs',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=300&q=80',
      emoji: '🍧'
    },
    {
      name: 'Sundaes',
      slug: 'sundaes',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80',
      emoji: '🍒'
    },
    {
      name: 'Ice Pops',
      slug: 'ice-pops',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80',
      emoji: '🍓'
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
                  className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300"
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
