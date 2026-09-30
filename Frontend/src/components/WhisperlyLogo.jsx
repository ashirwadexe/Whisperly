import React from "react";

const WhisperlyLogo = ({ size = 40, showText = true }) => {
  return (
    <div className="flex items-center gap-2.5">

      {/* Logo Icon */}
      <div
        className="relative shrink-0"
        style={{
          width: size,
          height: size,
        }}
      >
        {/* Soft glow behind logo */}
        <div className="absolute inset-0 rounded-[13px] bg-violet-400/20 blur-md" />

        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative"
        >
          <defs>
            <linearGradient
              id="whisperlyLogoGradient"
              x1="7"
              y1="5"
              x2="34"
              y2="35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7C3AED" />
              <stop offset="0.55" stopColor="#A855F7" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>

            <linearGradient
              id="whisperlyBubbleGradient"
              x1="10"
              y1="8"
              x2="30"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#D946EF" />
            </linearGradient>
          </defs>

          {/* Main rounded square */}
          <rect
            x="3"
            y="3"
            width="34"
            height="34"
            rx="11"
            fill="url(#whisperlyLogoGradient)"
          />

          {/* Inner highlight */}
          <path
            d="M11 9.5C9.343 9.5 8 10.843 8 12.5V22.5C8 24.157 9.343 25.5 11 25.5H17.5L14.5 30L20.5 25.5H27C28.657 25.5 30 24.157 30 22.5V12.5C30 10.843 28.657 9.5 27 9.5H11Z"
            fill="white"
            fillOpacity="0.96"
          />

          {/* Whisper lines */}
          <path
            d="M13 14H25"
            stroke="url(#whisperlyBubbleGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="M13 18H22"
            stroke="url(#whisperlyBubbleGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="M13 22H18"
            stroke="url(#whisperlyBubbleGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Sparkle */}
          <path
            d="M30.5 5.5L31.3 7.7L33.5 8.5L31.3 9.3L30.5 11.5L29.7 9.3L27.5 8.5L29.7 7.7L30.5 5.5Z"
            fill="#F9A8D4"
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex items-baseline">
          <span className="text-[21px] font-bold tracking-[-0.04em] text-zinc-900">
            Whisper
          </span>

          <span className="text-[21px] font-bold tracking-[-0.04em] text-violet-600">
            ly
          </span>
        </div>
      )}

    </div>
  );
};

export default WhisperlyLogo;
