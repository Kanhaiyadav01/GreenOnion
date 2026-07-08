"use client";

import React from "react";
import Logo from "./Logo";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { restaurantInfo, businessHours } from "../app/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Our Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-forest-900 text-cream-50 pt-16 pb-8 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <ScrollReveal delayMs={100} durationMs={600} className="flex items-center gap-3 mb-5">
              <Logo size={48} />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-mustard-500 leading-none tracking-tight">
                  green onions
                </span>
                <span className="text-[10px] tracking-widest text-cream-100/70 uppercase font-sans font-semibold mt-0.5">
                  Restaurant
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delayMs={200} durationMs={600}>
              <p className="font-sans text-cream-100/80 text-sm leading-relaxed mb-6">
                Madhubani&apos;s premier destination for fine family dining. We take pride in serving high-quality, fresh, and 100% hygienic vegetarian delicacies cooked with absolute love and care.
              </p>
            </ScrollReveal>
            
            {/* Socials */}
            <ScrollReveal delayMs={300} durationMs={600} className="flex items-center gap-3">
              <a
                href={restaurantInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-800 hover:bg-mustard-500 hover:text-forest-900 transition-colors flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
                aria-label="Follow Green Onions Restaurant on Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={restaurantInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-800 hover:bg-mustard-500 hover:text-forest-900 transition-colors flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
                aria-label="Follow Green Onions Restaurant on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <ScrollReveal delayMs={100} durationMs={600}>
              <h3 className="font-serif text-mustard-500 font-bold text-base uppercase tracking-wider mb-5">
                Quick Links
              </h3>
            </ScrollReveal>
            <ScrollReveal delayMs={200} durationMs={600} className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-cream-100/80 text-sm hover:text-mustard-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded p-1"
                >
                  {link.label}
                </a>
              ))}
            </ScrollReveal>
          </div>

          {/* Business Hours Column */}
          <div className="lg:col-span-2">
            <ScrollReveal delayMs={100} durationMs={600}>
              <h3 className="font-serif text-mustard-500 font-bold text-base uppercase tracking-wider mb-5">
                Hours
              </h3>
            </ScrollReveal>
            
            <ScrollReveal delayMs={200} durationMs={600} className="space-y-4 font-sans text-sm text-cream-100/80">
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-mustard-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white">Mon - Fri</span>
                  <span className="block mt-0.5">{businessHours.weekdays}</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-mustard-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white">Sat - Sun</span>
                  <span className="block mt-0.5">{businessHours.weekends}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <ScrollReveal delayMs={100} durationMs={600}>
              <h3 className="font-serif text-mustard-500 font-bold text-base uppercase tracking-wider mb-5">
                Get in Touch
              </h3>
            </ScrollReveal>
            
            <ScrollReveal delayMs={200} durationMs={600} className="space-y-4 font-sans text-sm text-cream-100/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-mustard-500 shrink-0 mt-1" />
                <span>{restaurantInfo.address}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-mustard-500 shrink-0" />
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="hover:text-mustard-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded p-0.5"
                >
                  {restaurantInfo.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-mustard-500 shrink-0" />
                <a
                  href="mailto:contact@greenonionsrestaurant.com"
                  className="hover:text-mustard-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded p-0.5"
                >
                  info@greenonions.in
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-sans text-cream-100/60 gap-4 text-center">
          <p>
            &copy; {currentYear} Green Onions Restaurant, Madhubani. All rights reserved.
          </p>
          <p>
            Designed & Built by{" "}
            <span className="text-mustard-500 font-bold px-1">Kanhaiya Yadav</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
