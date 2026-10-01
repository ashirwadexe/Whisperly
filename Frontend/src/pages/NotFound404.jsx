
import { ArrowLeft, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(#d4d4d8 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Glows */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-200/30 blur-[110px]" />

        <div className="absolute bottom-[-180px] right-[-100px] h-[350px] w-[350px] rounded-full bg-fuchsia-200/20 blur-[100px]" />
      </div>

      {/* Main */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="w-full max-w-xl text-center">

          {/* Floating icon */}
          <div className="relative mx-auto mb-8 h-40 w-40">

            {/* Outer glow */}
            <div className="absolute inset-5 rounded-full bg-violet-200/40 blur-2xl" />

            {/* Rotating ring */}
            <div className="absolute inset-1 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-violet-200" />

            {/* Main circle */}
            <div className="absolute inset-6 flex items-center justify-center rounded-[30px] border border-violet-100 bg-white shadow-[0_20px_60px_rgba(79,70,229,0.12)]">
              <MessageCircle
                size={42}
                strokeWidth={1.5}
                className="text-violet-500"
              />

              {/* Sparkle */}
              <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-200">
                <Sparkles size={14} />
              </div>
            </div>

            {/* Floating message bubble */}
            <div className="absolute -left-7 top-10 animate-[bounce_4s_ease-in-out_infinite] rounded-xl border border-gray-200 bg-white px-3 py-2 text-[10px] font-medium text-gray-500 shadow-lg shadow-gray-200/40">
              hmm...
            </div>

            <div className="absolute -right-8 bottom-7 animate-[bounce_5s_ease-in-out_infinite] rounded-xl border border-violet-100 bg-violet-50 px-3 py-2 text-[10px] font-medium text-violet-500 shadow-lg shadow-violet-100/40">
              whisper?
            </div>
          </div>

          {/* 404 */}
          <div className="relative">
            <p className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-[76px] font-black leading-none tracking-[-0.07em] text-transparent sm:text-[100px]">
              404
            </p>

            {/* Small floating dot */}
            <span className="absolute left-[22%] top-2 h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            <span className="absolute right-[20%] top-7 h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
          </div>

          {/* Content */}
          <div className="mt-5">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              This whisper got lost.
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-[15px]">
              Looks like the page you're looking for doesn't exist,
              has moved, or the link was typed incorrectly.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200/60 transition hover:shadow-xl hover:shadow-violet-200/70 sm:w-auto"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />

              <span>Back to Home</span>
            </Link>

            <Link
              to="/"
              className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-violet-200 hover:bg-violet-50/50 hover:text-violet-700 sm:w-auto"
            >
              <span>Explore Whisperly</span>

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Bottom branding */}
          <p className="mt-10 text-[10px] font-semibold tracking-[0.2em] text-gray-400">
            WHISPERLY · SAY IT WITHOUT SAYING WHO
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound404;