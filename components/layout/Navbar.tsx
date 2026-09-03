'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  Menu, 
  X, 
  IceCream, 
  MapPin, 
  Handshake, 
  ChevronRight
} from 'lucide-react';
import { navigationLinks } from '@/data/navigation';
import { SearchModal } from './SearchModal';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none">
        <div
          className={`pointer-events-auto w-full rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 border-2 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl border-rose-200/90 shadow-[0_12px_32px_rgba(255,51,102,0.12)]'
              : 'bg-[#FFF5F7]/95 backdrop-blur-xl border-rose-200/70 shadow-[0_8px_24px_rgba(42,18,32,0.06)]'
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-[#FF3366] to-[#FF8A73] flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
              <IceCream className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.4]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#2A1220] leading-none">
                Icy<span className="text-[#FF3366]">Delight</span>
              </span>
              <span className="text-[8px] font-extrabold tracking-widest uppercase text-rose-900/60 mt-0.5">
                Artisanal Creamery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 whitespace-nowrap">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-black transition-all duration-200 whitespace-nowrap text-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#FF3366] text-white shadow-md shadow-pink-500/25'
                      : 'text-[#2A1220] hover:text-[#FF3366] hover:bg-rose-100/60'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0 whitespace-nowrap">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/90 border border-rose-200 text-gray-500 hover:text-[#FF3366] hover:border-[#FF3366] transition-all text-xs font-semibold shadow-sm group flex items-center gap-1.5"
              aria-label="Open search"
            >
              <Search className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FF3366] transition-colors" />
              <span className="text-gray-400 group-hover:text-gray-600 hidden xl:inline">Search treats</span>
              <kbd className="text-[9px] bg-rose-50 text-gray-400 font-mono px-1 rounded border border-rose-100 hidden xl:inline">
                /
              </kbd>
            </button>

            {/* Become Partner CTA Button */}
            <Link
              href="/distributor"
              className="gradient-strawberry-btn inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs font-black shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0"
            >
              <Handshake className="w-3.5 h-3.5" />
              <span>Become Partner</span>
            </Link>
          </div>

          {/* Mobile Actions Toggle */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full bg-white border border-rose-200 text-[#2A1220] hover:text-[#FF3366] transition-colors shadow-sm"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-white border border-rose-200 text-[#2A1220] hover:text-[#FF3366] transition-colors shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="pointer-events-auto mt-2 bg-[#FFF5F7] border-2 border-rose-200 rounded-[28px] shadow-2xl p-5 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              {navigationLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl font-black text-sm transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-[#FF3366] text-white shadow-sm'
                        : 'text-[#2A1220] hover:bg-rose-100/70'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-rose-200 space-y-2">
              <Link
                href="/distributor"
                onClick={() => setIsMobileMenuOpen(false)}
                className="gradient-strawberry-btn w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-black text-xs shadow-md"
              >
                <Handshake className="w-4 h-4" />
                <span>Become a Distributor</span>
              </Link>
              <Link
                href="/store-locator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-rose-200 text-[#2A1220] font-black text-xs shadow-sm hover:bg-rose-50"
              >
                <MapPin className="w-4 h-4 text-[#FF3366]" />
                <span>Find Nearby Store</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
