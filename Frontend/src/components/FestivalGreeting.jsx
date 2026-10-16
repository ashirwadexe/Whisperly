import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const sparkles = [
    { left: "8%", top: "18%", delay: 0, size: 8 },
    { left: "22%", top: "78%", delay: 0.8, size: 6 },
    { left: "46%", top: "12%", delay: 1.4, size: 9 },
    { left: "68%", top: "82%", delay: 0.5, size: 7 },
    { left: "83%", top: "20%", delay: 1.8, size: 8 },
    { left: "94%", top: "65%", delay: 1, size: 6 },
    { left: "57%", top: "43%", delay: 2.2, size: 5 },
    { left: "14%", top: "48%", delay: 1.5, size: 5 },
    { left: "77%", top: "49%", delay: 0.4, size: 4 },
  ];

  const floatingPetals = [
    { x: -37, y: -45, rotate: 35, delay: 0 },
    { x: 38, y: -30, rotate: -40, delay: 0.8 },
    { x: -43, y: 35, rotate: 70, delay: 1.5 },
    { x: 43, y: 40, rotate: -55, delay: 0.4 },
    { x: 0, y: -55, rotate: 20, delay: 1.1 },
    { x: 0, y: 53, rotate: -25, delay: 1.9 },
  ];

  const reveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
      style={{ "--festival-accent": accent }}
      className={`relative isolate overflow-hidden border-2 border-[#064E3B] bg-[#FDFBF5] p-5 shadow-[5px_5px_0px_#064E3B] transition-shadow duration-500 hover:shadow-[8px_8px_0px_#064E3B] sm:p-7 ${className}`}
    >
      {/* Warm ambient background */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full blur-3xl"
        style={{ background: `${accent}30` }}
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.2, 1],
                opacity: [0.45, 0.8, 0.45],
              }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/4 -z-10 h-60 w-60 rounded-full bg-[#F8E7C9]/70 blur-3xl"
        animate={
          reduceMotion
            ? {}
            : { x: [0, 25, 0], y: [0, -12, 0] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative corner ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-10 -z-10 h-36 w-36 rounded-full border-[18px] border-[#F8E7C9]/60"
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* Twinkling particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
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
              background: accent,
              boxShadow: `0 0 12px 3px ${accent}65`,
            }}
            animate={
              reduceMotion
                ? { opacity: 0.6 }
                : {
                    opacity: [0.15, 1, 0.25],
                    scale: [0.65, 1.5, 0.65],
                    y: [0, -10, 0],
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

      <div className="relative z-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
        {/* Maa Durga — animated visual centerpiece */}
        <motion.div
          className="relative flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.12,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          style={{ perspective: 900 }}
        >
          {/* Outer aura */}
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background: `radial-gradient(circle, ${accent}55 0%, ${accent}20 45%, transparent 72%)`,
            }}
            animate={
              reduceMotion
                ? { opacity: 0.8 }
                : {
                    scale: [0.85, 1.15, 0.85],
                    opacity: [0.55, 1, 0.55],
                  }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating decorative halo */}
          <motion.div
            className="absolute inset-3 rounded-full border-2 border-dashed"
            style={{
              borderColor: `${accent}90`,
              boxShadow: `0 0 18px ${accent}20, inset 0 0 18px ${accent}15`,
            }}
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner golden ring */}
          <motion.div
            className="absolute inset-5 rounded-full border"
            style={{ borderColor: `${accent}70` }}
            animate={
              reduceMotion
                ? {}
                : {
                    scale: [1, 1.04, 1],
                    opacity: [0.6, 1, 0.6],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating light rays */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${accent}20 35deg, transparent 75deg, ${accent}25 135deg, transparent 180deg, ${accent}15 235deg, transparent 280deg, ${accent}20 325deg, transparent 360deg)`,
              maskImage:
                "radial-gradient(circle, transparent 34%, black 72%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, transparent 34%, black 72%, transparent 100%)",
            }}
            animate={reduceMotion ? {} : { rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating decorative petals */}
          {floatingPetals.map((petal, index) => (
            <motion.span
              key={index}
              aria-hidden="true"
              className="pointer-events-none absolute z-20 h-2.5 w-2.5 rounded-full"
              style={{
                left: "calc(50% - 5px)",
                top: "calc(50% - 5px)",
                background: `linear-gradient(135deg, #F8E7C9, ${accent})`,
                boxShadow: `0 0 10px ${accent}80`,
              }}
              animate={
                reduceMotion
                  ? { opacity: 0.7 }
                  : {
                      x: [petal.x * 0.75, petal.x, petal.x * 0.75],
                      y: [petal.y * 0.75, petal.y, petal.y * 0.75],
                      rotate: [petal.rotate, petal.rotate + 45, petal.rotate],
                      scale: [0.7, 1.2, 0.7],
                      opacity: [0.4, 1, 0.4],
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

          {/* Main image / emoji */}
          {image ? (
            <motion.img
              src={image}
              alt="माँ दुर्गा"
              loading="eager"
              draggable={false}
              className="relative z-10 h-[78%] w-[78%] select-none object-contain drop-shadow-[0_12px_15px_rgba(6,78,59,0.24)]"
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: isHovered ? -5 : [0, -7, 0],
                      scale: isHovered ? 1.09 : [1, 1.035, 1],
                      rotate: isHovered ? 0 : [0, -1.2, 1.2, 0],
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : isHovered
                    ? {
                        duration: 0.45,
                        ease: "easeOut",
                      }
                    : {
                        y: {
                          duration: 3.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
              }
              style={{
                transformOrigin: "center center",
                filter: `drop-shadow(0 0 12px ${accent}30)`,
              }}
            />
          ) : (
            <motion.span
              className="relative z-10 select-none text-7xl sm:text-8xl"
              role="img"
              aria-label={title}
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -7, 0],
                      scale: [1, 1.06, 1],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.span>
          )}

          {/* Sparkle near the image */}
          <motion.div
            className="absolute right-4 top-5 z-30"
            animate={
              reduceMotion
                ? {}
                : {
                    rotate: [0, 18, -18, 0],
                    scale: [0.8, 1.25, 0.8],
                    y: [0, -4, 0],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles
              size={24}
              strokeWidth={1.7}
              color={accent}
              fill={`${accent}30`}
            />
          </motion.div>

          {/* Small lower sparkle */}
          <motion.div
            className="absolute bottom-7 left-5 z-30"
            animate={
              reduceMotion
                ? { opacity: 0.7 }
                : {
                    rotate: [0, -25, 25, 0],
                    scale: [1, 1.3, 1],
                  }
            }
            transition={{
              duration: 2.6,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={17} color={accent} />
          </motion.div>
        </motion.div>

        {/* Greeting content */}
        <motion.div
          className="min-w-0 flex-1 text-center sm:text-left"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.13,
                delayChildren: reduceMotion ? 0 : 0.2,
              },
            },
          }}
        >
          {/* Badge */}
          <motion.div variants={reveal}>
            <div className="mb-3 inline-flex items-center gap-2 border-2 border-[#064E3B]/15 bg-[#F8E7C9]/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#064E3B] shadow-sm">
              <motion.span
                animate={
                  reduceMotion
                    ? {}
                    : { rotate: [0, 180, 360] }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles size={13} />
              </motion.span>
              {badge}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={reveal}
            className="text-2xl font-black leading-tight tracking-tight text-[#064E3B] sm:text-3xl md:text-4xl"
            animate={
              reduceMotion
                ? {}
                : {
                    textShadow: isHovered
                      ? `0 0 18px ${accent}55`
                      : `0 0 0px ${accent}00`,
                  }
            }
            transition={{ duration: 0.4 }}
          >
            {title}
            <motion.span
              className="inline-block"
              style={{ color: accent }}
              animate={
                reduceMotion
                  ? {}
                  : {
                      scale: [1, 1.25, 1],
                      rotate: [0, 10, 0],
                    }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              .
            </motion.span>
          </motion.h2>

          {/* Message */}
          <motion.p
            variants={reveal}
            className="mt-3 max-w-xl text-sm leading-7 text-[#65766B] sm:text-base"
          >
            {message}
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            variants={reveal}
            className="mx-auto mt-4 flex w-28 items-center gap-2 sm:mx-0"
          >
            <motion.span
              className="h-px flex-1"
              style={{ backgroundColor: `${accent}90` }}
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <Sparkles size={13} color={accent} />
            <motion.span
              className="h-px flex-1"
              style={{ backgroundColor: `${accent}90` }}
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            />
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={reveal}
            className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold sm:text-sm"
            style={{ color: accent }}
          >
            <motion.span
              animate={
                reduceMotion
                  ? {}
                  : { rotate: [0, 90, 180, 270, 360] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ✦
            </motion.span>

            {footer}

            <motion.span
              animate={
                reduceMotion
                  ? {}
                  : { rotate: [360, 270, 180, 90, 0] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ✦
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FestivalGreeting;