
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Sparkles, X } from "lucide-react";

const FestivalGreeting = ({
  badge = "नवरात्रि का पावन पर्व",
  title = "शुभ नवरात्रि",
  message = "माँ दुर्गा की कृपा से आपके जीवन में सुख, शांति, समृद्धि और खुशियाँ सदैव बनी रहें। 🙏🌺",
  footer = "जय माता दी",
  image = "/maa-durga.png",
  emoji = "🌺",
  accent = "#C49A54",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const closePopup = () => setIsOpen(false);

  const sparkles = [
    { left: "8%", top: "18%", delay: 0, size: 7 },
    { left: "22%", top: "78%", delay: 0.8, size: 5 },
    { left: "46%", top: "12%", delay: 1.4, size: 8 },
    { left: "68%", top: "82%", delay: 0.5, size: 6 },
    { left: "83%", top: "20%", delay: 1.8, size: 7 },
    { left: "94%", top: "65%", delay: 1, size: 5 },
    { left: "57%", top: "43%", delay: 2.2, size: 5 },
    { left: "14%", top: "48%", delay: 1.5, size: 5 },
  ];

  const floatingPetals = [
    { x: -30, y: -35, rotate: 35, delay: 0 },
    { x: 30, y: -25, rotate: -40, delay: 0.8 },
    { x: -32, y: 28, rotate: 70, delay: 1.5 },
    { x: 32, y: 30, rotate: -55, delay: 0.4 },
    { x: 0, y: -42, rotate: 20, delay: 1.1 },
  ];

  const reveal = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center
                     overflow-hidden bg-[#064E3B]/65 p-2
                     sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          onKeyDown={(event) => {
            if (event.key === "Escape") closePopup();
          }}
        >
          {/* Backdrop: intentionally minimal blur */}
          <button
            type="button"
            aria-label="Close festival greeting"
            onClick={closePopup}
            className="absolute inset-0 h-full w-full cursor-default"
          />

          {/* Responsive popup */}
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="festival-greeting-title"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 20, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
            className={`relative z-10 isolate w-full max-w-4xl
                        max-h-[calc(100dvh-16px)]
                        overflow-hidden border-2 border-[#064E3B]
                        bg-[#FDFBF5] p-4 pt-14
                        shadow-[5px_5px_0px_#064E3B]
                        sm:max-h-[calc(100dvh-40px)]
                        sm:p-7 sm:pt-14
                        ${className}`}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close festival greeting"
              className="absolute right-2 top-2 z-50 flex h-9 w-9
                         items-center justify-center border-2
                         border-[#064E3B] bg-[#F8E7C9]
                         text-[#064E3B]
                         shadow-[3px_3px_0px_#064E3B]
                         transition-transform
                         hover:translate-x-[2px]
                         hover:translate-y-[2px] hover:shadow-none
                         focus-visible:outline-2
                         focus-visible:outline-offset-2
                         focus-visible:outline-[#064E3B]
                         sm:right-3 sm:top-3 sm:h-10 sm:w-10"
            >
              <X size={21} strokeWidth={3} />
            </button>

            {/* Subtle decorative background — no heavy blur */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10
                         -z-10 h-32 w-32 rounded-full"
              style={{ backgroundColor: `${accent}18` }}
              animate={
                reduceMotion ? {} : { scale: [1, 1.1, 1] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0
                         z-0 overflow-hidden"
            >
              {sparkles.map((star, index) => (
                <motion.span
                  key={index}
                  className="absolute block rounded-full"
                  style={{
                    left: star.left,
                    top: star.top,
                    width: star.size,
                    height: star.size,
                    backgroundColor: accent,
                  }}
                  animate={
                    reduceMotion
                      ? { opacity: 0.5 }
                      : {
                          opacity: [0.2, 0.8, 0.2],
                          scale: [0.8, 1.3, 0.8],
                        }
                  }
                  transition={{
                    duration: 2.5 + (index % 3) * 0.5,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Main layout: compact on mobile, side-by-side on desktop */}
            <div
              className="relative z-10 flex min-w-0 flex-col
                         items-center gap-3
                         sm:gap-6 md:flex-row md:gap-8"
            >
              {/* Maa Durga illustration */}
              <motion.div
                className="relative flex h-24 w-24 shrink-0
                           items-center justify-center
                           sm:h-40 sm:w-40 md:h-52 md:w-52"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.8 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  type: "spring",
                  stiffness: 110,
                  damping: 16,
                }}
              >
                {/* Golden halo */}
                <motion.div
                  className="absolute inset-1 rounded-full
                             border-2 border-dashed"
                  style={{ borderColor: `${accent}90` }}
                  animate={reduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute inset-3 rounded-full border"
                  style={{ borderColor: `${accent}65` }}
                  animate={
                    reduceMotion
                      ? {}
                      : { scale: [1, 1.04, 1] }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating decorative petals */}
                {floatingPetals.map((petal, index) => (
                  <motion.span
                    key={index}
                    aria-hidden="true"
                    className="pointer-events-none absolute z-20
                               h-2 w-2 rounded-full"
                    style={{
                      left: "calc(50% - 4px)",
                      top: "calc(50% - 4px)",
                      backgroundColor: accent,
                    }}
                    animate={
                      reduceMotion
                        ? { opacity: 0.6 }
                        : {
                            x: [petal.x * 0.7, petal.x, petal.x * 0.7],
                            y: [petal.y * 0.7, petal.y, petal.y * 0.7],
                            rotate: [
                              petal.rotate,
                              petal.rotate + 35,
                              petal.rotate,
                            ],
                            opacity: [0.35, 0.9, 0.35],
                          }
                    }
                    transition={{
                      duration: 3.8,
                      delay: petal.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {image ? (
                  <motion.img
                    src={image}
                    alt="माँ दुर्गा"
                    loading="eager"
                    draggable={false}
                    className="relative z-10 h-[78%] w-[78%]
                               select-none object-contain
                               drop-shadow-[0_5px_5px_rgba(6,78,59,0.15)]"
                    animate={
                      reduceMotion
                        ? {}
                        : {
                            y: isHovered ? -3 : [0, -4, 0],
                            scale: isHovered ? 1.05 : [1, 1.02, 1],
                          }
                    }
                    transition={{
                      duration: isHovered ? 0.3 : 3.2,
                      repeat: isHovered || reduceMotion ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ) : (
                  <motion.span
                    className="relative z-10 text-5xl sm:text-7xl"
                    role="img"
                    aria-label={title}
                    animate={
                      reduceMotion ? {} : { y: [0, -4, 0] }
                    }
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {emoji}
                  </motion.span>
                )}

                <motion.div
                  className="absolute right-1 top-1 z-30 sm:right-3 sm:top-3"
                  animate={
                    reduceMotion
                      ? {}
                      : { rotate: [0, 15, -15, 0] }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles
                    size={18}
                    color={accent}
                    className="sm:h-6 sm:w-6"
                  />
                </motion.div>
              </motion.div>

              {/* Greeting content */}
              <motion.div
                className="min-w-0 w-full flex-1 text-center
                           sm:text-left"
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduceMotion ? 0 : 0.1,
                      delayChildren: reduceMotion ? 0 : 0.1,
                    },
                  },
                }}
              >
                {/* Badge */}
                <motion.div variants={reveal}>
                  <span
                    className="mb-2 inline-flex max-w-full items-center
                               justify-center gap-1.5 break-words
                               border-2 border-[#064E3B]/20
                               bg-[#F8E7C9] px-2 py-1
                               text-[9px] font-black uppercase
                               tracking-wider text-[#064E3B]
                               sm:mb-3 sm:gap-2 sm:px-3 sm:py-1.5
                               sm:text-[10px]"
                  >
                    <Sparkles size={12} className="shrink-0" />
                    {badge}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  id="festival-greeting-title"
                  variants={reveal}
                  className="break-words text-xl font-black
                             leading-tight tracking-tight
                             text-[#064E3B]
                             sm:text-3xl md:text-4xl"
                >
                  {title}
                  <span style={{ color: accent }}>.</span>
                </motion.h2>

                {/* Message */}
                <motion.p
                  variants={reveal}
                  className="mx-auto mt-2 max-w-xl break-words
                             text-xs leading-5 text-[#52665A]
                             sm:mx-0 sm:mt-3 sm:text-base sm:leading-7"
                >
                  {message}
                </motion.p>

                {/* Decorative divider */}
                <motion.div
                  variants={reveal}
                  className="mx-auto mt-3 flex w-20 items-center
                             gap-2 sm:mx-0 sm:mt-4 sm:w-28"
                >
                  <span
                    className="h-[2px] flex-1"
                    style={{ backgroundColor: `${accent}90` }}
                  />
                  <Sparkles size={12} color={accent} />
                  <span
                    className="h-[2px] flex-1"
                    style={{ backgroundColor: `${accent}90` }}
                  />
                </motion.div>

                {/* Footer */}
                <motion.div
                  variants={reveal}
                  className="mt-2 inline-flex items-center gap-2
                             text-xs font-black text-[#064E3B]
                             sm:mt-3 sm:text-sm"
                >
                  <span style={{ color: accent }}>✦</span>
                  {footer}
                  <span style={{ color: accent }}>✦</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Brutalist bottom accent */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-1 w-full
                         bg-[#D97745]"
            />
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FestivalGreeting;
