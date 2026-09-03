'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  IceCream, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Heart,
  ArrowRight
} from 'lucide-react';
import { footerNavigation } from '@/data/navigation';
import { WaveDivider } from '@/components/shared/WaveDivider';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from '@/components/shared/SocialIcons';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-[#2A1220] text-white pt-16 pb-10 overflow-hidden">
      {/* Wave transition from page background */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <WaveDivider fillColor="#2A1220" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF3366]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FF8A73]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Header Card */}
        <div className="mb-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-rose-500/20 via-pink-500/15 to-rose-600/20 border border-rose-500/30 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF3366]/20 border border-[#FF3366]/40 text-[#FF8A73] text-xs font-black uppercase tracking-wider mb-3">
                <IceCream className="w-3.5 h-3.5" /> Sweet Club Membership
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white">
                Get 15% Off Your First Cold Treat
              </h3>
              <p className="text-gray-300 text-sm md:text-base mt-2 max-w-xl font-medium">
                Subscribe for exclusive secret flavor drops, weekend parlour discounts, and behind-the-scenes recipes from our master churners.
              </p>
            </div>

            <div className="lg:col-span-5">
              {isSubscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-sm font-bold animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>You&apos;re on the VIP list! Check your inbox for your welcome coupon code.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF3366] focus:ring-2 focus:ring-[#FF3366]/40 text-sm font-medium backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="gradient-strawberry-btn whitespace-nowrap px-6 py-3.5 rounded-full text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shrink-0"
                  >
                    <span>Claim 15%</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Socials (Col span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group inline-block">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FF3366] to-[#FF8A73] flex items-center justify-center text-white shadow-md">
                <IceCream className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  Icy<span className="text-[#FF3366]">Delight</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mt-0.5">
                  Pure Cream • Real Fruits
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm font-medium">
              Handcrafting joyful frozen moments with whole farm milk, sun-ripened orchard fruits, and single-origin chocolate. Never artificial. Always pure bliss.
            </p>

            {/* Quality Certifications */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
                <Award className="w-4 h-4 text-[#FF8A73]" />
                <span>100% Real Milk</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cold-Chain Certified</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
                { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
                { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
                { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#FF3366] hover:bg-[#FF3366] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-black text-white tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3366]" /> Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300 font-medium">
              {footerNavigation.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-[#FF8A73] transition-colors flex items-center gap-1 group">
                    <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-black text-white tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8A73]" /> Product Range
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300 font-medium">
              {footerNavigation.products.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-[#FF8A73] transition-colors flex items-center gap-1 group">
                    <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Partners & Contact (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-black text-white tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3366]" /> Distribution & Care
            </h4>
            <ul className="space-y-3 text-sm text-gray-300 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF3366] shrink-0 mt-0.5" />
                <span>HQ: 104 Creamery Avenue, Food Park Tech City, Mumbai 400050</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF8A73] shrink-0" />
                <a href="tel:+9118002094499" className="hover:text-white transition-colors">
                  1800-209-4499 (Toll Free)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF3366] shrink-0" />
                <a href="mailto:hello@icydelight.com" className="hover:text-white transition-colors">
                  hello@icydelight.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/distributor"
                  className="inline-flex items-center gap-2 text-xs font-black text-[#FF8A73] hover:text-white transition-colors"
                >
                  <span>Distributor B2B Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} IcyDelight Foods Pvt. Ltd. Handcrafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for ice cream lovers.
          </p>

          <div className="flex items-center gap-6 text-gray-400">
            <Link href="/about#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about#terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/about#allergens" className="hover:text-white transition-colors">
              Allergen Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
