import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import WhisperlyLogo from "./WhisperlyLogo";
import { AuthContext } from "../context/AuthContext";

const Footer = () => {
  const { user } = useContext(AuthContext);
  const shouldReduceMotion = useReducedMotion();

  // Reusable scroll-reveal animation
  const reveal = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Stagger animation for footer columns
  const containerMotion = {
    hidden: {},
    visible: {
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.12,
            delayChildren: 0.08,
          },
    },
  };

  const itemMotion = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkClass =
    "group flex w-fit items-center gap-1 text-sm text-[#65766B] transition-all duration-200 hover:translate-x-1 hover:text-[#064E3B]";

  const socialClass =
    "flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#173D32] bg-[#FDFBF5] text-[#173D32] shadow-[3px_3px_0px_#173D32] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F8E7C9] hover:shadow-[4px_4px_0px_#173D32] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";

  return (
    <footer className="relative overflow-hidden border-t-2 border-[#173D32] bg-[#FDFBF5]">
      {/* Subtle animated background decoration */}
      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[min(600px,100%)] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(248,231,201,0.65) 0%, rgba(220,233,216,0.3) 45%, transparent 75%)",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.06, 1],
                opacity: [0.7, 1, 0.7],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <motion.div
          className="grid gap-10 border-b-2 border-[#173D32]/15 py-12 sm:py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-8 lg:gap-12 lg:py-16"
          variants={containerMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {/* Brand */}
          <motion.div
            variants={itemMotion}
            className="md:pr-5"
          >
            <Link
              to="/"
              aria-label="Whisperly home"
              className="inline-flex rounded-lg transition-transform duration-200 hover:-translate-y-0.5"
            >
              <WhisperlyLogo />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#65766B]">
              A simple place for honest conversations. Create your personal
              link and let people send you anonymous messages.
            </p>

            <div className="mt-7">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <Link
                  to={user ? "/dashboard" : "/signup"}
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-[#173D32] bg-[#064E3B] px-4 py-3 text-xs font-bold text-[#FDFBF5] shadow-[4px_4px_0px_#173D32] transition-all duration-200 hover:shadow-[5px_5px_0px_#173D32] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  {user ? "Dashboard" : "Create your Whisperly"}

                  <motion.span
                    className="inline-flex"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : { x: [0, 2, 0], y: [0, -2, 0] }
                    }
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                  >
                    <ArrowUpRight size={15} />
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#173D32]/15 bg-white/70 px-3 py-2"
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-[#0B6B50]"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-[11px] font-semibold tracking-wide text-[#173D32]">
                A little more honesty, every day.
              </span>
            </motion.div>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemMotion}>
            <h3 className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#173D32]">
              <span className="h-5 w-1 rounded-full bg-[#0B6B50]" />
              Product
            </h3>

            <div className="mt-5 space-y-4">
              <a href="#features" className={linkClass}>
                Features
              </a>

              <a href="#how-it-works" className={linkClass}>
                How it works
              </a>

              <Link to="/signup" className={linkClass}>
                Get started
              </Link>

              <Link to="/login" className={linkClass}>
                Log in
              </Link>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemMotion}>
            <h3 className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#173D32]">
              <span className="h-5 w-1 rounded-full bg-[#0B6B50]" />
              Company
            </h3>

            <div className="mt-5 space-y-4">
              <a href="#about" className={linkClass}>
                About
              </a>

              <a href="#contact" className={linkClass}>
                Contact
              </a>

              <a href="#privacy" className={linkClass}>
                Privacy
              </a>

              <a href="#terms" className={linkClass}>
                Terms
              </a>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemMotion}>
            <h3 className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#173D32]">
              <span className="h-5 w-1 rounded-full bg-[#0B6B50]" />
              Follow along
            </h3>

            <div className="mt-5 flex gap-3">
              <motion.a
                href="#"
                aria-label="X"
                className={socialClass}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -4, rotate: -4 }
                }
                whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2ZM17.8 19.77h1.73L8.29 4.1H6.43L17.8 19.77Z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                aria-label="Instagram"
                className={socialClass}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -4, rotate: 4 }
                }
                whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                aria-label="GitHub"
                className={socialClass}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -4, rotate: -4 }
                }
                whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.9c.57.1.78-.25.78-.55v-2.13c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.36-5.23 5.65.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
                </svg>
              </motion.a>
            </div>

            <motion.div
              className="mt-6 max-w-[220px] rounded-xl border border-[#173D32]/15 bg-[#F8E7C9]/45 p-3.5"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { y: -3, borderColor: "rgba(23,61,50,0.35)" }
              }
            >
              <p className="text-xs leading-6 text-[#65766B]">
                Built for people who have something to say.
              </p>

              <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#064E3B]">
                Made with care

                <motion.span
                  className="inline-flex"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { scale: [1, 1.2, 1] }
                  }
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 1.8,
                  }}
                >
                  <Heart size={12} fill="currentColor" />
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs leading-5 text-[#829187]">
            © {new Date().getFullYear()} Whisperly. All rights reserved.
          </p>

          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#173D32]/15 bg-white/70 px-3 py-2 text-xs font-medium text-[#65766B]"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-[#0B6B50]"
              animate={
                shouldReduceMotion
                  ? {}
                  : { opacity: [1, 0.5, 1] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Made for honest conversations
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;