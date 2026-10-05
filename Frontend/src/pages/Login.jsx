import React, { useState } from "react";
import WhisperlyLogo from "../components/WhisperlyLogo";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);


    // empty the input feilds after successful form submission
    setFormData({
      email: "",
      password: ""
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-12">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft gradient glows */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-fuchsia-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <WhisperlyLogo />
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_20px_70px_rgba(24,24,27,0.08)] sm:p-9">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-[-0.03em] text-zinc-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Sign in to continue to your Whisperly inbox.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-zinc-700"
              >
                Email address
              </label>

              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-3.5 pl-11 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-zinc-700"
                >
                  Password
                </label>

                <p className="text-xs font-semibold text-violet-600 transition hover:text-violet-700 cursor-pointer">
                  Forgot password?
                </p>
              </div>

              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="10" width="16" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-3.5 pl-11 pr-12 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="group relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <span className="relative flex items-center gap-2">
                Sign in
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs text-zinc-400">or</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-zinc-500">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-violet-600 transition hover:text-violet-700"
            >
              Create one
            </a>
          </p>
        </div>

        {/* Privacy text */}
        <p className="mt-6 text-center text-xs leading-5 text-zinc-400">
          Your conversations stay private.
          <br />
          Whisperly never reveals who sent an anonymous message.
        </p>
      </div>
    </div>
  );
};

export default Login;
