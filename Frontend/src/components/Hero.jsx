import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-white pt-15">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft Gradient Glow - Top Center */}
      <div className="absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />

      {/* Left Glow */}
      <div className="absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-fuchsia-100/50 blur-3xl" />

      {/* Right Glow */}
      <div className="absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] text-white">
              ✦
            </span>

            Anonymous conversations, made simple
          </div>
        </div>

        {/* =======================================================
            HERO HEADING
        ======================================================= */}

        <div className="mx-auto mt-7 max-w-4xl text-center">

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
            Let people say what they
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              can't say openly.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Whisperly is an anonymous messaging platform where you can
            create your personal link, share it with anyone, and receive
            honest messages without knowing who sent them.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <button className="group flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-zinc-900/10 transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-800">
              Create Your Whisperly

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-700 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-zinc-50">
              See How It Works
            </button>

          </div>

          {/* Small trust text */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            No identity revealed to the receiver
          </div>
        </div>

        {/* =======================================================
            VISUAL SECTION
        ======================================================= */}

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Decorative rings */}
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100" />

          <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-50" />

          {/* =====================================================
              FLOATING MESSAGE - LEFT
          ===================================================== */}

          <div className="absolute -left-2 top-10 z-20 hidden w-64 rotate-[-5deg] rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-900/5 sm:block lg:left-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                ?
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-800">
                  Anonymous
                </p>

                <p className="text-[11px] text-zinc-400">
                  Just now
                </p>
              </div>

            </div>

            <p className="mt-3 text-sm leading-5 text-zinc-600">
              "What's something you've always wanted to tell me?"
            </p>

          </div>

          {/* =====================================================
              FLOATING MESSAGE - RIGHT
          ===================================================== */}

          <div className="absolute -right-2 top-28 z-20 hidden w-64 rotate-[5deg] rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-900/5 sm:block lg:right-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-500">
                ♥
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-800">
                  Anonymous
                </p>

                <p className="text-[11px] text-zinc-400">
                  2 min ago
                </p>
              </div>

            </div>

            <p className="mt-3 text-sm leading-5 text-zinc-600">
              "Your content has helped me more than you know."
            </p>

          </div>

          {/* =====================================================
              MAIN APP MOCKUP
          ===================================================== */}

          <div className="relative mx-auto max-w-3xl">

            {/* Browser/Dashboard Card */}
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-violet-200/40">

              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">

                <div className="flex items-center gap-2">

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                  </div>

                </div>

                <div className="hidden rounded-lg bg-zinc-50 px-4 py-1.5 text-xs text-zinc-400 sm:block">
                  whisperly.app/ashirwad
                </div>

                <div className="h-7 w-7 rounded-full bg-violet-100" />

              </div>

              {/* Dashboard */}
              <div className="grid gap-6 bg-zinc-50/70 p-6 md:grid-cols-[180px_1fr]">

                {/* Sidebar */}
                <div className="hidden space-y-2 md:block">

                  <div className="mb-5 flex items-center gap-2 px-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">
                      W
                    </div>

                    <span className="font-semibold text-zinc-800">
                      Whisperly
                    </span>

                  </div>

                  <div className="rounded-lg bg-violet-100 px-3 py-2 text-xs font-medium text-violet-700">
                    Messages
                  </div>

                  <div className="px-3 py-2 text-xs text-zinc-400">
                    My Profile
                  </div>

                  <div className="px-3 py-2 text-xs text-zinc-400">
                    Settings
                  </div>

                </div>

                {/* Main dashboard */}
                <div>

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-zinc-400">
                        Your inbox
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-zinc-900">
                        Anonymous Messages
                      </h3>
                    </div>

                    <div className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-violet-600 shadow-sm">
                      12 messages
                    </div>

                  </div>

                  {/* Messages */}
                  <div className="mt-5 space-y-3">

                    <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">

                      <div className="flex items-center gap-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">
                          ?
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-700">
                            Anonymous
                          </p>

                          <p className="text-[10px] text-zinc-400">
                            2 minutes ago
                          </p>
                        </div>

                        <span className="ml-auto rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-600">
                          New
                        </span>

                      </div>

                      <p className="mt-3 text-sm text-zinc-600">
                        "You seem like someone who is really easy to talk to."
                      </p>

                    </div>

                    <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">

                      <div className="flex items-center gap-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-xs text-pink-500">
                          ♥
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-700">
                            Anonymous
                          </p>

                          <p className="text-[10px] text-zinc-400">
                            14 minutes ago
                          </p>
                        </div>

                      </div>

                      <p className="mt-3 text-sm text-zinc-600">
                        "I have something I've wanted to tell you for a while..."
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                SHARE LINK FLOATING CARD
            ================================================= */}

            <div className="absolute -bottom-7 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-between rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-900/10 sm:w-auto sm:min-w-[390px]">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  🔗
                </div>

                <div>
                  <p className="text-[10px] text-zinc-400">
                    Your Whisperly link
                  </p>

                  <p className="text-xs font-semibold text-zinc-700">
                    whisperly.app/yourname
                  </p>
                </div>

              </div>

              <button className="rounded-lg bg-zinc-900 px-3 py-2 text-[10px] font-semibold text-white">
                Copy
              </button>

            </div>

          </div>

          {/* =====================================================
              PRIVACY BADGE
          ===================================================== */}

          <div className="absolute -bottom-8 -right-2 hidden items-center gap-2 rounded-xl border border-emerald-100 bg-white px-4 py-3 shadow-lg shadow-emerald-100/50 sm:flex lg:right-10">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              🔒
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-800">
                Identity protected
              </p>

              <p className="text-[10px] text-zinc-400">
                Sender stays anonymous
              </p>
            </div>

          </div>

        </div>  

      </div>

    </section>
  );
};

export default Hero;

