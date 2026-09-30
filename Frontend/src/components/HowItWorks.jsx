
const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-28"
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

      {/* Center glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-100/50 blur-3xl" />

      {/* Side glows */}
      <div className="absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-fuchsia-100/40 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <div className="mx-auto max-w-2xl text-center">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Simple by design
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            From your link to
            <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              anonymous whispers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            Whisperly makes anonymous conversations incredibly simple.
            Create your space, share it with people, and let the whispers
            come to you.
          </p>

        </div>

        {/* =======================================================
            WORKFLOW
        ======================================================= */}

        <div className="relative mt-20">

          {/* Connecting line */}
          <div className="absolute left-[16%] right-[16%] top-[190px] hidden h-px bg-gradient-to-r from-violet-200 via-fuchsia-200 to-pink-200 lg:block" />

          {/* Glowing line */}
          <div className="absolute left-[16%] right-[16%] top-[190px] hidden h-[3px] bg-gradient-to-r from-violet-500/0 via-violet-400/30 to-fuchsia-500/0 blur-sm lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">

            {/* =================================================
                STEP 01
            ================================================= */}

            <div className="group relative">

              {/* Step Number */}
              <div className="absolute left-1/2 top-[-18px] z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xs font-bold text-white shadow-lg shadow-violet-300/40">
                01
              </div>

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-900/[0.04] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-violet-200/30">

                {/* Card Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-100/70 blur-3xl" />

                {/* Mini Profile UI */}
                <div className="relative h-[300px] overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 p-5">

                  {/* Fake top bar */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xs font-bold text-white">
                        W
                      </div>

                      <span className="text-xs font-semibold text-zinc-800">
                        Whisperly
                      </span>

                    </div>

                    <div className="h-7 w-7 rounded-full bg-white shadow-sm" />

                  </div>

                  {/* Profile */}
                  <div className="mt-10 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-bold text-white shadow-lg shadow-violet-200">
                      A
                    </div>

                    <p className="mt-3 text-sm font-bold text-zinc-800">
                      @yourname
                    </p>

                    <p className="mt-1 text-[11px] text-zinc-400">
                      Send me an anonymous message
                    </p>

                  </div>

                  {/* Link */}
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

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                        🔗
                      </div>

                    </div>

                  </div>

                </div>

                {/* Card Text */}
                <div className="relative px-2 pb-2 pt-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
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

            {/* =================================================
                STEP 02
            ================================================= */}

            <div className="group relative">

              {/* Step Number */}
              <div className="absolute left-1/2 top-[-18px] z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-fuchsia-500 to-pink-500 text-xs font-bold text-white shadow-lg shadow-fuchsia-300/40">
                02
              </div>

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-900/[0.04] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-fuchsia-200/30">

                {/* Glow */}
                <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-fuchsia-100/70 blur-3xl" />

                {/* Share UI */}
                <div className="relative h-[300px] overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 p-5">

                  {/* Fake browser */}
                  <div className="flex items-center gap-1.5">

                    <span className="h-2 w-2 rounded-full bg-red-300" />
                    <span className="h-2 w-2 rounded-full bg-yellow-300" />
                    <span className="h-2 w-2 rounded-full bg-green-300" />

                    <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-center text-[9px] text-zinc-400 shadow-sm">
                      whisperly.app/yourname
                    </div>

                  </div>

                  {/* Share card */}
                  <div className="absolute left-5 right-5 top-[90px] rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl">

                    <div className="text-center">

                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-600">
                        ↗
                      </div>

                      <p className="mt-3 text-sm font-bold text-zinc-800">
                        Share your Whisperly
                      </p>

                      <p className="mt-1 text-[10px] text-zinc-400">
                        Let people know where to find you
                      </p>

                    </div>

                    {/* Social buttons */}
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

                  {/* Floating copied badge */}
                  <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-3 py-2 shadow-lg">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-emerald-600">
                      ✓
                    </div>

                    <span className="text-[10px] font-semibold text-zinc-600">
                      Link copied
                    </span>

                  </div>

                </div>

                {/* Text */}
                <div className="relative px-2 pb-2 pt-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-500">
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

            {/* =================================================
                STEP 03
            ================================================= */}

            <div className="group relative">

              {/* Step Number */}
              <div className="absolute left-1/2 top-[-18px] z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-pink-500 to-rose-500 text-xs font-bold text-white shadow-lg shadow-pink-300/40">
                03
              </div>

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-900/[0.04] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-pink-200/30">

                {/* Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-pink-100/70 blur-3xl" />

                {/* Inbox UI */}
                <div className="relative h-[300px] overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 p-4">

                  {/* Header */}
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[9px] text-zinc-400">
                        Your inbox
                      </p>

                      <p className="mt-1 text-sm font-bold text-zinc-800">
                        New whispers
                      </p>
                    </div>

                    <div className="rounded-full bg-pink-50 px-2.5 py-1 text-[9px] font-semibold text-pink-500">
                      3 new
                    </div>

                  </div>

                  {/* Message 1 */}
                  <div className="mt-5 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm">

                    <div className="flex items-center gap-2">

                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-[10px] text-violet-600">
                        ?
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-zinc-700">
                          Anonymous
                        </p>

                        <p className="text-[8px] text-zinc-400">
                          Just now
                        </p>
                      </div>

                      <span className="ml-auto h-2 w-2 rounded-full bg-violet-500" />

                    </div>

                    <p className="mt-3 text-[10px] leading-4 text-zinc-500">
                      "I've always wanted to tell you that
                      you're doing amazing..."
                    </p>

                  </div>

                  {/* Message 2 */}
                  <div className="mt-3 rounded-xl border border-zinc-100 bg-white p-3 shadow-sm">

                    <div className="flex items-center gap-2">

                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-[10px] text-pink-500">
                        ♥
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-zinc-700">
                          Anonymous
                        </p>

                        <p className="text-[8px] text-zinc-400">
                          5 min ago
                        </p>
                      </div>

                    </div>

                    <p className="mt-3 text-[10px] leading-4 text-zinc-500">
                      "What's one thing you wish more people knew about you?"
                    </p>

                  </div>

                  {/* Privacy badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-3 py-2 shadow-md">

                    <span className="text-xs">
                      🔒
                    </span>

                    <span className="text-[9px] font-semibold text-zinc-600">
                      Identity protected
                    </span>

                  </div>

                </div>

                {/* Text */}
                <div className="relative px-2 pb-2 pt-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
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

        {/* =======================================================
            BOTTOM FEATURE STRIP
        ======================================================= */}

        <div className="mx-auto mt-16 max-w-4xl">

          <div className="relative overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-fuchsia-50 px-6 py-5">

            {/* Small glow */}
            <div className="absolute left-1/2 top-0 h-24 w-64 -translate-x-1/2 rounded-full bg-violet-200/30 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <span className="text-lg">🔐</span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-800">
                    Built around anonymity
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-400">
                    Your conversations stay personal.
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap justify-center gap-5 text-xs font-medium text-zinc-500">

                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span>
                  Anonymous
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span>
                  Simple
                </span>

                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span>
                  Private
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;

// **Important:** Hero mein jo `id="how-it-works"` link hai, woh ab properly isi section par scroll karega.

// Is section mein maine jaan-bujhkar **normal 3-card layout avoid kiya hai**. Har card ke andar actual Whisperly UI ka miniature representation hai, exactly Hero ke dashboard mockup ki visual language mein. Isliye user ko sirf *“3 steps”* nahi dikhenge—use visually samajh aayega ki Whisperly **actually kaise use hota hai**.
