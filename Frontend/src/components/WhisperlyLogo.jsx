import React from "react";

const WhisperlyLogo = ({ size = 40, showText = true }) => {
  const logoId = React.useId().replace(/:/g, "");

  return (
    <div className="flex items-center gap-2.5">
      {/* Premium Whisperly Icon */}
      <div
        className="relative shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
          role="img"
          aria-label="Whisperly"
        >
          <defs>
            <linearGradient
              id={`${logoId}-emerald`}
              x1="5"
              y1="3"
              x2="35"
              y2="37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B6B50" />
              <stop offset="1" stopColor="#064E3B" />
            </linearGradient>

            <linearGradient
              id={`${logoId}-champagne`}
              x1="10"
              y1="10"
              x2="29"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFF0D5" />
              <stop offset="1" stopColor="#F8E7C9" />
            </linearGradient>
          </defs>

          {/* Rounded chat-bubble silhouette */}
          <path
            d="M12 3.5H28C32.694 3.5 36.5 7.306 36.5 12V25C36.5 29.694 32.694 33.5 28 33.5H18L9 38L10.8 32.8C6.7 31.7 3.5 28.1 3.5 23.5V12C3.5 7.306 7.306 3.5 12 3.5Z"
            fill={`url(#${logoId}-emerald)`}
          />

          {/* Signature W — two flowing message strokes */}
          <path
            d="M9.5 14L14.2 26L20 16.8L25.8 26L30.5 14"
            stroke={`url(#${logoId}-champagne)`}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Subtle whisper sparkle */}
          <path
            d="M30.5 4.5L31.7 7.3L34.5 8.5L31.7 9.7L30.5 12.5L29.3 9.7L26.5 8.5L29.3 7.3L30.5 4.5Z"
            fill="#F8E7C9"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {showText && (
        <div className="flex items-baseline whitespace-nowrap">
          <span className="text-[21px] font-bold tracking-[-0.055em] text-[#064E3B]">
            Whisperly
          </span>
        </div>
      )}
    </div>
  );
};

export default WhisperlyLogo;