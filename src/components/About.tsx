"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const stats = [
    { value: "5+ Years", label: "Serving Madhubani" },
    { value: "100%", label: "Hygienic Kitchen" },
    { value: "Hot & Fresh", label: "Self Delivery" },
  ];

  return (
    <section
      id="about"
      className="relative bg-cream-50 py-16 md:py-24 overflow-hidden border-b border-gold-400/10"
    >
      {/* Onion with a Heart Motif Watermark Background */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] text-forest-900 pointer-events-none w-96 h-96 transform translate-x-12 translate-y-12">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M 50 10 C 32 22 28 47 50 57 C 72 47 68 22 50 10 Z" />
          <path d="M 47 8 C 44 -2 36 -2 36 -2" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 50 8 C 50 -6 50 -6 50 -6" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 53 8 C 56 -2 64 -2 64 -2" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 50 37 C 47.5 33.5 43 33.5 43 30 C 43 27 46 25 50 28 C 54 25 57 27 57 30 C 57 33.5 52.5 33.5 50 37 Z" fill="#FFFDF8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative">
            <ScrollReveal delayMs={100} durationMs={600} className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                alt="Green Onions Restaurant seating arrangements and premium cozy environment for families"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* Image highlight border overlay */}
              <div className="absolute inset-0 border border-gold-400/25 rounded-2xl pointer-events-none"></div>
            </ScrollReveal>
            
            {/* Soft decorative badge card overlay */}
            <ScrollReveal delayMs={300} durationMs={800} className="absolute -bottom-6 -right-4 sm:right-6 bg-forest-900 text-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-forest-800">
              <span className="font-serif text-3.5xl font-extrabold text-mustard-500 block mb-1">Veg & Non-Veg</span>
              <span className="font-sans font-bold text-sm tracking-wide text-cream-100 uppercase block">Available</span>
              <p className="font-sans text-xs text-cream-100/70 mt-2 leading-snug">
                Delicious food cooked with segregated kitchen sections to maintain absolute trust and purity.
              </p>
            </ScrollReveal>
          </div>

          {/* Text Column */}
          <div className="flex flex-col items-start">
            <ScrollReveal delayMs={100} durationMs={600}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 font-sans font-bold text-[11px] uppercase tracking-wider mb-4">
                OUR STORY
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={200} durationMs={600}>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight mb-6">
                A Family Table, <br className="hidden sm:inline" />
                Rooted in Madhubani
              </h2>
            </ScrollReveal>

            <ScrollReveal delayMs={300} durationMs={700}>
              <p className="font-sans text-ink-800 text-base sm:text-lg leading-relaxed mb-6">
                At Green Onions Restaurant, we believe that food brings families together. Every dish is a celebration of flavor, prepared in a state-of-the-art hygienic kitchen using farm-fresh ingredients sourced directly from local vendors in Madhubani.
              </p>
              <p className="font-sans text-ink-800 text-base leading-relaxed mb-8">
                Whether you dine in our comfortable, air-conditioned family parlor or order a fresh meal delivered to your doorstep via our dedicated delivery rider team, our goal is to offer a premium, trust-worthy culinary experience that keeps you coming back.
              </p>
            </ScrollReveal>

            {/* Stat Row */}
            <ScrollReveal delayMs={400} durationMs={800} className="w-full">
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-forest-900/10 w-full mb-2">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <span className="font-serif text-xl sm:text-2xl font-extrabold text-forest-900 block">
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-forest-700/80 font-medium block mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
