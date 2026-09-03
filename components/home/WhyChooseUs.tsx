'use client';

import React from 'react';
import { 
  Leaf, 
  Milk, 
  ShieldCheck, 
  Heart
} from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Made with real fruits and natural ingredients.',
      color: '#10B981',
      bgColor: '#E6F8F2'
    },
    {
      icon: Milk,
      title: 'Premium Quality',
      description: 'We use the finest quality milk and ingredients.',
      color: '#FF8A00',
      bgColor: '#FFF3E0'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic & Safe',
      description: 'Manufactured in a clean and hygienic environment.',
      color: '#0284C7',
      bgColor: '#E0F2FE'
    },
    {
      icon: Heart,
      title: 'Loved by All',
      description: 'Perfect treats for kids, families and everyone.',
      color: '#FF4B72',
      bgColor: '#FFE4EC'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FFF9F2] border-t border-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with orange underline */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#14213D] tracking-tight">
            Why Choose IcyDelight?
          </h2>
          {/* Small orange underline bar */}
          <div className="w-16 h-1 bg-[#FF8A00] mx-auto mt-3 rounded-full" />
        </div>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4"
            >
              {/* Circular Icon Badge */}
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-110"
                style={{ backgroundColor: item.bgColor, color: item.color }}
              >
                <item.icon className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Text */}
              <div className="space-y-1">
                <h3 className="text-base font-black text-[#14213D]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
