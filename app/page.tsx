"use client";

import React, { useState, useEffect } from "react";

export default function ComingSoon() {
  const [bootStep, setBootStep] = useState(0);
  const [isBooting, setIsBooting] = useState(false);

  // === NEW: SPOTLIGHT STATE ===
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // === NEW: TRACK CURSOR GLOBALLY ===
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Boot Sequence Logic
  useEffect(() => {
    if (!isBooting) return;

    const sequence = [
      setTimeout(() => setBootStep(1), 800),
      setTimeout(() => setBootStep(2), 2000),
      setTimeout(() => setBootStep(3), 3500),
      setTimeout(() => setBootStep(4), 5000),
    ];

    return () => sequence.forEach(clearTimeout);
  }, [isBooting]);

  const handleBoot = () => {
    setIsBooting(true);
    setBootStep(0);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 text-white selection:bg-cyan-500/30 font-sans p-6 md:p-12">

      {/* === NEW: THE INTERACTIVE SPOTLIGHT === */}
      {/* This invisible div sits over the entire screen and moves a subtle glow with the cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.08), transparent 40%)`
        }}
      />
      {/* ======================================= */}

      {/* Vibrant Ambient Gradient Orbs */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-0 -left-10 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 -right-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute -bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Engineering Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Two-Column Layout Wrapper */}
      <div className="z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 lg:gap-20">

        {/* === LEFT COLUMN: TEXT & TERMINAL === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">

          {/* Network Status Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            System Initialization Active
          </div>

          {/* Hero Typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg leading-tight relative z-40">
            Subhankar<br />Sahoo
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-10 max-w-lg relative z-40">
            Crafting the next generation of AI & ML web experiences.
          </h2>

          {/* Recruiter Dock & Boot Button Row */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 w-full justify-center lg:justify-start relative z-40">

            {!isBooting ? (
              <button
                onClick={handleBoot}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-200 bg-slate-900 border border-slate-700 rounded-xl hover:bg-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] focus:outline-none"
              >
                Trigger System Boot
                <svg className="w-5 h-5 ml-3 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </button>
            ) : (
              <div className="px-8 py-4 font-mono text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 rounded-xl flex items-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Compiling...
              </div>
            )}

            {/* The Glassmorphism Dock */}
            <div className="flex items-center gap-4 px-6 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
              <a href="https://github.com/subhankarsahoopersonal" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" title="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" title="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="mailto:your-email@example.com" className="text-slate-400 hover:text-rose-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" title="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* =========================================== */}

          {/* Terminal Box (Only shows when booting) */}
          {isBooting && (
            <div className="w-full max-w-lg text-left mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-40">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-t border-x border-slate-700 rounded-t-lg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="text-xs font-mono text-slate-500">terminal_init.sh</div>
              </div>

              <div className="p-4 bg-black/80 border border-slate-700 rounded-b-lg font-mono text-sm shadow-2xl backdrop-blur-sm min-h-[160px]">
                <div className="text-slate-300 mb-2">
                  <span className="text-emerald-400">root@subhankar</span>:<span className="text-blue-400">~</span>$ ./boot_portfolio.sh
                </div>

                {bootStep >= 1 && (
                  <div className="text-slate-400 mb-1">
                    <span className="text-cyan-500 mr-2">›</span> Establishing secure connection... <span className="text-emerald-500 ml-2">[OK]</span>
                  </div>
                )}

                {bootStep >= 2 && (
                  <div className="text-slate-400 mb-1">
                    <span className="text-cyan-500 mr-2">›</span> Loading AttenDo mobile dependencies... <span className="text-emerald-500 ml-2">[OK]</span>
                  </div>
                )}

                {bootStep >= 3 && (
                  <div className="text-slate-400 mb-1">
                    <span className="text-cyan-500 mr-2">›</span> Initializing Personal Finance Suite... <span className="text-emerald-500 ml-2">[OK]</span>
                  </div>
                )}

                {bootStep >= 4 && (
                  <div className="mt-4 text-cyan-400 animate-pulse">
                    <span>_</span> Full deployment compiling. Please return shortly.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* === RIGHT COLUMN: COMPLETE PHOTO === */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-40">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl border border-slate-700 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] group">

            {/* Subtle inner glow behind the image */}
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Your Complete Photo */}
            <img
              src="/myphoto.jpg"
              alt="Subhankar Sahoo"
              className="relative z-10 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />

            {/* Futuristic overlay lines on the image corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 z-30 m-4 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 z-30 m-4 opacity-50"></div>
          </div>
        </div>

      </div>
    </div>
  );
}