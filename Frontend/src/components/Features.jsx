import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const Features = () => {
  const shouldReduceMotion = useReducedMotion();

  const features = ["Message controls", "Privacy"];

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: "blur(4px)" },
          whileInView: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  const cardMotion = (delay = 0) => ({
    ...reveal(delay),
    whileHover: shouldReduceMotion
      ? {}
      : {
          y: -6,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 22,
          },
        },
  });

  const iconClass =
    "flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#173D32] bg-[#F8E7C9] text-xl shadow-[2px_2px_0px_#173D32]";

  const labelClass =
    "mt-5 text-xs font-extrabold uppercase tracking-[0.15em] text-[#0B6B50]";

  const headingClass =
    "mt-2 text-xl font-extrabold tracking-tight text-[#173D32]";

  const descriptionClass =
    "mt-2 text-sm leading-6 text-[#65766B]";

  const mockupClass = "relative overflow-hidden bg-[#F5F3E9]";

  const miniCardClass =
    "rounded-2xl border-2 border-[#D8E2D6] bg-white p-4 shadow-[3px_3px_0px_#E4E8DC]";

  const iconHover = shouldReduceMotion
    ? {}
    : {
        whileHover: { rotate: -5, scale: 1.06 },
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 18,
        },
      };

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#FDFBF5] py-20 sm:py-24"
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0B6B50 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <motion.div
        initial={false}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.5 }}
      />

      <motion.div
        initial={false}
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, 12, 0], y: [0, -8, 0] }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-[45%] h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.4 }}
      />

      <motion.div
        initial={false}
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, -12, 0], y: [0, 10, 0] }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "#0B6B50", opacity: 0.07 }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            {...reveal(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#173D32] bg-[#F8E7C9] px-4 py-2 text-xs font-bold text-[#064E3B] shadow-[2px_2px_0px_#173D32]"
          >
            <motion.span
              animate={
                shouldReduceMotion
                  ? {}
                  : { scale: [1, 1.25, 1] }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-[#0B6B50]"
            />
            Everything you need
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#173D32] sm:text-4xl lg:text-5xl"
          >
            Designed for
            <motion.span
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-1 block text-[#0B6B50]"
            >
              honest conversations.
            </motion.span>
          </motion.h2>

          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#65766B] sm:text-base"
          >
            Whisperly gives you a simple space to receive anonymous messages,
            manage your inbox, and keep your conversations under your control.
          </motion.p>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-16 grid gap-7 sm:mt-20 lg:grid-cols-3 lg:gap-6">
          {/* FEATURE 1: ANONYMOUS MESSAGES */}
          <motion.div
            {...cardMotion(0)}
            className="group relative overflow-hidden rounded-[24px] border-2 border-[#173D32] bg-[#FDFBF5] shadow-[5px_5px_0px_#173D32] transition-shadow duration-300 hover:shadow-[7px_7px_0px_#173D32] lg:col-span-2 sm:rounded-[28px]"
          >
            <motion.div
              initial={false}
              animate={
                shouldReduceMotion ? {} : { scale: [1, 1.12, 1] }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
            />

            <div className="relative grid h-full md:grid-cols-2">
              <div className="relative flex flex-col justify-center p-6 sm:p-9">
                <motion.div {...iconHover} className={iconClass}>
                  💬
                </motion.div>

                <p className={labelClass}>Core feature</p>

                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#173D32]">
                  Truly anonymous messages
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#65766B]">
                  Give people a comfortable way to say what's on their mind
                  without putting their identity in the conversation.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#36594A]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#173D32] bg-[#F8E7C9] text-[#064E3B]">
                    ✓
                  </span>
                  Sender identity stays hidden
                </div>
              </div>

              {/* MESSAGE PREVIEW */}
              <div
                className={`${mockupClass} flex min-h-[300px] items-center justify-center border-t-2 border-[#D8E2D6] p-5 md:border-l-2 md:border-t-0 sm:p-6`}
              >
                <motion.div
                  initial={false}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { rotate: [0, 1, 0], scale: [1, 1.015, 1] }
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-64 w-64 rounded-full border-2 border-[#D8E2D6]"
                />

                <div className="relative w-full max-w-[270px] space-y-4">
                  <motion.div
                    whileHover={
                      shouldReduceMotion ? {} : { x: -4, y: -2 }
                    }
                    className={`${miniCardClass} translate-x-2 transition-transform duration-300`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#173D32] bg-[#F8E7C9] text-xs text-[#064E3B]">
                        ?
                      </div>

                      <div>
                        <p className="text-[10px] font-extrabold text-[#173D32]">
                          Anonymous
                        </p>
                        <p className="text-[9px] text-[#829187]">
                          Just now
                        </p>
                      </div>

                      <span className="ml-auto h-2 w-2 rounded-full bg-[#0B6B50]" />
                    </div>

                    <p className="mt-3 text-xs leading-5 text-[#65766B]">
                      "What's something you've always wanted to tell me?"
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={
                      shouldReduceMotion ? {} : { x: 4, y: -2 }
                    }
                    className={`${miniCardClass} -translate-x-2`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#173D32] bg-[#F8E7C9] text-xs text-[#064E3B]">
                        ♥
                      </div>

                      <div>
                        <p className="text-[10px] font-extrabold text-[#173D32]">
                          Anonymous
                        </p>
                        <p className="text-[9px] text-[#829187]">
                          2 min ago
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-[#65766B]">
                      "You don't know me, but your work really inspired me."
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 2: PERSONAL LINK */}
          <motion.div
            {...cardMotion(0.1)}
            className="group relative overflow-hidden rounded-[24px] border-2 border-[#173D32] bg-[#FDFBF5] p-6 shadow-[5px_5px_0px_#173D32] transition-shadow duration-300 hover:shadow-[7px_7px_0px_#173D32] sm:rounded-[28px] sm:p-7"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
            />

            <div className="relative">
              <motion.div {...iconHover} className={iconClass}>
                🔗
              </motion.div>

              <p className={labelClass}>Your space</p>

              <h3 className={headingClass}>Your own personal link</h3>

              <p className={descriptionClass}>
                One simple link that people can use to send you anonymous
                messages from anywhere.
              </p>

              <motion.div
                whileHover={
                  shouldReduceMotion ? {} : { y: -3, scale: 1.01 }
                }
                className="mt-7 rounded-2xl border-2 border-[#173D32] bg-[#F5F3E9] p-3 shadow-[3px_3px_0px_#D8E2D6]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D8E2D6] bg-white text-lg text-[#064E3B]">
                    ↗
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold text-[#829187]">
                      Your Whisperly
                    </p>

                    <p className="truncate text-xs font-bold text-[#173D32]">
                      whisperly.app/yourname
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-3 w-full rounded-xl border-2 border-[#173D32] bg-[#064E3B] py-2.5 text-[10px] font-bold text-[#F8E7C9] shadow-[2px_2px_0px_#173D32] transition hover:bg-[#0B6B50] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  Copy link
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* FEATURE 3: PRIVATE INBOX */}
          <motion.div
            {...cardMotion(0.15)}
            className="group relative overflow-hidden rounded-[24px] border-2 border-[#173D32] bg-[#FDFBF5] p-6 shadow-[5px_5px_0px_#173D32] transition-shadow duration-300 hover:shadow-[7px_7px_0px_#173D32] sm:rounded-[28px] sm:p-7"
          >
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
            />

            <div className="relative">
              <motion.div {...iconHover} className={iconClass}>
                📥
              </motion.div>

              <p className={labelClass}>Stay organized</p>

              <h3 className={headingClass}>A private inbox</h3>

              <p className={descriptionClass}>
                Keep all your anonymous messages in one clean and easy-to-use
                inbox.
              </p>

              <motion.div
                whileHover={
                  shouldReduceMotion ? {} : { y: -3, scale: 1.01 }
                }
                className="mt-7 rounded-2xl border-2 border-[#173D32] bg-[#F5F3E9] p-3 shadow-[3px_3px_0px_#D8E2D6]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-[#173D32]">
                    Messages
                  </span>

                  <span className="rounded-full border border-[#173D32] bg-[#F8E7C9] px-2 py-1 text-[8px] font-bold text-[#064E3B]">
                    3 new
                  </span>
                </div>

                <div className="mt-3 space-y-3">
                  {[0, 1].map((item) => (
                    <motion.div
                      key={item}
                      initial={false}
                      animate={
                        shouldReduceMotion ? {} : { opacity: 1, x: 0 }
                      }
                      transition={{ duration: 0.4, delay: item * 0.12 }}
                      className="flex items-center gap-2 rounded-xl border border-[#D8E2D6] bg-white p-2.5"
                    >
                      <div className="h-7 w-7 shrink-0 rounded-full border border-[#D8E2D6] bg-[#F8E7C9]" />

                      <div className="min-w-0 flex-1">
                        <div
                          className={`h-2 rounded-full bg-[#D8E2D6] ${
                            item === 0 ? "w-16" : "w-20"
                          }`}
                        />
                        <div
                          className={`mt-1.5 h-1.5 rounded-full bg-[#EEF0E8] ${
                            item === 0 ? "w-24 max-w-full" : "w-16"
                          }`}
                        />
                      </div>

                      {item === 0 && (
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#0B6B50]" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* FEATURE 4: CONTROL */}
          <motion.div
            {...cardMotion(0.2)}
            className="group relative overflow-hidden rounded-[24px] border-2 border-[#173D32] bg-[#FDFBF5] shadow-[5px_5px_0px_#173D32] transition-shadow duration-300 hover:shadow-[7px_7px_0px_#173D32] lg:col-span-2 sm:rounded-[28px]"
          >
            <div className="grid h-full md:grid-cols-2">
              <div
                className={`${mockupClass} order-2 flex min-h-[300px] items-center justify-center border-t-2 border-[#D8E2D6] p-5 md:order-1 md:border-r-2 md:border-t-0`}
              >
                <motion.div
                  initial={false}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { rotate: [0, 1, 0], scale: [1, 1.02, 1] }
                  }
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-60 w-60 rounded-full border-2 border-[#D8E2D6]"
                />

                <motion.div
                  whileHover={
                    shouldReduceMotion ? {} : { y: -3 }
                  }
                  className="relative w-full max-w-[270px] rounded-2xl border-2 border-[#173D32] bg-white p-4 shadow-[4px_4px_0px_#D8E2D6] sm:p-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] font-semibold text-[#829187]">
                        Message controls
                      </p>

                      <p className="mt-1 text-xs font-extrabold text-[#173D32]">
                        Manage your space
                      </p>
                    </div>

                    <motion.div
                      {...iconHover}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#173D32] bg-[#F8E7C9] text-[#064E3B]"
                    >
                      ⚙
                    </motion.div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-b border-[#E5E9DF] pb-4">
                    <div>
                      <p className="text-[10px] font-bold text-[#173D32]">
                        Anonymous messages
                      </p>

                      <p className="mt-1 text-[8px] text-[#829187]">
                        Allow people to message you
                      </p>
                    </div>

                    <div className="flex h-5 w-9 shrink-0 items-center rounded-full border border-[#173D32] bg-[#064E3B] p-0.5">
                      <span className="ml-auto h-3.5 w-3.5 rounded-full bg-[#F8E7C9]" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold text-[#173D32]">
                        Message moderation
                      </p>

                      <p className="mt-1 text-[8px] text-[#829187]">
                        Keep unwanted messages away
                      </p>
                    </div>

                    <div className="flex h-5 w-9 shrink-0 items-center rounded-full border border-[#D8E2D6] bg-[#EEF0E8] p-0.5">
                      <span className="h-3.5 w-3.5 rounded-full border border-[#D8E2D6] bg-white" />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="relative order-1 flex flex-col justify-center p-6 sm:p-9 md:order-2">
                <motion.div {...iconHover} className={iconClass}>
                  🛡️
                </motion.div>

                <p className={labelClass}>Your control</p>

                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#173D32]">
                  You're in control
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#65766B]">
                  Your anonymous inbox should feel comfortable. Manage your
                  messages and control how people interact with your space.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <motion.span
                      key={feature}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 8 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      className="rounded-full border border-[#173D32] bg-[#F8E7C9] px-3 py-1.5 text-[10px] font-bold text-[#064E3B]"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 5: SIMPLE DASHBOARD */}
          <motion.div
            {...cardMotion(0.25)}
            className="group relative overflow-hidden rounded-[24px] border-2 border-[#173D32] bg-[#FDFBF5] p-6 shadow-[5px_5px_0px_#173D32] transition-shadow duration-300 hover:shadow-[7px_7px_0px_#173D32] sm:rounded-[28px] sm:p-7"
          >
            <div
              className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
            />

            <div className="relative">
              <motion.div {...iconHover} className={iconClass}>
                ✨
              </motion.div>

              <p className={labelClass}>Clean experience</p>

              <h3 className={headingClass}>Everything in one place</h3>

              <p className={descriptionClass}>
                A distraction-free dashboard designed to keep your whispers
                simple and easy to manage.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-2">
                <motion.div
                  whileHover={
                    shouldReduceMotion ? {} : { y: -3, scale: 1.02 }
                  }
                  className="rounded-xl border-2 border-[#173D32] bg-[#F5F3E9] p-3"
                >
                  <p className="text-[9px] font-semibold text-[#65766B]">
                    Total messages
                  </p>

                  <p className="mt-1 text-xl font-extrabold text-[#173D32]">
                    128
                  </p>

                  <span className="text-[8px] font-bold text-[#0B6B50]">
                    +12 this week
                  </span>
                </motion.div>

                <motion.div
                  whileHover={
                    shouldReduceMotion ? {} : { y: -3, scale: 1.02 }
                  }
                  className="rounded-xl border-2 border-[#173D32] bg-[#F5F3E9] p-3"
                >
                  <p className="text-[9px] font-semibold text-[#65766B]">
                    New whispers
                  </p>

                  <p className="mt-1 text-xl font-extrabold text-[#173D32]">
                    08
                  </p>

                  <span className="text-[8px] font-bold text-[#0B6B50]">
                    Today
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          {...reveal(0.1)}
          className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[24px] border-2 border-[#173D32] bg-[#F8E7C9] px-5 py-9 text-center shadow-[5px_5px_0px_#173D32] sm:mt-20 sm:rounded-[28px] sm:px-12 sm:py-11"
        >
          <motion.div
            initial={false}
            animate={
              shouldReduceMotion
                ? {}
                : { x: [0, 12, 0], scale: [1, 1.08, 1] }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-10 -top-24 h-56 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: "#FFFFFF", opacity: 0.65 }}
          />

          <div className="relative">
            <motion.div
              {...iconHover}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#173D32] bg-[#064E3B] text-xl text-[#F8E7C9] shadow-[3px_3px_0px_#173D32]"
            >
              💚
            </motion.div>

            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[#173D32] sm:text-3xl">
              Ready to hear what people really think?
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#65766B]">
              Create your Whisperly link and give your friends, followers,
              and community a place to speak freely.
            </p>

            <motion.div
              whileHover={
                shouldReduceMotion ? {} : { y: -3, x: -1 }
              }
              whileTap={
                shouldReduceMotion ? {} : { scale: 0.98 }
              }
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 20,
              }}
              className="mt-7 inline-flex"
            >
              <Link
                to="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#173D32] bg-[#064E3B] px-6 py-3.5 text-sm font-extrabold text-[#F8E7C9] shadow-[3px_3px_0px_#173D32] transition-colors duration-200 hover:bg-[#0B6B50] active:shadow-none"
              >
                Create your Whisperly

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;