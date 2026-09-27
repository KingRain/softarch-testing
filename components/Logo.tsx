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
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TestingGuide Logo"
    >
      {/* Background Rounded Shield / Pill Base */}
      <rect width="48" height="48" rx="14" fill="#163300" />

      {/* Outer subtle ring */}
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="12.5"
        stroke="#9fe870"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />

      {/* Diagnostic Lab / Flask Grid Nodes */}
      <circle cx="16" cy="16" r="2.5" fill="#9fe870" />
      <circle cx="32" cy="16" r="2.5" fill="#9fe870" />
      <path
        d="M16 16H32"
        stroke="#9fe870"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        strokeOpacity="0.6"
      />

      {/* Main Checkmark / Assertion Route */}
      <path
        d="M14 26L21 33L35 19"
        stroke="#9fe870"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sparkle / Voltage Accent */}
      <circle cx="36" cy="32" r="1.5" fill="#9fe870" />
    </svg>
  );
}
