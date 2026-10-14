import React, { useContext, useState } from "react";
import WhisperlyLogo from "./WhisperlyLogo";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user } = useContext(AuthContext);

  const navLinkClass =
    "rounded-lg px-4 py-2 text-sm font-semibold text-[#65766B] transition-all duration-200 hover:bg-[#F8E7C9] hover:text-[#064E3B]";

  const mobileLinkClass =
    "block rounded-xl px-4 py-3 text-sm font-semibold text-[#36594A] transition-all duration-200 hover:bg-[#F8E7C9] hover:text-[#064E3B]";

  const primaryButtonClass =
    "group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#173D32] bg-[#064E3B] px-4 py-2.5 text-sm font-bold text-[#FDFBF5] shadow-[3px_3px_0px_#173D32] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#173D32] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-6xl">
        {/* MAIN NAVBAR */}
        <div className="relative flex h-[66px] items-center justify-between rounded-2xl border-2 border-[#173D32] bg-[#FDFBF5]/95 px-3 shadow-[4px_4px_0px_#173D32] backdrop-blur-xl sm:px-5">
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
            className="relative z-10 rounded-xl outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#0B6B50] focus-visible:ring-offset-2"
          >
            <WhisperlyLogo />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <div className="flex items-center gap-1 rounded-xl border border-[#D8E2D6] bg-[#F3F5EC] p-1">
              <a href="#home" className={navLinkClass}>
                Home
              </a>

              <a href="#how-it-works" className={navLinkClass}>
                How it works
              </a>

              <a href="#features" className={navLinkClass}>
                Features
              </a>
            </div>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 md:flex">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="rounded-lg px-3 py-2 text-sm font-bold text-[#36594A] transition-colors hover:bg-[#F8E7C9] hover:text-[#064E3B]"
                >
                  Log in
                </Link>

                <Link to="/signup" className={primaryButtonClass}>
                  Get Started
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </>
            ) : (
              <Link to="/dashboard" className={primaryButtonClass}>
                Dashboard
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenu((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#173D32] bg-[#F8E7C9] text-[#064E3B] transition-all duration-200 hover:bg-[#EAD6B2] active:scale-95 md:hidden"
            aria-label={mobileMenu ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M4 7H20" />
                <path d="M4 12H20" />
                <path d="M4 17H20" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="mt-3 overflow-hidden rounded-2xl border-2 border-[#173D32] bg-[#FDFBF5] p-2 shadow-[4px_4px_0px_#173D32] md:hidden">
            <div className="space-y-1">
              <a
                href="#home"
                onClick={() => setMobileMenu(false)}
                className={mobileLinkClass}
              >
                Home
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMobileMenu(false)}
                className={mobileLinkClass}
              >
                How it works
              </a>

              <a
                href="#features"
                onClick={() => setMobileMenu(false)}
                className={mobileLinkClass}
              >
                Features
              </a>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[#D8E2D6] pt-3">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center justify-center rounded-xl border-2 border-[#D8E2D6] bg-white px-3 py-2.5 text-sm font-bold text-[#36594A] transition-colors hover:border-[#173D32] hover:bg-[#F8E7C9]"
                  >
                    Log in
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() => setMobileMenu(false)}
                    className={primaryButtonClass}
                  >
                    Get Started
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenu(false)}
                  className={`${primaryButtonClass} col-span-2`}
                >
                  Dashboard
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;