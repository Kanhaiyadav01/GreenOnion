import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <div
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform hover:scale-105 duration-300"
      >
        {/* Outer Double Dark Green Border */}
        <circle cx="50" cy="50" r="48" stroke="#0F3D2E" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="44" stroke="#0F3D2E" strokeWidth="1" />

        {/* Mustard Gold Background */}
        <circle cx="50" cy="50" r="43.5" fill="#D4A017" />

        {/* Fine texture lines (radiating spokes or dots, very subtle) */}
        <circle cx="50" cy="50" r="38" stroke="#C08E12" strokeWidth="0.5" strokeDasharray="3 3" />

        {/* Line Art Onion with a Heart cut-out */}
        <g transform="translate(50, 48) scale(0.9)">
          {/* Bulb Outer Shell */}
          <path
            d="M 0 -22 C -18 -10 -22 15 0 25 C 22 15 18 -10 0 -22 Z"
            fill="none"
            stroke="#0F3D2E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Onion layers (striations) */}
          <path
            d="M -6 -18 C -16 -4 -12 12 -4 18"
            fill="none"
            stroke="#0F3D2E"
            strokeWidth="1.5"
          />
          <path
            d="M 6 -18 C 16 -4 12 12 4 18"
            fill="none"
            stroke="#0F3D2E"
            strokeWidth="1.5"
          />

          {/* Onion Sprouts / Shoots at top */}
          <path
            d="M -3 -22 C -6 -32 -14 -32 -14 -32"
            fill="none"
            stroke="#0F3D2E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 0 -22 C 0 -36 0 -36 0 -36"
            fill="none"
            stroke="#0F3D2E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 3 -22 C 6 -32 14 -32 14 -32"
            fill="none"
            stroke="#0F3D2E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Heart Cut-out in center */}
          <path
            d="M 0 5 C -2.5 1.5 -7 1.5 -7 -2 C -7 -5 -4 -7 0 -4 C 4 -7 7 -5 7 -2 C 7 1.5 2.5 1.5 0 5 Z"
            fill="#FFFDF8"
            stroke="#0F3D2E"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Roots at the bottom */}
          <path
            d="M -8 24 L -10 28 M -3 25 L -4 30 M 0 25 L 0 31 M 3 25 L 4 30 M 8 24 L 10 28"
            stroke="#0F3D2E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
