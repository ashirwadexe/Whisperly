import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  LockKeyhole,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import WhisperlyLogo from "../components/WhisperlyLogo";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const maxLength = 500;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    // API call will come here later
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Soft glows */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-200/30 blur-[100px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[350px] w-[350px] rounded-full bg-fuchsia-200/20 blur-[100px]" />

        <div className="absolute right-[-120px] top-[30%] h-[300px] w-[300px] rounded-full bg-purple-200/20 blur-[100px]" />
      </div>

      {/* Page */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 py-6 sm:px-6 sm:py-8">
        {/* Top brand */}
        <Link to="/">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2.5">
              <WhisperlyLogo className="h-9 w-9" />
            </div>
          </div>
        </Link>

        {/* Main content */}
        <div className="flex flex-1 items-center justify-center sm:py-4">
          <div className="w-full">
            {/* Owner profile */}
            <div className="mb-6 text-center">
              <span className="mt-4 flex items-center justify-center gap-2">
                <h1 className="text-lg font-semibold tracking-tight text-gray-900">
                  Ashirwad
                </h1>

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  <Check size={12} strokeWidth={3} />
                </span>
              </span>

              <p className="mt-1 text-sm text-gray-500">
                wants to hear what you really think.
              </p>
            </div>

            {/* Form card */}
            <div className="overflow-hidden rounded-[30px] border border-gray-200/80 bg-white shadow-[0_20px_70px_rgba(79,70,229,0.08)]">
              {/* Card header */}
              <div className="border-b border-gray-100 px-5 py-5 sm:px-7 sm:py-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                    <MessageCircle size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h2 className="text-[16px] font-semibold text-gray-900">
                      Send an anonymous whisper
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Say whatever you've been wanting to say. They won't know
                      it's you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="p-5 sm:p-7">
                    {/* Textarea */}
                    <div className="relative rounded-[22px] border border-gray-200 bg-[#fafafa] p-1.5 transition focus-within:border-violet-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-50">
                      <textarea
                        value={message}
                        onChange={(e) => {
                          if (e.target.value.length <= maxLength) {
                            setMessage(e.target.value);
                          }
                        }}
                        placeholder="Write something you wouldn't normally say..."
                        rows={7}
                        className="w-full resize-none border-0 bg-transparent px-4 py-4 text-[15px] leading-7 text-gray-800 outline-none placeholder:text-gray-400 sm:px-5 sm:py-5 sm:text-[16px]"
                      />

                      <div className="flex items-center justify-between px-3 pb-2 sm:px-4">
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                          <LockKeyhole size={12} />
                          <span>Completely anonymous</span>
                        </div>

                        <span
                          className={`text-[11px] font-medium ${
                            message.length >= maxLength
                              ? "text-red-500"
                              : "text-gray-400"
                          }`}
                        >
                          {message.length}/{maxLength}
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!message.trim()}
                      className="group mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200/50 transition hover:shadow-xl hover:shadow-violet-200/60 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span>Send anonymously</span>

                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>

                    {/* Privacy note */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-center">
                      <LockKeyhole size={13} className="text-gray-400" />

                      <p className="text-[11px] leading-5 text-gray-400">
                        No account required · Your identity stays private
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                /* Success state */
                <div className="px-5 py-12 text-center sm:px-7 sm:py-16">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-violet-50 text-violet-600">
                    <Check size={28} strokeWidth={2.2} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold tracking-tight text-gray-900">
                    Whisper sent.
                  </h2>

                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    Your message has been delivered anonymously. They won't know
                    it came from you.
                  </p>

                  <button
                    onClick={() => {
                      setMessage("");
                      setSubmitted(false);
                    }}
                    className="mt-6 rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                  >
                    Send another whisper
                  </button>
                </div>
              )}
            </div>

            {/* Create your own */}
            <div className="mt-5 overflow-hidden rounded-[24px] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Want anonymous messages too?
                    </p>

                    <p className="mt-1 max-w-sm text-xs leading-5 text-gray-500">
                      Create your own Whisperly link and let people send you
                      honest messages.
                    </p>
                  </div>
                </div>

                <Link
                  to="/"
                  className="group flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-gray-800"
                >
                  <span>Create your Whisperly</span>

                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <p className="mt-7 text-center text-[10px] font-medium tracking-wide text-gray-400">
              POWERED BY WHISPERLY · SAY IT WITHOUT SAYING WHO
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MessageForm;
