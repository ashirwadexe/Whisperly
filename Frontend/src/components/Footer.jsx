
import WhisperlyLogo from "./WhisperlyLogo";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white">
      {/* Very subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-zinc-200 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <WhisperlyLogo />

            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
              A simple place for honest conversations. Create your personal
              link and let people send you anonymous messages.
            </p>

            <button className="mt-6 rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-zinc-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-violet-500/20">
              Create your Whisperly
              <span className="ml-1.5">→</span>
            </button>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
              Product
            </h3>

            <div className="mt-5 space-y-3.5">
              <a
                href="#features"
                className="block w-fit text-sm text-zinc-500 transition hover:text-violet-600"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="block w-fit text-sm text-zinc-500 transition hover:text-violet-600"
              >
                How it works
              </a>

              <a
                href="/signup"
                className="block w-fit text-sm text-zinc-500 transition hover:text-violet-600"
              >
                Get started
              </a>

              <a
                href="/login"
                className="block w-fit text-sm text-zinc-500 transition hover:text-violet-600"
              >
                Log in
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
              Company
            </h3>

            <div className="mt-5 space-y-3.5">
              <a
                href="#about"
                className="block w-fit text-sm text-zinc-500 transition hover:text-violet-600"
              >
                About
              </a>

              <a
                href="#contact"
                className="block w-fit text-sm text-zinc-500 transition hover:text-violet-600"
              >
                Contact
              </a>

              <a
                href="#privacy"
                className="block w-fit text-sm text-zinc-500 transition hover:text-violet-600"
              >
                Privacy
              </a>

              <a
                href="#terms"
                className="block w-fit text-sm text-zinc-500 transition hover:text-violet-600"
              >
                Terms
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
              Follow along
            </h3>

            <div className="mt-5 flex gap-2">
              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:text-zinc-900 hover:shadow-sm"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2ZM17.8 19.77h1.73L8.29 4.1H6.43L17.8 19.77Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:text-zinc-900 hover:shadow-sm"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
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
              </a>

              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:text-zinc-900 hover:shadow-sm"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.9c.57.1.78-.25.78-.55v-2.13c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.16-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.36-5.23 5.65.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
                </svg>
              </a>
            </div>

            <p className="mt-5 max-w-[220px] text-xs leading-5 text-zinc-400">
              Built for people who have something to say.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Whisperly. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Made for honest conversations
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
