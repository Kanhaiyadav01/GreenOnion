"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { restaurantInfo, getWhatsAppLink } from "../app/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-forest-900 to-forest-800 py-24 md:py-32 lg:py-40 overflow-hidden border-b border-gold-400/20"
    >
      {/* Decorative Radial Glow Blobs */}
      <div className="absolute top-12 left-12 w-96 h-96 rounded-full bg-forest-700/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-12 right-12 w-96 h-96 rounded-full bg-mustard-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <ScrollReveal delayMs={100} durationMs={600}>
              {/* Badge Pill - transparent/bordered style matching the reference */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cream-100 font-sans font-bold text-xs uppercase tracking-wider mb-6">
                <span className="text-mustard-500">★</span> MADHUBANI&apos;S FAMILY DINING FAVOURITE
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={200} durationMs={700}>
              {/* Heading with highlighted words in mustard-gold */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Madhubani&apos;s <br className="hidden sm:inline" />
                <span className="text-mustard-500">Best Family</span> Restaurant
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={300} durationMs={700}>
              {/* Subheading list */}
              <p className="font-sans font-semibold text-mustard-300 text-xs sm:text-sm tracking-wide uppercase mb-4 flex flex-wrap gap-x-3 gap-y-1 items-center">
                <span>Multi-Cuisine</span>
                <span className="text-white/40 text-[10px]">•</span>
                <span>Family Dining</span>
                <span className="text-white/40 text-[10px]">•</span>
                <span>Online Delivery</span>
                <span className="text-white/40 text-[10px]">•</span>
                <span>Warm Ambiance</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={400} durationMs={800}>
              {/* Paragraph with reduced opacity cream text */}
              <p className="font-sans text-cream-100/80 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Welcome to Green Onions Restaurant, where we combine the warmth of traditional Bihari hospitality with premium culinary creations. Located near Station Chowk in Madhubani, we serve fresh, hygienic, and deliciously prepared Veg & Non-Veg meals perfect for family gatherings.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delayMs={500} durationMs={800} className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                {/* Primary Inverted Button (pops on dark green background) */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-white text-forest-900 px-8 py-4 rounded-full font-sans font-bold text-base shadow-lg shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
                >
                  <MessageCircle size={20} className="fill-current text-green-600" />
                  <span>Order on WhatsApp</span>
                </a>
                
                {/* Outline white button */}
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/20 hover:border-white hover:bg-white/5 px-8 py-4 rounded-full font-sans font-bold text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
                >
                  <Phone size={18} className="text-mustard-550" />
                  <span>Call Now</span>
                </a>
                
                {/* Ghost white button */}
                <a
                  href={restaurantInfo.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-cream-100 hover:text-white font-sans font-bold text-base px-2 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded-md"
                >
                  <MapPin size={18} className="text-mustard-500" />
                  <span>Get Directions</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Trust Strip */}
            <ScrollReveal delayMs={600} durationMs={900}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4 border-t border-white/10 w-full text-sm font-sans font-semibold text-cream-100/60">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 block animate-pulse"></span>
                  Fresh, Hygienic Food
                </span>
                <span className="hidden sm:inline text-white/10">|</span>
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 block animate-pulse"></span>
                  In-House Rider Delivery
                </span>
                <span className="hidden sm:inline text-white/10">|</span>
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 block animate-pulse"></span>
                  Open Daily
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium Collage / Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScrollReveal delayMs={300} durationMs={800} className="w-full relative max-w-[480px] lg:max-w-none">
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-4 border border-white/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none"></div>
              <div className="absolute -inset-8 border border-white/5 rounded-full pointer-events-none"></div>

              {/* Main Image Wrapper */}
              <div className="relative aspect-square w-full rounded-full overflow-hidden border-[8px] border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop"
                  alt="Premium Multi-Cuisine Indian food platter served at Green Onions Restaurant"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badges - updated for non-veg / multi-cuisine accuracy */}
              <div className="absolute bottom-6 -left-4 bg-mustard-500 text-forest-900 font-sans font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-full shadow-lg border border-mustard-600 animate-bounce flex flex-col items-center">
                <span className="text-[10px] font-semibold opacity-90 leading-none">PREPARED</span>
                <span className="text-sm font-extrabold leading-none mt-1">FRESH DAILY</span>
              </div>
              
              <div className="absolute top-6 -right-2 bg-white text-forest-900 font-sans font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-full shadow-lg border border-white/30 flex flex-col items-center">
                <span className="text-forest-800 font-extrabold text-[10px]">VEG & NON-VEG</span>
                <span className="text-xs font-extrabold leading-none mt-1">FAMILY FAVOURITE</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
