import React from "react";

export interface LoaderProps {
  size?: number;
  color?: string;
  speed?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 40, color = "#06b6d4", speed = 1 }) => (
  <span
    style={{
      display: "inline-block",
      width: size,
      height: size,
    }}
    aria-label="Loading"
    role="status"
  >
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <defs>
        <linearGradient id="loader-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 4}
        stroke="url(#loader-gradient)"
        strokeWidth="4"
        opacity="0.2"
      />
      <path
        d={`M${size / 2},${size / 2} m0,-${size / 2 - 4} a${size / 2 - 4},${size / 2 - 4} 0 1,1 0,${size - 8}`}
        stroke="url(#loader-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        className="animate-loader-pulse"
      />
    </svg>
    <style>{`
      .animate-spin {
        animation: spin ${1 / speed}s linear infinite;
      }
      .animate-loader-pulse {
        animation: loader-pulse 1.2s cubic-bezier(.4,0,.6,1) infinite;
      }
      @keyframes spin {
        100% { transform: rotate(360deg); }
      }
      @keyframes loader-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `}</style>
  </span>
);

export { Loader };
