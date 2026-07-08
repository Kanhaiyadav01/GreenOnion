"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { restaurantInfo, getWhatsAppLink } from "../app/data/content";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 sm:gap-4 items-center transition-all duration-500 transform animate-fade-in">
      {/* Call Button (Top) */}
      <a
        href={`tel:${restaurantInfo.phone}`}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-mustard-500 hover:bg-mustard-600 text-forest-900 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 border border-mustard-600"
        aria-label="Call Green Onions Restaurant"
      >
        <Phone size={22} className="stroke-[2.5px]" />
      </a>

      {/* WhatsApp Button (Bottom) */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
        aria-label="Order food on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full border-2 border-green-500 animate-ping opacity-60 pointer-events-none"></span>
        <MessageCircle size={24} className="fill-current stroke-[2px]" />
      </a>
    </div>
  );
}
