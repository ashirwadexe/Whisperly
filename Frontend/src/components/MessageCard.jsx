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
} from "lucide-react";

const MessageCard = ({
  message = "I've liked you for a really long time, but I've never had the courage to tell you.",
  time = "2 minutes ago",
  unread = true,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <article
      className={`
        relative overflow-hidden
        rounded-2xl
        m-3
        border
        bg-white
        shadow-[0_4px_20px_rgba(0,0,0,0.03)]
        transition-shadow
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        ${
          unread
            ? "border-violet-200"
            : "border-gray-200"
        }
      `}
    >
      {/* Unread accent */}
      {unread && (
        <div className="absolute left-0 top-0 h-full w-[3px] bg-violet-500" />
      )}

      <div className="p-4 sm:p-5 md:p-6">

        {/* ───────────────── Header ───────────────── */}
        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            {/* Anonymous Avatar */}
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-[15px]
                border border-violet-100
                bg-violet-50
                text-violet-600
              "
            >
              <MessageCircle
                size={20}
                strokeWidth={1.7}
              />
            </div>

            <div>
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
                      font-bold
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
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                rounded-xl
                p-2
                text-gray-400
                transition
                hover:bg-gray-50
                hover:text-gray-700
              "
            >
              <MoreHorizontal size={20} />
            </button>

            {menuOpen && (
              <div
                className="
                  absolute right-0 top-11 z-20
                  w-44
                  rounded-2xl
                  border border-gray-200
                  bg-white
                  p-1.5
                  shadow-xl
                  shadow-gray-200/50
                "
              >
                <button
                  className="
                    flex w-full items-center gap-2.5
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-gray-600
                    hover:bg-gray-50
                  "
                >
                  <MailOpen size={15} />
                  Mark as read
                </button>

                <button
                  className="
                    flex w-full items-center gap-2.5
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-gray-600
                    hover:bg-gray-50
                  "
                >
                  <Copy size={15} />
                  Copy message
                </button>

                <div className="my-1 h-px bg-gray-100" />

                <button
                  className="
                    flex w-full items-center gap-2.5
                    rounded-xl
                    px-3 py-2.5
                    text-xs font-medium
                    text-red-500
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

        {/* ───────────────── Message ───────────────── */}
        <div
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[20px]
            border border-gray-100
            bg-[#fafafa]
            px-4 py-5
            sm:px-5 sm:py-6
          "
        >
          {/* Decorative quote */}
          <span
            className="
              absolute -right-2 -top-5
              select-none
              text-[90px]
              font-serif
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
              sm:text-[16px]
              sm:leading-8
            "
          >
            {message}
          </p>
        </div>

        {/* ───────────────── Actions ───────────────── */}
        <div
          className="
            mt-4
            flex items-center
            border-t border-gray-100
            pt-3
          "
        >

          {/* Favourite */}
          <button
            onClick={() => setIsFavourite(!isFavourite)}
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
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }
            `}
          >
            <Star
              size={17}
              fill={isFavourite ? "currentColor" : "none"}
            />

            <span>Favourite</span>
          </button>

          {/* Share */}
          <button
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
              hover:text-violet-600
              sm:gap-2
            "
          >
            <Share2 size={17} />

            <span>Share</span>
          </button>

          {/* Download */}
          <button
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
              hover:text-violet-600
              sm:gap-2
            "
          >
            <Download size={17} />

            <span className="whitespace-nowrap">
              Download image
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default MessageCard;