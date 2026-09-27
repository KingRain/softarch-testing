import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="TestingGuide Logo"
    >
      {/* Brand Base Squircle - Forest Ink */}
      <rect width="40" height="40" rx="10" fill="#163300" />

      {/* Signature Bold Electric Lime Verification Mark */}
      <path
        d="M10.5 21L16.5 27L29.5 13"
        stroke="#9fe870"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
