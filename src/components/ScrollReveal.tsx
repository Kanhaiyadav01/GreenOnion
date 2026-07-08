"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  durationMs = 600,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Once it enters viewport, stop observing so the animation only plays once
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before it hits the viewport boundary
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${
        isRevealed
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-12 blur-[2px] pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
