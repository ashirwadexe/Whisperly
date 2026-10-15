import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion, useReducedMotion } from "motion/react";

const Hero = () => {
  const { user } = useContext(AuthContext);
  const shouldReduceMotion = useReducedMotion();

  const enter = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: "blur(5px)" },
          animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  const questions = [
    "I've liked you for a really long time, but I've never had the courage to tell you.",
    "Tumse ek baat kehni thi... I actually miss talking to you.",
    "I saw you somewhere today, but I didn't know how to say hello.",
    "You probably don't know this, but you've helped me through a really difficult time.",
    "I think I have a crush on you. There, I finally said it.",
    "Mujhe tumhari ek baat bahut achhi lagti hai, bas kabhi bol nahi paaya.",
    "Honestly, I was angry with you for a long time.",
    "I have a secret about you that I've never told anyone.",
    "Kabhi kabhi lagta hai ki tum mujhe samajhte ho, baaki sabse zyada.",
    "I wish we were closer than we are right now.",
    "You hurt me once, and I don't think you ever realized it.",
    "I don't know if you remember me, but I still remember you.",
    "Sach bolun? I was jealous when I saw you with them.",
    "You have no idea how much I admire you.",
    "I wanted to propose to you, but I got scared.",
    "Mujhe tumse kuch kehna hai, par saamne bolne ki himmat nahi hai.",
    "I think we should talk about what happened between us.",
    "Sometimes I just want to disappear for a while and tell someone everything.",
    "You're one of the nicest people I've ever met.",
    "I know we don't talk anymore, but I still hope you're doing okay.",
  ];

  const buttonMotion = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -3, x: -1 },
        whileTap: { scale: 0.98, y: 1, x: 1 },
        transition: {
          type: "spring",
          stiffness: 350,
          damping: 20,
        },
      };

  const floatMotion = (duration, delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { y: [0, -8, 0], rotate: [0, 0.5, 0] },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };

  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-[#FDFBF5] pt-15 text-[#173D32]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #8FA99A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          initial={false}
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.05, 1], opacity: [0.65, 0.85, 0.65] }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#DCE9D8]/70 blur-3xl"
        />

        <motion.div
          initial={false}
          animate={shouldReduceMotion ? {} : { x: [0, 12, 0], y: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-[#F8E7C9]/80 blur-3xl"
        />

        <motion.div
          initial={false}
          animate={shouldReduceMotion ? {} : { x: [0, -12, 0], y: [0, 12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-[#DCE9D8]/70 blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        {/* Badge */}
        <motion.div
          {...enter(0.05)}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#173D32] bg-[#F8E7C9] px-4 py-2 text-xs font-bold text-[#064E3B] shadow-[3px_3px_0_#173D32] sm:text-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#064E3B] text-[10px] text-[#F8E7C9]">
              ✦
            </span>
            Anonymous conversations, made simple
          </div>
        </motion.div>

        {/* Hero Heading */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <motion.h1
            {...enter(0.15)}
            className="text-4xl font-black leading-[1.08] tracking-[-0.055em] text-[#173D32] sm:text-6xl lg:text-7xl"
          >
            Let people say what they
            <motion.span
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 18 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: shouldReduceMotion ? 0 : 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-1 block text-[#0B6B50]"
            >
              can't say openly.
            </motion.span>
          </motion.h1>

          <motion.p
            {...enter(0.3)}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#65766B] sm:text-lg"
          >
            Whisperly is an anonymous messaging platform where you can
            create your personal link, share it with anyone, and receive
            honest messages without knowing who sent them.
          </motion.p>

          {/* CTA */}
          {!user ? (
            <motion.div
              {...enter(0.42)}
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div {...buttonMotion} className="w-full sm:w-auto">
                <Link
                  to="/login"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#173D32] bg-[#064E3B] px-6 py-3.5 text-sm font-bold text-white shadow-[5px_5px_0_#173D32] transition-shadow duration-200 hover:shadow-[6px_6px_0_#173D32] active:shadow-none sm:w-auto"
                >
                  Create Your Whisperly
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>

              <motion.div {...buttonMotion} className="w-full sm:w-auto">
                <Link
                  to="/signup"
                  className="flex w-full items-center justify-center rounded-2xl border-2 border-[#173D32] bg-white px-6 py-3.5 text-sm font-bold text-[#173D32] shadow-[5px_5px_0_#DCE9D8] transition-colors duration-200 hover:bg-[#F8E7C9] hover:shadow-[6px_6px_0_#DCE9D8] active:shadow-none sm:w-auto"
                >
                  See How It Works
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              {...enter(0.42)}
              className="mt-9 flex justify-center"
            >
              <motion.div {...buttonMotion} className="w-full sm:w-auto">
                <Link
                  to="/dashboard"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#173D32] bg-[#064E3B] px-6 py-3.5 text-sm font-bold text-white shadow-[5px_5px_0_#173D32] transition-shadow duration-200 hover:shadow-[6px_6px_0_#173D32] active:shadow-none sm:w-auto"
                >
                  Whisperly Dashboard
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          )}

          {/* Trust Text */}
          <motion.div
            {...enter(0.52)}
            className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-[#718276]"
          >
            <span className="h-2 w-2 rounded-full bg-[#0B6B50]" />
            No identity revealed to the receiver
          </motion.div>
        </div>

        {/* Question River */}
        <motion.div
          {...enter(0.58)}
          className="relative z-[1] mt-10 overflow-hidden py-4"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28" />

          <div className="flex w-max animate-[questionFlow_120s_linear_infinite] gap-10">
            {[...questions, ...questions].map((question, index) => (
              <span
                key={index}
                className="whitespace-nowrap text-md font-semibold tracking-[-0.01em] text-[#505953] "
              >
                {question}
              </span>
            ))}
          </div>

          <style>{`
            @keyframes questionFlow {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }

            @media (prefers-reduced-motion: reduce) {
              .animate-\\[questionFlow_120s_linear_infinite\\] {
                animation: none;
              }
            }
          `}</style>
        </motion.div>

        {/* Visual Section */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 32, scale: 0.985 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCE5D8] sm:border-2" />

          <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8E0CC]/70" />

          {/* Floating Message - Left */}
          <motion.div
            {...floatMotion(6, 0.2)}
            className="absolute -left-2 top-10 z-20 hidden w-64 -rotate-[5deg] rounded-2xl border-2 border-[#173D32] bg-white p-4 shadow-[5px_5px_0_#DCE9D8] sm:block lg:left-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#173D32] bg-[#F8E7C9] font-bold text-[#064E3B]">
                ?
              </div>

              <div>
                <p className="text-xs font-bold text-[#173D32]">Anonymous</p>
                <p className="text-[11px] text-[#829187]">Just now</p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-5 text-[#52675B]">
              "What's something you've always wanted to tell me?"
            </p>
          </motion.div>

          {/* Floating Message - Right */}
          <motion.div
            {...floatMotion(7, 0.8)}
            className="absolute -right-2 top-28 z-20 hidden w-64 rotate-[5deg] rounded-2xl border-2 border-[#173D32] bg-white p-4 shadow-[5px_5px_0_#F8E7C9] sm:block lg:right-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#173D32] bg-[#F8E7C9] font-bold text-[#064E3B]">
                ♥
              </div>

              <div>
                <p className="text-xs font-bold text-[#173D32]">Anonymous</p>
                <p className="text-[11px] text-[#829187]">2 min ago</p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-5 text-[#52675B]">
              "Your content has helped me more than you know."
            </p>
          </motion.div>

          {/* Main App Mockup */}
          <div className="relative mx-auto max-w-3xl">
            <motion.div
              whileHover={
                shouldReduceMotion ? {} : { y: -3 }
              }
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 24,
              }}
              className="overflow-hidden rounded-3xl border-2 border-[#173D32] bg-white shadow-[8px_8px_0_#DCE9D8] sm:shadow-[12px_12px_0_#DCE9D8]"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b-2 border-[#E7EAE2] bg-white px-4 py-4 sm:px-5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D99A87]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D7B45C]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#6CA889]" />
                  </div>
                </div>

                <div className="hidden rounded-lg border border-[#E4E9E0] bg-[#FDFBF5] px-4 py-1.5 text-xs font-medium text-[#718276] sm:block">
                  whisperly.app/ashirwad
                </div>

                <div className="h-8 w-8 rounded-xl border border-[#173D32] bg-[#F8E7C9]" />
              </div>

              {/* Dashboard */}
              <div
                className="grid gap-6 p-4 sm:p-6 md:grid-cols-[180px_1fr]"
                style={{ backgroundColor: "#FDFBF5" }}
              >
                {/* Sidebar */}
                <div className="hidden space-y-2 md:block">
                  <div className="mb-5 flex items-center gap-2 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#173D32] bg-[#064E3B] text-sm font-black text-[#F8E7C9]">
                      W
                    </div>

                    <span className="font-black tracking-tight text-[#173D32]">
                      Whisperly
                    </span>
                  </div>

                  <div className="rounded-xl border-2 border-[#173D32] bg-[#F8E7C9] px-3 py-2.5 text-xs font-bold text-[#064E3B] shadow-[3px_3px_0_#173D32]">
                    Messages
                  </div>

                  <div className="rounded-xl px-3 py-2.5 text-xs font-medium text-[#829187]">
                    My Profile
                  </div>

                  <div className="rounded-xl px-3 py-2.5 text-xs font-medium text-[#829187]">
                    Settings
                  </div>
                </div>

                {/* Main Dashboard */}
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-[#829187]">
                        Your inbox
                      </p>
                      <h3 className="mt-1 text-lg font-black tracking-tight text-[#173D32] sm:text-xl">
                        Anonymous Messages
                      </h3>
                    </div>

                    <div className="shrink-0 rounded-xl border-2 border-[#173D32] bg-[#F8E7C9] px-2.5 py-2 text-[10px] font-bold text-[#064E3B] sm:px-3 sm:text-xs">
                      12 messages
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl border-2 border-[#173D32] bg-white p-3.5 shadow-[3px_3px_0_#DCE9D8] sm:p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#173D32] bg-[#F8E7C9] text-xs font-bold text-[#064E3B]">
                          ?
                        </div>

                        <div>
                          <p className="text-xs font-bold text-[#173D32]">
                            Anonymous
                          </p>
                          <p className="text-[10px] text-[#829187]">
                            2 minutes ago
                          </p>
                        </div>

                        <span className="ml-auto rounded-full border border-[#B9D6C1] bg-[#EDF5EA] px-2 py-1 text-[9px] font-bold text-[#064E3B]">
                          New
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[#52675B]">
                        "You seem like someone who is really easy to talk to."
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-[#173D32] bg-white p-3.5 shadow-[3px_3px_0_#F8E7C9] sm:p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#173D32] bg-[#F8E7C9] text-xs font-bold text-[#064E3B]">
                          ♥
                        </div>

                        <div>
                          <p className="text-xs font-bold text-[#173D32]">
                            Anonymous
                          </p>
                          <p className="text-[10px] text-[#829187]">
                            14 minutes ago
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[#52675B]">
                        "I have something I've wanted to tell you for a while..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Share Link */}
            <motion.div
              {...floatMotion(5.5, 0.5)}
              className="absolute -bottom-7 left-1/2 flex w-[94%] -translate-x-1/2 items-center justify-between gap-2 rounded-2xl border-2 border-[#173D32] bg-white p-3 shadow-[5px_5px_0_#173D32] sm:w-auto sm:min-w-[390px] sm:gap-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#173D32] bg-[#F8E7C9] text-lg text-[#064E3B]">
                  🔗
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-medium text-[#829187]">
                    Your Whisperly link
                  </p>
                  <p className="truncate text-xs font-bold text-[#173D32]">
                    whisperly.app/yourname
                  </p>
                </div>
              </div>

              <button className="shrink-0 rounded-xl border-2 border-[#173D32] bg-[#064E3B] px-3 py-2 text-[10px] font-bold text-white shadow-[2px_2px_0_#173D32]">
                Copy
              </button>
            </motion.div>
          </div>

          {/* Privacy Badge */}
          <motion.div
            {...enter(0.35)}
            className="absolute -bottom-8 -right-2 hidden items-center gap-2 rounded-2xl border-2 border-[#173D32] bg-white px-4 py-3 shadow-[5px_5px_0_#F8E7C9] sm:flex lg:right-10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#173D32] bg-[#F8E7C9]">
              🔒
            </div>

            <div>
              <p className="text-xs font-bold text-[#173D32]">
                Identity protected
              </p>
              <p className="text-[10px] text-[#829187]">
                Sender stays anonymous
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;