"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import PopularDishes from "../components/PopularDishes";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import LocationContact from "../components/LocationContact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import Logo from "../components/Logo";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Branded page loader simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Branded Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-forest-900 flex flex-col items-center justify-center transition-opacity duration-500 animate-fade-in">
          <div className="flex flex-col items-center gap-4">
            {/* Logo container with pulse/grow animation */}
            <div className="relative animate-pulse">
              <Logo size={96} />
              {/* Ping glow ring around logo */}
              <span className="absolute -inset-2 rounded-full border-2 border-mustard-500 animate-ping opacity-30 pointer-events-none"></span>
            </div>
            
            <div className="flex flex-col items-center mt-4">
              <h2 className="font-serif font-extrabold text-2xl text-mustard-500 tracking-wide">
                green onions
              </h2>
              <span className="font-sans font-bold text-xs tracking-widest text-cream-100/70 uppercase mt-1">
                Restaurant
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className={`flex flex-col min-h-screen ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-750"}`}>
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <WhyUs />
          <PopularDishes />
          <Gallery />
          <Reviews />
          <LocationContact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}
