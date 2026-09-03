'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Handshake, 
  TrendingUp, 
  Megaphone, 
  Snowflake, 
  Truck, 
  Download, 
  ArrowRight,
  CheckCircle2,
  FileText
} from 'lucide-react';

export function DistributorBanner() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const perks = [
    { icon: TrendingUp, title: 'Attractive Margins', desc: 'Up to 35% ROI with fast inventory turns' },
    { icon: Megaphone, title: 'Marketing Support', desc: 'Free POS stands, neon signages, social campaigns' },
    { icon: Snowflake, title: 'Cold Chain Support', desc: 'Zero-spoilage frozen shipping & freezer subsidy' },
    { icon: Truck, title: 'Timely Delivery', desc: 'Guaranteed 24-48h dispatch from regional hubs' }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-[#FF3366] via-[#FF5E85] to-[#FF8A73] p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border-4 border-rose-200">
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content: Headline & Subheadline */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider">
                <Handshake className="w-3.5 h-3.5" /> B2B Franchise & Distribution Opportunity
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Become Our <span className="underline decoration-white/40">Distributor</span>
              </h2>

              <p className="text-rose-100 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
                Partner with the fastest-growing artisanal FMCG dessert brand. Expand your business with high consumer recall, premium margins, and complete marketing backing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/distributor"
                  className="px-8 py-4 rounded-3xl bg-[#2A1220] hover:bg-[#1C0B15] text-white text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                >
                  <span>Join Now & Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={handleDownloadBrochure}
                  className="px-7 py-4 rounded-3xl bg-white/20 hover:bg-white/30 border-2 border-white/50 text-white text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Brochure</span>
                </button>
              </div>

              {/* Download Feedback toast */}
              {downloadSuccess && (
                <div className="p-3.5 rounded-2xl bg-white text-[#2A1220] text-xs font-black flex items-center gap-2.5 shadow-xl animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>IcyDelight_Partner_Brochure_2026.pdf is downloading!</span>
                </div>
              )}
            </div>

            {/* Right Content: 4 Key Perks Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="bg-white/15 backdrop-blur-md rounded-3xl p-5 border border-white/25 hover:bg-white/25 transition-all space-y-2"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white text-[#FF3366] flex items-center justify-center shadow-md">
                    <perk.icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h4 className="text-base font-black text-white">{perk.title}</h4>
                  <p className="text-xs text-rose-100 leading-relaxed font-medium">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
