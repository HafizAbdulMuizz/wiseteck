import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import {
  SoftwareDevColorIcon,
  AIDataColorIcon,
  MarketingColorIcon,
  EcommerceColorIcon,
  DesignVideoColorIcon,
  StartupColorIcon,
} from "@/components/OriginalIcons";

export const metadata = {
  title: "Incubators | WISE-Teck — Education, Incubation & Enterprise",
  description:
    "Explore the six specialized technology and entrepreneurship incubation tracks at WISE-Teck in Lahore, Pakistan.",
};

/*
  WISE-TECK INCUBATORS PAGE
  =========================
  LOCKED 6-SECTION ARCHITECTURE (EXACTLY 6 SECTIONS, NO MORE, NO LESS):
  1. Software Development Incubator
  2. Artificial Intelligence & Data Science Incubator
  3. Digital Marketing Incubator
  4. E-Commerce Incubator
  5. Graphic Design & Video Production Incubator
  6. Startup & Entrepreneurship Incubator

  CONTENT RULE:
  Strictly uses verbatim approved content from the Home page incubator cards.
  Zero invented filler, zero new claims, zero fabricated durations/fees/outcomes.
*/

export default function IncubatorsPage() {
  const incubators = [
    {
      id: "software-development-incubator",
      num: "01",
      title: "Software Development Incubator",
      icon: SoftwareDevColorIcon,
      tagline: "Full-Stack • Mobile • Cloud Microservices",
      description:
        "Equipping developers to engineer enterprise web platforms, native mobile applications, and scalable microservices architectures.",
      bg: "bg-white",
      border: "border-[#E2E8F0]",
      badgeBg: "bg-[#0B1F3A]",
      badgeText: "text-white",
      accentLine: "border-[#0B1F3A]",
    },
    {
      id: "ai-data-science-incubator",
      num: "02",
      title: "Artificial Intelligence & Data Science Incubator",
      icon: AIDataColorIcon,
      tagline: "Machine Learning • Data Analytics • Automation",
      description:
        "Training technical practitioners in production AI modeling, automated data pipelines, predictive intelligence, and commercial integrations.",
      bg: "bg-[#F8FAFC]",
      border: "border-[#E2E8F0]",
      badgeBg: "bg-[#5F2DEE]",
      badgeText: "text-white",
      accentLine: "border-[#5F2DEE]",
    },
    {
      id: "digital-marketing-incubator",
      num: "03",
      title: "Digital Marketing Incubator",
      icon: MarketingColorIcon,
      tagline: "Performance Marketing • SEO • Growth",
      description:
        "Mastering data-driven customer acquisition, conversion optimization, search ranking architecture, and enterprise digital campaigns.",
      bg: "bg-white",
      border: "border-[#E2E8F0]",
      badgeBg: "bg-[#0B1F3A]",
      badgeText: "text-white",
      accentLine: "border-[#0B1F3A]",
    },
    {
      id: "ecommerce-incubator",
      num: "04",
      title: "E-Commerce Incubator",
      icon: EcommerceColorIcon,
      tagline: "Shopify • Multi-Vendor • Global Marketplaces",
      description:
        "Building turnkey commercial storefronts, dropshipping ecosystems, automated inventory synchronization, and digital retail platforms.",
      bg: "bg-[#F8FAFC]",
      border: "border-[#E2E8F0]",
      badgeBg: "bg-[#5F2DEE]",
      badgeText: "text-white",
      accentLine: "border-[#5F2DEE]",
    },
    {
      id: "graphic-design-video-incubator",
      num: "05",
      title: "Graphic Design & Video Production Incubator",
      icon: DesignVideoColorIcon,
      tagline: "UI/UX • Commercial Video • Visual Identity",
      description:
        "Producing high-fidelity UI/UX design systems, commercial video production, interactive motion assets, and brand design collateral.",
      bg: "bg-white",
      border: "border-[#E2E8F0]",
      badgeBg: "bg-[#0B1F3A]",
      badgeText: "text-white",
      accentLine: "border-[#0B1F3A]",
    },
    {
      id: "startup-entrepreneurship-incubator",
      num: "06",
      title: "Startup & Entrepreneurship Incubator",
      icon: StartupColorIcon,
      tagline: "Venture Ideation • Product Validation • Seed Scale",
      description:
        "Guiding student founders through rapid product validation, legal governance, unit economics, investor pitch decks, and commercial launch.",
      bg: "bg-[#F8FAFC]",
      border: "border-[#E2E8F0]",
      badgeBg: "bg-[#FFB347]",
      badgeText: "text-[#0B1F3A]",
      accentLine: "border-[#FFB347]",
      isOutcome: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4F5B6A]">
      {/* Global Minimalist Header Navigation */}
      <Navbar />

      <main className="flex-1">

        {/* ========================================================================= */}
        {/* PAGE HEADER (Standard Framing Band — NOT a numbered section)              */}
        {/* ========================================================================= */}
        <section className="pt-20 pb-14 lg:pt-24 lg:pb-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="max-w-3xl">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                  Applied Physical Practice Labs · Lahore Campus
                </span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1F3A] leading-[1.15] tracking-tight mb-4 [text-wrap:balance]">
                Incubators
              </h1>

              {/* Established One-Line Subtitle */}
              <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
                Six specialized technology and entrepreneurship incubation tracks operating at <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>.
              </p>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EXACT 6 INCUBATOR SECTIONS — SPACIOUS DEDICATED SECTIONS                  */}
        {/* ========================================================================= */}
        {incubators.map((incubator, idx) => {
          const IconComponent = incubator.icon;
          return (
            <section
              key={incubator.id}
              id={incubator.id}
              className={`section-padding ${incubator.bg} border-b ${incubator.border} relative overflow-hidden`}
            >
              <div className="site-container">
                
                {/* Large Editorial Card Container (Matching Shared Left/Right Boundaries) */}
                <div className={`bg-white border ${incubator.isOutcome ? "border-[#FFB347]/60 shadow-sm" : "border-[#E2E8F0]"} rounded-3xl p-8 sm:p-12 lg:p-14 transition-all duration-200`}>
                  
                  {/* Top Track & Badge Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#E2E8F0] mb-10">
                    <div className="flex items-center gap-3">
                      <span className={`w-9 h-9 rounded-xl ${incubator.badgeBg} ${incubator.badgeText} font-extrabold text-sm flex items-center justify-center shrink-0 shadow-2xs`}>
                        {incubator.num}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                        Incubation Track {incubator.num}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {incubator.isOutcome && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F3A] bg-[#FFB347]/20 border border-[#FFB347]/40 px-3 py-1 rounded-full">
                          <Sparkles className="w-3.5 h-3.5 text-[#0B1F3A]" />
                          <span>Venture Convergence</span>
                        </span>
                      )}
                      <span className="text-xs font-semibold text-[#64748B] bg-[#F8FAFC] px-3.5 py-1 rounded-lg border border-[#E2E8F0]">
                        Lahore Campus
                      </span>
                    </div>
                  </div>

                  {/* Main Editorial Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Icon & Primary Branding */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center p-4 mb-6 shadow-2xs">
                        <IconComponent className="w-full h-full" />
                      </div>
                      
                      <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#5F2DEE]/10 border border-[#5F2DEE]/20 text-[#5F2DEE] text-xs font-bold tracking-wide mb-2">
                        {incubator.tagline}
                      </div>
                    </div>

                    {/* Right Column: Title, Description, and Actions */}
                    <div className="lg:col-span-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                          {incubator.title}
                        </h2>

                        <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed mb-8 max-w-3xl [text-wrap:pretty]">
                          {incubator.description}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]">
                          <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0" />
                          <span>Supervised Physical Workstations &amp; Live Industry Practice</span>
                        </div>

                        <Link
                          href="/#contact"
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1F3A] hover:text-[#5F2DEE] transition-colors py-1 group shrink-0"
                        >
                          <span>Inquire for Admission</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#5F2DEE]" />
                        </Link>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </section>
          );
        })}

      </main>

      {/* Global Institutional Footer */}
      <Footer />
    </div>
  );
}
