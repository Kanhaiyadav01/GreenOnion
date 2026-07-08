"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { popularDishes, getWhatsAppLink } from "../app/data/content";

export default function PopularDishes() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Biryani", "Hot Tandoor", "Noodles & Fried Rice", "Momos"];

  const filteredDishes = activeTab === "All"
    ? popularDishes
    : popularDishes.filter(dish => dish.category === activeTab);

  // Fallback image map per category if dish has no image
  const categoryImages: Record<string, string> = {
    "Biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
    "Hot Tandoor": "https://images.unsplash.com/photo-1610057099443-fde8c4d90f9b?q=80&w=600&auto=format&fit=crop",
    "Noodles & Fried Rice": "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop",
    "Momos": "https://images.unsplash.com/photo-1625220194771-7ebded0d90ae?q=80&w=600&auto=format&fit=crop",
  };

  return (
    <section
      id="menu"
      className="bg-cream-50 py-16 md:py-24 border-b border-gold-400/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal delayMs={100} durationMs={600}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 font-sans font-bold text-[11px] uppercase tracking-wider mb-4">
              SIGNATURE SELECTIONS
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200} durationMs={600}>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight mb-4 inline-block relative">
              Our Popular Dishes
              {/* Underline */}
              <span className="block h-1 w-20 bg-mustard-500 mx-auto mt-3 rounded-full"></span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={300} durationMs={600}>
            <p className="font-sans text-ink-800/80 text-base mt-2">
              Explore customer favourites from our hot tandoor, Dum biryani hubs, and wok specials.
            </p>
          </ScrollReveal>
        </div>

        {/* Categories Tab Swapper */}
        <ScrollReveal delayMs={100} durationMs={600}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2.5 rounded-full font-sans font-bold text-sm tracking-wide transition-all border ${
                  activeTab === category
                    ? "bg-forest-900 text-white border-forest-900 shadow-md shadow-forest-900/10"
                    : "bg-white text-forest-900 border-forest-900/15 hover:border-forest-900/40 hover:bg-cream-100/40"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500`}
                aria-label={`Show ${category} dishes`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDishes.map((dish, idx) => {
            const displayImage = dish.image || categoryImages[dish.category] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop";
            return (
              <ScrollReveal
                key={dish.id}
                delayMs={idx * 50}
                durationMs={500}
                className="bg-white rounded-2xl border border-gold-400/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[4/3] w-full bg-cream-100 overflow-hidden">
                  <Image
                    src={displayImage}
                    alt={`${dish.name} - ${dish.description || ''}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Veg / Non-Veg Indicator Overlay */}
                  <div
                    className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-1.5 rounded-md border border-black/10 flex items-center justify-center"
                    title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                  >
                    <span className={`border-[1.5px] ${dish.isVeg ? "border-green-600" : "border-red-650"} w-3.5 h-3.5 flex items-center justify-center p-[2px]`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${dish.isVeg ? "bg-green-650" : "bg-red-650"} block`}></span>
                    </span>
                  </div>

                  {/* Bestseller Overlay Tag */}
                  {dish.isPopular && (
                    <div className="absolute top-4 right-4 bg-mustard-500 text-forest-900 font-sans font-bold text-[9px] uppercase tracking-wider px-2 py-1 rounded border border-mustard-650">
                      Bestseller
                    </div>
                  )}

                  {/* Half / Full pricing tag overlay */}
                  {(dish.halfPrice || dish.fullPrice) && (
                    <div className="absolute bottom-2 left-2 bg-forest-900/80 backdrop-blur-sm text-white font-sans font-bold text-[10px] px-2 py-0.5 rounded">
                      Half/Full options available
                    </div>
                  )}
                </div>

                {/* Dish Metadata */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-mustard-600 font-sans">
                      {dish.category}
                    </span>
                    
                    <h3 className="font-serif text-lg font-bold text-forest-900 mt-1 mb-2 group-hover:text-forest-700 transition-colors">
                      {dish.name}
                    </h3>
                    
                    {dish.description && (
                      <p className="font-sans text-ink-800/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {dish.description}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-forest-900/5">
                    {/* Price */}
                    <div className="flex flex-col">
                      {dish.priceUnconfirmed ? (
                        <span className="text-[10.5px] font-sans font-bold text-red-650 uppercase tracking-tight">
                          Ask for price
                        </span>
                      ) : dish.halfPrice && dish.fullPrice ? (
                        <span className="font-serif text-base font-extrabold text-forest-900">
                          ₹{dish.halfPrice} <span className="text-[11px] font-normal text-forest-750">/ ₹{dish.fullPrice}</span>
                        </span>
                      ) : (
                        <span className="font-serif text-lg font-extrabold text-forest-900">
                          ₹{dish.price}
                        </span>
                      )}
                    </div>

                    {/* Order WhatsApp Button */}
                    <a
                      href={getWhatsAppLink(dish.name, dish.price || dish.fullPrice || dish.halfPrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-forest-900 hover:bg-forest-800 text-white px-4 py-2 rounded-full font-sans font-bold text-xs shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
                      aria-label={`Order ${dish.name} on WhatsApp`}
                    >
                      <MessageSquare size={13} className="fill-current" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>

              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
