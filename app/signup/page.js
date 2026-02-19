"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", age: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // TODO: Replace with actual call to Django backend
  const handleSignup = async e => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    setSuccess("");
    setTimeout(() => {
      if (form.name && form.age && form.email && form.password) {
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => router.push("/"), 1300);
      } else {
        setErr("All fields are required");
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900 relative">
      {/* Background Video + semi-transparent overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      >
        <source src="/a.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur"></div>
      {/* Centered Signup Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow">Create Account</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            className="px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
          <input
            type="number"
            min={1}
            max={150}
            name="age"
            className="px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-blue-400 w-full transition pr-12"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-200 hover:text-blue-400 focus-visible:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <RiEyeOffFill size={22} />
              ) : (
                <RiEyeFill size={22} />
              )}
            </button>
          </div>
          {err && <div className="text-red-400 text-sm text-center">{err}</div>}
          {success && <div className="text-green-300 text-sm text-center">{success}</div>}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 rounded-xl py-3 text-white font-bold shadow-lg focus:ring-2 focus:ring-white text-lg transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <button
            className="block w-full mt-6 text-blue-300 underline rounded-xl py-2 hover:text-red-500 text-sm transition cursor-pointer"
            onClick={() => router.push("/")}>Already have an account? <span className="font-medium">Log In</span>
        </button>
      </div>
    </main>
  );
}
