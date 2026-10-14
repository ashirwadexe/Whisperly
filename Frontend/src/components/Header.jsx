import React, { useContext, useState } from "react";
import {
  Bell,
  Check,
  Copy,
  Link2,
  Mail,
  MessageCircle,
  Send,
  Share2,
  X,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Header = ({ notificationCount = 0, onNotificationClick }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const username = user?.username;

  const whisperlyLink = username ? `${window.location.origin}/${username}` : "";

  const handleCopy = async () => {
    if (!whisperlyLink) {
      toast.error("Your Whisperly link is not available.");
      return;
    }

    try {
      await navigator.clipboard.writeText(whisperlyLink);
      setCopied(true);
      toast.success("Link copied!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Unable to copy link.");
    }
  };

  const handleShare = (platform) => {
    if (!whisperlyLink) {
      toast.error("Your Whisperly link is not available.");
      return;
    }

    const encodedLink = encodeURIComponent(whisperlyLink);
    const encodedText = encodeURIComponent(
      "Send me an anonymous message on Whisperly.",
    );

    let shareUrl = "";

    if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodedText}%20${encodedLink}`;
    }

    if (platform === "telegram") {
      shareUrl = `https://t.me/share/url?url=${encodedLink}&text=${encodedText}`;
    }

    if (platform === "x") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedLink}`;
    }

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;
    }

    if (platform === "email") {
      shareUrl = `mailto:?subject=Send%20me%20an%20anonymous%20message&body=${encodedText}%0A%0A${encodedLink}`;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
      setShareOpen(false);
    }
  };

  const handleNativeShare = async () => {
    if (!whisperlyLink) {
      toast.error("Your Whisperly link is not available.");
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Send me an anonymous message",
          text: "Send me an anonymous message on Whisperly.",
          url: whisperlyLink,
        });

        setShareOpen(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error("Unable to share your link.");
        }
      }
    } else {
      handleCopy();
    }
  };

  const shareOptionClass =
    "flex items-center gap-3 border border-zinc-200 p-3 text-left transition hover:border-[#064E3B] hover:bg-[#F8E7C9]/40";

  const shareIconClass =
    "flex h-9 w-9 shrink-0 items-center justify-center bg-[#F8E7C9] text-[#064E3B]";

  return (
    <header className="border-b-2 border-[#064E3B] bg-white">
      <div className="px-4 py-5 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold tracking-[-0.04em] text-[#064E3B] sm:text-2xl">
              Dashboard.
            </h1>

            <p className="mt-1 hidden text-sm text-zinc-500 sm:block">
              Manage your anonymous messages and Whisperly link.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Notifications */}
            <button
              type="button"
              aria-label="Open notifications"
              onClick={onNotificationClick}
              className="relative flex h-10 w-10 items-center justify-center border border-zinc-200 bg-white text-[#064E3B] transition hover:border-[#064E3B] hover:bg-[#F8E7C9]/50"
            >
              <Bell size={18} strokeWidth={1.8} />

              {notificationCount > 0 && (
                <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center bg-[#064E3B] px-1 text-[9px] font-bold text-white">
                  {notificationCount > 9 ? "9+" : notificationCount}
                </span>
              )}
            </button>

            {/* User */}
            <button
              type="button"
              onClick={() => navigate("/dashboard/settings")}
              className="flex items-center gap-2 border border-zinc-200 bg-white px-2.5 py-2 sm:px-3"
            >
              <div className="flex h-7 w-7 items-center justify-center bg-[#064E3B] text-xs font-extrabold text-[#F8E7C9]">
                {user?.username?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <span className="hidden max-w-[120px] truncate text-sm font-bold text-[#064E3B] sm:block">
                {user?.username || "User"}
              </span>
            </button>
          </div>
        </div>

        {/* PERSONAL LINK */}
        <div className="relative">
          <div className="flex items-center gap-2 border-2 border-[#064E3B] bg-white p-2 sm:gap-3 sm:p-2.5">
            {/* Link icon */}
            <div className="hidden h-10 w-10 shrink-0 items-center justify-center bg-[#F8E7C9] text-[#064E3B] sm:flex">
              <Link2 size={18} />
            </div>

            {/* Link text */}
            <div className="min-w-0 flex-1 px-2 sm:px-0">
              <p className="truncate text-sm font-bold text-[#064E3B]">
                {whisperlyLink || "Your link is loading..."}
              </p>
            </div>

            {/* Copy */}
            <button
              type="button"
              onClick={handleCopy}
              disabled={!whisperlyLink}
              title="Copy link"
              aria-label="Copy Whisperly link"
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-zinc-200 text-[#064E3B] transition hover:border-[#064E3B] hover:bg-[#F8E7C9] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
            </button>

            {/* Share */}
            <button
              type="button"
              onClick={() => setShareOpen((prev) => !prev)}
              disabled={!whisperlyLink}
              className="flex h-9 items-center gap-2 border border-[#064E3B] bg-[#064E3B] px-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#064E3B] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Share2 size={16} />
              <span className="hidden sm:block">Share</span>
            </button>
          </div>

          {/* SHARE DIALOG */}
          {shareOpen && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#064E3B]/30 p-4"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setShareOpen(false);
                }
              }}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="share-dialog-title"
                className="max-h-[90vh] w-full max-w-md overflow-y-auto border-2 border-[#064E3B] bg-white p-5 shadow-[8px_8px_0px_#064E3B] sm:p-6"
              >
                {/* Modal heading */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center bg-[#F8E7C9] text-[#064E3B]">
                      <Share2 size={21} />
                    </div>

                    <h2
                      id="share-dialog-title"
                      className="text-xl font-extrabold tracking-[-0.04em] text-[#064E3B]"
                    >
                      Share your link.
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                      Let people send you anonymous messages.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShareOpen(false)}
                    aria-label="Close share dialog"
                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-zinc-200 text-zinc-500 transition hover:border-[#064E3B] hover:bg-[#F8E7C9] hover:text-[#064E3B]"
                  >
                    <X size={19} />
                  </button>
                </div>

                {/* Personal link */}
                <label
                  htmlFor="whisperly-share-link"
                  className="mb-2 block text-sm font-bold text-[#064E3B]"
                >
                  Your personal link
                </label>

                <div className="flex items-center gap-2 border-2 border-[#064E3B] bg-zinc-50 p-2">
                  <input
                    id="whisperly-share-link"
                    type="text"
                    readOnly
                    value={whisperlyLink}
                    placeholder="Your link is loading..."
                    className="min-w-0 flex-1 bg-transparent px-2 text-sm text-[#064E3B] outline-none"
                  />

                  <button
                    type="button"
                    onClick={handleCopy}
                    disabled={!whisperlyLink}
                    className="inline-flex shrink-0 items-center gap-2 border border-[#064E3B] bg-[#064E3B] px-3 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#064E3B] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {/* Native share */}
                <button
                  type="button"
                  onClick={handleNativeShare}
                  disabled={!whisperlyLink}
                  className="mt-3 flex w-full items-center justify-center gap-2 border-2 border-[#064E3B] bg-[#064E3B] px-4 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#064E3B] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Share2 size={17} />
                  Share your link
                </button>

                {/* Divider */}
                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-zinc-200" />
                  <span className="bg-[#F8E7C9] px-3 py-1 text-[10px] font-extrabold tracking-[0.12em] text-[#064E3B]">
                    OR SHARE VIA
                  </span>
                  <div className="h-px flex-1 bg-zinc-200" />
                </div>

                {/* Share platforms */}
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleShare("whatsapp")}
                    className={shareOptionClass}
                  >
                    <span className={shareIconClass}>
                      <MessageCircle size={18} />
                    </span>
                    <span className="text-sm font-bold text-[#064E3B]">
                      WhatsApp
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("telegram")}
                    className={shareOptionClass}
                  >
                    <span className={shareIconClass}>
                      <Send size={18} />
                    </span>
                    <span className="text-sm font-bold text-[#064E3B]">
                      Telegram
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("facebook")}
                    className={shareOptionClass}
                  >
                    <span className={shareIconClass}>
                      <span className="text-lg font-extrabold">f</span>
                    </span>
                    <span className="text-sm font-bold text-[#064E3B]">
                      Facebook
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("x")}
                    className={shareOptionClass}
                  >
                    <span className={shareIconClass}>
                      <span className="text-sm font-extrabold">𝕏</span>
                    </span>
                    <span className="text-sm font-bold text-[#064E3B]">X</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("email")}
                    className={`${shareOptionClass} col-span-2`}
                  >
                    <span className={shareIconClass}>
                      <Mail size={18} />
                    </span>
                    <span className="text-sm font-bold text-[#064E3B]">
                      Email
                    </span>
                  </button>
                </div>

                <p className="mt-4 border-t border-zinc-200 pt-4 text-center text-xs leading-5 text-zinc-500">
                  Anyone with your link can send you an anonymous message.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
