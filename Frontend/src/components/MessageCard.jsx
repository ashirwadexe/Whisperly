import React, { useState } from "react";
import { MessageCircle, Star, Share2, Download } from "lucide-react";

import toast from "react-hot-toast";
import api from "../api/axios";

const MessageCard = ({
  message,
  _id,
  time,
  favourite: initialIsFavourite = false,
}) => {
  // to update the UI
  const [isFavourite, setIsFavourite] = useState(initialIsFavourite);
  // to check is ui is running or no
  const [isUpdatingFavourite, setIsUpdatingFavourite] = useState(false);

  const handleFavourite = async () => {
    // if api is running user click the star button then it will not owrk
    if (isUpdatingFavourite) return;
    try {
      setIsUpdatingFavourite(true);
      await api.patch(`/messages/${_id}/favourite`);
      // ye UI ko update krega taki agar fav hai to star glow kre or fav nhi hia to star colorless ho
      const nextValue = !isFavourite;
      setIsFavourite(nextValue);

      toast.success(
        nextValue ? "Added to favourites" : "Removed from favourites",
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to update favourite!",
      );
    } finally {
      setIsUpdatingFavourite(false);
    }
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#064E3B]/15 bg-white transition-all duration-300 hover:border-[#064E3B]/40 hover:shadow-[0_8px_30px_rgba(6,78,59,0.08)]">
      {/* Emerald accent */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[#064E3B] transition-colors duration-300 group-hover:bg-[#064E3B]/70" />

      <div className="p-4 sm:p-5 lg:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {/* Avatar */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#064E3B]/10 bg-[#F8E7C9]/70 text-[#064E3B] transition-all duration-300 group-hover:border-[#064E3B]/20 group-hover:bg-[#F8E7C9] sm:h-11 sm:w-11">
              <MessageCircle size={19} strokeWidth={1.8} />
            </div>

            {/* Sender details */}
            <div className="min-w-0">
              <h3 className="text-sm font-semibold tracking-tight text-[#064E3B]">
                Anonymous
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-400">{time}</p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#064E3B]/10 bg-[#F8E7C9]/25 px-4 py-5 transition-colors duration-300 group-hover:bg-[#F8E7C9]/40 sm:px-5 sm:py-6">
          {/* Decorative quote */}
          <span className="pointer-events-none absolute -right-1 -top-5 select-none font-serif text-[90px] leading-none text-[#064E3B]/10">
            ”
          </span>

          {/* Subtle top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-white/80" />

          <p className="relative z-10 max-w-2xl whitespace-pre-wrap break-words text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
            {message}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-1 border-t border-[#064E3B]/10 pt-3">
          {/* Favourite */}
          <button
            type="button"
            onClick={handleFavourite}
            aria-pressed={isFavourite}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-medium transition-all duration-200 active:scale-[0.98] sm:gap-2 ${
              isFavourite
                ? "bg-[#F8E7C9] text-[#064E3B]"
                : "text-gray-500 hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
            }`}
          >
            <Star
              size={17}
              strokeWidth={1.8}
              fill={isFavourite ? "currentColor" : "none"}
              className="transition-transform duration-200 group-hover:scale-105"
            />

            <span>Favourite</span>
          </button>

          {/* Share */}
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-medium text-gray-500 transition-all duration-200 hover:bg-[#F8E7C9]/60 hover:text-[#064E3B] active:scale-[0.98] sm:gap-2"
          >
            <Share2 size={17} strokeWidth={1.8} />

            <span>Share</span>
          </button>

          {/* Download */}
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-medium text-gray-500 transition-all duration-200 hover:bg-[#F8E7C9]/60 hover:text-[#064E3B] active:scale-[0.98] sm:gap-2"
          >
            <Download size={17} strokeWidth={1.8} />

            <span className="hidden sm:block">Download</span>

            <span className="sm:hidden">Save</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default MessageCard;
