'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '@/components/shared/SocialIcons';

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

  const quickLinks = [
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products' },
    { title: 'About Us', href: '/about' },
    { title: 'Store Locator', href: '/store-locator' },
    { title: 'Contact Us', href: '/contact' }
  ];

  const productLinks = [
    { title: 'Ice Candy', href: '/products?category=ice-candy' },
    { title: 'Cups', href: '/products?category=cups' },
    { title: 'Chocobars', href: '/products?category=chocobars' },
    { title: 'Cones', href: '/products?category=cones' },
    { title: 'Family Packs', href: '/products?category=family-packs' },
    { title: 'Ice Pops', href: '/products?category=ice-pops' }
  ];

  return (
    <footer className="bg-[#0E1B33] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid matching client design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-white/10">
          {/* Column 1: Brand Logo & Tagline (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <BrandLogo lightMode={true} />
            <p className="text-xs text-gray-300 leading-relaxed max-w-xs font-normal">
              IcyDelight brings happiness in every bite with our delicious range of ice creams made for every mood.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-[#FF8A00] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Our Products</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {productLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-[#FF8A00] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Get In Touch</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@icydelight.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>info@icydelight.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#FF8A00] hover:text-[#FF8A00] flex items-center justify-center text-xs transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#FF8A00] hover:text-[#FF8A00] flex items-center justify-center text-xs transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#FF8A00] hover:text-[#FF8A00] flex items-center justify-center text-xs transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 5: Newsletter (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Newsletter</h4>
            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              Subscribe to get updates on new flavors and offers.
            </p>

            {isSubscribed ? (
              <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-12 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-xs focus:outline-none focus:border-[#FF8A00]"
                />
                <button
                  type="submit"
                  className="absolute right-1 w-8 h-8 rounded-full bg-[#FF8A00] hover:bg-[#E67600] text-white flex items-center justify-center shadow-md transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy + Green Veg mark */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© 2024-2026 IcyDelight. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <Link href="/about#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/about#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>

            {/* Indian 100% Veg Symbol */}
            <div className="flex items-center gap-1.5 ml-2">
              <div className="w-4 h-4 border border-emerald-500 flex items-center justify-center p-0.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">100% Veg</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
