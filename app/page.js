"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // TODO: Replace with actual call to Django backend
  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    setErr("");

    // Simulate API call
    setTimeout(() => {
      if (form.email && form.password) {
        router.push("/about");
      } else {
        setErr("Invalid credentials");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src="/a.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Login Box */}
      <div className="relative z-10 p-8 max-w-md w-full bg-white/10 shadow-xl rounded-2xl backdrop-blur flex flex-col items-center">
        <p className="text-3xl font-bold text-center text-white mb-4">Welcome to</p>
        <h1 className="mb-2 text-5xl font-extrabold text-center bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#FFFFFF] 
        bg-clip-text text-transparent animate-gradient">GroupSence</h1>
        
        <p className="text-lg text-center text-gray-200 mb-8">A Blood Group Detection Platform</p>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input
            className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-200 outline-none"
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="username"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-200 outline-none"
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {err && <div className="text-red-400 text-sm">{err}</div>}
          <button
            type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 rounded-lg py-3 text-white font-semibold cursor-pointer transition disabled:opacity-60"
            disabled={loading}>{loading ? "Logging in..." : "Login"}
          </button>

        </form>
        <div className="mt-5 text-gray-200 text-sm">
          New user?{" "}
          <Link href="/signup">
            <span className="text-blue-300 font-bold underline cursor-pointer hover:text-red-600">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
