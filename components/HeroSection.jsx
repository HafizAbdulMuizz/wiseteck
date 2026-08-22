import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white border-b border-[#E2E8F0] py-20 lg:py-28"
    >
      {/* Background Image with Controlled Opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/home/medam speech .jpeg"
          alt="WISE-Teck Institutional Foundation & Leadership"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Multi-layer gradient & opacity overlay for maximum text readability and premium institutional look */}
        <div className="absolute inset-0 bg-white/88 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
      </div>

      {/* Subtle background dot-grid texture overlay */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0B1F3A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.04,
        }}
      />

      {/* Centered Content Container */}
      <div className="site-container relative z-10 w-full flex flex-col items-center text-center my-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E2E8F0] bg-white/90 backdrop-blur-sm mb-8 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5F2DEE] shrink-0 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]">
              WISE Education Society · Lahore, Pakistan
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold text-[#0B1F3A] leading-[1.14] tracking-tight mb-6 max-w-3xl [text-wrap:balance]">
            Transforming Learning into Earning through{" "}
            <span className="text-[#5F2DEE]">Technology & Innovation</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#4F5B6A] leading-relaxed mb-10 max-w-2xl [text-wrap:pretty]">
            <span className="whitespace-nowrap font-bold text-[#0B1F3A]">WISE-Teck</span> bridges formal education with commercial execution — empowering learners through six physical incubators, certified technical tracks, and live corporate client engineering.
          </p>

          {/* Centered CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <a
              href="#incubators"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FFB347] text-[#0B1F3A] font-bold text-base hover:bg-[#FFA21A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Join a Program</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/90 backdrop-blur-xs border-2 border-[#0B1F3A] text-[#0B1F3A] font-bold text-base hover:bg-[#0B1F3A] hover:text-white transition-all shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Corporate Services</span>
            </a>
          </div>

          {/* Trust Indicators Strip */}
          <div className="pt-8 border-t border-[#CBD5E1]/60 w-full max-w-2xl grid grid-cols-3 gap-6 sm:gap-10">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">6</span>
              <span className="text-xs text-[#4F5B6A] font-semibold mt-1">Specialized Incubators</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#CBD5E1]/60 px-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#5F2DEE]">NAVTTC</span>
              <span className="text-xs text-[#4F5B6A] font-semibold mt-1">Recognized Partner</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">100%</span>
              <span className="text-xs text-[#4F5B6A] font-semibold mt-1">Practical Project Model</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
