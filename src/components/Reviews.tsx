"use client";

import React from "react";
import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "../app/data/content";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-cream-50 py-16 md:py-24 border-b border-gold-400/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal delayMs={100} durationMs={600}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 font-sans font-bold text-[11px] uppercase tracking-wider mb-4">
              TESTIMONIALS
            </div>
          </ScrollReveal>
          
          <ScrollReveal delayMs={200} durationMs={600}>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight mb-6">
              Loved by Families Across Madhubani
            </h2>
          </ScrollReveal>

          {/* Google Review Badge Summary */}
          <ScrollReveal delayMs={300} durationMs={600}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white border border-gold-400/20 px-6 py-4 rounded-2xl shadow-sm mb-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-serif font-extrabold text-forest-900 leading-none">4.8</span>
                <span className="text-base text-forest-700/60 leading-none">/ 5</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < 4 ? "fill-mustard-500 text-mustard-500" : "fill-mustard-500/20 text-mustard-500/30"}
                  />
                ))}
              </div>
              <span className="text-sm font-sans font-semibold text-ink-800 border-t sm:border-t-0 sm:border-l border-gold-400/20 pt-2 sm:pt-0 sm:pl-3">
                Based on 200+ Happy Family Reviews
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((review, idx) => (
            <ScrollReveal
              key={review.id}
              delayMs={idx * 100}
              durationMs={600}
              className="bg-white rounded-2xl p-8 border border-gold-400/20 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "fill-mustard-500 text-mustard-500" : "fill-mustard-500/20 text-mustard-500/30"}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-ink-800 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between pt-4 border-t border-forest-900/5">
                <div>
                  <h4 className="font-serif text-base font-bold text-forest-900">
                    {review.name}
                  </h4>
                  <span className="text-xs font-sans text-forest-700/60 font-semibold mt-0.5 block">
                    {review.location}
                  </span>
                </div>
                <span className="text-[11px] font-sans font-bold text-mustard-600">
                  {review.date}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
