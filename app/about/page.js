"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "../components/footer";

export default function About() {
  const router = useRouter();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem('termsAccepted', 'true');
    setTimeout(() => {
      router.push("/main");
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Transparent Logout Button - Top Right */}
      <button 
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        className="fixed top-6 right-6 z-50 bg-black/70 hover:bg-white/20 backdrop-blur-xl text-white px-6 py-3 rounded-full font-bold shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
      >
        Logout
      </button>
      
      {/* Glassy Responsive Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 z-50 h-20 flex items-center justify-center px-6 sm:px-8 shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#ffffff] bg-clip-text text-transparent select-none tracking-wide">
          GroupSence
        </h1>
      </nav>

      {/* Background video */}
      <video
        src="/d.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* SCROLLABLE MAIN CONTENT */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 px-4 pb-24">
        
        {/* ✅ SINGLE FULL-WIDTH TEXT BOX - HORIZONTALLY STRETCHED */}
        <div className="w-full max-w-4xl bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl px-8 py-12 mb-12">
          
          {/* Title - Centered */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-2xl text-center leading-tight mb-8">
            Know Your Blood Group — Quickly & Easily
          </h1>

          {/* ✅ ALL TEXT CONTENT - ONE BIG HORIZONTAL BOX */}
          <div className="w-full bg-white/10 backdrop-blur-xl rounded-xl border border-white/30 p-8 sm:p-10 shadow-xl space-y-6 text-white text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>
              Your fingerprint is more than just a unique identity marker. Research suggests that certain fingerprint patterns—such as <strong>loops, whorls, ridge density, and minutiae points</strong>—may show correlations with genetic traits, including blood group.
            </p>
            
            <p>
              Since both fingerprints and blood types are influenced by inherited biological factors, advanced <strong>image processing and AI models</strong> can analyze these microscopic ridge features to estimate a likely blood group.
            </p>
            
            <p>
              Our platform uses this concept to provide a smart, <strong>non-invasive</strong> way to predict your blood type. Simply upload a clear fingerprint image, and our system studies the pattern details to generate results within seconds.
            </p>
            
            <p className="text-sm italic text-gray-300">
              <em>No needles. No lab visits. Just a fast, digital solution designed for Awareness, Research, and Emergency readiness.</em>
            </p>
            
            <p className="text-xs sm:text-sm text-yellow-300 bg-yellow-900/50 p-4 rounded-lg border border-yellow-500/50">
              <strong>*For medical treatments or blood transfusions, always confirm with a certified laboratory test.*</strong>
            </p>
          </div>

          {/* Checkbox + Button - Bottom of same box */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 p-8 bg-black/30 rounded-2xl backdrop-blur-xl border border-white/20">
            <label className="flex items-center gap-3 cursor-pointer group p-4 rounded-xl hover:bg-black/20 transition-all flex-1 justify-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-6 h-6 text-blue-400 bg-white/20 backdrop-blur-sm rounded border-2 border-white/50 focus:ring-2 focus:ring-blue-400 transition-all group-hover:scale-110"
                required
              />
              <span className="text-lg text-white font-medium">Accept Terms & Privacy Policy</span>
            </label>
            
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!termsAccepted || loading}
              className="flex-1 max-w-md bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#ffffff10] hover:from-red-600 hover:via-blue-600 hover:to-white/20 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/30 backdrop-blur-sm"
            >
              {loading ? "Loading..." : "Continue to Scanner"}
            </button>
          </div>
        </div>

        {/* Extra spacing for natural scroll */}
        <div className="h-16"></div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
