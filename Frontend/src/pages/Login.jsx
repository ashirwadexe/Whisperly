import React, { useContext, useState } from "react";
import WhisperlyLogo from "../components/WhisperlyLogo";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import usePageTitle from "../hooks/usePageTitle";

const Login = () => {
  usePageTitle("Login")
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputValidation = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email!";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required!";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password should be of 6 characters!";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = inputValidation();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);

      const response = await login(formData);

      toast.success(response.message || "Login successful!");

      setFormData({
        email: "",
        password: "",
      });

      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong!",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-12">
      {/* Minimal dotted background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #064E3B 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Champagne accent blocks */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rotate-12 bg-[#F8E7C9]/60" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 -rotate-12 bg-[#F8E7C9]/50" />

      {/* Login content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="mb-8 flex cursor-pointer justify-center"
        >
          <WhisperlyLogo />
        </div>

        {/* Login Card */}
        <div className="border-2 border-[#064E3B] bg-white p-7 shadow-[8px_8px_0px_#064E3B] sm:p-9">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-[-0.05em] text-[#064E3B]">
              Welcome back.
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Sign in to continue to your Whisperly inbox.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-[#064E3B]"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className={`w-full border-2 ${
                  errors.email
                    ? "border-red-500"
                    : "border-zinc-200 focus:border-[#064E3B]"
                } bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:bg-white`}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-[#064E3B]"
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    toast("Password reset is not available yet.")
                  }
                  className="text-xs font-bold text-[#064E3B] underline decoration-[#F8E7C9] decoration-2 underline-offset-4 transition hover:text-[#0B6B50]"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full border-2 ${
                    errors.password
                      ? "border-red-500"
                      : "border-zinc-200 focus:border-[#064E3B]"
                  } bg-zinc-50 py-3.5 pl-4 pr-16 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:bg-white`}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-extrabold text-[#064E3B] transition hover:opacity-70 cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Sign in */}
            <button
              type="submit"
              disabled={loading}
              className="group mt-2 flex w-full items-center justify-center border-2 border-[#064E3B] bg-[#064E3B] px-5 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-white hover:text-[#064E3B] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
            >
              {loading ? (
                <Loader text="Logging in..." />
              ) : (
                <span className="flex items-center gap-2">
                  Sign in
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200" />
            <span className="bg-[#F8E7C9] px-3 py-1 text-xs font-bold text-[#064E3B]">
              OR
            </span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-zinc-600">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="font-extrabold text-[#064E3B] underline decoration-[#F8E7C9] decoration-2 underline-offset-4 transition hover:opacity-70 cursor-pointer"
            >
              Create one
            </button>
          </p>
        </div>

        {/* Privacy text */}
        <p className="mt-7 text-center text-xs leading-6 text-zinc-500">
          <span className="font-bold text-[#064E3B]">
            YOUR PRIVACY MATTERS.
          </span>
          <br />
          Whisperly never reveals who sent an anonymous message.
        </p>
      </div>
    </div>
  );
};

export default Login;