'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Handshake, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Sparkles,
  TrendingUp,
  Snowflake,
  ShieldCheck,
  Megaphone
} from 'lucide-react';

export function DistributorFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    state: '',
    businessType: 'Supermarket / Retail Store',
    investmentCapacity: '$10,000 - $25,000',
    hasColdStorage: 'yes',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Commercial Perks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            icon: TrendingUp,
            title: 'High Profit Margins',
            desc: 'Earn 28% to 35% margin on retail and B2B orders with fast stock turnover.',
            badge: 'Up to 35%'
          },
          {
            icon: Snowflake,
            title: 'Zero-Break Cold Chain',
            desc: 'Temperature-controlled reefers ensure product arrives at rock-solid -18°C.',
            badge: 'ISO Certified'
          },
          {
            icon: Megaphone,
            title: 'Marketing & POS Kit',
            desc: 'Free branded display freezers, LED menu boards, tasting kits, and social ads.',
            badge: '100% Free'
          },
          {
            icon: ShieldCheck,
            title: 'Territory Exclusivity',
            desc: 'Guaranteed geo-fenced radius protection for our verified master franchise partners.',
            badge: 'Exclusive'
          }
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[28px] p-6 sm:p-7 border border-orange-100 shadow-sm hover:shadow-xl transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF8A00] flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-orange-50 text-[#FF8A00] border border-orange-100">
                {item.badge}
              </span>
            </div>
            <h3 className="text-lg font-black text-[#14213D]">{item.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Main Form & Brochure Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Franchise Guide & Brochure Download */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-orange-100 shadow-md space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-bold uppercase tracking-wider mb-2">
                <Handshake className="w-3.5 h-3.5" /> B2B Partner Onboarding
              </div>
              <h3 className="text-2xl font-black text-[#14213D]">
                Join India&apos;s Fastest Growing Artisan Ice Cream Network
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Whether you run an upscale grocery chain, a dessert parlour, or a regional distribution logistics fleet, IcyDelight is engineered for explosive consumer repeat rates.
              </p>
            </div>

            {/* Steps to partner */}
            <div className="space-y-3.5 pt-2">
              {[
                { step: '1', title: 'Submit Inquiry Form', desc: 'Fill your business and city details.' },
                { step: '2', title: 'Business Evaluation', desc: 'Our regional channel manager calls within 24 hours.' },
                { step: '3', title: 'Freezer & Stock Dispatch', desc: 'Freezer setup and first delivery of freshly churned stock.' }
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFF9F2] border border-orange-100">
                  <div className="w-8 h-8 rounded-xl bg-[#FF8A00] text-white flex items-center justify-center text-xs font-black shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#14213D]">{s.title}</h4>
                    <p className="text-xs text-gray-500 font-medium">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Brochure Download CTA */}
            <div id="brochure" className="pt-4 border-t border-gray-100">
              <button
                onClick={handleDownloadBrochure}
                className="w-full gradient-orange-btn py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Partner Catalog & Margin Sheet (PDF)</span>
              </button>

              {downloadSuccess && (
                <p className="text-xs text-emerald-600 font-bold text-center mt-2 animate-fadeIn">
                  ✓ IcyDelight_Partner_Kit_2026.pdf has started downloading!
                </p>
              )}
            </div>
          </div>

          {/* Hotline Box */}
          <div className="bg-[#14213D] text-white p-6 rounded-[28px] shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF8A00] flex items-center justify-center text-white shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-200 block uppercase tracking-wider">Direct B2B Franchise Desk</span>
              <a href="tel:+9118002094499" className="text-lg font-black text-white hover:text-[#FFA726] transition-colors">
                +91 1800-209-4499 (Ext. 2)
              </a>
              <span className="text-xs text-gray-400 block font-medium">Mon - Sat, 9:00 AM - 7:00 PM IST</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-10 border border-orange-100 shadow-xl">
          {isSubmitted ? (
            <div className="text-center py-16 space-y-4 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#14213D]">
                Application Received!
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in joining the IcyDelight family. Our regional distribution director will reach out to you at <span className="font-bold text-[#FF8A00]">{formData.phone || formData.email}</span> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    city: '',
                    state: '',
                    businessType: 'Supermarket / Retail Store',
                    investmentCapacity: '$10,000 - $25,000',
                    hasColdStorage: 'yes',
                    message: ''
                  });
                }}
                className="gradient-orange-btn px-6 py-3 rounded-full text-white text-xs font-bold shadow-md"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-black text-[#14213D]">
                  Distributor & Franchise Application
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Fill out the form below to initiate your onboarding process.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Business / Enterprise Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Kulkarni Food Enterprises"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@business.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Pune, Maharashtra"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Business Model
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-bold focus:outline-none focus:border-[#FF8A00]"
                  >
                    <option value="Supermarket / Retail Store">Supermarket / Retail Store</option>
                    <option value="Exclusive Ice Cream Parlour">Exclusive Ice Cream Parlour Franchise</option>
                    <option value="Regional FMCG Distributor">Regional FMCG Wholesale Distributor</option>
                    <option value="Hotel / Restaurant / Catering (HoReCa)">Hotel / Restaurant (HoReCa)</option>
                    <option value="Cloud Kitchen / Quick Commerce">Cloud Kitchen / Dark Store</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Planned Investment Capacity
                  </label>
                  <select
                    value={formData.investmentCapacity}
                    onChange={(e) => setFormData({ ...formData, investmentCapacity: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-bold focus:outline-none focus:border-[#FF8A00]"
                  >
                    <option value="$5,000 - $10,000">₹3 Lakhs - ₹7 Lakhs (Single Kiosk)</option>
                    <option value="$10,000 - $25,000">₹8 Lakhs - ₹15 Lakhs (Exclusive Parlour)</option>
                    <option value="$25,000 - $50,000">₹16 Lakhs - ₹35 Lakhs (City Master Hub)</option>
                    <option value="$50,000+">₹35 Lakhs+ (State Distribution Tier)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Existing Cold Storage Facility?
                  </label>
                  <div className="flex items-center gap-4 pt-2">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name="coldStorage"
                        value="yes"
                        checked={formData.hasColdStorage === 'yes'}
                        onChange={() => setFormData({ ...formData, hasColdStorage: 'yes' })}
                        className="text-[#FF8A00] focus:ring-[#FF8A00]"
                      />
                      <span>Yes (-18°C Ready)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name="coldStorage"
                        value="no"
                        checked={formData.hasColdStorage === 'no'}
                        onChange={() => setFormData({ ...formData, hasColdStorage: 'no' })}
                        className="text-[#FF8A00] focus:ring-[#FF8A00]"
                      />
                      <span>Need IcyDelight Freezers</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Additional Notes or Proposed Area of Operation
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your current retail counters or experience in food distribution..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-orange-btn py-4 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <span>Submit Distributor Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-gray-400 text-center font-medium">
                🔒 Your confidential business data is protected under our NDA & Privacy Standards.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
