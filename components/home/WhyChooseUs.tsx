'use client';

import React from 'react';
import { 
  Sparkles, 
  Leaf, 
  Award, 
  ShieldCheck, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Made with real sun-ripened fruits and 100% pure farm milk. Absolutely zero artificial colors or synthetic gelatins.',
      color: '#10B981',
      bgColor: '#E6F8F2',
      badge: '100% Pure'
    },
    {
      icon: Award,
      title: 'Artisanal Churn',
      description: 'Slow-churned in small batches with strict culinary standards for dense, velvety texture without airy fillers.',
      color: '#FF8A00',
      bgColor: '#FFF3E0',
      badge: 'Master Churned'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Production',
      description: 'Automated state-of-the-art sterile manufacturing facility with continuous -18°C cold chain IoT telemetry.',
      color: '#0284C7',
      bgColor: '#E0F2FE',
      badge: 'ISO Certified'
    },
    {
      icon: HeartHandshake,
      title: 'Loved by Families',
      description: 'Crafted with passion to bring generations together over unforgettable scoops, celebrations, and smiles.',
      color: '#FF4B72',
      bgColor: '#FFE4EC',
      badge: '1M+ Scoops'
    }
  ];

  return (
    <section className="py-20 bg-[#FFF9F2] relative overflow-hidden">
      {/* Background Accent Rings */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-orange-200 text-[#FF8A00] text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Our Quality Pledge
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-[#FF8A00] to-[#FF4B72] bg-clip-text text-transparent">IcyDelight</span>?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed font-semibold">
            We believe ice cream should be pure joy made from honest food. Here is how we ensure world-class delight in every bite.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-[2.5rem] p-7 border-2 border-orange-100 shadow-sm hover:shadow-[0_16px_36px_rgba(20,33,61,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                    style={{ backgroundColor: item.bgColor, color: item.color }}
                  >
                    <item.icon className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <span 
                    className="text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-sm"
                    style={{ backgroundColor: item.bgColor, color: item.color }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-black text-[#14213D] mb-2.5 group-hover:text-[#FF8A00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                <span>Verified Clean-Label</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
