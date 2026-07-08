"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { galleryImages } from "../app/data/content";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
    document.body.style.overflow = "hidden"; // Disable scroll when open
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
    document.body.style.overflow = "auto"; // Re-enable scroll
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev === 0 ? galleryImages.length - 1 : (prev as number) - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev === galleryImages.length - 1 ? 0 : (prev as number) + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  return (
    <section
      id="gallery"
      className="bg-cream-100 py-16 md:py-24 border-b border-gold-400/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal delayMs={100} durationMs={600}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 font-sans font-bold text-[11px] uppercase tracking-wider mb-4">
              VISUAL TOUR
            </div>
          </ScrollReveal>
          
          <ScrollReveal delayMs={200} durationMs={600}>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight mb-4">
              Moments from Green Onions
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delayMs={300} durationMs={600}>
            <p className="font-sans text-ink-800/80 text-base">
              Take a visual tour of our spacious family seating, clean kitchen environment, and freshly cooked delicacies.
            </p>
          </ScrollReveal>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <ScrollReveal
              key={image.id}
              delayMs={idx * 50}
              durationMs={600}
              className="break-inside-avoid relative overflow-hidden rounded-2xl border border-gold-400/10 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div
                onClick={() => openLightbox(idx)}
                className="relative w-full"
                style={{
                  aspectRatio:
                    image.aspect === "portrait"
                      ? "3/4"
                      : image.aspect === "landscape"
                      ? "4/3"
                      : "1/1",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay with a zoom icon or text */}
                <div className="absolute inset-0 bg-forest-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm text-forest-900 font-sans font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300 border border-gold-400/20">
                    View Image
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all rounded-full z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all rounded-full z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image display container */}
          <div
            className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[selectedIdx].src}
                alt={galleryImages[selectedIdx].alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1024px"
                className="object-contain animate-slide-up"
                priority
              />
            </div>
            
            {/* Caption */}
            <div className="absolute -bottom-10 left-0 right-0 text-center text-white/80 font-sans text-sm sm:text-base px-4">
              {galleryImages[selectedIdx].alt}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all rounded-full z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
