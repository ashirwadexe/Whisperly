import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Hero = () => {
  const { user } = useContext(AuthContext);
  const questions = [
    "I've liked you for a really long time, but I've never had the courage to tell you.",
    "Tumse ek baat kehni thi... I actually miss talking to you.",
    "I saw you somewhere today, but I didn't know how to say hello.",
    "You probably don't know this, but you've helped me through a really difficult time.",
    "I think I have a crush on you. There, I finally said it.",
    "Mujhe tumhari ek baat bahut achhi lagti hai, bas kabhi bol nahi paaya.",
    "Honestly, I was angry with you for a long time.",
    "I have a secret about you that I've never told anyone.",
    "Kabhi kabhi lagta hai ki tum mujhe samajhte ho, baaki sabse zyada.",
    "I wish we were closer than we are right now.",
    "You hurt me once, and I don't think you ever realized it.",
    "I don't know if you remember me, but I still remember you.",
    "Sach bolun? I was jealous when I saw you with them.",
    "You have no idea how much I admire you.",
    "I wanted to propose to you, but I got scared.",
    "Mujhe tumse kuch kehna hai, par saamne bolne ki himmat nahi hai.",
    "I think we should talk about what happened between us.",
    "Sometimes I just want to disappear for a while and tell someone everything.",
    "You're one of the nicest people I've ever met.",
    "I know we don't talk anymore, but I still hope you're doing okay.",
  ];

  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-white pt-15">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #064E3B 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.7 }}
      />

      <div className="absolute -left-32 top-1/2 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "#F8E7C9", opacity: 0.55 }}
      />

      <div className="absolute -right-32 top-1/3 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "#064E3B", opacity: 0.08 }}
      />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8">
        <div className="flex justify-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm"
            style={{
              borderColor: "#F8E7C9",
              backgroundColor: "#F8E7C9",
              color: "#064E3B",
            }}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
              style={{ backgroundColor: "#064E3B" }}
            >
              ✦
            </span>
            Anonymous conversations, made simple
          </div>
        </div>

        {/* Hero Heading */}
        <div className="mx-auto mt-7 max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
            Let people say what they
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #064E3B, #0B6B50, #064E3B)",
              }}
            >
              can't say openly.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Whisperly is an anonymous messaging platform where you can
            create your personal link, share it with anyone, and receive
            honest messages without knowing who sent them.
          </p>

          {/* CTA */}
          {!user ? (
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/login"
                className="group flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: "#064E3B",
                  boxShadow: "0 12px 24px rgba(6, 78, 59, 0.12)",
                }}
              >
                Create Your Whisperly
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/signup"
                className="rounded-xl border bg-white px-6 py-3.5 text-sm font-semibold shadow-sm transition hover:-translate-y-1"
                style={{
                  borderColor: "#F8E7C9",
                  color: "#064E3B",
                }}
              >
                See How It Works
              </Link>
            </div>
          ) : (
            <div className="mt-9 flex justify-center">
              <Link
                to="/dashboard"
                className="group flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: "#064E3B",
                  boxShadow: "0 12px 24px rgba(6, 78, 59, 0.12)",
                }}
              >
                Whisperly Dashboard
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          )}

          {/* Trust Text */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#064E3B" }}
            />
            No identity revealed to the receiver
          </div>
        </div>

        {/* Question River */}
        <div className="relative z-1 mt-14 overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20" />

          <div className="flex w-max animate-[questionFlow_120s_linear_infinite] gap-10">
            {[...questions, ...questions].map((question, index) => (
              <span
                key={index}
                className="whitespace-nowrap text-md font-medium tracking-[-0.01em] text-zinc-500 sm:text-lg"
              >
                {question}
              </span>
            ))}
          </div>

          <style>{`
            @keyframes questionFlow {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }

            @media (prefers-reduced-motion: reduce) {
              .animate-\\[questionFlow_120s_linear_infinite\\] {
                animation: none;
              }
            }
          `}</style>
        </div>

        {/* Visual Section */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{ borderColor: "#F8E7C9" }}
          />

          <div
            className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{ borderColor: "#F8E7C9", opacity: 0.6 }}
          />

          {/* Floating Message - Left */}
          <div className="absolute -left-2 top-10 z-20 hidden w-64 rotate-[-5deg] rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-900/5 sm:block lg:left-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: "#F8E7C9", color: "#064E3B" }}
              >
                ?
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-800">Anonymous</p>
                <p className="text-[11px] text-zinc-400">Just now</p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-5 text-zinc-600">
              "What's something you've always wanted to tell me?"
            </p>
          </div>

          {/* Floating Message - Right */}
          <div className="absolute -right-2 top-28 z-20 hidden w-64 rotate-[5deg] rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-900/5 sm:block lg:right-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: "#F8E7C9", color: "#064E3B" }}
              >
                ♥
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-800">Anonymous</p>
                <p className="text-[11px] text-zinc-400">2 min ago</p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-5 text-zinc-600">
              "Your content has helped me more than you know."
            </p>
          </div>

          {/* Main App Mockup */}
          <div className="relative mx-auto max-w-3xl">
            <div
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl"
              style={{ boxShadow: "0 25px 60px rgba(6, 78, 59, 0.10)" }}
            >
              {/* Top Bar */}
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

                <div
                  className="h-7 w-7 rounded-full"
                  style={{ backgroundColor: "#F8E7C9" }}
                />
              </div>

              {/* Dashboard */}
              <div className="grid gap-6 p-6 md:grid-cols-[180px_1fr]"
                style={{ backgroundColor: "#FCF9F3" }}
              >
                {/* Sidebar */}
                <div className="hidden space-y-2 md:block">
                  <div className="mb-5 flex items-center gap-2 px-2">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
                      style={{ backgroundColor: "#064E3B", color: "#F8E7C9" }}
                    >
                      W
                    </div>

                    <span className="font-semibold text-zinc-800">Whisperly</span>
                  </div>

                  <div
                    className="rounded-lg px-3 py-2 text-xs font-medium"
                    style={{ backgroundColor: "#F8E7C9", color: "#064E3B" }}
                  >
                    Messages
                  </div>

                  <div className="px-3 py-2 text-xs text-zinc-400">My Profile</div>
                  <div className="px-3 py-2 text-xs text-zinc-400">Settings</div>
                </div>

                {/* Main Dashboard */}
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-400">Your inbox</p>
                      <h3 className="mt-1 text-xl font-bold text-zinc-900">
                        Anonymous Messages
                      </h3>
                    </div>

                    <div
                      className="rounded-lg bg-white px-3 py-2 text-xs font-medium shadow-sm"
                      style={{ color: "#064E3B" }}
                    >
                      12 messages
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xs"
                          style={{ backgroundColor: "#F8E7C9", color: "#064E3B" }}
                        >
                          ?
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-700">
                            Anonymous
                          </p>
                          <p className="text-[10px] text-zinc-400">2 minutes ago</p>
                        </div>

                        <span
                          className="ml-auto rounded-full px-2 py-1 text-[9px] font-medium"
                          style={{ backgroundColor: "#F8E7C9", color: "#064E3B" }}
                        >
                          New
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-zinc-600">
                        "You seem like someone who is really easy to talk to."
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xs"
                          style={{ backgroundColor: "#F8E7C9", color: "#064E3B" }}
                        >
                          ♥
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-zinc-700">
                            Anonymous
                          </p>
                          <p className="text-[10px] text-zinc-400">14 minutes ago</p>
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

            {/* Share Link */}
            <div className="absolute -bottom-7 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-between rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-900/10 sm:w-auto sm:min-w-[390px]">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#F8E7C9", color: "#064E3B" }}
                >
                  🔗
                </div>

                <div>
                  <p className="text-[10px] text-zinc-400">Your Whisperly link</p>
                  <p className="text-xs font-semibold text-zinc-700">
                    whisperly.app/yourname
                  </p>
                </div>
              </div>

              <button
                className="rounded-lg px-3 py-2 text-[10px] font-semibold text-white"
                style={{ backgroundColor: "#064E3B" }}
              >
                Copy
              </button>
            </div>
          </div>

          {/* Privacy Badge */}
          <div className="absolute -bottom-8 -right-2 hidden items-center gap-2 rounded-xl border bg-white px-4 py-3 shadow-lg sm:flex lg:right-10"
            style={{ borderColor: "#F8E7C9", boxShadow: "0 10px 25px rgba(6, 78, 59, 0.08)" }}
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ backgroundColor: "#F8E7C9", color: "#064E3B" }}
            >
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