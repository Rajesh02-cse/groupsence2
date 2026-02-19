"use client";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/footer";

export default function Main() {
  const [scanResult, setScanResult] = useState("");
  const [scanning, setScanning] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 1, height: 1 });

  const handleScan = () => {
    if (scanning || !uploadedImage) return;
    setScanning(true);
    setScanResult("");

    setTimeout(() => {
      setScanResult("Blood Group: O+ (example)");
      setScanning(false);
    }, 5000);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setScanResult("");

      // ✅ DYNAMIC ASPECT RATIO - NO BLUR
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.naturalHeight / img.naturalWidth;
        const maxWidth = 200;
        const maxHeight = 350;
        const width = Math.min(maxWidth, img.naturalWidth);
        const height = width * aspectRatio;
        
        setImageDimensions({ width, height });
      };
      img.src = imageUrl;
    }
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
        <div className="flex flex-col items-center gap-6 max-w-lg w-full bg-white/10 rounded-2xl border border-white/20 shadow-2xl px-6 py-12 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400 text-center">
            Starting....
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-md">
            Ready to know your Blood group
          </p>

          {/* Upload attachment button */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3 text-center select-none transition duration-300"
          >
            Upload Fingerprint Image
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* ✅ SCAN BUTTON - CRISP IMAGE + DYNAMIC SIZE */}
          {scanResult ? (
            null
          ) : (
            uploadedImage && (
              <button
                onClick={handleScan}
                disabled={scanning}
                style={{
                  width: `${imageDimensions.width}px`,
                  height: `${imageDimensions.height}px`,
                  minWidth: '120px',
                  minHeight: '200px'
                }}
                className="relative rounded-xl overflow-hidden outline-none border-none cursor-pointer disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-500 transition-all duration-200 mt-4 shadow-2xl"
              >
                {!scanning ? (
                  <img
                    src={uploadedImage}
                    alt="Fingerprint for scanning"
                    className="absolute inset-0 w-full h-full object-contain"  // ✅ object-contain = NO BLUR
                  />
                ) : (
                  <>
                    <video
                      src="/c.mp4"
                      autoPlay
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </>
                )}
                <span className="relative z-10 flex items-center justify-center h-full text-white font-extrabold text-xl sm:text-2xl select-none whitespace-pre-line bg-black/50 px-3 py-2 rounded-lg">
                  {scanning ? "Scanning" : "Scan\nFingerprint"}
                </span>
              </button>
            )
          )}

          {/* ✅ RESULT - CRISP UPLOADED IMAGE + RESULT */}
          {scanResult && uploadedImage && (
            <div className="flex flex-col items-center gap-4 w-full mt-6 p-6 bg-black/40 rounded-2xl backdrop-blur-xl border border-white/20">
              {/* Uploaded Image - CRISP */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={uploadedImage}
                  alt="Analyzed fingerprint"
                  style={{
                    width: `${Math.min(imageDimensions.width, 180)}px`,
                    height: `${Math.min(imageDimensions.height * (180/imageDimensions.width), 320)}px`
                  }}
                  className="rounded-xl border-4 border-green-400 shadow-2xl object-contain"  // ✅ object-contain = NO BLUR
                />
                <div className="text-green-300 text-2xl sm:text-3xl font-black text-center bg-black/70 px-6 py-4 rounded-xl shadow-lg select-none">
                  {scanResult}
                </div>
              </div>
              <p className="text-white/80 text-sm sm:text-base text-center">
                Analysis complete! Your blood group has been detected.
              </p>
            </div>
          )}
        </div>

        {/* Extra spacing for natural scroll */}
        <div className="h-16"></div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
