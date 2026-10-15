import React, { useContext, useEffect, useState } from "react";
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
import { motion, useReducedMotion } from "motion/react";
import WhisperlyLogo from "../components/WhisperlyLogo";
import api from "../api/axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const MessageForm = () => {
  const { username } = useParams();

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const maxLength = 500;

  // Reusable animation settings
  const revealVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Count link visits
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

  // Submit anonymous message
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
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(#064E3B 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <motion.div
          initial={false}
          animate={
            shouldReduceMotion
              ? {}
              : { rotate: [0, 5, 0], scale: [1, 1.025, 1] }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 top-20 h-64 w-64 rounded-full border-[3px] border-[#064E3B]/10"
        />

        <motion.div
          initial={false}
          animate={
            shouldReduceMotion
              ? {}
              : { rotate: [0, -5, 0], scale: [1, 1.02, 1] }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 bottom-24 h-72 w-72 rounded-full border-[3px] border-[#064E3B]/10"
        />
      </div>

      {/* Page */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 py-6 sm:px-6 sm:py-8">
        {/* Brand */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: -14 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto"
        >
          <Link
            to="/"
            className="flex w-fit items-center justify-center border-2 border-[#064E3B] bg-white p-2 shadow-[4px_4px_0px_#064E3B] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#064E3B]"
          >
            <WhisperlyLogo className="h-9 w-9" />
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-1 items-center justify-center py-8 sm:py-10">
          <div className="w-full">
            {/* Owner profile */}
            <motion.div
              className="mb-8 text-center"
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              variants={revealVariants}
              transition={{ delay: 0.08 }}
            >
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, scale: 0.92 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mb-4 flex w-fit items-center gap-2 border-2 border-[#064E3B] bg-[#F8E7C9] px-3 py-1.5 shadow-[3px_3px_0px_#064E3B]"
              >
                <LockKeyhole size={13} strokeWidth={2.5} />
                <span className="text-[10px] font-black uppercase tracking-[0.16em]">
                  Anonymous space
                </span>
              </motion.div>

              <div className="flex items-center justify-center gap-2.5">
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, scale: 0.8, rotate: -8 }
                  }
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                    delay: shouldReduceMotion ? 0 : 0.12,
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#064E3B] bg-[#064E3B] text-[#F8E7C9]"
                >
                  <User size={20} strokeWidth={2.5} />
                </motion.div>

                <h1 className="max-w-[240px] truncate text-2xl font-black tracking-tight text-[#064E3B] sm:max-w-sm sm:text-3xl">
                  @{username}
                </h1>
              </div>

              <p className="mt-3 text-sm font-medium text-[#5F6D63]">
                wants to hear what you really think.
              </p>
            </motion.div>

            {/* Form card */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                      scale: 0.985,
                      filter: "blur(5px)",
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.75,
                delay: shouldReduceMotion ? 0 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-2 border-[#064E3B] bg-white shadow-[6px_6px_0px_#064E3B] sm:shadow-[8px_8px_0px_#064E3B]"
            >
              {/* Card header */}
              <div className="border-b-2 border-[#064E3B] bg-[#F8E7C9] p-5 sm:p-6">
                <div className="flex items-start gap-3.5">
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { rotate: -4, y: -2 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#064E3B] bg-white shadow-[3px_3px_0px_#064E3B]"
                  >
                    <MessageCircle size={23} strokeWidth={2.5} />
                  </motion.div>

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

              {/* Form and success state */}
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="p-5 sm:p-7">
                    {/* Textarea */}
                    <motion.div
                      whileFocusWithin={
                        shouldReduceMotion
                          ? {}
                          : { y: -2 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                      className="border-2 border-[#064E3B] bg-[#FAF7EF] transition-colors focus-within:bg-white focus-within:shadow-[4px_4px_0px_#D7B77A]"
                    >
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

                        <motion.span
                          animate={
                            shouldReduceMotion
                              ? {}
                              : { scale: message.length === maxLength ? [1, 1.08, 1] : 1 }
                          }
                          transition={{ duration: 0.25 }}
                          className={`shrink-0 text-xs font-black tabular-nums ${
                            message.length >= maxLength
                              ? "text-red-600"
                              : "text-[#064E3B]"
                          }`}
                        >
                          {message.length}/{maxLength}
                        </motion.span>
                      </div>
                    </motion.div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={!message.trim() || isloading}
                      whileHover={
                        shouldReduceMotion || !message.trim() || isloading
                          ? {}
                          : { y: -2, x: -1 }
                      }
                      whileTap={
                        shouldReduceMotion
                          ? {}
                          : { scale: 0.99, y: 1, x: 1 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                      className="group mt-5 flex w-full items-center justify-center gap-2.5 border-2 border-[#064E3B] bg-[#064E3B] px-5 py-4 text-sm font-black uppercase tracking-wide text-[#F8E7C9] shadow-[4px_4px_0px_#C5A66D] transition-shadow duration-150 hover:shadow-[5px_5px_0px_#C5A66D] active:shadow-none disabled:cursor-not-allowed disabled:opacity-45"
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
                    </motion.button>

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
                /* Animated success state */
                <motion.div
                  key="success"
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 16, scale: 0.98 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="px-5 py-12 text-center sm:px-7 sm:py-16"
                >
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : { scale: 0.75, rotate: -8 }
                    }
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="mx-auto flex h-20 w-20 items-center justify-center border-2 border-[#064E3B] bg-[#DCEBDD] shadow-[5px_5px_0px_#064E3B]"
                  >
                    <Check size={36} strokeWidth={3} />
                  </motion.div>

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

                  <motion.button
                    onClick={() => {
                      setMessage("");
                      setSubmitted(false);
                    }}
                    whileHover={shouldReduceMotion ? {} : { y: -2, x: -1 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="mt-7 border-2 border-[#064E3B] bg-white px-5 py-3 text-xs font-black uppercase tracking-wide shadow-[4px_4px_0px_#064E3B] transition-colors hover:bg-[#F8E7C9] active:shadow-none"
                  >
                    Send another whisper
                  </motion.button>
                </motion.div>
              )}
            </motion.div>

            {/* Create your own */}
            <motion.div
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
                margin: "0px 0px -35px 0px",
              }}
              className="mt-7 border-2 border-[#064E3B] bg-[#F8E7C9] p-5 shadow-[5px_5px_0px_#064E3B] sm:p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3.5">
                  <motion.div
                    whileHover={
                      shouldReduceMotion ? {} : { rotate: 5, scale: 1.04 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 16,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#064E3B] bg-white shadow-[3px_3px_0px_#064E3B]"
                  >
                    <Sparkles size={21} strokeWidth={2.5} />
                  </motion.div>

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
            </motion.div>

            {/* Footer */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-center text-[9px] font-black uppercase tracking-[0.16em] text-[#657267] sm:text-[10px]"
            >
              POWERED BY WHISPERLY · SAY IT WITHOUT SAYING WHO
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MessageForm;