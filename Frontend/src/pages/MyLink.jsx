import React, { useContext, useState } from "react";
import {
  Link2,
  Copy,
  Check,
  Share2,
  MessageCircle,
  X,
  ExternalLink,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const MyLink = () => {
  const { user } = useContext(AuthContext);
  const [copied, setCopied] = useState(false);

  const username = user?.username;
  const whisperlyLink = username
    ? `${window.location.origin}/${username}`
    : "";

  const handleCopy = async () => {
    if (!whisperlyLink) {
      toast.error("Your Whisperly link is not available.");
      return;
    }

    try {
      await navigator.clipboard.writeText(whisperlyLink);
      setCopied(true);
      toast.success("Link copied!");

      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Unable to copy the link. Please copy it manually.");
    }
  };

  const handleShare = async () => {
    if (!whisperlyLink) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Send me an anonymous message",
          text: "Send me an anonymous message on Whisperly 💜",
          url: whisperlyLink,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error("Unable to share your link.");
        }
      }
    } else {
      handleCopy();
    }
  };

  const shareText = encodeURIComponent(
    "Send me an anonymous message on Whisperly 💜"
  );
  const encodedLink = encodeURIComponent(whisperlyLink);

  const shareApps = [
    {
      name: "WhatsApp",
      color: "bg-green-50 text-green-600",
      url: `https://wa.me/?text=${shareText}%20${encodedLink}`,
    },
    {
      name: "Telegram",
      color: "bg-sky-50 text-sky-600",
      url: `https://t.me/share/url?url=${encodedLink}&text=${shareText}`,
    },
    {
      name: "Facebook",
      color: "bg-blue-50 text-blue-600",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`,
    },
    {
      name: "X",
      color: "bg-gray-100 text-gray-800",
      url: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedLink}`,
    },
  ];

  return (
    <div className="min-h-[60vh] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-xl">

        <div className="rounded-2xl border border-gray-200 bg-white p-5
                        shadow-sm sm:p-6">

          <div className="flex items-center gap-2 rounded-xl border
                          border-gray-200 bg-gray-50 p-2">
            <div className="min-w-0 flex-1 truncate px-2 text-sm text-gray-700">
              {whisperlyLink || "Loading your link..."}
            </div>

            <button
              type="button"
              onClick={handleCopy}
              disabled={!whisperlyLink}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg
                         bg-violet-600 px-3 py-2.5 text-sm font-medium
                         text-white transition hover:bg-violet-700
                         disabled:cursor-not-allowed disabled:opacity-50"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleShare}
            disabled={!whisperlyLink}
            className="mt-4 flex w-full items-center justify-center gap-2
                       rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold
                       text-white transition hover:bg-gray-800
                       disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Share2 size={17} />
            Share your link
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs font-medium text-gray-400">
              OR SHARE VIA
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {shareApps.map((app) => (
              <a
                key={app.name}
                href={whisperlyLink ? app.url : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!whisperlyLink) e.preventDefault();
                }}
                className="flex items-center justify-between rounded-xl
                           border border-gray-100 p-3.5 transition
                           hover:border-violet-200 hover:bg-violet-50/40"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center
                                rounded-xl ${app.color}`}
                  >
                    {app.name === "WhatsApp" ? (
                      <MessageCircle size={18} />
                    ) : app.name === "Telegram" ? (
                      <SendIcon />
                    ) : app.name === "Facebook" ? (
                      <FacebookIcon />
                    ) : (
                      <span className="text-sm font-bold">𝕏</span>
                    )}
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    {app.name}
                  </span>
                </span>

                <ExternalLink size={14} className="text-gray-400" />
              </a>
            ))}
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-gray-400">
            Anyone with your link can send you an anonymous message.
          </p>
        </div>
      </div>
    </div>
  );
};

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
    </svg>
  );
}

export default MyLink;