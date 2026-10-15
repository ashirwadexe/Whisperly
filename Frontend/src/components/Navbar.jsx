import React, { useContext, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import WhisperlyLogo from "./WhisperlyLogo";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user } = useContext(AuthContext);
  const shouldReduceMotion = useReducedMotion();

  const navLinkClass =
    "rounded-lg px-4 py-2 text-sm font-semibold text-[#65766B] transition-all duration-200 hover:bg-[#F8E7C9] hover:text-[#064E3B]";

  const mobileLinkClass =
    "block rounded-xl px-4 py-3 text-sm font-semibold text-[#36594A] transition-all duration-200 hover:bg-[#F8E7C9] hover:text-[#064E3B]";

  const primaryButtonClass =
    "group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#173D32] bg-[#064E3B] px-4 py-2.5 text-sm font-bold text-[#FDFBF5] shadow-[3px_3px_0px_#173D32] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#173D32] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -10,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -8,
      height: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: "easeInOut",
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const handleMobileLinkClick = () => {
    setMobileMenu(false);
  };

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: -24 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <nav className="mx-auto max-w-6xl">
        {/* MAIN NAVBAR */}
        <motion.div
          className="relative flex h-[66px] items-center justify-between rounded-2xl border-2 border-[#173D32] bg-[#FDFBF5]/95 px-3 shadow-[4px_4px_0px_#173D32] backdrop-blur-xl sm:px-5"
          whileHover={
            shouldReduceMotion ? {} : { boxShadow: "5px 5px 0px #173D32" }
          }
          transition={{ duration: 0.2 }}
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={handleMobileLinkClick}
            className="relative z-10 rounded-xl outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#0B6B50] focus-visible:ring-offset-2"
          >
            <WhisperlyLogo />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <motion.div
              className="flex items-center gap-1 rounded-xl border border-[#D8E2D6] bg-[#F3F5EC] p-1"
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: -8 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.15,
                duration: shouldReduceMotion ? 0 : 0.4,
              }}
            >
              <motion.a
                href="#home"
                className={navLinkClass}
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
              >
                Home
              </motion.a>

              <motion.a
                href="#how-it-works"
                className={navLinkClass}
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
              >
                How it works
              </motion.a>

              <motion.a
                href="#features"
                className={navLinkClass}
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
              >
                Features
              </motion.a>
            </motion.div>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 md:flex">
            {!user ? (
              <>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                >
                  <Link
                    to="/login"
                    className="rounded-lg px-3 py-2 text-sm font-bold text-[#36594A] transition-colors hover:bg-[#F8E7C9] hover:text-[#064E3B]"
                  >
                    Log in
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                >
                  <Link to="/signup" className={primaryButtonClass}>
                    Get Started
                    <motion.span
                      className="inline-block"
                      whileHover={shouldReduceMotion ? {} : { x: 3 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </>
            ) : (
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              >
                <Link to="/dashboard" className={primaryButtonClass}>
                  Dashboard
                  <motion.span
                    className="inline-block"
                    whileHover={shouldReduceMotion ? {} : { x: 3 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            type="button"
            onClick={() => setMobileMenu((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#173D32] bg-[#F8E7C9] text-[#064E3B] transition-colors duration-200 hover:bg-[#EAD6B2] active:scale-95 md:hidden"
            aria-label={mobileMenu ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenu}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <motion.path
                d="M4 7H20"
                animate={
                  mobileMenu
                    ? { rotate: 45, x: 0, y: 5 }
                    : { rotate: 0, x: 0, y: 0 }
                }
                style={{ transformOrigin: "center" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.2,
                }}
              />
              <motion.path
                d="M4 12H20"
                animate={{
                  opacity: mobileMenu ? 0 : 1,
                  scaleX: mobileMenu ? 0 : 1,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.15,
                }}
              />
              <motion.path
                d="M4 17H20"
                animate={
                  mobileMenu
                    ? { rotate: -45, x: 0, y: -5 }
                    : { rotate: 0, x: 0, y: 0 }
                }
                style={{ transformOrigin: "center" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.2,
                }}
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence initial={false}>
          {mobileMenu && (
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-3 overflow-hidden rounded-2xl border-2 border-[#173D32] bg-[#FDFBF5] shadow-[4px_4px_0px_#173D32] md:hidden"
            >
              <div className="space-y-1 p-2">
                <motion.a
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  href="#home"
                  onClick={handleMobileLinkClick}
                  className={mobileLinkClass}
                >
                  Home
                </motion.a>

                <motion.a
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: shouldReduceMotion ? 0 : 0.04 }}
                  href="#how-it-works"
                  onClick={handleMobileLinkClick}
                  className={mobileLinkClass}
                >
                  How it works
                </motion.a>

                <motion.a
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: shouldReduceMotion ? 0 : 0.08 }}
                  href="#features"
                  onClick={handleMobileLinkClick}
                  className={mobileLinkClass}
                >
                  Features
                </motion.a>
              </div>

              <div className="mt-1 grid grid-cols-2 gap-2 border-t border-[#D8E2D6] p-3">
                {!user ? (
                  <>
                    <motion.div
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    >
                      <Link
                        to="/login"
                        onClick={handleMobileLinkClick}
                        className="flex items-center justify-center rounded-xl border-2 border-[#D8E2D6] bg-white px-3 py-2.5 text-sm font-bold text-[#36594A] transition-colors hover:border-[#173D32] hover:bg-[#F8E7C9]"
                      >
                        Log in
                      </Link>
                    </motion.div>

                    <motion.div
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    >
                      <Link
                        to="/signup"
                        onClick={handleMobileLinkClick}
                        className={primaryButtonClass}
                      >
                        Get Started
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    className="col-span-2"
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  >
                    <Link
                      to="/dashboard"
                      onClick={handleMobileLinkClick}
                      className={`${primaryButtonClass} w-full`}
                    >
                      Dashboard
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;