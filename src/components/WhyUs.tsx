"use client";

import React from "react";
import { Leaf, Users, Bike, Sparkles, MapPin, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { features } from "../app/data/content";

const iconMap: Record<string, React.ComponentType<any>> = {
  Leaf,
  Users,
  Bike,
  Sparkles,
  MapPin,
  Heart,
};

export default function WhyUs() {
  const featureItems = features;

  return (
    <section
      id="why-us"
      className="bg-cream-100 py-16 md:py-24 border-b border-gold-400/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal delayMs={100} durationMs={600}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 font-sans font-bold text-[11px] uppercase tracking-wider mb-4">
              WHY US
            </div>
          </ScrollReveal>
          
          <ScrollReveal delayMs={200} durationMs={600}>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight mb-4">
              Providing Madhubani With More Than Just Great Food
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delayMs={300} durationMs={600}>
            <p className="font-sans text-ink-800/80 text-base">
              We focus on delivering high-end restaurant service, strict food hygiene standards, and reliable self-delivery.
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureItems.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Heart;
            return (
              <ScrollReveal
                key={feature.id}
                delayMs={idx * 100}
                durationMs={600}
                className="bg-cream-50 rounded-2xl p-8 border border-gold-400/10 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Icon inside mustard gold circle */}
                <div className="w-12 h-12 rounded-full bg-mustard-300/40 border border-mustard-500/10 flex items-center justify-center text-forest-900 mb-6 group-hover:bg-mustard-500 group-hover:text-forest-900 transition-colors duration-300">
                  <IconComponent size={22} className="stroke-[2px]" />
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-ink-800 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
