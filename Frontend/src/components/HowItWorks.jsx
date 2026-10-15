import { motion, useReducedMotion } from "motion/react";

const HowItWorks = () => {
  const shouldReduceMotion = useReducedMotion();

  const features = ["Anonymous", "Simple", "Private"];

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

  const cardMotion = (index) => ({
    ...reveal(index * 0.13),
    whileHover: shouldReduceMotion
      ? {}
      : {
          y: -7,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 22,
          },
        },
  });

  const mockupMotion = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, scale: 0.96, y: 12 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: {
            duration: 0.65,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  const stepNumberClass =
    "absolute left-1/2 top-[-18px] z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#173D32] bg-[#064E3B] text-xs font-extrabold text-[#F8E7C9] shadow-[3px_3px_0px_#173D32]";

  const cardClass =
    "relative overflow-hidden rounded-[24px] border-2 border-[#173D32] bg-[#FDFBF5] p-4 shadow-[5px_5px_0px_#173D32] transition-shadow duration-300 group-hover:shadow-[7px_7px_0px_#173D32] sm:rounded-[28px] sm:p-5";

  const mockupClass =
    "relative h-[300px] overflow-hidden rounded-2xl border-2 border-[#D8E2D6] bg-[#F5F3E9] p-4 sm:p-5";

  const labelClass =
    "text-xs font-extrabold uppercase tracking-[0.16em] text-[#0B6B50]";

  const headingClass =
    "mt-2 text-xl font-extrabold tracking-tight text-[#173D32]";

  const descriptionClass =
    "mt-2 text-sm leading-6 text-[#65766B]";

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#FDFBF5] py-20 sm:py-24 lg:py-28"
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="pointer-events-none absolute left-1/2 top-40 h-[420px] w-[650px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.48 }}
      />

      <motion.div
        initial={false}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 12, 0],
                scale: [1, 1.04, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.42 }}
      />

      <motion.div
        initial={false}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -12, 0],
                y: [0, 10, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "#0B6B50", opacity: 0.07 }}
      />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            {...reveal(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#173D32] bg-[#F8E7C9] px-4 py-2 text-xs font-bold text-[#064E3B] shadow-[2px_2px_0px_#173D32]"
          >
            <motion.span
              animate={
                shouldReduceMotion
                  ? {}
                  : { scale: [1, 1.2, 1] }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-[#0B6B50]"
            />
            Simple by design
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#173D32] sm:text-4xl lg:text-5xl"
          >
            From your link to
            <motion.span
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: shouldReduceMotion ? 0 : 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-1 block text-[#0B6B50]"
            >
              anonymous whispers.
            </motion.span>
          </motion.h2>

          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#65766B] sm:text-base sm:leading-7"
          >
            Whisperly makes anonymous conversations incredibly simple.
            Create your space, share it with people, and let the whispers
            come to you.
          </motion.p>
        </div>

        {/* WORKFLOW */}
        <div className="relative mt-16 sm:mt-20">
          {/* CONNECTING LINE */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { scaleX: 0, opacity: 0 }
            }
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[16%] right-[16%] top-[190px] hidden h-[3px] rounded-full bg-[#D8E2D6] lg:block"
          />

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-7">
            {/* STEP 01 */}
            <motion.div {...cardMotion(0)} className="group relative">
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : { scale: 0, opacity: 0 }
                }
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: 0.1,
                }}
                className={stepNumberClass}
              >
                01
              </motion.div>

              <div className={cardClass}>
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                  style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
                />

                {/* PROFILE MOCKUP */}
                <motion.div
                  {...mockupMotion(0.05)}
                  className={mockupClass}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={
                          shouldReduceMotion ? {} : { rotate: -6, scale: 1.06 }
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#173D32] bg-[#064E3B] text-xs font-extrabold text-[#F8E7C9]"
                      >
                        W
                      </motion.div>

                      <span className="text-xs font-extrabold text-[#173D32]">
                        Whisperly
                      </span>
                    </div>

                    <div className="h-7 w-7 rounded-full border border-[#D8E2D6] bg-white" />
                  </div>

                  <div className="mt-10 text-center">
                    <motion.div
                      whileHover={
                        shouldReduceMotion ? {} : { scale: 1.06, y: -3 }
                      }
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#173D32] bg-[#064E3B] text-xl font-extrabold text-[#F8E7C9] shadow-[3px_3px_0px_#173D32]"
                    >
                      A
                    </motion.div>

                    <p className="mt-3 text-sm font-extrabold text-[#173D32]">
                      @yourname
                    </p>

                    <p className="mt-1 text-[11px] text-[#829187]">
                      Send me an anonymous message
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-4 right-4 rounded-xl border-2 border-[#173D32] bg-white p-3 shadow-[3px_3px_0px_#D8E2D6] sm:left-5 sm:right-5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[9px] font-medium text-[#829187]">
                          Your personal link
                        </p>

                        <p className="mt-1 truncate text-[11px] font-bold text-[#173D32]">
                          whisperly.app/yourname
                        </p>
                      </div>

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#173D32] bg-[#F8E7C9] text-base text-[#064E3B]">
                        🔗
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* STEP CONTENT */}
                <div className="relative px-1 pb-2 pt-6">
                  <p className={labelClass}>Create</p>

                  <h3 className={headingClass}>
                    Create your space
                  </h3>

                  <p className={descriptionClass}>
                    Set up your Whisperly profile and get your own personal
                    anonymous messaging link.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* STEP 02 */}
            <motion.div {...cardMotion(1)} className="group relative">
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : { scale: 0, opacity: 0 }
                }
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: 0.22,
                }}
                className={stepNumberClass}
              >
                02
              </motion.div>

              <div className={cardClass}>
                <div
                  className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                  style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
                />

                {/* SHARE MOCKUP */}
                <motion.div
                  {...mockupMotion(0.12)}
                  className={mockupClass}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#D6A29A]" />
                    <span className="h-2 w-2 rounded-full bg-[#E9C875]" />
                    <span className="h-2 w-2 rounded-full bg-[#9CB99B]" />

                    <div className="ml-2 min-w-0 flex-1 rounded-md border border-[#D8E2D6] bg-white px-2 py-1.5 text-center text-[9px] text-[#829187]">
                      whisperly.app/yourname
                    </div>
                  </div>

                  <motion.div
                    whileHover={
                      shouldReduceMotion ? {} : { y: -3, scale: 1.01 }
                    }
                    className="absolute left-4 right-4 top-[90px] rounded-2xl border-2 border-[#173D32] bg-white p-4 shadow-[4px_4px_0px_#D8E2D6] sm:left-5 sm:right-5 sm:p-5"
                  >
                    <div className="text-center">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#173D32] bg-[#F8E7C9] text-xl font-bold text-[#064E3B]">
                        ↗
                      </div>

                      <p className="mt-3 text-sm font-extrabold text-[#173D32]">
                        Share your Whisperly
                      </p>

                      <p className="mt-1 text-[10px] text-[#829187]">
                        Let people know where to find you
                      </p>
                    </div>

                    <div className="mt-5 flex justify-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D8E2D6] bg-[#F5F3E9] text-[10px] font-extrabold text-[#36594A]">
                        IG
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D8E2D6] bg-[#F5F3E9] text-[10px] font-extrabold text-[#36594A]">
                        X
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D8E2D6] bg-[#F5F3E9] text-[10px] font-extrabold text-[#36594A]">
                        ↗
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, x: 12 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="absolute bottom-5 right-4 flex items-center gap-2 rounded-xl border-2 border-[#173D32] bg-white px-3 py-2 shadow-[3px_3px_0px_#F8E7C9] sm:right-5"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DCE9D8] text-xs font-extrabold text-[#064E3B]">
                      ✓
                    </div>

                    <span className="text-[10px] font-bold text-[#36594A]">
                      Link copied
                    </span>
                  </motion.div>
                </motion.div>

                {/* STEP CONTENT */}
                <div className="relative px-1 pb-2 pt-6">
                  <p className={labelClass}>Share</p>

                  <h3 className={headingClass}>
                    Put it everywhere
                  </h3>

                  <p className={descriptionClass}>
                    Share your link on social media, in your bio, or directly
                    with friends and followers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* STEP 03 */}
            <motion.div {...cardMotion(2)} className="group relative">
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : { scale: 0, opacity: 0 }
                }
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: 0.34,
                }}
                className={stepNumberClass}
              >
                03
              </motion.div>

              <div className={cardClass}>
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                  style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
                />

                {/* INBOX MOCKUP */}
                <motion.div
                  {...mockupMotion(0.19)}
                  className="relative h-[300px] overflow-hidden rounded-2xl border-2 border-[#D8E2D6] bg-[#F5F3E9] p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] font-medium text-[#829187]">
                        Your inbox
                      </p>

                      <p className="mt-1 text-sm font-extrabold text-[#173D32]">
                        New whispers
                      </p>
                    </div>

                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? false
                          : { scale: 0.8, opacity: 0 }
                      }
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 16,
                        delay: 0.5,
                      }}
                      className="rounded-full border border-[#173D32] bg-[#F8E7C9] px-2.5 py-1 text-[9px] font-bold text-[#064E3B]"
                    >
                      3 new
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={
                      shouldReduceMotion ? {} : { x: 3 }
                    }
                    className="mt-5 rounded-xl border-2 border-[#D8E2D6] bg-white p-3 shadow-[2px_2px_0px_#E4E8DC]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D8E2D6] bg-[#F8E7C9] text-[10px] text-[#064E3B]">
                        ?
                      </div>

                      <div>
                        <p className="text-[10px] font-bold text-[#173D32]">
                          Anonymous
                        </p>

                        <p className="text-[8px] text-[#829187]">
                          Just now
                        </p>
                      </div>

                      <span className="ml-auto h-2 w-2 rounded-full bg-[#0B6B50]" />
                    </div>

                    <p className="mt-3 text-[10px] leading-4 text-[#65766B]">
                      "I've always wanted to tell you that you're doing
                      amazing..."
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={
                      shouldReduceMotion ? {} : { x: 3 }
                    }
                    className="mt-3 rounded-xl border-2 border-[#D8E2D6] bg-white p-3 shadow-[2px_2px_0px_#E4E8DC]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D8E2D6] bg-[#F8E7C9] text-[10px] text-[#064E3B]">
                        ♥
                      </div>

                      <div>
                        <p className="text-[10px] font-bold text-[#173D32]">
                          Anonymous
                        </p>

                        <p className="text-[8px] text-[#829187]">
                          5 min ago
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-[10px] leading-4 text-[#65766B]">
                      "What's one thing you wish more people knew about you?"
                    </p>
                  </motion.div>

                  <motion.div
                    {...mockupMotion(0.45)}
                    className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border-2 border-[#173D32] bg-white px-3 py-2 shadow-[3px_3px_0px_#F8E7C9]"
                  >
                    <span className="text-xs">🔒</span>

                    <span className="text-[9px] font-bold text-[#36594A]">
                      Identity protected
                    </span>
                  </motion.div>
                </motion.div>

                {/* STEP CONTENT */}
                <div className="relative px-1 pb-2 pt-6">
                  <p className={labelClass}>Receive</p>

                  <h3 className={headingClass}>
                    Let the whispers arrive
                  </h3>

                  <p className={descriptionClass}>
                    Messages land safely in your inbox while the sender's
                    identity stays anonymous.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <motion.div
          {...reveal(0.1)}
          className="mx-auto mt-16 max-w-4xl sm:mt-20"
        >
          <motion.div
            whileHover={
              shouldReduceMotion ? {} : { y: -3 }
            }
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 22,
            }}
            className="relative overflow-hidden rounded-2xl border-2 border-[#173D32] bg-[#F8E7C9] px-5 py-5 shadow-[4px_4px_0px_#173D32] sm:px-6"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full blur-3xl"
              style={{ backgroundColor: "#FFFFFF", opacity: 0.7 }}
            />

            <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { rotate: -5, scale: 1.06 }
                  }
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#173D32] bg-[#064E3B] text-lg text-[#F8E7C9] shadow-[2px_2px_0px_#173D32]"
                >
                  🔐
                </motion.div>

                <div>
                  <p className="text-sm font-extrabold text-[#173D32]">
                    Built around anonymity
                  </p>

                  <p className="mt-0.5 text-xs text-[#65766B]">
                    Your conversations stay personal.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-bold text-[#36594A]">
                {features.map((feature, index) => (
                  <motion.span
                    key={feature}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 8 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="flex items-center gap-1.5"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#064E3B] text-[10px] text-[#F8E7C9]">
                      ✓
                    </span>

                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;