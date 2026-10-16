import React, { useCallback, useEffect, useState } from "react";
import Stats from "../components/Stats";
import MessageCard from "../components/MessageCard";
import toast from "react-hot-toast";
import api from "../api/axios";

import {
  MessageCircle,
  RefreshCw,
  Inbox,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";
import FestivalGreeting from "../components/FestivalGreeting";

const Dashboard = () => {
  usePageTitle("Dashboard");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Handling deleted msg and updating ui by filtering the MSG whose id is matched with the deleted msg ID
  const handleDeletedMessage = (deletedId) => {
    setMessages((previousMessages) =>
      previousMessages.filter((item) => item._id !== deletedId),
    );
  };

  // Fetch messages API call
  const fetchMessages = useCallback(async (showRefresh = false) => {
    try {
      if (showRefresh) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }

      const response = await api.get("/messages");

      const fetchedMessages = response.data.messages || [];

      // Show newest messages first
      const sortedMessages = [...fetchedMessages].sort(
        (a, b) =>
          new Date(b.createdAt || 0).getTime() -
          new Date(a.createdAt || 0).getTime(),
      );

      setMessages(sortedMessages);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to fetch your whispers.",
      );
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <div className="min-h-screen space-y-7 bg-[#FDFBF5] pb-10">
      <FestivalGreeting />

      {/* Dashboard heading */}
      <section className="relative overflow-hidden border-2 border-[#064E3B] bg-white p-5 shadow-[5px_5px_0px_#064E3B] sm:p-7">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border-[18px] border-[#F8E7C9]/60" />
        <div className="pointer-events-none absolute right-10 top-12 h-3 w-3 bg-[#064E3B]/20" />

        <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="min-w-0">
            <div className="mb-3 inline-flex items-center gap-2 border-2 border-[#064E3B]/15 bg-[#F8E7C9]/50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#064E3B]">
              <Sparkles size={13} />
              Your private space
            </div>

            <h1 className="text-2xl font-black tracking-tight text-[#064E3B] sm:text-3xl">
              Your Whispers<span className="text-[#C49A54]">.</span>
            </h1>

            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
              Every message is a little secret. Read your anonymous whispers and
              save the ones that matter.
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchMessages(true)}
            disabled={isLoading || isRefreshing}
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start border-2 border-[#064E3B] bg-[#064E3B] px-4 py-3 text-xs font-black text-[#FDFBF5] shadow-[3px_3px_0px_#D6B98C] transition-all hover:bg-[#08634B] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-60 sm:self-auto"
          >
            <RefreshCw
              size={15}
              className={isRefreshing ? "animate-spin" : ""}
            />
            {isRefreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </section>

      {/* Existing statistics component */}
      <Stats />

      {/* Messages section heading */}
      <section className="space-y-5">
        <div className="flex flex-col justify-between gap-3 border-b-2 border-[#064E3B]/15 pb-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-[#064E3B] bg-[#F8E7C9] text-[#064E3B]">
                <MessageCircle size={20} strokeWidth={2.3} />
              </div>

              <h2 className="text-xl font-black tracking-tight text-[#064E3B] sm:text-2xl">
                Recent Messages
              </h2>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Your latest anonymous messages, all in one place.
            </p>
          </div>

          {!isLoading && (
            <div className="inline-flex items-center gap-2 self-start border-2 border-[#064E3B]/15 bg-white px-3 py-2 text-xs font-black text-[#064E3B] sm:self-auto">
              <span className="h-2 w-2 bg-[#064E3B]" />
              {messages.length} {messages.length === 1 ? "MESSAGE" : "MESSAGES"}
            </div>
          )}
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden border-2 border-[#064E3B]/15 bg-white"
              >
                <div className="flex items-center gap-3 border-b-2 border-[#064E3B]/10 bg-[#F8E7C9]/40 p-4">
                  <div className="h-11 w-11 animate-pulse bg-[#064E3B]/10" />

                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-28 animate-pulse bg-[#064E3B]/10" />
                    <div className="h-2.5 w-20 animate-pulse bg-gray-200" />
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="h-24 animate-pulse border-2 border-[#064E3B]/10 bg-[#FDFBF5]" />

                  <div className="h-3 w-32 animate-pulse bg-gray-200" />

                  <div className="flex gap-2">
                    <div className="h-10 flex-1 animate-pulse bg-[#064E3B]/10" />
                    <div className="h-10 flex-1 animate-pulse bg-[#064E3B]/10" />
                    <div className="h-10 flex-1 animate-pulse bg-[#064E3B]/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : messages.length === 0 ? (
          /* Empty state */
          <div className="relative overflow-hidden border-2 border-dashed border-[#064E3B]/30 bg-white px-5 py-12 text-center sm:py-16">
            <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 border-[12px] border-[#F8E7C9]/70" />

            <div className="relative mx-auto flex h-16 w-16 items-center justify-center border-2 border-[#064E3B] bg-[#F8E7C9] text-[#064E3B] shadow-[4px_4px_0px_#064E3B]">
              <Inbox size={30} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 text-xl font-black text-[#064E3B]">
              No whispers yet
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Your inbox is waiting! Share your Whisperly link with friends and
              let the anonymous messages roll in.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#064E3B]">
              <ArrowDown size={15} />
              Head to My Link to get started
            </div>
          </div>
        ) : (
          /* Message cards */
          <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">
            {messages.map((item) => (
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
                onDelete={handleDeletedMessage}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
