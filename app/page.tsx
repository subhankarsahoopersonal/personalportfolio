"use client";

import React, { useState, useEffect } from "react";

export default function ComingSoon() {
  const [bootStep, setBootStep] = useState(0);
  const [isBooting, setIsBooting] = useState(false);

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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg leading-tight">
            Subhankar<br />Sahoo
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-12 max-w-lg">
            Crafting the next generation of AI & ML web experiences.
          </h2>

          {/* Execution Control / Terminal */}
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
            <div className="w-full max-w-lg text-left">
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
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
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
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 z-20 m-4 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 z-20 m-4 opacity-50"></div>
          </div>
        </div>

      </div>
    </div>
  );
}