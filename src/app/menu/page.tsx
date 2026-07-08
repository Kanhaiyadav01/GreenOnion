"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";
import ScrollReveal from "../../components/ScrollReveal";
import { fullMenu, getWhatsAppLink } from "../data/content";
import { MessageSquare, ArrowLeft, Search, Check, AlertCircle } from "lucide-react";

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [activeCategory, setActiveCategory] = useState("All");

  const subCategories = [
    "All",
    "Biryani",
    "Hot Tandoor",
    "Soups",
    "Noodles & Fried Rice",
    "Momos",
    "Chinese — Veg",
    "Chinese — Non-Veg",
  ];

  // Helper category images for fallback
  const categoryImages: Record<string, string> = {
    "Biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
    "Hot Tandoor": "https://images.unsplash.com/photo-1610057099443-fde8c4d90f9b?q=80&w=600&auto=format&fit=crop",
    "Soups": "https://images.unsplash.com/photo-1547592165-e1d17fed6005?q=80&w=600&auto=format&fit=crop",
    "Noodles & Fried Rice": "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop",
    "Momos": "https://images.unsplash.com/photo-1625220194771-7ebded0d90ae?q=80&w=600&auto=format&fit=crop",
    "Chinese — Veg": "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop",
    "Chinese — Non-Veg": "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=600&auto=format&fit=crop",
  };

  // Filter logic
  const filteredDishes = fullMenu.filter((dish) => {
    // 1. Search term match
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (dish.description && dish.description.toLowerCase().includes(searchTerm.toLowerCase()));

    // 2. Diet match
    const matchesDiet = 
      dietFilter === "all" ? true :
      dietFilter === "veg" ? dish.isVeg === true :
      dish.isVeg === false;

    // 3. Category match
    const matchesCategory = 
      activeCategory === "All" ? true :
      dish.category === activeCategory;

    return matchesSearch && matchesDiet && matchesCategory;
  });

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-cream-100 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Back Link */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-forest-900 hover:text-mustard-600 font-sans font-bold text-sm mb-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded-full px-3 py-1 border border-forest-900/10 bg-white"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <ScrollReveal delayMs={100} durationMs={600}>
              <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-forest-900 tracking-tight mb-2">
                Our Full Menu
              </h1>
              <p className="font-sans text-ink-800/80 text-base max-w-2xl">
                Explore our full culinary collection, freshly cooked in separate sections for vegetarian and non-vegetarian selections.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Filters Panel */}
          <ScrollReveal delayMs={200} durationMs={600} className="bg-white rounded-3xl p-6 border border-gold-400/15 shadow-sm mb-10">
            <div className="flex flex-col gap-6">
              
              {/* Row 1: Search Bar & Diet Toggle */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Search Bar */}
                <div className="relative md:col-span-8">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-forest-900/40" size={18} />
                  <input
                    type="text"
                    placeholder="Search dishes (e.g. Biryani, Momo, Paneer)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-cream-100 text-ink-800 pl-11 pr-4 py-3 rounded-full border border-forest-900/10 focus:outline-none focus:ring-2 focus:ring-mustard-500 font-sans text-sm"
                  />
                </div>

                {/* Diet Toggle Filter */}
                <div className="flex bg-cream-100 p-1.5 rounded-full border border-forest-900/10 md:col-span-4 justify-between">
                  {(["all", "veg", "non-veg"] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setDietFilter(filter)}
                      className={`flex-1 py-2 px-4 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all ${
                        dietFilter === filter
                          ? filter === "veg"
                            ? "bg-green-600 text-white shadow-sm"
                            : filter === "non-veg"
                            ? "bg-red-650 text-white shadow-sm"
                            : "bg-forest-900 text-white shadow-sm"
                          : "text-forest-900 hover:text-mustard-600"
                      } focus-visible:outline-none`}
                    >
                      {filter === "all" ? "All" : filter === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Sub-category filters */}
              <div className="border-t border-forest-900/5 pt-4">
                <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-forest-750/70 block mb-3">
                  Filter by category:
                </span>
                <div className="flex flex-wrap gap-2">
                  {subCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full font-sans font-semibold text-xs transition-all border ${
                        activeCategory === category
                          ? "bg-forest-900 text-white border-forest-900"
                          : "bg-white text-forest-900 border-forest-900/15 hover:border-forest-900/40 hover:bg-cream-100/40"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Warning Flag for owner comments */}
          {filteredDishes.some(d => d.priceUnconfirmed) && (
            <ScrollReveal delayMs={100} className="inline-flex items-center gap-2 bg-amber-50 border border-amber-250/50 rounded-xl px-4 py-3 text-amber-900 text-xs sm:text-sm font-sans mb-8">
              <AlertCircle size={16} className="text-amber-600 shrink-0" />
              <span>Some prices are marked unconfirmed. Please verify the seasonal rates with the manager.</span>
            </ScrollReveal>
          )}

          {/* Dishes Count */}
          <div className="mb-6 font-sans text-xs font-bold text-forest-700/60 uppercase tracking-widest">
            Showing {filteredDishes.length} dishes
          </div>

          {/* Dishes Grid */}
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDishes.map((dish, idx) => {
                const displayImage = dish.image || categoryImages[dish.category] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop";
                return (
                  <ScrollReveal
                    key={dish.id}
                    delayMs={idx % 10 * 30}
                    durationMs={500}
                    className="bg-white rounded-2xl border border-gold-400/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
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
                              Confirm price
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
          ) : (
            <ScrollReveal delayMs={100} className="bg-white rounded-3xl p-12 border border-gold-400/10 text-center shadow-sm">
              <span className="text-4xl block mb-4">🍽️</span>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">No dishes found</h3>
              <p className="font-sans text-ink-800/80 text-sm max-w-sm mx-auto">
                We couldn&apos;t find any items matching your filters. Try clearing your search term or selecting another category.
              </p>
              <button
                onClick={() => { setSearchTerm(""); setDietFilter("all"); setActiveCategory("All"); }}
                className="mt-6 bg-forest-900 text-white font-sans font-bold text-sm px-6 py-2.5 rounded-full hover:bg-forest-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
              >
                Clear All Filters
              </button>
            </ScrollReveal>
          )}

        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
