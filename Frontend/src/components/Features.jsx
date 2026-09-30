
const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Background Glows */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="absolute -left-40 top-[45%] h-80 w-80 rounded-full bg-fuchsia-100/40 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Everything you need
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Designed for
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              honest conversations.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            Whisperly gives you a simple space to receive anonymous messages,
            manage your inbox, and keep your conversations under your control.
          </p>

        </div>

        {/* =======================================================
            FEATURE GRID
        ======================================================= */}

        <div className="mt-20 grid gap-6 lg:grid-cols-3">

          {/* =====================================================
              FEATURE 1 — ANONYMOUS MESSAGES
          ===================================================== */}

          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-200/30 lg:col-span-2">

            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-100/70 blur-3xl" />

            <div className="grid h-full md:grid-cols-2">

              {/* Text */}
              <div className="relative flex flex-col justify-center p-7 sm:p-9">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-xl">
                  💬
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet-500">
                  Core feature
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
                  Truly anonymous messages
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                  Give people a comfortable way to say what's on their mind
                  without putting their identity in the conversation.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-zinc-500">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    ✓
                  </span>
                  Sender identity stays hidden
                </div>

              </div>

              {/* UI */}
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-zinc-50 p-6">

                {/* Decorative circle */}
                <div className="absolute h-64 w-64 rounded-full border border-violet-100" />

                <div className="relative w-full max-w-[270px] space-y-3">

                  {/* Message */}
                  <div className="translate-x-2 rounded-2xl border border-zinc-100 bg-white p-4 shadow-lg shadow-zinc-900/5 transition duration-300 group-hover:-translate-x-1">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">
                        ?
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-zinc-700">
                          Anonymous
                        </p>

                        <p className="text-[9px] text-zinc-400">
                          Just now
                        </p>
                      </div>

                    </div>

                    <p className="mt-3 text-xs leading-5 text-zinc-500">
                      "What's something you've always wanted to tell me?"
                    </p>

                  </div>

                  {/* Message */}
                  <div className="-translate-x-2 rounded-2xl border border-zinc-100 bg-white p-4 shadow-lg shadow-zinc-900/5">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-xs text-pink-500">
                        ♥
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-zinc-700">
                          Anonymous
                        </p>

                        <p className="text-[9px] text-zinc-400">
                          2 min ago
                        </p>
                      </div>

                    </div>

                    <p className="mt-3 text-xs leading-5 text-zinc-500">
                      "You don't know me, but your work really inspired me."
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              FEATURE 2 — PERSONAL LINK
          ===================================================== */}

          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-200/30">

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-100/60 blur-3xl" />

            <div className="relative">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-100 text-xl">
                🔗
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-fuchsia-500">
                Your space
              </p>

              <h3 className="mt-2 text-xl font-bold text-zinc-900">
                Your own personal link
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                One simple link that people can use to send you anonymous
                messages from anywhere.
              </p>

              {/* Link UI */}
              <div className="mt-7 rounded-2xl border border-zinc-100 bg-zinc-50 p-3">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-fuchsia-500 shadow-sm">
                    ↗
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] text-zinc-400">
                      Your Whisperly
                    </p>

                    <p className="truncate text-xs font-semibold text-zinc-700">
                      whisperly.app/yourname
                    </p>
                  </div>

                </div>

                <button className="mt-3 w-full rounded-xl bg-zinc-900 py-2 text-[10px] font-semibold text-white">
                  Copy link
                </button>

              </div>

            </div>

          </div>

          {/* =====================================================
              FEATURE 3 — PRIVATE INBOX
          ===================================================== */}

          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-200/30">

            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-pink-100/60 blur-3xl" />

            <div className="relative">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-xl">
                📥
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-pink-500">
                Stay organized
              </p>

              <h3 className="mt-2 text-xl font-bold text-zinc-900">
                A private inbox
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Keep all your anonymous messages in one clean and easy-to-use
                inbox.
              </p>

              {/* Inbox UI */}
              <div className="mt-7 rounded-2xl border border-zinc-100 bg-zinc-50 p-3">

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-semibold text-zinc-700">
                    Messages
                  </span>

                  <span className="rounded-full bg-pink-50 px-2 py-1 text-[8px] font-semibold text-pink-500">
                    3 new
                  </span>

                </div>

                <div className="mt-3 space-y-2">

                  <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm">

                    <div className="h-7 w-7 rounded-full bg-violet-100" />

                    <div className="flex-1">
                      <div className="h-2 w-16 rounded-full bg-zinc-200" />
                      <div className="mt-1.5 h-1.5 w-24 rounded-full bg-zinc-100" />
                    </div>

                    <span className="h-2 w-2 rounded-full bg-violet-500" />

                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm">

                    <div className="h-7 w-7 rounded-full bg-pink-100" />

                    <div className="flex-1">
                      <div className="h-2 w-20 rounded-full bg-zinc-200" />
                      <div className="mt-1.5 h-1.5 w-16 rounded-full bg-zinc-100" />
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              FEATURE 4 — CONTROL
          ===================================================== */}

          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-200/30 lg:col-span-2">

            <div className="grid h-full md:grid-cols-2">

              {/* UI */}
              <div className="relative order-2 flex min-h-[300px] items-center justify-center overflow-hidden bg-zinc-50 p-6 md:order-1">

                <div className="absolute h-60 w-60 rounded-full border border-indigo-100" />

                <div className="relative w-full max-w-[270px] rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[9px] text-zinc-400">
                        Message controls
                      </p>

                      <p className="mt-1 text-xs font-bold text-zinc-800">
                        Manage your space
                      </p>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-500">
                      ⚙
                    </div>

                  </div>

                  {/* Setting */}
                  <div className="mt-5 flex items-center justify-between border-b border-zinc-100 pb-4">

                    <div>
                      <p className="text-[10px] font-semibold text-zinc-700">
                        Anonymous messages
                      </p>

                      <p className="mt-1 text-[8px] text-zinc-400">
                        Allow people to message you
                      </p>
                    </div>

                    <div className="flex h-5 w-9 items-center rounded-full bg-violet-600 p-0.5">

                      <span className="ml-auto h-4 w-4 rounded-full bg-white shadow-sm" />

                    </div>

                  </div>

                  {/* Setting */}
                  <div className="mt-4 flex items-center justify-between">

                    <div>
                      <p className="text-[10px] font-semibold text-zinc-700">
                        Message moderation
                      </p>

                      <p className="mt-1 text-[8px] text-zinc-400">
                        Keep unwanted messages away
                      </p>
                    </div>

                    <div className="flex h-5 w-9 items-center rounded-full bg-zinc-200 p-0.5">

                      <span className="h-4 w-4 rounded-full bg-white shadow-sm" />

                    </div>

                  </div>

                </div>

              </div>

              {/* Text */}
              <div className="relative order-1 flex flex-col justify-center p-7 sm:p-9 md:order-2">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl">
                  🛡️
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                  Your control
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
                  You're in control
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                  Your anonymous inbox should feel comfortable. Manage your
                  messages and control how people interact with your space.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-medium text-indigo-600">
                    Message controls
                  </span>

                  <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-medium text-zinc-500">
                    Privacy
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              FEATURE 5 — SIMPLE DASHBOARD
          ===================================================== */}

          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-200/30">

            <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-violet-100/60 blur-3xl" />

            <div className="relative">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-xl">
                ✨
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet-500">
                Clean experience
              </p>

              <h3 className="mt-2 text-xl font-bold text-zinc-900">
                Everything in one place
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                A distraction-free dashboard designed to keep your whispers
                simple and easy to manage.
              </p>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-2 gap-2">

                <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3">

                  <p className="text-[9px] text-zinc-400">
                    Total messages
                  </p>

                  <p className="mt-1 text-xl font-bold text-zinc-800">
                    128
                  </p>

                  <span className="text-[8px] font-medium text-emerald-500">
                    +12 this week
                  </span>

                </div>

                <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-3">

                  <p className="text-[9px] text-zinc-400">
                    New whispers
                  </p>

                  <p className="mt-1 text-xl font-bold text-zinc-800">
                    08
                  </p>

                  <span className="text-[8px] font-medium text-violet-500">
                    Today
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <div className="relative mx-auto mt-20 max-w-4xl overflow-hidden rounded-[28px] border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 px-7 py-10 text-center shadow-xl shadow-violet-100/40 sm:px-12">

          {/* Glow */}
          <div className="absolute left-1/2 top-[-100px] h-56 w-72 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
              💜
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Ready to hear what people really think?
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500">
              Create your Whisperly link and give your friends, followers,
              and community a place to speak freely.
            </p>

            <button className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition hover:-translate-y-0.5 hover:bg-zinc-800">

              Create your Whisperly

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Features;