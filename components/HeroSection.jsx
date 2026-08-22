import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#071527] text-white py-20 lg:py-28"
    >
      {/* Real Leadership Background Image — Clear, Rich, and Highly Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/home/medam-speech.jpeg"
          alt="WISE-Teck Institutional Foundation & Leadership"
          fill
          priority
          className="object-cover object-center opacity-85 scale-100"
          sizes="100vw"
        />
        {/* Balanced cinematic gradient overlay — ensures crisp readability without any milky white haze */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071527] via-[#0B1F3A]/65 to-[#071527]/85" />
        <div className="absolute inset-0 bg-[#0B1F3A]/30 backdrop-blur-[0.5px]" />
      </div>

      {/* Centered Content Container */}
      <div className="site-container relative z-10 w-full flex flex-col items-center text-center my-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB347] shrink-0 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/90">
              WISE Education Society · Lahore, Pakistan
            </span>
          </div>

          {/* Main Headline — Strictly 1 to 2 lines */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.16] tracking-tight mb-6 max-w-4xl [text-wrap:balance] drop-shadow-sm">
            Transforming Learning into Earning through <span className="text-[#FFB347]">Technology & Innovation</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl [text-wrap:pretty] drop-shadow-xs">
            <span className="whitespace-nowrap font-bold text-white">WISE-Teck</span> connects formal education with commercial enterprise — empowering learners through six physical incubators, certified technical tracks, and live corporate client engineering.
          </p>

          {/* Centered CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <a
              href="#incubators"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FFB347] text-[#0B1F3A] font-bold text-base hover:bg-[#FFA21A] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Join a Program</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-base hover:bg-white hover:text-[#0B1F3A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Corporate Services</span>
            </a>
          </div>

          {/* Trust Indicators Strip */}
          <div className="pt-8 border-t border-white/20 w-full max-w-2xl grid grid-cols-3 gap-4 sm:gap-8 text-white">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">6</span>
              <span className="text-xs text-slate-300 font-semibold mt-1">Specialized Incubators</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/20 px-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FFB347]">NAVTTC</span>
              <span className="text-xs text-slate-300 font-semibold mt-1">Recognized Partner</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">100%</span>
              <span className="text-xs text-slate-300 font-semibold mt-1">Practical Project Model</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
