"use client";

import React from "react";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { restaurantInfo, businessHours, getWhatsAppLink } from "../app/data/content";

export default function LocationContact() {
  return (
    <section
      id="contact"
      className="bg-cream-100 py-16 md:py-24 border-b border-gold-400/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal delayMs={100} durationMs={600}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 font-sans font-bold text-[11px] uppercase tracking-wider mb-4">
              VISIT & CONTACT
            </div>
          </ScrollReveal>
          
          <ScrollReveal delayMs={200} durationMs={600}>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight mb-4">
              Join Us for a Dining Experience
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delayMs={300} durationMs={600}>
            <p className="font-sans text-ink-800/80 text-base">
              Visit our restaurant near Station Chowk, Madhubani or order online for delivery straight to your location.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Map Column */}
          <div className="lg:col-span-7 flex">
            <ScrollReveal
              delayMs={100}
              durationMs={600}
              className="w-full relative aspect-square sm:aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden shadow-md border-4 border-white flex"
            >
              <iframe
                src={restaurantInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green Onions Restaurant Location on Google Maps"
                className="w-full h-full min-h-[350px] lg:min-h-none"
              ></iframe>
              {/* Highlight border */}
              <div className="absolute inset-0 border border-gold-400/20 rounded-2xl pointer-events-none"></div>
            </ScrollReveal>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal
              delayMs={200}
              durationMs={600}
              className="bg-cream-50 rounded-2xl p-8 border border-gold-400/15 shadow-sm h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-2xl font-bold text-forest-900 mb-6">
                  Contact Information
                </h3>

                {/* Info List */}
                <div className="space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-mustard-300/40 border border-mustard-500/10 flex items-center justify-center text-forest-900 shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-forest-900 uppercase tracking-wide">
                        Address
                      </h4>
                      <p className="font-sans text-ink-800 text-sm sm:text-base leading-relaxed mt-1">
                        {restaurantInfo.address}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-mustard-300/40 border border-mustard-500/10 flex items-center justify-center text-forest-900 shrink-0 mt-0.5">
                      <Clock size={18} />
                    </div>
                    <div className="w-full">
                      <h4 className="font-sans font-bold text-sm text-forest-900 uppercase tracking-wide">
                        Business Hours
                      </h4>
                      <table className="w-full font-sans text-sm sm:text-base text-ink-800 mt-2 border-collapse">
                        <tbody>
                          <tr className="border-b border-forest-900/5">
                            <td className="py-1 font-semibold">Mon - Fri</td>
                            <td className="py-1 text-right">{businessHours.weekdays}</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">Sat - Sun</td>
                            <td className="py-1 text-right">{businessHours.weekends}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Phone Call */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-mustard-300/40 border border-mustard-500/10 flex items-center justify-center text-forest-900 shrink-0 mt-0.5">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-forest-900 uppercase tracking-wide">
                        Phone Call
                      </h4>
                      <a
                        href={`tel:${restaurantInfo.phone}`}
                        className="font-sans text-forest-850 hover:text-mustard-600 font-bold text-base sm:text-lg block mt-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded p-0.5"
                      >
                        {restaurantInfo.phoneFormatted}
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="mt-8 pt-8 border-t border-forest-900/10">
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <a
                    href={restaurantInfo.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-900 hover:bg-forest-800 text-white font-sans font-bold text-sm py-3 px-5 rounded-full shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
                  >
                    <MapPin size={16} />
                    <span>Get Directions</span>
                  </a>
                  
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-forest-900 border border-forest-900/25 hover:border-forest-900 hover:bg-cream-100/50 font-sans font-bold text-sm py-3 px-5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
                  >
                    <MessageCircle size={16} className="text-mustard-500" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Social icons */}
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <span className="font-sans text-xs font-bold text-forest-700/60 uppercase tracking-wide">
                    Follow us:
                  </span>
                  <a
                    href={restaurantInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-forest-900 hover:bg-mustard-500 hover:text-forest-900 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
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
                    className="w-8 h-8 rounded-full bg-forest-900 hover:bg-mustard-500 hover:text-forest-900 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
                    aria-label="Follow Green Onions Restaurant on Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
