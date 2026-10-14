const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #064E3B 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className="absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.65 }}
      />

      <div
        className="absolute -left-40 top-[45%] h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.45 }}
      />

      <div
        className="absolute -right-40 bottom-20 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "#064E3B", opacity: 0.06 }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
            style={{
              borderColor: "#F8E7C9",
              backgroundColor: "#F8E7C9",
              color: "#064E3B",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#064E3B" }}
            />
            Everything you need
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Designed for
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #064E3B, #0B6B50, #064E3B)",
              }}
            >
              honest conversations.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            Whisperly gives you a simple space to receive anonymous messages,
            manage your inbox, and keep your conversations under your control.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {/* Feature 1: Anonymous Messages */}
          <div
            className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl lg:col-span-2"
            style={{ "--tw-shadow-color": "rgba(6,78,59,0.12)" }}
          >
            <div
              className="absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
            />

            <div className="grid h-full md:grid-cols-2">
              <div className="relative flex flex-col justify-center p-7 sm:p-9">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                  style={{ backgroundColor: "#F8E7C9" }}
                >
                  💬
                </div>

                <p
                  className="mt-5 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#064E3B" }}
                >
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
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "#F8E7C9",
                      color: "#064E3B",
                    }}
                  >
                    ✓
                  </span>
                  Sender identity stays hidden
                </div>
              </div>

              <div
                className="relative flex min-h-[300px] items-center justify-center overflow-hidden p-6"
                style={{ backgroundColor: "#FCF9F3" }}
              >
                <div
                  className="absolute h-64 w-64 rounded-full border"
                  style={{ borderColor: "#F8E7C9" }}
                />

                <div className="relative w-full max-w-[270px] space-y-3">
                  <div className="translate-x-2 rounded-2xl border border-zinc-100 bg-white p-4 shadow-lg shadow-zinc-900/5 transition duration-300 group-hover:-translate-x-1">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full text-xs"
                        style={{
                          backgroundColor: "#F8E7C9",
                          color: "#064E3B",
                        }}
                      >
                        ?
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-zinc-700">
                          Anonymous
                        </p>
                        <p className="text-[9px] text-zinc-400">Just now</p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-zinc-500">
                      "What's something you've always wanted to tell me?"
                    </p>
                  </div>

                  <div className="-translate-x-2 rounded-2xl border border-zinc-100 bg-white p-4 shadow-lg shadow-zinc-900/5">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full text-xs"
                        style={{
                          backgroundColor: "#F8E7C9",
                          color: "#064E3B",
                        }}
                      >
                        ♥
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-zinc-700">
                          Anonymous
                        </p>
                        <p className="text-[9px] text-zinc-400">2 min ago</p>
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

          {/* Feature 2: Personal Link */}
          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
            />

            <div className="relative">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                style={{
                  backgroundColor: "#F8E7C9",
                  color: "#064E3B",
                }}
              >
                🔗
              </div>

              <p
                className="mt-5 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#064E3B" }}
              >
                Your space
              </p>

              <h3 className="mt-2 text-xl font-bold text-zinc-900">
                Your own personal link
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                One simple link that people can use to send you anonymous
                messages from anywhere.
              </p>

              <div className="mt-7 rounded-2xl border border-zinc-100 p-3"
                style={{ backgroundColor: "#FCF9F3" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm"
                    style={{ color: "#064E3B" }}
                  >
                    ↗
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] text-zinc-400">Your Whisperly</p>
                    <p className="truncate text-xs font-semibold text-zinc-700">
                      whisperly.app/yourname
                    </p>
                  </div>
                </div>

                <button
                  className="mt-3 w-full rounded-xl py-2 text-[10px] font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: "#064E3B" }}
                >
                  Copy link
                </button>
              </div>
            </div>
          </div>

          {/* Feature 3: Private Inbox */}
          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div
              className="absolute -left-16 -top-16 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
            />

            <div className="relative">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                style={{
                  backgroundColor: "#F8E7C9",
                  color: "#064E3B",
                }}
              >
                📥
              </div>

              <p
                className="mt-5 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#064E3B" }}
              >
                Stay organized
              </p>

              <h3 className="mt-2 text-xl font-bold text-zinc-900">
                A private inbox
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Keep all your anonymous messages in one clean and easy-to-use
                inbox.
              </p>

              <div
                className="mt-7 rounded-2xl border border-zinc-100 p-3"
                style={{ backgroundColor: "#FCF9F3" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-zinc-700">
                    Messages
                  </span>

                  <span
                    className="rounded-full px-2 py-1 text-[8px] font-semibold"
                    style={{
                      backgroundColor: "#F8E7C9",
                      color: "#064E3B",
                    }}
                  >
                    3 new
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm">
                    <div
                      className="h-7 w-7 rounded-full"
                      style={{ backgroundColor: "#F8E7C9" }}
                    />

                    <div className="flex-1">
                      <div className="h-2 w-16 rounded-full bg-zinc-200" />
                      <div className="mt-1.5 h-1.5 w-24 rounded-full bg-zinc-100" />
                    </div>

                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#064E3B" }}
                    />
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm">
                    <div
                      className="h-7 w-7 rounded-full"
                      style={{ backgroundColor: "#F8E7C9" }}
                    />

                    <div className="flex-1">
                      <div className="h-2 w-20 rounded-full bg-zinc-200" />
                      <div className="mt-1.5 h-1.5 w-16 rounded-full bg-zinc-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Control */}
          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl lg:col-span-2">
            <div className="grid h-full md:grid-cols-2">
              <div
                className="relative order-2 flex min-h-[300px] items-center justify-center overflow-hidden p-6 md:order-1"
                style={{ backgroundColor: "#FCF9F3" }}
              >
                <div
                  className="absolute h-60 w-60 rounded-full border"
                  style={{ borderColor: "#F8E7C9" }}
                />

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

                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: "#F8E7C9",
                        color: "#064E3B",
                      }}
                    >
                      ⚙
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-b border-zinc-100 pb-4">
                    <div>
                      <p className="text-[10px] font-semibold text-zinc-700">
                        Anonymous messages
                      </p>
                      <p className="mt-1 text-[8px] text-zinc-400">
                        Allow people to message you
                      </p>
                    </div>

                    <div
                      className="flex h-5 w-9 items-center rounded-full p-0.5"
                      style={{ backgroundColor: "#064E3B" }}
                    >
                      <span className="ml-auto h-4 w-4 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>

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

              <div className="relative order-1 flex flex-col justify-center p-7 sm:p-9 md:order-2">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                  style={{ backgroundColor: "#F8E7C9" }}
                >
                  🛡️
                </div>

                <p
                  className="mt-5 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#064E3B" }}
                >
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
                  <span
                    className="rounded-full px-3 py-1.5 text-[10px] font-medium"
                    style={{
                      backgroundColor: "#F8E7C9",
                      color: "#064E3B",
                    }}
                  >
                    Message controls
                  </span>

                  <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-medium text-zinc-600">
                    Privacy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: Simple Dashboard */}
          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/[0.04] transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div
              className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
            />

            <div className="relative">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                style={{ backgroundColor: "#F8E7C9" }}
              >
                ✨
              </div>

              <p
                className="mt-5 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#064E3B" }}
              >
                Clean experience
              </p>

              <h3 className="mt-2 text-xl font-bold text-zinc-900">
                Everything in one place
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                A distraction-free dashboard designed to keep your whispers
                simple and easy to manage.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-2">
                <div
                  className="rounded-xl border border-zinc-100 p-3"
                  style={{ backgroundColor: "#FCF9F3" }}
                >
                  <p className="text-[9px] text-zinc-400">Total messages</p>
                  <p className="mt-1 text-xl font-bold text-zinc-800">128</p>
                  <span
                    className="text-[8px] font-medium"
                    style={{ color: "#064E3B" }}
                  >
                    +12 this week
                  </span>
                </div>

                <div
                  className="rounded-xl border border-zinc-100 p-3"
                  style={{ backgroundColor: "#FCF9F3" }}
                >
                  <p className="text-[9px] text-zinc-400">New whispers</p>
                  <p className="mt-1 text-xl font-bold text-zinc-800">08</p>
                  <span
                    className="text-[8px] font-medium"
                    style={{ color: "#064E3B" }}
                  >
                    Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="relative mx-auto mt-20 max-w-4xl overflow-hidden rounded-[28px] border px-7 py-10 text-center shadow-xl sm:px-12"
          style={{
            borderColor: "#F8E7C9",
            background:
              "linear-gradient(to bottom right, #F8E7C9, #FFFFFF, #FCF9F3)",
            boxShadow: "0 20px 45px rgba(6,78,59,0.07)",
          }}
        >
          <div
            className="absolute left-1/2 top-[-100px] h-56 w-72 -translate-x-1/2 rounded-full blur-3xl"
            style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
          />

          <div className="relative">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl shadow-sm"
              style={{
                backgroundColor: "#064E3B",
                color: "#F8E7C9",
              }}
            >
              💚
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Ready to hear what people really think?
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500">
              Create your Whisperly link and give your friends, followers,
              and community a place to speak freely.
            </p>

            <button
              className="group mt-7 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-90"
              style={{
                backgroundColor: "#064E3B",
                boxShadow: "0 8px 20px rgba(6,78,59,0.15)",
              }}
            >
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