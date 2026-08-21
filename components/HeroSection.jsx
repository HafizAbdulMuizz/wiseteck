import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Laptop } from "lucide-react";
import { MicrosoftColorIcon } from "@/components/OriginalIcons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 border-b border-[#E2E8F0]">
      {/* Subtle background structural grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5F2DEE]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                WISE Education Society • Technology & Incubation Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-bold text-[#0B1F3A] leading-[1.16] tracking-tight mb-6 [text-wrap:balance]">
              Transforming Learning into Earning through Technology, Innovation and Entrepreneurship
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed mb-8 max-w-2xl [text-wrap:pretty]">
              <span className="whitespace-nowrap">WISE-Teck</span> connects institutional education with real-world industry execution. 
              We empower learners through specialized skills, physical incubation labs, and direct exposure to live corporate client projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#incubators"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#FFB347] text-[#0B1F3A] font-bold text-base shadow-sm hover:bg-[#FFA21A] transition-colors"
              >
                <span>Join a Program</span>
                <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-white border-2 border-[#0B1F3A] text-[#0B1F3A] font-bold text-base hover:bg-[#0B1F3A]/5 transition-colors"
              >
                <span>Corporate Services</span>
              </a>
            </div>

            {/* Institutional Trust Indicators */}
            <div className="pt-8 border-t border-[#E2E8F0] w-full grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">6</span>
                <span className="text-xs text-[#4F5B6A] font-semibold leading-tight mt-1">Specialized Incubators</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#5F2DEE]">NAVTTC</span>
                <span className="text-xs text-[#4F5B6A] font-semibold leading-tight mt-1">Recognized Partner</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">100%</span>
                <span className="text-xs text-[#4F5B6A] font-semibold leading-tight mt-1">Practical Project Model</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Representation & Institutional Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-9 shadow-sm">
              
              {/* Header inside visual card */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-white font-bold text-xs">
                    WT
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#0B1F3A]"><span className="whitespace-nowrap">WISE-Teck</span> Ecosystem</h2>
                    <p className="text-xs text-[#4F5B6A]">Bridging Education & Enterprise</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#5F2DEE]/10 text-[#5F2DEE]">
                  Lahore, PK
                </span>
              </div>

              {/* Real Classroom & Lab Image */}
              <div className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden border border-[#E2E8F0] mb-6 bg-[#E2E8F0]">
                <Image
                  src="/images/home/computer lab.jpeg"
                  alt="WISE-Teck Modern Computing Lab and Incubation Center"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>

              {/* Structured Key Pillars with Original Colors */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">Academic Foundation to Hands-on Lab</h3>
                    <p className="text-xs text-[#4F5B6A] mt-0.5">Students from ICS, ADP, and Skills programs enter direct incubation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
                  <div className="shrink-0 mt-0.5">
                    <MicrosoftColorIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">Microsoft & NAVTTC Certifications</h3>
                    <p className="text-xs text-[#4F5B6A] mt-0.5">Global examination credentials and live client deliverables.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
                  <Laptop className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">Employment, Freelancing & Entrepreneurship</h3>
                    <p className="text-xs text-[#4F5B6A] mt-0.5">Direct career pathways into software houses, client contracts, and startups.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
