'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';
import { instagramFeed } from '@/data/navigation';
import { InstagramIcon } from '@/components/shared/SocialIcons';

export function InstagramGallery() {
  return (
    <section className="py-20 bg-[#FFF9F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#FF8A00] text-xs font-bold uppercase tracking-wider mb-3">
            <InstagramIcon className="w-3.5 h-3.5" /> #IcyDelightMoments
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14213D] tracking-tight">
            Follow Our <span className="text-[#FF8A00]">Sweet Journey</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Tag @icydelight_official in your sweetest moments to get featured on our national community feed.
          </p>
        </div>

        {/* 6-Item Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramFeed.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-44 sm:h-52 rounded-[22px] overflow-hidden bg-orange-100 shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay with Likes & Comments */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <span className="p-1 rounded-full bg-white/20 backdrop-blur-sm">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <p className="text-[11px] font-medium line-clamp-2 leading-tight text-gray-100">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-[10px] font-bold text-orange-200">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-rose-500 text-rose-500" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-white" /> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
