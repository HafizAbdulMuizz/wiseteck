import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white border-b border-[#E2E8F0]"
    >
      {/* Subtle dot-grid background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#E2E8F0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[88vh] items-center">

          {/* ── Left column: headline + CTAs ── */}
          <div className="py-20 lg:py-28 pr-0 lg:pr-16 xl:pr-24 flex flex-col items-start">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                WISE Education Society · Lahore
              </span>
            </div>

            {/* Main headline — max 2 lines */}
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-bold text-[#0B1F3A] leading-[1.12] tracking-tight mb-6 max-w-[18ch]">
              From Learning<br className="hidden sm:block" /> to Earning —<br className="hidden sm:block" />{" "}
              <span className="text-[#5F2DEE]">Technology</span> that Works.
            </h1>

            {/* Supporting copy */}
            <p className="text-lg text-[#4F5B6A] leading-relaxed mb-10 max-w-[42ch]">
              <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span> is the incubation, skills development, and professional technology services platform of WISE Education Society — bridging education and enterprise.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#incubators"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#FFB347] text-[#0B1F3A] font-bold text-base hover:bg-[#FFA21A] transition-colors shadow-sm"
              >
                Join a Program
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border-2 border-[#0B1F3A] text-[#0B1F3A] font-bold text-base hover:bg-[#0B1F3A] hover:text-white transition-colors"
              >
                Corporate Services
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-14 pt-8 border-t border-[#E2E8F0] flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <span className="block text-2xl font-extrabold text-[#0B1F3A]">6</span>
                <span className="text-[#4F5B6A] font-medium">Technology Incubators</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#5F2DEE]">NAVTTC</span>
                <span className="text-[#4F5B6A] font-medium">Affiliated Training</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#0B1F3A]">11</span>
                <span className="text-[#4F5B6A] font-medium">Corporate Services</span>
              </div>
            </div>
          </div>

          {/* ── Right column: primary image ── */}
          <div className="hidden lg:flex items-stretch self-stretch">
            <div className="relative w-full min-h-[560px] overflow-hidden">
              <Image
                src="/images/home/computer lab.jpeg"
                alt="WISE-Teck technology incubation lab, Lahore"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
              {/* Fade edge toward left */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
              {/* Institutional label */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm border border-[#E2E8F0] rounded-xl px-5 py-3 shadow-sm max-w-[280px]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-0.5">
                  WISE-Teck Incubation Center
                </p>
                <p className="text-xs text-[#4F5B6A]">
                  48-Main Gulberg, Lahore — Active since 2020
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
