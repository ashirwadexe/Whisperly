import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  LockKeyhole,
  MessageCircle,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import WhisperlyLogo from "../components/WhisperlyLogo";
import api from "../api/axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { useEffect } from "react";

const MessageForm = () => {
  const { username } = useParams();
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const maxLength = 500;

  useEffect(() => {
    const countLinkVisits = async () => {
      if (!username) return;
      try {
        await api.get(`/auth/${username}`);
      } catch (error) {
        toast.error("Unable to load this link!");
      }
    };

    countLinkVisits();
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
      setIsLoading(true);
      const response = await api.post(`/messages/${username}`, {
        message: message.trim(),
      });

      toast.success(response.data.message || "Message sent!");
      setSubmitted(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Error sending message. Try again!",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF7EF] text-[#064E3B]">
      {/* Brutalist background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(#064E3B 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute -right-24 top-20 h-64 w-64 rounded-full border-[3px] border-[#064E3B]/10" />

        <div className="absolute -left-24 bottom-24 h-72 w-72 rounded-full border-[3px] border-[#064E3B]/10" />
      </div>

      {/* Page */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 py-6 sm:px-6 sm:py-8">
        {/* Brand */}
        <Link
          to="/"
          className="mx-auto flex w-fit items-center justify-center border-2 border-[#064E3B] bg-white p-2 shadow-[4px_4px_0px_#064E3B] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#064E3B]"
        >
          <WhisperlyLogo className="h-9 w-9" />
        </Link>

        {/* Main content */}
        <div className="flex flex-1 items-center justify-center py-8 sm:py-10">
          <div className="w-full">
            {/* Owner profile */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex w-fit items-center gap-2 border-2 border-[#064E3B] bg-[#F8E7C9] px-3 py-1.5 shadow-[3px_3px_0px_#064E3B]">
                <LockKeyhole size={13} strokeWidth={2.5} />
                <span className="text-[10px] font-black uppercase tracking-[0.16em]">
                  Anonymous space
                </span>
              </div>

              <div className="flex items-center justify-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#064E3B] bg-[#064E3B] text-[#F8E7C9]">
                  <User size={20} strokeWidth={2.5} />
                </div>

                <h1 className="max-w-[240px] truncate text-2xl font-black tracking-tight text-[#064E3B] sm:max-w-sm sm:text-3xl">
                  @{username}
                </h1>
              </div>

              <p className="mt-3 text-sm font-medium text-[#5F6D63]">
                wants to hear what you really think.
              </p>
            </div>

            {/* Form card */}
            <div className="border-2 border-[#064E3B] bg-white shadow-[6px_6px_0px_#064E3B] sm:shadow-[8px_8px_0px_#064E3B]">
              {/* Card header */}
              <div className="border-b-2 border-[#064E3B] bg-[#F8E7C9] p-5 sm:p-6">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#064E3B] bg-white shadow-[3px_3px_0px_#064E3B]">
                    <MessageCircle size={23} strokeWidth={2.5} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-lg font-black leading-tight tracking-tight sm:text-xl">
                      SEND AN ANONYMOUS WHISPER
                    </h2>

                    <p className="mt-2 text-xs font-medium leading-5 text-[#526157] sm:text-sm">
                      No names. No awkwardness. Just say what is on your mind.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="p-5 sm:p-7">
                    {/* Textarea */}
                    <div className="border-2 border-[#064E3B] bg-[#FAF7EF] transition-colors focus-within:bg-white focus-within:shadow-[4px_4px_0px_#D7B77A]">
                      <div className="flex items-center justify-between gap-2 border-b-2 border-[#064E3B] bg-white px-3 py-2.5 sm:px-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.12em]">
                          Your message
                        </span>

                        <span className="border border-[#064E3B] bg-[#F8E7C9] px-2 py-1 text-[9px] font-black uppercase tracking-wider">
                          Secret mode
                        </span>
                      </div>

                      <textarea
                        value={message}
                        onChange={(e) => {
                          if (e.target.value.length <= maxLength) {
                            setMessage(e.target.value);
                          }
                        }}
                        placeholder="Write something you wouldn't normally say..."
                        rows={7}
                        className="w-full resize-none border-0 bg-transparent px-4 py-4 text-[15px] font-medium leading-7 text-[#173D2D] outline-none placeholder:text-[#92978E] sm:px-5 sm:py-5 sm:text-base"
                      />

                      <div className="flex items-center justify-between gap-2 border-t-2 border-dashed border-[#B9C6B8] px-3 py-3 sm:px-4">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-[#526157] sm:text-[11px]">
                          <LockKeyhole size={13} strokeWidth={2.5} />
                          <span>Identity protected</span>
                        </div>

                        <span
                          className={`shrink-0 text-xs font-black tabular-nums ${
                            message.length >= maxLength
                              ? "text-red-600"
                              : "text-[#064E3B]"
                          }`}
                        >
                          {message.length}/{maxLength}
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!message.trim() || isloading}
                      className="group mt-5 flex w-full items-center justify-center gap-2.5 border-2 border-[#064E3B] bg-[#064E3B] px-5 py-4 text-sm font-black uppercase tracking-wide text-[#F8E7C9] shadow-[4px_4px_0px_#C5A66D] transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#C5A66D] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_#C5A66D]"
                    >
                      {!isloading ? (
                        <span>Send anonymously</span>
                      ) : (
                        <Loader text="Submitting..." />
                      )}

                      <Send
                        size={17}
                        strokeWidth={2.5}
                        className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>

                    {/* Privacy note */}
                    <div className="mt-5 flex items-start justify-center gap-2 text-center">
                      <LockKeyhole
                        size={13}
                        className="mt-0.5 shrink-0"
                        strokeWidth={2.5}
                      />

                      <p className="text-[10px] font-bold leading-5 text-[#68746A] sm:text-[11px]">
                        NO ACCOUNT REQUIRED · YOUR IDENTITY STAYS PRIVATE
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                /* Success state */
                <div className="px-5 py-12 text-center sm:px-7 sm:py-16">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center border-2 border-[#064E3B] bg-[#DCEBDD] shadow-[5px_5px_0px_#064E3B]">
                    <Check size={36} strokeWidth={3} />
                  </div>

                  <div className="mx-auto mt-7 w-fit border-2 border-[#064E3B] bg-[#F8E7C9] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em]">
                    Delivered successfully
                  </div>

                  <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                    WHISPER SENT!
                  </h2>

                  <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-[#667269]">
                    Your message has been delivered anonymously. They won't
                    know it came from you.
                  </p>

                  <button
                    onClick={() => {
                      setMessage("");
                      setSubmitted(false);
                    }}
                    className="mt-7 border-2 border-[#064E3B] bg-white px-5 py-3 text-xs font-black uppercase tracking-wide shadow-[4px_4px_0px_#064E3B] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#F8E7C9] hover:shadow-[2px_2px_0px_#064E3B] active:translate-x-1 active:translate-y-1 active:shadow-none"
                  >
                    Send another whisper
                  </button>
                </div>
              )}
            </div>

            {/* Create your own */}
            <div className="mt-7 border-2 border-[#064E3B] bg-[#F8E7C9] p-5 shadow-[5px_5px_0px_#064E3B] sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#064E3B] bg-white shadow-[3px_3px_0px_#064E3B]">
                    <Sparkles size={21} strokeWidth={2.5} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-black uppercase leading-5 tracking-tight">
                      Your turn to receive whispers.
                    </p>

                    <p className="mt-2 max-w-sm text-xs font-medium leading-5 text-[#526157]">
                      Create your own Whisperly link and let people send you
                      honest messages.
                    </p>
                  </div>
                </div>

                <Link
                  to="/"
                  className="group flex w-full shrink-0 items-center justify-center gap-2 border-2 border-[#064E3B] bg-white px-4 py-3 text-xs font-black uppercase tracking-wide shadow-[3px_3px_0px_#064E3B] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#064E3B] hover:text-[#F8E7C9] hover:shadow-[1px_1px_0px_#064E3B] active:translate-x-1 active:translate-y-1 active:shadow-none sm:w-auto"
                >
                  <span>Create your Whisperly</span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <p className="mt-8 text-center text-[9px] font-black uppercase tracking-[0.16em] text-[#657267] sm:text-[10px]">
              POWERED BY WHISPERLY · SAY IT WITHOUT SAYING WHO
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MessageForm;