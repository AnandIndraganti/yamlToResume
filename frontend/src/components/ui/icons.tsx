import * as React from "react";

// Mock Lucide React icons
const createIcon = (name: string) => {
  return React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    ({ className = "", ...props }, ref) => (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {/* Generic icon placeholder */}
        <circle cx="12" cy="12" r="10" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="8"
          fill="currentColor"
        >
          {name.slice(0, 2)}
        </text>
      </svg>
    )
  );
};

export const ArrowRight = createIcon("AR");
export const FileText = createIcon("FT");
export const Code2 = createIcon("C2");
export const Github = createIcon("GH");
export const Sparkles = createIcon("SP");
export const Zap = createIcon("ZP");
export const Layers = createIcon("LY");
export const Download = createIcon("DL");
export const Palette = createIcon("PL");
export const Twitter = createIcon("TW");
export const Heart = createIcon("HT");
