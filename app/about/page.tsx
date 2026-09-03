import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  Leaf, 
  Heart, 
  Award, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Smile,
  Milk,
  SunMedium,
  Check,
  Flame,
  Star
} from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { timelineMilestones } from '@/data/timeline';

export const metadata: Metadata = {
  title: 'Our Story & Farm-to-Cone Craftsmanship | IcyDelight',
  description: 'Discover how IcyDelight reimagined ice cream with 100% whole farm milk, authentic orchard fruits, and zero artificial stabilizers. Read our journey from a small churner to 250+ outlets.',
};

export default function AboutPage() {
  const steps = [
    {
      num: '01',
      title: 'Partner Dairy Farms',
      desc: 'We source fresh, non-homogenized whole milk daily from certified ethical cattle farms with free-grazing cows.',
      icon: Milk,
      badge: 'Farm Fresh'
    },
    {
      num: '02',
      title: 'Peak Orchard Harvest',
      desc: 'Our Ratnagiri Alphonso mangoes and Mahabaleshwar strawberries are harvested strictly at peak natural sugar brix.',
      icon: SunMedium,
      badge: 'Real Fruit'
    },
    {
      num: '03',
      title: 'Slow Batch Churning',
      desc: 'We churn at low RPM to ensure a rich, velvety micro-cream structure with minimal air overrun.',
      icon: Sparkles,
      badge: 'Artisanal'
    },
    {
      num: '04',
      title: '-18°C Cold Chain',
      desc: 'Flash frozen instantly to preserve natural flavors without artificial crystal inhibitors or chemical stabilizers.',
      icon: ShieldCheck,
      badge: 'Pure & Cold'
    }
  ];

  return (
    <>
      <PageHeader
        badge="Pure Churned Philosophy"
        title="The Art of Pure"
        highlightedWord="Creamery Bliss"
        description="We started IcyDelight with a single promise: handcrafted frozen desserts made with real food that brings honest, vibrant joy to every scoop."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Brand Heritage Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Showcase */}
            <div className="lg:col-span-6 relative">
              {/* Main Lifestyle Image with Bakery-inspired Sticker Border */}
              <div className="relative w-full h-[380px] sm:h-[480px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#FFA726]/30 bg-gradient-to-br from-orange-100 to-amber-50 group">
                <img
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80"
                  alt="IcyDelight Creamery Kitchen and Artisanal Sundaes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <span className="text-[11px] font-black uppercase tracking-wider bg-[#FF8A00] px-3 py-1 rounded-full shadow-md">
                      Artisan Kitchen
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black mt-1">Churned from Real Food</h4>
                    <p className="text-xs text-orange-200">Slow-churned daily in small batches.</p>
                  </div>
                </div>
              </div>

              {/* Floating Sticker 1: 8+ Years */}
              <div className="absolute -bottom-6 -right-3 sm:right-6 bg-white p-4 sm:p-5 rounded-3xl shadow-[0_12px_30px_rgba(20,33,61,0.12)] border-2 border-orange-200 flex items-center gap-3.5 transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF8A00] to-[#FFA726] text-white flex items-center justify-center font-black text-xl shadow-md">
                  8+
                </div>
                <div>
                  <span className="text-sm font-black text-[#14213D] block">Years of Mastery</span>
                  <span className="text-xs text-[#FF8A00] font-bold">Founded in 2018</span>
                </div>
              </div>

              {/* Floating Sticker 2: 100% Real Milk */}
              <div className="absolute -top-4 -left-3 sm:left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border-2 border-orange-200 flex items-center gap-2 text-xs font-black text-[#14213D]">
                <span>🥛 100% Whole Dairy Milk</span>
              </div>
            </div>

            {/* Right Column: Founder Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Founder Manifesto
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight leading-tight">
                Saying No to Synthetic Pastes, Saying Yes to <span className="text-[#FF8A00]">Real Food</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                When we looked at commercial ice cream freezers, we were shocked: vegetable oils, synthetic berry essences, liquid glucose, and 50% pumped air. We knew ice cream lovers deserved something truly authentic.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                At IcyDelight, every single tub, bar, and waffle cone is made with real milk cream, ripe whole fruit pulps, single-origin Belgian cocoa, and raw cane sugar. No palm oils. No synthetic food coloring. Ever.
              </p>

              {/* Stats Bento Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-3xl bg-[#FFF9F2] border-2 border-orange-100 shadow-sm">
                  <span className="text-3xl font-black text-[#FF8A00] block">100%</span>
                  <span className="text-xs font-extrabold text-gray-700 mt-1 block">Pure Dairy & Fruit</span>
                </div>
                <div className="p-5 rounded-3xl bg-[#FFF9F2] border-2 border-orange-100 shadow-sm">
                  <span className="text-3xl font-black text-[#FF8A00] block">250+</span>
                  <span className="text-xs font-extrabold text-gray-700 mt-1 block">Stores Across India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm to Cone Process */}
      <section id="process" className="py-20 bg-[#FFF9F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Step-by-Step Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
              Our <span className="text-[#FF8A00]">Farm-to-Cone</span> Process
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 font-medium">
              How we turn whole farm ingredients into velvety frozen masterpieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-[2rem] p-6 sm:p-7 border-2 border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#FFA726]">{step.num}</span>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF8A00] flex items-center justify-center shadow-sm">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-orange-100 text-[#FF8A00] inline-block mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-black text-[#14213D] mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Certified Quality Step
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="awards" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
              Our Growth <span className="text-[#FF8A00]">Milestones</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 font-medium">
              From a weekend passion project to one of India’s most celebrated premium FMCG ice cream brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineMilestones.map((item) => (
              <div
                key={item.year}
                className="bg-[#FFF9F2] rounded-[2rem] p-6 border-2 border-orange-100 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#FF8A00] text-white text-xs font-black shadow-sm">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-black uppercase text-gray-500">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#14213D] mb-1">{item.title}</h3>
                  <p className="text-xs font-bold text-[#FF8A00] mb-2">{item.subtitle}</p>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Pledge */}
      <section id="sustainability" className="py-16 bg-[#FFF9F2] border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border-4 border-emerald-700/40">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700 text-emerald-200 text-xs font-black uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5" /> Eco-Responsible Scoop
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">
                100% Compostable Tubs & 0% Carbon Cold Storage
              </h3>
              <p className="text-emerald-100 text-sm leading-relaxed font-medium">
                We believe sweet indulgence should never harm the planet. 85% of our packaging is biodegradable papercraft, and our main churning facility runs on 100% rooftop solar power.
              </p>
            </div>

            <Link
              href="/products"
              className="gradient-orange-btn px-8 py-4 rounded-full text-white font-black text-sm shrink-0 shadow-lg hover:shadow-2xl transition-all"
            >
              Taste Our Flavors
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
