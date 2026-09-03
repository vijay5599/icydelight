import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHeader({
  badge,
  title,
  highlightedWord,
  description,
  breadcrumbs
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-14 md:pt-40 md:pb-20 bg-gradient-to-b from-[#FFF9F2] via-[#FFF3E0]/50 to-[#FFF9F2] overflow-hidden border-b border-orange-100/60">
      {/* Soft Ambient Orbs */}
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-[#FF8A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#FFA726]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-500 font-semibold mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#FF8A00] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#FF8A00] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#14213D] font-bold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> {badge}
          </div>
        )}

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#14213D] tracking-tight">
          {title}{' '}
          {highlightedWord && (
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFA726] bg-clip-text text-transparent">
              {highlightedWord}
            </span>
          )}
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
