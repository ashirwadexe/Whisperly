import React, { useContext, useState } from "react";
import WhisperlyLogo from "./WhisperlyLogo";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      {/* NAVBAR */}
      <nav className="mx-auto max-w-6xl">
        <div className="relative flex h-[66px] items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/80 px-3 shadow-[0_8px_35px_rgba(24,24,27,0.06)] backdrop-blur-xl sm:px-4">
          {/* LOGO */}
          <Link to="/" className="group rounded-xl outline-none">
            <WhisperlyLogo />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <div className="flex items-center rounded-xl border border-zinc-100 bg-zinc-50/80 p-1">
              <a
                href="#home"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-500 transition hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
              >
                Home
              </a>

              <a
                href="#how-it-works"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-500 transition hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
              >
                How it works
              </a>

              <a
                href="#features"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-500 transition hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
              >
                Features
              </a>
            </div>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 md:flex">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-3 py-2 text-sm font-semibold text-zinc-600 transition hover:text-[#064E3B]"
                >
                  Log in
                </Link>

                <Link
                  to="signup"
                  className="group relative overflow-hidden rounded-xl bg-[#064E3B] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#064E3B]/15 transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  <span className="relative flex items-center gap-1.5">
                    Get Started
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                className="group relative overflow-hidden rounded-xl bg-[#064E3B] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#064E3B]/15 transition hover:-translate-y-0.5 hover:opacity-90"
              >
                <span className="relative flex items-center gap-1.5">
                  Dashboard
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-[#064E3B] transition hover:border-[#064E3B]/20 hover:bg-[#F8E7C9]/50 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenu ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
          <div className="mt-2 overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/95 p-2 shadow-xl backdrop-blur-xl md:hidden">
            <div className="space-y-1">
              <a
                href="#home"
                onClick={() => setMobileMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
              >
                Home
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMobileMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
              >
                How it works
              </a>

              <a
                href="#features"
                onClick={() => setMobileMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
              >
                Features
              </a>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-zinc-100 pt-2">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-[#F8E7C9]/60 hover:text-[#064E3B]"
                  >
                    Log in
                  </Link>

                  <Link
                    to="signup"
                    className="group relative overflow-hidden rounded-xl bg-[#064E3B] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#064E3B]/15 transition hover:opacity-90"
                  >
                    <span className="relative flex items-center gap-1.5">
                      Get Started
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="group relative overflow-hidden rounded-xl bg-[#064E3B] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#064E3B]/15 transition hover:opacity-90"
                >
                  <span className="relative flex items-center gap-1.5">
                    Dashboard
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
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