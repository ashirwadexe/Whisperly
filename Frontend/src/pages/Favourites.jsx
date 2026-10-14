import React, { useEffect, useState } from "react";
import {
  Star,
  Heart,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../api/axios";
import MessageCard from "../components/MessageCard";

const Favourites = () => {
  const [favouriteMessages, setFavouriteMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await api.get("/messages/favourite");

        setFavouriteMessages(response.data.messages || []);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Unable to fetch favourite messages!"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <div className="min-h-screen space-y-7 bg-[#FDFBF5] p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 border-2 border-[#064E3B] bg-[#F8E7C9] px-3 py-1.5 text-xs font-black uppercase tracking-widest text-[#064E3B] shadow-[3px_3px_0px_#064E3B]">
            <Star size={14} fill="currentColor" />
            Your collection
          </div>

          <h1 className="text-3xl font-black tracking-tight text-[#064E3B] sm:text-4xl">
            Favourite Whispers
            <span className="text-[#D97745]">.</span>
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
            The words you want to keep close. Your favourite anonymous
            messages, all in one place.
          </p>
        </div>

        <div className="flex w-fit items-center gap-3 border-2 border-[#064E3B] bg-white px-4 py-3 shadow-[4px_4px_0px_#064E3B]">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-[#064E3B] bg-[#F8E7C9] text-[#064E3B]">
            <Heart size={20} fill="currentColor" />
          </div>

          <div>
            <p className="text-2xl font-black leading-none text-[#064E3B]">
              {favouriteMessages.length.toString().padStart(2, "0")}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
              Saved whispers
            </p>
          </div>
        </div>
      </div>

      {/* Decorative banner */}
      <div className="relative overflow-hidden border-2 border-[#064E3B] bg-[#064E3B] p-5 text-[#FDFBF5] shadow-[5px_5px_0px_#D6B98C] sm:p-7">
        <div className="absolute -right-5 -top-10 select-none text-[150px] font-black leading-none text-white/[0.07]">
          “
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#F8E7C9] bg-[#F8E7C9] text-[#064E3B]">
            <Star size={24} fill="currentColor" />
          </div>

          <div>
            <h2 className="text-lg font-black sm:text-xl">
              Some words deserve to stay.
            </h2>
            <p className="mt-1 text-sm leading-6 text-white/75">
              A little reminder that even anonymous words can mean a lot.
            </p>
          </div>
        </div>
      </div>

      {/* Section heading */}
      <div className="flex items-center justify-between gap-3 border-b-2 border-[#064E3B] pb-3">
        <h2 className="text-lg font-black text-[#064E3B]">
          Your saved messages
        </h2>

        <span className="border-2 border-[#064E3B] bg-[#F8E7C9] px-2.5 py-1 text-xs font-black text-[#064E3B]">
          MOST RECENT
        </span>
      </div>

      {/* Loading state */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center border-2 border-[#064E3B] bg-white px-5 py-14 text-center shadow-[4px_4px_0px_#064E3B]">
          <div className="h-8 w-8 animate-spin border-4 border-[#F8E7C9] border-t-[#064E3B]" />
          <p className="mt-4 text-sm font-black text-[#064E3B]">
            Loading your favourite whispers...
          </p>
        </div>
      ) : favouriteMessages.length === 0 ? (
        /* Empty state */
        <div className="border-2 border-dashed border-[#064E3B] bg-[#F8E7C9]/30 px-5 py-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center border-2 border-[#064E3B] bg-white text-[#064E3B] shadow-[4px_4px_0px_#064E3B]">
            <MessageCircle size={29} />
          </div>

          <h3 className="mt-5 text-xl font-black text-[#064E3B]">
            No favourites yet!
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-600">
            When you favourite a message, it will appear here. Save the words
            you want to revisit.
          </p>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="mt-6 inline-flex items-center gap-2 border-2 border-[#064E3B] bg-[#064E3B] px-4 py-3 text-sm font-black text-white shadow-[4px_4px_0px_#D6B98C] transition-all hover:bg-[#F8E7C9] hover:text-[#064E3B] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Explore messages
            <ArrowUpRight size={17} />
          </button>
        </div>
      ) : (
        /* Favourite message cards */
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {favouriteMessages.map((item) => (
            <MessageCard
              key={item._id}
              _id={item._id}
              message={item.message}
              time={
                item.createdAt
                  ? new Date(item.createdAt).toLocaleString()
                  : "Recently"
              }
              favourite={item.favourite}
            />
          ))}
        </div>
      )}

      {/* Bottom note */}
      <div className="border-t-2 border-dashed border-[#064E3B]/30 pt-5 text-center">
        <p className="text-xs font-bold tracking-wide text-gray-500">
          MADE WITH CARE BY WHISPERLY{" "}
          <span className="text-[#D97745]">♥</span>
        </p>
      </div>
    </div>
  );
};

export default Favourites;