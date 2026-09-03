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
      flavor: 'Orange',
      price: '₹10',
      bgColor: '#FFEBD4',
      image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=500&q=80',
      slug: 'zesty-orange-ice-candy'
    },
    {
      id: 'ice-candy-mango',
      name: 'Ice Candy Mango',
      category: 'Ice Candy',
      flavor: 'Mango',
      price: '₹10',
      bgColor: '#FFF5CC',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80',
      slug: 'alphonso-mango-passion-cup'
    },
    {
      id: 'chocobar-choco-crunch',
      name: 'Chocobar Choco Crunch',
      category: 'Chocobar',
      flavor: 'Choco Crunch',
      price: '₹15',
      bgColor: '#F5EBE6',
      image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=500&q=80',
      slug: 'belgian-truffle-chocobar'
    },
    {
      id: 'cup-belgian-chocolate',
      name: 'Cup Belgian Chocolate',
      category: 'Cup',
      flavor: 'Belgian Chocolate',
      price: '₹25',
      bgColor: '#EFEAE6',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80',
      slug: 'espresso-brownie-chocobar'
    },
    {
      id: 'cup-strawberry-rush',
      name: 'Cup Strawberry Rush',
      category: 'Cup',
      flavor: 'Strawberry Rush',
      price: '₹25',
      bgColor: '#FCEAEF',
      image: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=500&q=80',
      slug: 'frostberry-bliss-cone'
    },
    {
      id: 'cone-american-nuts',
      name: 'Cone American Nuts',
      category: 'Cone',
      flavor: 'American Nuts',
      price: '₹20',
      bgColor: '#FFF0DB',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=500&q=80',
      slug: 'triple-chocolate-cone'
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
                className="w-full h-36 sm:h-44 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden mb-3"
                style={{ backgroundColor: item.bgColor }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500 ease-out shadow-sm"
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
                <span className="text-[11px] sm:text-xs font-black bg-[#FF8A00] text-white px-2.5 py-1 rounded-lg shrink-0 shadow-sm">
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
