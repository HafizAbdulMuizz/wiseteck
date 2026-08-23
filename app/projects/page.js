import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Layers } from "lucide-react";

export const metadata = {
  title: "Projects & Portfolio | WISE-Teck — Education, Incubation & Enterprise",
  description:
    "Explore real work delivered across WISE-Teck's incubation labs and corporate technology practice in Lahore, Pakistan.",
};

/*
  WISE-TECK PORTFOLIO / PROJECTS PAGE
  ====================================
  LOCKED 7-SECTION ARCHITECTURE (EXACTLY 7 SECTIONS, NO MORE, NO LESS):
  1. Corporate Projects (Real Content)
  2. Student Projects (Holding Line)
  3. Websites Developed (Real Content)
  4. Mobile Applications (Holding Line)
  5. AI & Data Science Projects (Real Content - Dark Navy Band)
  6. Case Studies (Holding Line)
  7. Client Success Stories (Holding Line)
*/

export default function ProjectsPage() {
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
                  Case Studies &amp; Deliverables · Portfolio
                </span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1F3A] leading-[1.15] tracking-tight mb-4 [text-wrap:balance]">
                Projects
              </h1>

              {/* Established One-Line Subtitle */}
              <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
                Real work delivered across <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>&apos;s incubation and corporate technology practice.
              </p>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1 — CORPORATE PROJECTS (Content-Rich Editorial Section)           */}
        {/* ========================================================================= */}
        <section id="corporate-projects" className="section-padding bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                  Section 1 · Corporate Projects
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1F3A] leading-tight mb-2 [text-wrap:balance]">
                Corporate Projects
              </h2>
            </div>

            {/* Editorial Project Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-xs hover:border-[#CBD5E1] transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual Area (16:9 Container) */}
                <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[280px] lg:min-h-[380px] bg-[#0B1F3A] overflow-hidden">
                  <Image
                    src="/images/projects/academic-portal.jpg"
                    alt="Enterprise Academic & Workflow Management Portal"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-white/10 shadow-sm">
                    Corporate Projects
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#5F2DEE] bg-[#5F2DEE]/10 px-3 py-1 rounded-md mb-3">
                      Web Application &amp; Database System
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-snug mb-4 group-hover:text-[#5F2DEE] transition-colors [text-wrap:balance]">
                      Enterprise Academic &amp; Workflow Management Portal
                    </h3>

                    <p className="text-base text-[#4F5B6A] leading-relaxed mb-8 [text-wrap:pretty]">
                      Centralized student records, attendance automation, and course administration workflows engineered with role-based security.
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Next.js", "PostgreSQL", "Role-Based Access"].map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-semibold bg-[#F8FAFC] text-[#4F5B6A] px-3.5 py-1.5 rounded-lg border border-[#E2E8F0] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Meta Footer */}
                  <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                    <span className="text-slate-500">Production Standard</span>
                    <span className="text-[#5F2DEE] flex items-center gap-1">
                      WISE-Teck Lab
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2 — STUDENT PROJECTS (Structured Holding Section)                 */}
        {/* ========================================================================= */}
        {/* PENDING: no approved content yet — replace with real projects when supplied by client */}
        <section id="student-projects" className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#5F2DEE] text-white font-bold text-xs flex items-center justify-center">
                    02
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE]">
                    Section 2 · Student Projects
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2 [text-wrap:balance]">
                  Student Projects
                </h2>
                <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  Real project work completed by WISE-Teck incubation students as part of their practical training.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-500 bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                <Layers className="w-4 h-4 text-[#5F2DEE]" />
                <span>Incubation Practice Domain</span>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 — WEBSITES DEVELOPED (Content-Rich Editorial Section)           */}
        {/* ========================================================================= */}
        <section id="websites-developed" className="section-padding bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                  Section 3 · Websites Developed
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1F3A] leading-tight mb-2 [text-wrap:balance]">
                Websites Developed
              </h2>
            </div>

            {/* Editorial Project Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-xs hover:border-[#CBD5E1] transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual Area (16:9 Container) */}
                <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[280px] lg:min-h-[380px] bg-[#0B1F3A] overflow-hidden">
                  <Image
                    src="/images/projects/ecommerce-platform.jpg"
                    alt="Commercial Multi-Vendor Retail & E-Commerce Platform"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-white/10 shadow-sm">
                    Websites Developed
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#5F2DEE] bg-[#5F2DEE]/10 px-3 py-1 rounded-md mb-3">
                      Omnichannel Commerce Engine
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-snug mb-4 group-hover:text-[#5F2DEE] transition-colors [text-wrap:balance]">
                      Commercial Multi-Vendor Retail &amp; E-Commerce Platform
                    </h3>

                    <p className="text-base text-[#4F5B6A] leading-relaxed mb-8 [text-wrap:pretty]">
                      High-performance digital storefront integrated with automated inventory tracking, localized checkout, and payment gateway APIs.
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Shopify Liquid", "Payment APIs", "SEO Architecture"].map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-semibold bg-[#F8FAFC] text-[#4F5B6A] px-3.5 py-1.5 rounded-lg border border-[#E2E8F0] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Meta Footer */}
                  <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                    <span className="text-slate-500">Production Standard</span>
                    <span className="text-[#5F2DEE] flex items-center gap-1">
                      WISE-Teck Lab
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 — MOBILE APPLICATIONS (Structured Holding Section)              */}
        {/* ========================================================================= */}
        {/* PENDING: no approved content yet — replace with real projects when supplied by client */}
        <section id="mobile-applications" className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center">
                    04
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                    Section 4 · Mobile Applications
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2 [text-wrap:balance]">
                  Mobile Applications
                </h2>
                <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  Mobile application projects delivered through WISE-Teck&apos;s Software &amp; Web Engineering practice.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-500 bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                <ShieldCheck className="w-4 h-4 text-[#5F2DEE]" />
                <span>iOS &amp; Android Engineering</span>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5 — AI & DATA SCIENCE PROJECTS (Dark Navy Band Section)           */}
        {/* ========================================================================= */}
        <section id="ai-data-science" className="section-padding bg-[#0B1F3A] text-white border-b border-[#163259] relative">
          <div className="site-container">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#FFB347] text-[#0B1F3A] font-extrabold text-xs flex items-center justify-center">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB347]">
                  Section 5 · AI &amp; Data Science Projects
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight mb-2 [text-wrap:balance]">
                AI &amp; Data Science Projects
              </h2>
            </div>

            {/* Editorial Project Card on Dark Theme */}
            <div className="bg-white/5 border border-white/15 rounded-3xl overflow-hidden shadow-lg hover:border-white/25 transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual Area (16:9 Container) */}
                <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[280px] lg:min-h-[380px] bg-[#071527] overflow-hidden">
                  <Image
                    src="/images/projects/analytics-dashboard.jpg"
                    alt="Institutional Performance & Data Analytics Dashboard"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#071527]/90 backdrop-blur-xs text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                    AI &amp; Data Science Projects
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-white">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FFB347] bg-[#FFB347]/15 border border-[#FFB347]/30 px-3 py-1 rounded-md mb-3">
                      Business Intelligence Suite
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-4 group-hover:text-[#FFB347] transition-colors [text-wrap:balance]">
                      Institutional Performance &amp; Data Analytics Dashboard
                    </h3>

                    <p className="text-base text-slate-300 leading-relaxed mb-8 [text-wrap:pretty]">
                      Custom analytics pipelines and interactive reporting tools delivering real-time institutional metrics and KPI tracking.
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Python", "PowerBI / SQL", "Automated Pipelines"].map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-semibold bg-white/10 text-slate-200 px-3.5 py-1.5 rounded-lg border border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Meta Footer */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white">
                    <span className="text-slate-400">Production Standard</span>
                    <span className="text-[#FFB347] flex items-center gap-1">
                      WISE-Teck Lab
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6 — CASE STUDIES (Structured Holding Section)                     */}
        {/* ========================================================================= */}
        {/* PENDING: no approved content yet — replace with real projects when supplied by client */}
        <section id="case-studies" className="py-12 lg:py-14 bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#5F2DEE] text-white font-bold text-xs flex items-center justify-center">
                    06
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE]">
                    Section 6 · Case Studies
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2 [text-wrap:balance]">
                  Case Studies
                </h2>
                <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  Detailed case studies from WISE-Teck&apos;s incubation and corporate technology work.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                <CheckCircle2 className="w-4 h-4 text-[#5F2DEE]" />
                <span>Verified Deliverables</span>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7 — CLIENT SUCCESS STORIES (Structured Holding Section)           */}
        {/* ========================================================================= */}
        {/* PENDING: no approved content yet — replace with real projects when supplied by client */}
        <section id="client-success-stories" className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center">
                    07
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                    Section 7 · Client Success Stories
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2 [text-wrap:balance]">
                  Client Success Stories
                </h2>
                <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  Outcomes and results delivered for WISE-Teck&apos;s corporate technology clients.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-500 bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                <Sparkles className="w-4 h-4 text-[#5F2DEE]" />
                <span>Commercial Impact</span>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Global Institutional Footer */}
      <Footer />
    </div>
  );
}
