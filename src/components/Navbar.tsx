"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu as MenuIcon, X, Phone, MessageCircle } from "lucide-react";
import { restaurantInfo, getWhatsAppLink } from "../app/data/content";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      {/* Floating Pill Container - keeps static sizing, only toggles shadow details on scroll */}
      <div
        className={`pointer-events-auto w-full max-w-6xl rounded-full bg-cream-50/95 backdrop-blur-md border px-4 sm:px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "shadow-lg shadow-forest-900/10 border-gold-400/30"
            : "shadow-md border-gold-400/20"
        }`}
      >
        {/* Left Side: Logo & Brand Name */}
        <Link
          href="/#home"
          className="flex items-center gap-2 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded-full p-0.5 group"
        >
          <Logo size={36} />
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-base font-extrabold text-forest-900 leading-none tracking-tight group-hover:text-forest-700 transition-colors">
              green onions
            </span>
            <span className="text-[9px] tracking-widest text-mustard-650 uppercase font-sans font-semibold mt-0.5">
              Restaurant
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === "/" && link.href.startsWith("/#"));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans font-semibold text-xs sm:text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded-full px-3 py-1 ${
                  isActive ? "text-mustard-605 font-bold" : "text-ink-800 hover:text-mustard-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Call, Divider, WhatsApp Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="hidden md:flex items-center gap-1.5 text-forest-900 font-sans font-bold text-xs sm:text-sm hover:text-mustard-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded-full px-2.5 py-1"
          >
            <Phone size={14} className="text-mustard-500" />
            <span className="hidden lg:inline">{restaurantInfo.phoneFormatted}</span>
          </a>

          {/* Vertical Divider */}
          <span className="hidden md:inline h-5 w-[1px] bg-gold-400/20"></span>

          {/* WhatsApp Button */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest-900 hover:bg-forest-800 text-white px-5 sm:px-6 py-2 rounded-full font-sans font-bold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 flex items-center gap-1.5"
          >
            <MessageCircle size={14} className="fill-current" />
            <span>Order</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-forest-900 hover:text-mustard-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded-full"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden transition-opacity duration-300 pointer-events-auto ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-cream-50 shadow-2xl flex flex-col p-6 xl:hidden transition-transform duration-300 transform pointer-events-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-gold-400/20">
          <div className="flex items-center gap-2">
            <Logo size={32} />
            <span className="font-serif font-bold text-forest-900 text-sm">green onions</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-forest-900 hover:text-mustard-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded-full"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-5 py-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-ink-800 font-sans font-semibold text-base hover:text-mustard-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 rounded-md py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 pt-6 border-t border-gold-400/20">
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="flex items-center justify-center gap-2 text-forest-900 font-sans font-semibold text-base py-3 border border-forest-900/30 rounded-full hover:bg-forest-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
          >
            <Phone size={16} />
            <span>Call {restaurantInfo.phoneFormatted}</span>
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center bg-forest-900 text-white font-sans font-bold text-base py-3 rounded-full hover:bg-forest-800 shadow-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
