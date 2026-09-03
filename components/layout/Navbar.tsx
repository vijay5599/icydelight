'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { SearchModal } from './SearchModal';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { title: 'Home', href: '/' },
    { 
      title: 'Products', 
      href: '/products',
      hasDropdown: true 
    },
    { title: 'About Us', href: '/about' },
    { title: 'Distributor', href: '/distributor' },
    { title: 'Store Locator', href: '/store-locator' },
    { title: 'Contact Us', href: '/contact' }
  ];

  const productCategories = [
    { name: 'Ice Candy', href: '/products?category=ice-candy' },
    { name: 'Cups', href: '/products?category=cups' },
    { name: 'Chocobars', href: '/products?category=chocobars' },
    { name: 'Cones', href: '/products?category=cones' },
    { name: 'Family Packs', href: '/products?category=family-packs' },
    { name: 'Sundaes', href: '/products?category=sundaes' },
    { name: 'Ice Pops', href: '/products?category=ice-pops' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#FFF9F2]/95 backdrop-blur-md shadow-sm border-b border-orange-100'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 1. Left: Brand Logo */}
            <BrandLogo />

            {/* 2. Center: Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.title} 
                      className="relative"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`text-sm font-bold flex items-center gap-1 transition-colors py-2 ${
                          isActive
                            ? 'text-[#FF8A00] font-black border-b-2 border-[#FF8A00]'
                            : 'text-[#14213D] hover:text-[#FF8A00]'
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </Link>

                      {/* Dropdown Menu */}
                      {isProductsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-2xl shadow-xl border border-orange-100 p-2 z-50 animate-fadeIn">
                          {productCategories.map((cat) => (
                            <Link
                              key={cat.name}
                              href={cat.href}
                              className="block px-3 py-2 text-xs font-bold text-[#14213D] hover:bg-[#FFF9F2] hover:text-[#FF8A00] rounded-xl transition-colors"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`text-sm font-bold transition-all py-2 ${
                      isActive
                        ? 'text-[#FF8A00] font-black border-b-2 border-[#FF8A00]'
                        : 'text-[#14213D] hover:text-[#FF8A00]'
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Right: Search Button + Circular Orange Menu Toggle */}
            <div className="flex items-center gap-3">
              {/* Search Icon Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#14213D] hover:text-[#FF8A00] hover:border-[#FF8A00] flex items-center justify-center transition-all shadow-sm"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Orange Hamburger Menu Button (Mobile Only) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-[#FF8A00] hover:bg-[#E67600] text-white flex items-center justify-center transition-all shadow-md shrink-0"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 stroke-[2.4]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Slide-down Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#FFF9F2] border-b-2 border-orange-200 shadow-2xl px-6 py-6 space-y-4 animate-fadeIn">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-colors ${
                      isActive
                        ? 'bg-[#FF8A00] text-white font-black'
                        : 'text-[#14213D] hover:bg-orange-100/70'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-orange-200 grid grid-cols-2 gap-2">
              {productCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-bold text-center bg-white rounded-xl border border-orange-100 text-[#14213D] hover:border-[#FF8A00]"
                >
                  {cat.name}
                </Link>
              ))}
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
