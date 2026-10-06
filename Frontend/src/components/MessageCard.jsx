import React, { useState } from "react";
import {
  MessageCircle,
  Star,
  Share2,
  Download,
  MoreHorizontal,
  MailOpen,
  Trash2,
  Copy,
  Check,
} from "lucide-react";

import toast from "react-hot-toast";

const MessageCard = ({
  message = "I've liked you for a really long time, but I've never had the courage to tell you.",
  time = "2 minutes ago",
  unread = true,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFavourite = () => {
    const nextValue = !isFavourite;

    setIsFavourite(nextValue);

    toast.success(
      nextValue
        ? "Added to favourites"
        : "Removed from favourites"
    );
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);

      setCopied(true);

      toast.success("Message copied!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Unable to copy message.");
    }
  };

  return (
    <article
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        bg-white
        transition
        ${
          unread
            ? "border-violet-200 shadow-sm"
            : "border-gray-200"
        }
        hover:shadow-sm
      `}
    >
      {/* Unread accent */}
      {unread && (
        <div className="absolute left-0 top-0 h-full w-[3px] bg-violet-500" />
      )}

      <div className="p-4 sm:p-5 lg:p-6">

        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between gap-4">

          {/* Sender */}
          <div className="flex min-w-0 items-center gap-3">

            <div
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center
                rounded-xl
                border border-violet-100
                bg-violet-50
                text-violet-600
                sm:h-11 sm:w-11
              "
            >
              <MessageCircle
                size={19}
                strokeWidth={1.7}
              />
            </div>

            <div className="min-w-0">

              <div className="flex items-center gap-2">

                <h3 className="text-sm font-semibold text-gray-900">
                  Anonymous
                </h3>

                {unread && (
                  <span
                    className="
                      rounded-full
                      bg-violet-50
                      px-2 py-0.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-violet-600
                    "
                  >
                    New
                  </span>
                )}
              </div>

              <p className="mt-0.5 text-xs text-gray-400">
                {time}
              </p>
            </div>
          </div>

          {/* More */}
          <div className="relative shrink-0">

            <button
              type="button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                text-gray-400
                transition
                hover:bg-violet-50
                hover:text-violet-600
              "
            >
              <MoreHorizontal size={19} />
            </button>

            {menuOpen && (
              <div
                className="
                  absolute right-0 top-11 z-30
                  w-44
                  rounded-2xl
                  border border-violet-100
                  bg-white
                  p-1.5
                  shadow-xl
                  shadow-violet-100/40
                "
              >

                {/* Mark read */}
                <button
                  type="button"
                  className="
                    flex w-full
                    items-center gap-2.5
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-gray-600
                    transition
                    hover:bg-violet-50
                    hover:text-violet-700
                  "
                >
                  <MailOpen size={15} />
                  Mark as read
                </button>

                {/* Copy */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="
                    flex w-full
                    items-center gap-2.5
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-gray-600
                    transition
                    hover:bg-violet-50
                    hover:text-violet-700
                  "
                >
                  {copied ? (
                    <Check size={15} />
                  ) : (
                    <Copy size={15} />
                  )}

                  {copied
                    ? "Copied"
                    : "Copy message"}
                </button>

                <div className="my-1 h-px bg-gray-100" />

                {/* Delete */}
                <button
                  type="button"
                  className="
                    flex w-full
                    items-center gap-2.5
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-red-500
                    transition
                    hover:bg-red-50
                  "
                >
                  <Trash2 size={15} />
                  Delete whisper
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================= MESSAGE ================= */}
        <div
          className="
            relative
            mt-5
            overflow-hidden
            rounded-2xl
            border border-violet-100
            bg-violet-50/40
            px-4 py-5
            sm:px-5 sm:py-6
          "
        >

          {/* Quote */}
          <span
            className="
              pointer-events-none
              absolute
              -right-1
              -top-5
              select-none
              font-serif
              text-[90px]
              leading-none
              text-violet-100
            "
          >
            ”
          </span>

          <p
            className="
              relative z-10
              max-w-2xl
              text-[15px]
              leading-7
              text-gray-800
              sm:text-base
              sm:leading-8
            "
          >
            {message}
          </p>
        </div>

        {/* ================= ACTIONS ================= */}
        <div
          className="
            mt-4
            flex items-center
            gap-1
            border-t border-gray-100
            pt-3
          "
        >

          {/* Favourite */}
          <button
            type="button"
            onClick={handleFavourite}
            className={`
              flex flex-1
              items-center justify-center
              gap-1.5
              rounded-xl
              py-2.5
              text-xs font-medium
              transition
              sm:gap-2
              ${
                isFavourite
                  ? "bg-amber-50 text-amber-600"
                  : "text-gray-500 hover:bg-violet-50 hover:text-violet-700"
              }
            `}
          >
            <Star
              size={17}
              strokeWidth={1.8}
              fill={
                isFavourite
                  ? "currentColor"
                  : "none"
              }
            />

            <span>Favourite</span>
          </button>

          {/* Share */}
          <button
            type="button"
            className="
              flex flex-1
              items-center justify-center
              gap-1.5
              rounded-xl
              py-2.5
              text-xs font-medium
              text-gray-500
              transition
              hover:bg-violet-50
              hover:text-violet-700
              sm:gap-2
            "
          >
            <Share2
              size={17}
              strokeWidth={1.8}
            />

            <span>Share</span>
          </button>

          {/* Download */}
          <button
            type="button"
            className="
              flex flex-1
              items-center justify-center
              gap-1.5
              rounded-xl
              py-2.5
              text-xs font-medium
              text-gray-500
              transition
              hover:bg-violet-50
              hover:text-violet-700
              sm:gap-2
            "
          >
            <Download
              size={17}
              strokeWidth={1.8}
            />

            <span className="hidden sm:block">
              Download
            </span>

            <span className="sm:hidden">
              Save
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default MessageCard;