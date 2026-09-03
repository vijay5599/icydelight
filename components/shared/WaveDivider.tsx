import React from 'react';

interface WaveDividerProps {
  fillColor?: string;
  inverted?: boolean;
  className?: string;
}

export function WaveDivider({
  fillColor = '#FFF9F2',
  inverted = false,
  className = ''
}: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className} ${inverted ? 'rotate-180' : ''}`}>
      <svg
        className="relative block w-full h-12 md:h-20 lg:h-24"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function CreamDripDivider({
  fillColor = '#FFFFFF',
  className = ''
}: {
  fillColor?: string;
  className?: string;
}) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        className="relative block w-full h-8 md:h-14"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C120,40 180,65 300,65 C420,65 480,15 600,15 C720,15 780,55 900,55 C1020,55 1080,25 1200,25 C1320,25 1380,50 1440,50 L1440,80 L0,80 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
