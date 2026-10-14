
import {
  ArrowLeft,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const NotFound404 = () => {
  usePageTitle("Page Not Found");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FDFBF5] px-5 py-12 text-[#173D32]">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(#A7B9AC 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Soft green glow */}
        <div className="absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#DCE9D8]/70 blur-[110px]" />

        <div className="absolute bottom-[-180px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[#F8E7C9]/70 blur-[100px]" />

        <div className="absolute bottom-[-150px] left-[-120px] h-[300px] w-[300px] rounded-full bg-[#DCE9D8]/50 blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Brand mark */}
        <Link
          to="/"
          aria-label="Whisperly home"
          className="mx-auto mb-10 inline-flex items-center gap-2.5 rounded-2xl border-2 border-[#173D32] bg-white px-4 py-2.5 shadow-[4px_4px_0_#173D32] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#173D32]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#064E3B] text-[#F8E7C9]">
            <MessageCircle size={19} strokeWidth={2.2} />
          </span>

          <span className="text-lg font-black tracking-tight">
            whisperly<span className="text-[#C49A54]">.</span>
          </span>
        </Link>

        {/* Illustration */}
        <div className="relative mx-auto mb-8 h-44 w-44 sm:h-48 sm:w-48">

          {/* Decorative ring */}
          <div className="absolute inset-1 animate-[spin_24s_linear_infinite] rounded-full border-2 border-dashed border-[#A7B9AC]" />

          {/* Soft glow */}
          <div className="absolute inset-6 rounded-full bg-[#DCE9D8] blur-2xl" />

          {/* Main icon */}
          <div className="absolute inset-7 flex items-center justify-center rounded-[32px] border-2 border-[#173D32] bg-white shadow-[7px_7px_0_#DCE9D8]">
            <MessageCircle
              size={55}
              strokeWidth={1.7}
              className="text-[#064E3B]"
            />

            <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-[#173D32] bg-[#F8E7C9] shadow-[3px_3px_0_#173D32]">
              <Sparkles size={18} className="text-[#064E3B]" />
            </div>
          </div>

          {/* Floating bubbles */}
          <div className="absolute -left-7 top-8 animate-[bounce_4s_ease-in-out_infinite] rounded-xl border-2 border-[#173D32] bg-white px-3 py-2 text-xs font-bold shadow-[3px_3px_0_#173D32]">
            Hmm...
          </div>

          <div className="absolute -right-8 bottom-6 animate-[bounce_5s_ease-in-out_infinite] rounded-xl border-2 border-[#173D32] bg-[#F8E7C9] px-3 py-2 text-xs font-bold shadow-[3px_3px_0_#173D32]">
            Lost? 👀
          </div>
        </div>

        {/* Error number */}
        <div className="relative inline-block">
          <p className="text-[88px] font-black leading-none tracking-[-0.09em] text-[#064E3B] sm:text-[120px]">
            404<span className="text-[#C49A54]">.</span>
          </p>

          <span className="absolute -right-5 top-2 h-3 w-3 animate-pulse rounded-full bg-[#C49A54]" />
        </div>

        {/* Message */}
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D5DFD3] bg-[#EDF3E9] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#064E3B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C49A54]" />
            Wrong turn, buddy
          </span>

          <h1 className="mt-5 text-3xl font-black tracking-tight text-[#173D32] sm:text-4xl">
            This whisper got lost.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#65766B] sm:text-base">
            Looks like this page has disappeared into the
            silence. The link may be incorrect, or the page
            might no longer exist.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border-2 border-[#173D32] bg-[#064E3B] px-6 py-3.5 text-sm font-bold text-white shadow-[5px_5px_0_#173D32] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#173D32] active:translate-y-0 active:shadow-none sm:w-auto"
          >
            <Home size={17} />

            <span>Back to Home</span>

            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
          </Link>

          <Link
            to="/signup"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#173D32] bg-white px-6 py-3.5 text-sm font-bold text-[#173D32] shadow-[5px_5px_0_#DCE9D8] transition-all hover:-translate-y-0.5 hover:bg-[#F8E7C9] hover:shadow-[6px_6px_0_#DCE9D8] active:translate-y-0 active:shadow-none sm:w-auto"
          >
            <span>Explore Whisperly</span>

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <div className="h-px w-16 bg-[#C49A54]" />

          <p className="text-[10px] font-extrabold tracking-[0.2em] text-[#718276]">
            WHISPERLY · SAY IT WITHOUT SAYING WHO
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound404;
