import React, { useContext, useState } from "react";
import {
  Bell,
  Check,
  Copy,
  Link2,
  Mail,
  Send,
  Share2,
  User,
  X,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import NotificationDialog from "./NotificationDialog";
const Header = () => {
  const { user } = useContext(AuthContext);
  // UI-only demo count. Connect this to your notification API when you handle the backend.
  const [unreadCount, setUnreadCount] = useState(3);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const username = user?.username;
  const whisperlyLink = username
    ? `${window.location.origin}/${username}`
    : "";
  // UI-only interaction: clicking the notification message clears the badge.
  const handleNotificationClick = () => {
    setUnreadCount(0);
    setNotificationOpen(false);
  };
  /*
   * ============================
   * COPY LINK
   * ============================
   */
  const handleCopy = async () => {
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
  /*
   * ============================
   * SHARE
   * ============================
   */
  const handleShare = (platform) => {
    if (!whisperlyLink) {
      toast.error("Your Whisperly link is not available.");
      return;
    }

    const encodedLink = encodeURIComponent(whisperlyLink);
    const encodedText = encodeURIComponent(
      "Send me an anonymous message on Whisperly 💜",
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
      shareUrl = `mailto:?subject=Send me an anonymous message&body=${encodedText}%0A%0A${encodedLink}`;
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
          text: "Send me an anonymous message on Whisperly 💜",
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
  return (
    <header className="border-b border-violet-100 bg-white">
      <div className="px-4 py-5 sm:px-6 lg:px-8">
        {/* ================= TOP ================= */}
        <div className="mb-5 flex items-center justify-between gap-4">
          {/* Heading */}
          <div>
            <h1
              className="
                text-xl
                font-semibold
                tracking-tight
                text-gray-900
                sm:text-2xl
              "
            >
              Dashboard
            </h1>
            <p
              className="
                mt-1
                hidden
                text-sm
                text-gray-500
                sm:block
              "
            >
              Manage your anonymous messages and Whisperly link.
            </p>
          </div>
          {/* Right */}
          <div className="flex items-center gap-2">
            {/* ================= NOTIFICATION ================= */}
            <button
              type="button"
              aria-label="Open notifications"
              onClick={() => setNotificationOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-violet-100 bg-white text-gray-600 transition hover:bg-violet-50 hover:text-violet-600"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-violet-600 px-1 text-[9px] font-semibold text-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>
            {/* ================= USER ================= */}
            <button
              type="button"
              className="
                flex items-center gap-2
                rounded-xl
                border border-violet-100
                bg-white
                px-2.5 py-2
                transition
                hover:bg-violet-50
                sm:px-3
              "
            >
              <div
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  bg-violet-600
                  text-xs font-semibold
                  text-white
                "
              >
                {user?.username?.charAt(0)?.toUpperCase() || "U"}
              </div>
              <span
                className="
                  hidden
                  max-w-[120px]
                  truncate
                  text-sm
                  font-medium
                  text-gray-800
                  sm:block
                "
              >
                {user?.username || "User"}
              </span>
            </button>
          </div>
        </div>
        {/* ================= LINK ================= */}
        <div className="relative">
          <div
            className="
              flex items-center gap-3
              rounded-2xl
              border border-violet-100
              bg-violet-50/50
              p-2
              sm:p-2.5
            "
          >
            {/* Icon */}
            <div
              className="
                hidden h-10 w-10
                shrink-0
                items-center justify-center
                rounded-xl
                bg-white
                text-violet-600
                shadow-sm
                sm:flex
              "
            >
              <Link2 size={18} />
            </div>
            {/* Link */}
            <div className="min-w-0 flex-1 px-2 sm:px-0">
              <p
                className="
                  truncate
                  text-sm
                  font-medium
                  text-violet-900
                "
              >
                {whisperlyLink}
              </p>
            </div>
            {/* Copy */}
            <button
              type="button"
              onClick={handleCopy}
              className="
                flex h-9 w-9
                shrink-0
                items-center justify-center
                rounded-xl
                bg-white
                text-gray-600
                shadow-sm
                transition
                hover:bg-violet-100
                hover:text-violet-600
              "
              title="Copy link"
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
            </button>
            {/* Share */}
            <button
              type="button"
              onClick={() => setShareOpen((prev) => !prev)}
              className="
                flex h-9
                items-center gap-2
                rounded-xl
                bg-violet-600
                px-3
                text-sm font-medium
                text-white
                transition
                hover:bg-violet-700
              "
            >
              <Share2 size={16} />
              <span className="hidden sm:block">Share</span>
            </button>
          </div>
          {/* ================= REUSABLE NOTIFICATION DIALOG ================= */}
          <NotificationDialog
            isOpen={notificationOpen}
            unreadCount={unreadCount}
            onClose={() => setNotificationOpen(false)}
            onMarkAllRead={handleNotificationClick}
          />

          {/* ================= SHARE DIALOG ================= */}
          {shareOpen && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/40 p-4 backdrop-blur-sm"
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
                className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-5 shadow-2xl sm:p-6"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                      <Share2 size={21} />
                    </div>
                    <h2 id="share-dialog-title" className="text-lg font-semibold text-gray-900">
                      Share your Whisperly link
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Let people send you anonymous messages.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShareOpen(false)}
                    aria-label="Close share dialog"
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  >
                    <X size={19} />
                  </button>
                </div>

                <label htmlFor="whisperly-share-link" className="mb-2 block text-sm font-medium text-gray-700">
                  Your personal link
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-2">
                  <input
                    id="whisperly-share-link"
                    type="text"
                    readOnly
                    value={whisperlyLink}
                    placeholder="Your link is loading..."
                    className="min-w-0 flex-1 bg-transparent px-2 text-sm text-gray-700 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopy}
                    disabled={!whisperlyLink}
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-violet-600 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleNativeShare}
                  disabled={!whisperlyLink}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Share2 size={17} />
                  Share your link
                </button>

                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gray-100" />
                  <span className="text-[11px] font-medium tracking-wide text-gray-400">OR SHARE VIA</span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600">
                      <MessageCircle size={18} />
                    </span>
                    <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("telegram")}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Send size={18} />
                    </span>
                    <span className="text-sm font-medium text-gray-700">Telegram</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("facebook")}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <span className="text-lg font-bold">f</span>
                    </span>
                    <span className="text-sm font-medium text-gray-700">Facebook</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("x")}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
                      <span className="text-sm font-bold">𝕏</span>
                    </span>
                    <span className="text-sm font-medium text-gray-700">X</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare("email")}
                    className="col-span-2 flex items-center gap-3 rounded-xl border border-gray-100 p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <Mail size={18} />
                    </span>
                    <span className="text-sm font-medium text-gray-700">Email</span>
                  </button>
                </div>

                <p className="mt-4 text-center text-xs leading-5 text-gray-400">
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
