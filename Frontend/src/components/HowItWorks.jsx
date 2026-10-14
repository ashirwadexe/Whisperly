const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #064E3B 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      /> */}

      <div
        className="absolute left-1/2 top-40 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.65 }}
      />

      <div
        className="absolute -left-40 top-1/2 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.5 }}
      />

      <div
        className="absolute -right-40 bottom-20 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "#064E3B", opacity: 0.06 }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
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
            Simple by design
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            From your link to
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #064E3B, #0B6B50, #064E3B)",
              }}
            >
              anonymous whispers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            Whisperly makes anonymous conversations incredibly simple.
            Create your space, share it with people, and let the whispers
            come to you.
          </p>
        </div>

        {/* Workflow */}
        <div className="relative mt-20">
          <div
            className="absolute left-[16%] right-[16%] top-[190px] hidden h-px lg:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, #F8E7C9, #064E3B, #F8E7C9)",
            }}
          />

          <div
            className="absolute left-[16%] right-[16%] top-[190px] hidden h-[3px] blur-sm lg:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, rgba(6,78,59,0.3), transparent)",
            }}
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Step 01 */}
            <div className="group relative">
              <div
                className="absolute left-1/2 top-[-18px] z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow-lg"
                style={{
                  backgroundColor: "#064E3B",
                  color: "#F8E7C9",
                  boxShadow: "0 8px 20px rgba(6,78,59,0.2)",
                }}
              >
                01
              </div>

              <div
                className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-900/[0.04] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
                style={{ "--tw-shadow-color": "rgba(6,78,59,0.12)" }}
              >
                <div
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl"
                  style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
                />

                <div className="relative h-[300px] overflow-hidden rounded-2xl border border-zinc-100 p-5"
                  style={{ backgroundColor: "#FCF9F3" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
                        style={{
                          backgroundColor: "#064E3B",
                          color: "#F8E7C9",
                        }}
                      >
                        W
                      </div>
                      <span className="text-xs font-semibold text-zinc-800">
                        Whisperly
                      </span>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-white shadow-sm" />
                  </div>

                  <div className="mt-10 text-center">
                    <div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg"
                      style={{
                        backgroundColor: "#064E3B",
                        boxShadow: "0 8px 20px rgba(6,78,59,0.15)",
                      }}
                    >
                      A
                    </div>
                    <p className="mt-3 text-sm font-bold text-zinc-800">
                      @yourname
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-400">
                      Send me an anonymous message
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-zinc-400">
                          Your personal link
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-zinc-700">
                          whisperly.app/yourname
                        </p>
                      </div>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: "#F8E7C9",
                          color: "#064E3B",
                        }}
                      >
                        🔗
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative px-2 pb-2 pt-5">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#064E3B" }}
                  >
                    Create
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">
                    Create your space
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Set up your Whisperly profile and get your own personal
                    anonymous messaging link.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="group relative">
              <div
                className="absolute left-1/2 top-[-18px] z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow-lg"
                style={{
                  backgroundColor: "#064E3B",
                  color: "#F8E7C9",
                  boxShadow: "0 8px 20px rgba(6,78,59,0.2)",
                }}
              >
                02
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-900/[0.04] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div
                  className="absolute -left-20 -top-20 h-40 w-40 rounded-full blur-3xl"
                  style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
                />

                <div
                  className="relative h-[300px] overflow-hidden rounded-2xl border border-zinc-100 p-5"
                  style={{ backgroundColor: "#FCF9F3" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-300" />
                    <span className="h-2 w-2 rounded-full bg-yellow-300" />
                    <span className="h-2 w-2 rounded-full bg-green-300" />
                    <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-center text-[9px] text-zinc-400 shadow-sm">
                      whisperly.app/yourname
                    </div>
                  </div>

                  <div className="absolute left-5 right-5 top-[90px] rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl">
                    <div className="text-center">
                      <div
                        className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: "#F8E7C9",
                          color: "#064E3B",
                        }}
                      >
                        ↗
                      </div>
                      <p className="mt-3 text-sm font-bold text-zinc-800">
                        Share your Whisperly
                      </p>
                      <p className="mt-1 text-[10px] text-zinc-400">
                        Let people know where to find you
                      </p>
                    </div>

                    <div className="mt-5 flex justify-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-[10px] font-bold text-zinc-500">
                        IG
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-[10px] font-bold text-zinc-500">
                        X
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-[10px] font-bold text-zinc-500">
                        ↗
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-5 right-5 flex items-center gap-2 rounded-xl border bg-white px-3 py-2 shadow-lg"
                    style={{ borderColor: "#F8E7C9" }}
                  >
                    <div
                      className="flex h-6 w-6 items-center justify-center rounded-full text-xs"
                      style={{
                        backgroundColor: "#F8E7C9",
                        color: "#064E3B",
                      }}
                    >
                      ✓
                    </div>
                    <span className="text-[10px] font-semibold text-zinc-600">
                      Link copied
                    </span>
                  </div>
                </div>

                <div className="relative px-2 pb-2 pt-5">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#064E3B" }}
                  >
                    Share
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">
                    Put it everywhere
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Share your link on social media, in your bio, or directly
                    with friends and followers.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="group relative">
              <div
                className="absolute left-1/2 top-[-18px] z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white text-xs font-bold shadow-lg"
                style={{
                  backgroundColor: "#064E3B",
                  color: "#F8E7C9",
                  boxShadow: "0 8px 20px rgba(6,78,59,0.2)",
                }}
              >
                03
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-900/[0.04] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl"
                  style={{ backgroundColor: "#F8E7C9", opacity: 0.8 }}
                />

                <div
                  className="relative h-[300px] overflow-hidden rounded-2xl border border-zinc-100 p-4"
                  style={{ backgroundColor: "#FCF9F3" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-zinc-400">Your inbox</p>
                      <p className="mt-1 text-sm font-bold text-zinc-800">
                        New whispers
                      </p>
                    </div>
                    <div
                      className="rounded-full px-2.5 py-1 text-[9px] font-semibold"
                      style={{
                        backgroundColor: "#F8E7C9",
                        color: "#064E3B",
                      }}
                    >
                      3 new
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full text-[10px]"
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
                        <p className="text-[8px] text-zinc-400">Just now</p>
                      </div>
                      <span
                        className="ml-auto h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#064E3B" }}
                      />
                    </div>
                    <p className="mt-3 text-[10px] leading-4 text-zinc-500">
                      "I've always wanted to tell you that you're doing
                      amazing..."
                    </p>
                  </div>

                  <div className="mt-3 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full text-[10px]"
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
                        <p className="text-[8px] text-zinc-400">5 min ago</p>
                      </div>
                    </div>
                    <p className="mt-3 text-[10px] leading-4 text-zinc-500">
                      "What's one thing you wish more people knew about you?"
                    </p>
                  </div>

                  <div
                    className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border bg-white px-3 py-2 shadow-md"
                    style={{ borderColor: "#F8E7C9" }}
                  >
                    <span className="text-xs">🔒</span>
                    <span className="text-[9px] font-semibold text-zinc-600">
                      Identity protected
                    </span>
                  </div>
                </div>

                <div className="relative px-2 pb-2 pt-5">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#064E3B" }}
                  >
                    Receive
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">
                    Let the whispers arrive
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Messages land safely in your inbox while the sender's
                    identity stays anonymous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div
            className="relative overflow-hidden rounded-2xl border px-6 py-5"
            style={{
              borderColor: "#F8E7C9",
              background:
                "linear-gradient(to right, #F8E7C9, #FFFFFF, #FCF9F3)",
            }}
          >
            <div
              className="absolute left-1/2 top-0 h-24 w-64 -translate-x-1/2 rounded-full blur-3xl"
              style={{ backgroundColor: "#F8E7C9", opacity: 0.7 }}
            />

            <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm"
                  style={{
                    backgroundColor: "#064E3B",
                    color: "#F8E7C9",
                  }}
                >
                  <span className="text-lg">🔐</span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-800">
                    Built around anonymity
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    Your conversations stay personal.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-5 text-xs font-medium text-zinc-600">
                {["Anonymous", "Simple", "Private"].map((feature) => (
                  <span key={feature} className="flex items-center gap-1.5">
                    <span style={{ color: "#064E3B" }}>✓</span>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;