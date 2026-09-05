'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeaturedProductsSection() {
  const featuredList = [
    {
      id: 'ice-candy-orange',
      name: 'Ice Candy Orange',
      category: 'Ice Candy',
      flavor: 'Orange Candy',
      price: 'XX Rs',
      bgColor: '#FFEBD4',
      image: '/images/products/ice-candy-orange.png',
      slug: 'ice-candy-orange'
    },
    {
      id: 'ice-candy-mango',
      name: 'Ice Candy Mango',
      category: 'Ice Candy',
      flavor: 'Mango Candy',
      price: 'XX Rs',
      bgColor: '#FFF5CC',
      image: '/images/products/ice-candy-mango.png',
      slug: 'ice-candy-mango'
    },
    {
      id: 'mini-chocobar',
      name: 'Mini Chocobar Crunch',
      category: 'Chocobar',
      flavor: 'Choco Crunch',
      price: 'XX Rs',
      bgColor: '#F5EBE6',
      image: '/images/products/mini-chocobar.png',
      slug: 'mini-chocobar'
    },
    {
      id: 'mava-kulfi',
      name: 'Mava Kulfi Royal Box',
      category: 'Kulfi',
      flavor: 'Mava Kulfi',
      price: 'XX Rs',
      bgColor: '#E6F8F2',
      image: '/images/products/mava-kulfi.png',
      slug: 'mava-kulfi'
    },
    {
      id: 'strawberry-cup',
      name: 'Cup Strawberry Rush',
      category: 'Cup',
      flavor: 'Strawberry Cup',
      price: 'XX Rs',
      bgColor: '#FCEAEF',
      image: '/images/products/strawberry-cup.png',
      slug: 'strawberry-cup'
    },
    {
      id: 'chocolate-cone',
      name: 'Double Chocolate Cone',
      category: 'Cone',
      flavor: 'Choco Cone',
      price: 'XX Rs',
      bgColor: '#FFF0DB',
      image: '/images/products/chocolate-cone.png',
      slug: 'chocolate-cone'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with orange underline */}
        <div className="text-center mb-12">
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
                className="w-full h-36 sm:h-44 rounded-2xl flex items-center justify-center p-2 relative overflow-hidden mb-3"
                style={{ backgroundColor: item.bgColor }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Title & Price Row */}
              <div className="flex items-end justify-between gap-1 pt-1">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 block uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#14213D] group-hover:text-[#FF8A00] transition-colors line-clamp-1">
                    {item.flavor}
                  </h3>
                </div>

                {/* Orange Price Badge */}
                <span className="text-[10px] sm:text-[11px] font-black bg-[#FF8A00] text-white px-2 py-1 rounded-lg shrink-0 shadow-sm whitespace-nowrap">
                  {item.price}
                </span>
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
