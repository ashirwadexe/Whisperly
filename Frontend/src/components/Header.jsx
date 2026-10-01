import React, { useState } from "react";
import {
  Link2,
  Copy,
  Check,
  Share2,
  MessageCircle,
  Send,
  Mail,
  X,
} from "lucide-react";

const DashboardHeader = () => {
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

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

  const shareText = "Send me an anonymous message on Whisperly 👀";

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      `${shareText}\n${whisperlyLink}`
    )}`;

    window.open(url, "_blank");
    setShareOpen(false);
  };

  const shareOnTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      whisperlyLink
    )}&text=${encodeURIComponent(shareText)}`;

    window.open(url, "_blank");
    setShareOpen(false);
  };

  const shareOnX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(whisperlyLink)}`;

    window.open(url, "_blank");
    setShareOpen(false);
  };

  const shareByEmail = () => {
    const url = `mailto:?subject=${encodeURIComponent(
      "Send me an anonymous message"
    )}&body=${encodeURIComponent(`${shareText}\n\n${whisperlyLink}`)}`;

    window.location.href = url;
    setShareOpen(false);
  };

  return (
    <header
      className="
        sticky top-[68px] z-30
        border-b border-gray-200/80
        bg-white/95
        backdrop-blur-xl
        md:top-0
      "
    >
      <div className="px-4 py-3 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl">

          {/* Main Link Container */}
          <div
            onClick={() => setShareOpen((prev) => !prev)}
            className="
              group flex cursor-pointer items-center gap-3
              rounded-2xl border border-gray-200
              bg-white px-3 py-2.5
              shadow-sm
              transition
              hover:border-violet-200
              hover:shadow-md
            "
          >
            {/* Link Icon */}
            <div
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl bg-violet-50 text-violet-600
              "
            >
              <Link2 size={19} strokeWidth={2} />
            </div>

            {/* Link */}
            <div className="min-w-0 flex-1">
              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Your public link
              </p>

              <p className="truncate text-sm font-medium text-gray-800">
                {whisperlyLink}
              </p>
            </div>

            {/* Share Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShareOpen((prev) => !prev);
              }}
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl border border-gray-200
                text-gray-500
                transition
                hover:border-violet-200
                hover:bg-violet-50
                hover:text-violet-600
              "
              title="Share your link"
            >
              <Share2 size={18} />
            </button>

            {/* Copy Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              className={`
                flex h-10 shrink-0 items-center justify-center gap-2
                rounded-xl px-3
                text-sm font-medium
                transition
                ${
                  copied
                    ? "bg-green-50 text-green-600"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }
              `}
              title="Copy link"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Share Apps Popup */}
          {shareOpen && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                absolute left-0 right-0 top-[calc(100%+10px)] z-50
                rounded-2xl border border-gray-200
                bg-white p-3
                shadow-xl shadow-gray-200/50
              "
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Share your link
                  </p>
                  <p className="text-xs text-gray-400">
                    Let people send you anonymous messages
                  </p>
                </div>

                <button
                  onClick={() => setShareOpen(false)}
                  className="
                    rounded-lg p-1.5
                    text-gray-400
                    hover:bg-gray-100
                    hover:text-gray-700
                  "
                >
                  <X size={16} />
                </button>
              </div>

              {/* Share Apps */}
              <div className="grid grid-cols-4 gap-2">

                {/* WhatsApp */}
                <button
                  onClick={shareOnWhatsApp}
                  className="
                    flex flex-col items-center gap-1.5
                    rounded-xl p-3
                    text-gray-600
                    transition
                    hover:bg-green-50 hover:text-green-600
                  "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                    <MessageCircle size={19} />
                  </div>
                  <span className="text-[11px] font-medium">
                    WhatsApp
                  </span>
                </button>

                {/* Telegram */}
                <button
                  onClick={shareOnTelegram}
                  className="
                    flex flex-col items-center gap-1.5
                    rounded-xl p-3
                    text-gray-600
                    transition
                    hover:bg-blue-50 hover:text-blue-600
                  "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <Send size={18} />
                  </div>
                  <span className="text-[11px] font-medium">
                    Telegram
                  </span>
                </button>

                {/* X */}
                <button
                  onClick={shareOnX}
                  className="
                    flex flex-col items-center gap-1.5
                    rounded-xl p-3
                    text-gray-600
                    transition
                    hover:bg-gray-100 hover:text-gray-900
                  "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                    <X size={18} />
                  </div>
                  <span className="text-[11px] font-medium">
                    X
                  </span>
                </button>

                {/* Email */}
                <button
                  onClick={shareByEmail}
                  className="
                    flex flex-col items-center gap-1.5
                    rounded-xl p-3
                    text-gray-600
                    transition
                    hover:bg-violet-50 hover:text-violet-600
                  "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                    <Mail size={18} />
                  </div>
                  <span className="text-[11px] font-medium">
                    Email
                  </span>
                </button>
              </div>

              {/* Copy inside share panel */}
              <button
                onClick={handleCopy}
                className="
                  mt-2 flex w-full items-center justify-center gap-2
                  rounded-xl border border-gray-200
                  px-4 py-2.5
                  text-sm font-medium text-gray-700
                  transition
                  hover:bg-gray-50
                "
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-600" />
                    <span className="text-green-600">
                      Link copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy link
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Copy Feedback */}
        {copied && (
          <div
            className="
              fixed bottom-5 left-1/2 z-[100]
              flex -translate-x-1/2 items-center gap-2
              rounded-full
              border border-green-100
              bg-white
              px-4 py-2.5
              text-sm font-medium text-gray-800
              shadow-lg shadow-gray-200/60
            "
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check size={13} strokeWidth={2.5} />
            </div>

            Link copied!
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
