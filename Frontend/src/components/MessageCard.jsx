import React, { useState } from "react";
import {
  MessageCircle,
  Star,
  Share2,
  Download,
  ArrowUpRight,
} from "lucide-react";

import toast from "react-hot-toast";
import api from "../api/axios";

const MessageCard = ({
  message,
  _id,
  time,
  favourite: initialIsFavourite = false,
}) => {
  // Update favourite UI
  const [isFavourite, setIsFavourite] = useState(initialIsFavourite);

  // Prevent repeated clicks while API is running
  const [isUpdatingFavourite, setIsUpdatingFavourite] = useState(false);

  const handleFavourite = async () => {
    if (isUpdatingFavourite) return;

    try {
      setIsUpdatingFavourite(true);

      await api.patch(`/messages/${_id}/favourite`);

      const nextValue = !isFavourite;
      setIsFavourite(nextValue);

      toast.success(
        nextValue ? "Added to favourites" : "Removed from favourites"
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to update favourite!"
      );
    } finally {
      setIsUpdatingFavourite(false);
    }
  };

  return (
    <article className="group relative border-2 border-[#064E3B] bg-white shadow-[5px_5px_0px_#064E3B] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#064E3B]">
      {/* Top header */}
      <div className="flex items-center justify-between gap-3 border-b-2 border-[#064E3B] bg-[#F8E7C9]/60 px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          {/* Anonymous avatar */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-[#064E3B] bg-white text-[#064E3B]">
            <MessageCircle size={21} strokeWidth={2} />
          </div>

          {/* Sender details */}
          <div className="min-w-0">
            <h3 className="text-sm font-black tracking-wide text-[#064E3B]">
              Anonymous
            </h3>

            <p className="mt-1 truncate text-xs font-semibold text-gray-500">
              {time}
            </p>
          </div>
        </div>

        {/* Favourite indicator */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#064E3B] transition-colors ${
            isFavourite
              ? "bg-[#064E3B] text-[#F8E7C9]"
              : "bg-white text-[#064E3B]"
          }`}
        >
          <Star
            size={19}
            strokeWidth={2.2}
            fill={isFavourite ? "currentColor" : "none"}
          />
        </div>
      </div>

      {/* Message content */}
      <div className="p-4 sm:p-5">
        <div className="relative min-h-[110px] border-2 border-[#064E3B]/20 bg-[#FDFBF5] px-4 py-5 sm:px-5 sm:py-6">
          {/* Decorative quotation mark */}
          <span className="pointer-events-none absolute right-2 top-0 select-none font-serif text-7xl font-black leading-none text-[#064E3B]/10">
            ”
          </span>

          <p className="relative z-10 whitespace-pre-wrap break-words text-[15px] font-medium leading-7 text-gray-800 sm:text-base sm:leading-8">
            {message}
          </p>
        </div>

        {/* Message footer label */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
            WHISPERLY MESSAGE
          </span>

          <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#064E3B]">
            <span className="h-2 w-2 bg-[#064E3B]" />
            Anonymous
          </span>
        </div>

        {/* Action buttons */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t-2 border-[#064E3B] pt-4">
          {/* Favourite */}
          <button
            type="button"
            onClick={handleFavourite}
            disabled={isUpdatingFavourite}
            aria-pressed={isFavourite}
            className={`flex min-w-0 items-center justify-center gap-2 border-2 px-2 py-3 text-xs font-black transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-60 sm:px-3 ${
              isFavourite
                ? "border-[#064E3B] bg-[#064E3B] text-[#F8E7C9] shadow-[3px_3px_0px_#D6B98C]"
                : "border-[#064E3B] bg-white text-[#064E3B] shadow-[3px_3px_0px_#064E3B] hover:bg-[#F8E7C9]"
            }`}
          >
            <Star
              size={16}
              strokeWidth={2.2}
              fill={isFavourite ? "currentColor" : "none"}
              className="shrink-0"
            />

            <span className="truncate">
              {isUpdatingFavourite
                ? "Saving..."
                : isFavourite
                  ? "Saved"
                  : "Favourite"}
            </span>
          </button>

          {/* Share */}
          <button
            type="button"
            className="flex min-w-0 items-center justify-center gap-2 border-2 border-[#064E3B] bg-white px-2 py-3 text-xs font-black text-[#064E3B] shadow-[3px_3px_0px_#064E3B] transition-all duration-150 hover:bg-[#F8E7C9] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none sm:px-3"
          >
            <Share2 size={16} strokeWidth={2.2} className="shrink-0" />
            <span>Share</span>
          </button>

          {/* Download */}
          <button
            type="button"
            className="flex min-w-0 items-center justify-center gap-2 border-2 border-[#064E3B] bg-white px-2 py-3 text-xs font-black text-[#064E3B] shadow-[3px_3px_0px_#064E3B] transition-all duration-150 hover:bg-[#F8E7C9] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none sm:px-3"
          >
            <Download size={16} strokeWidth={2.2} className="shrink-0" />
            <span className="hidden sm:inline">Download</span>
            <span className="sm:hidden">Save</span>
          </button>
        </div>
      </div>

      {/* Bottom brand strip */}
      <div className="flex items-center justify-between border-t-2 border-[#064E3B] bg-[#064E3B] px-4 py-2.5 text-[#FDFBF5] sm:px-5">
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
          Keep it anonymous.
        </span>

        <ArrowUpRight
          size={17}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </article>
  );
};

export default MessageCard;