import React, { useState } from "react";
import {
  Bell,
  Check,
  Copy,
  ExternalLink,
  MessageCircle,
  X,
} from "lucide-react";

const DashboardHeader = () => {
  const [copied, setCopied] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const whisperlyLink = "https://whisperly.app/ashirwad";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(whisperlyLink);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <header className="sticky top-[68px] z-30 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl md:top-0">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center gap-3 px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LINK AREA
        ===================================================== */}
        <div className="min-w-0 flex-1">

          <button
            type="button"
            onClick={handleCopy}
            className="
              group flex w-full max-w-[620px] items-center gap-3
              rounded-2xl border border-gray-200
              bg-gray-50/70 px-3 py-2
              text-left
              hover:border-gray-300 hover:bg-gray-50
              cursor-pointer
            "
          >
            {/* Link Icon */}
            <div
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl bg-white
                text-violet-600
                shadow-[0_1px_3px_rgba(0,0,0,0.06)]
                ring-1 ring-gray-100
              "
            >
              <ExternalLink size={17} strokeWidth={1.8} />
            </div>

            {/* Link Content */}
            <div className="min-w-0 flex-1">

              {/* Desktop small status */}
              <div className="mb-0.5 hidden items-center gap-1.5 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Public link
                </span>
              </div>

              <p className="truncate text-[13px] font-semibold text-gray-700 sm:text-sm">
                {whisperlyLink}
              </p>
            </div>

            {/* Copy */}
            <div className="shrink-0">

              {copied ? (
                <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Check size={14} strokeWidth={2} />
                  <span className="hidden sm:inline">Copied</span>
                </div>
              ) : (
                <div
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-lg bg-white
                    text-gray-400
                    shadow-sm ring-1 ring-gray-100
                    sm:h-auto sm:w-auto sm:gap-1.5
                    sm:px-2.5 sm:py-1.5
                    sm:shadow-none sm:ring-0
                  "
                >
                  <Copy size={15} strokeWidth={1.8} />

                  <span className="hidden text-xs font-semibold sm:inline">
                    Copy
                  </span>
                </div>
              )}
            </div>
          </button>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}
        <div className="flex shrink-0 items-center gap-2">

          {/* Vertical divider */}
          <div className="mr-1 hidden h-8 w-px bg-gray-200 sm:block" />

          {/* Notifications */}
          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setNotificationsOpen((previous) => !previous)
              }
              aria-label="Notifications"
              className={`
                relative flex h-11 w-11 items-center justify-center
                rounded-xl border
                cursor-pointer
                ${
                  notificationsOpen
                    ? "border-gray-300 bg-gray-50 text-gray-900"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              <Bell size={19} strokeWidth={1.8} />

              {/* Unread dot */}
              <span className="absolute right-[9px] top-[8px] h-2 w-2 rounded-full bg-violet-600 ring-2 ring-white" />
            </button>

            {/* =================================================
                NOTIFICATION PANEL
            ================================================= */}
            {notificationsOpen && (
              <div
                className="
                  fixed left-4 right-4 top-[84px]
                  overflow-hidden rounded-2xl
                  border border-gray-200 bg-white
                  shadow-[0_20px_70px_rgba(0,0,0,0.12)]

                  sm:absolute sm:left-auto sm:right-0
                  sm:top-[52px] sm:w-[370px]
                "
              >

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">

                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Notifications
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-400">
                      Updates from your Whisperly
                    </p>
                  </div>

                  {/* Mobile close */}
                  <button
                    type="button"
                    onClick={() => setNotificationsOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 sm:hidden"
                  >
                    <X size={17} />
                  </button>
                </div>

                {/* New message */}
                <div className="flex gap-3 border-b border-gray-100 px-5 py-4 hover:bg-gray-50">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <MessageCircle size={18} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold text-gray-800">
                        New anonymous message
                      </p>

                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-600" />
                    </div>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Someone just sent you a new whisper.
                    </p>

                    <p className="mt-2 text-[11px] text-gray-400">
                      2 minutes ago
                    </p>

                  </div>
                </div>

                {/* Profile notification */}
                <div className="flex gap-3 px-5 py-4 hover:bg-gray-50">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Check size={18} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Your profile is ready
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Your Whisperly link is ready to share.
                    </p>

                    <p className="mt-2 text-[11px] text-gray-400">
                      Yesterday
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 bg-gray-50/60 px-5 py-3.5">
                  <button
                    type="button"
                    className="w-full text-center text-xs font-semibold text-gray-500 hover:text-gray-800"
                  >
                    View all notifications →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;