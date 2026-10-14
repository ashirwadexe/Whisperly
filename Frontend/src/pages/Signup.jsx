import { useState } from "react";
import WhisperlyLogo from "../components/WhisperlyLogo";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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

    if (!formData.username.trim()) {
      newErrors.username = "Username is required!";
    } else if (formData.username.trim().length < 3) {
      newErrors.username = "Username should be of 3 characters!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
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

      const response = await api.post("/auth/register", formData);

      toast.success(response.data.message || "Account created!");

      setFormData({
        username: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Signup failed, Try again!",
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

      {/* Brutalist champagne accents */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rotate-12 bg-[#F8E7C9]/60" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 -rotate-12 bg-[#F8E7C9]/50" />

      {/* Signup Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="mb-8 flex cursor-pointer justify-center"
        >
          <WhisperlyLogo />
        </div>

        {/* Signup Card */}
        <div className="border-2 border-[#064E3B] bg-white p-7 shadow-[8px_8px_0px_#064E3B] sm:p-9">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-[-0.05em] text-[#064E3B]">
              Create your Whisperly.
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Create your space and start receiving anonymous messages.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-bold text-[#064E3B]"
              >
                Username
              </label>

              <input
                id="username"
                type="text"
                placeholder="Choose a username"
                className={`w-full border-2 ${
                  errors.username
                    ? "border-red-500"
                    : "border-zinc-200 focus:border-[#064E3B]"
                } bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:bg-white`}
                name="username"
                value={formData.username}
                onChange={handleChange}
              />

              {errors.username && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.username}
                </p>
              )}
            </div>

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
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-[#064E3B]"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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

            {/* Terms */}
            <p className="text-xs leading-5 text-zinc-500">
              By creating an account, you agree to our{" "}
              <span className="font-semibold text-[#064E3B]">
                Terms & Privacy Policy.
              </span>
            </p>

            {/* Create account */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center border-2 border-[#064E3B] bg-[#064E3B] px-5 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-white hover:text-[#064E3B] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
            >
              {loading ? (
                <Loader text="Creating account..." />
              ) : (
                <span className="flex items-center gap-2">
                  Create account
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
              ALREADY HERE?
            </span>

            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          {/* Login */}
          <p className="text-center text-sm text-zinc-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-extrabold text-[#064E3B] underline decoration-[#F8E7C9] decoration-2 underline-offset-4 transition hover:opacity-70 cursor-pointer"
            >
              Sign in
            </button>
          </p>
        </div>

        {/* Bottom text */}
        <p className="mt-7 text-center text-xs leading-6 text-zinc-500">
          <span className="font-bold text-[#064E3B]">
            YOUR LINK. YOUR SPACE.
          </span>
          <br />
          Share it anywhere. Let the anonymous messages come to you.
        </p>
      </div>
    </div>
  );
};

export default Signup;