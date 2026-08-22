"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  Rocket, 
  Lightbulb, 
  FolderGit2, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Globe,
  Building2,
  Layers
} from "lucide-react";

/**
 * Section 4 — From Learning to Earning Model (v3 Master Architecture)
 *
 * EXACT 5-STAGE MACRO PROGRESSION:
 * 1. WISE Tech — Applied Skills & Innovation Ecosystem (opening anchor)
 * 2. Innovation & Incubation — Idea Development · Mentorship · Prototype to Product · Startup Support (One wide featured block)
 * 3. Practical Experience — Three parallel tracks:
 *    • Portfolio (Build & showcase your work)
 *    • Internship (Gain workplace exposure)
 *    • Client Projects (Work on real client projects)
 * 4. Career Pathways — Three parallel outcomes:
 *    • Jobs (Get hired by top companies)
 *    • Freelancing (Work with global clients)
 *    • Business (Start & grow your own venture)
 * 5. Economic Independence — Empowered Skills. Meaningful Work. Sustainable Income. (closing outcome)
 *
 * EXPLICITLY CANCELLED:
 * - Skill Academy (Omitted)
 * - Industry & Projects (Omitted)
 * - Further Education (Omitted)
 *
 * TERMINOLOGY LOCKED:
 * - "Jobs" (not Employment)
 * - "Business" (not Entrepreneurship)
 * - "Economic Independence" (not Financial Independence)
 */

export default function LearningToEarningSection() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Progressive reveal of the 5 macro stages
          for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
              setRevealed(i);
            }, i * 220);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      id="model" 
      ref={sectionRef} 
      className="section-padding bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 4 · Core Transformation Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            From Learning to Earning Model
          </h2>
          <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
            A structured, multi-stage progression moving learners from applied technical skills through incubation, verified portfolios, and client execution directly into Economic Independence.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 5-STAGE LARGE-SCALE PROGRESSION (Spacious Editorial Flow — No Dense Dots) */}
        {/* ========================================================================= */}
        <div className="space-y-8 lg:space-y-10 max-w-5xl mx-auto">
          
          {/* ────────────────────────────────────────────────────────── */}
          {/* STAGE 1: Opening Anchor — WISE Tech                        */}
          {/* ────────────────────────────────────────────────────────── */}
          <div 
            className={`transition-all duration-700 ease-out bg-[#F8FAFC] border rounded-3xl p-8 sm:p-10 lg:p-12 ${
              revealed >= 1 
                ? "border-[#CBD5E1] shadow-xs translate-y-0 opacity-100" 
                : "border-[#E2E8F0] translate-y-4 opacity-50"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                  01
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE] block mb-1">
                    Stage 01 · Opening Foundation Anchor
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">
                    WISE Tech
                  </h3>
                  <p className="text-base font-semibold text-[#0B1F3A] mt-1">
                    Applied Skills & Innovation Ecosystem
                  </p>
                </div>
              </div>
              <div className="self-start md:self-auto bg-white border border-[#E2E8F0] px-5 py-2.5 rounded-xl text-xs font-bold text-[#0B1F3A]">
                Intake Gateway
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed mt-6 max-w-3xl [text-wrap:pretty]">
              Students enter directly into applied computational disciplines, practical programming labs, and market-aligned technical coursework designed for commercial readiness.
            </p>
          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* STAGE 2: Innovation & Incubation (Wide Featured Block)     */}
          {/* ────────────────────────────────────────────────────────── */}
          <div 
            className={`transition-all duration-700 ease-out bg-white border-2 rounded-3xl p-8 sm:p-10 lg:p-12 ${
              revealed >= 2 
                ? "border-[#5F2DEE]/35 shadow-sm translate-y-0 opacity-100" 
                : "border-[#E2E8F0] translate-y-4 opacity-50"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] mb-8">
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#5F2DEE] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                  02
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE] block mb-1">
                    Stage 02 · Incubation Core
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">
                    Innovation & Incubation
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-[#5F2DEE] bg-[#5F2DEE]/10 px-4 py-2 rounded-xl self-start md:self-auto">
                Dedicated Physical Labs
              </span>
            </div>

            {/* 4 Pillars of Stage 2 (Idea Development · Mentorship · Prototype to Product · Startup Support) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#5F2DEE] mb-3.5 shadow-2xs">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B1F3A] mb-1">Idea Development</h4>
                <p className="text-xs text-[#4F5B6A] leading-relaxed">
                  Refining concepts, technical architecture, and market feasibility.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#5F2DEE] mb-3.5 shadow-2xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B1F3A] mb-1">Mentorship</h4>
                <p className="text-xs text-[#4F5B6A] leading-relaxed">
                  Direct guidance from senior industry engineers and technical leads.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#5F2DEE] mb-3.5 shadow-2xs">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B1F3A] mb-1">Prototype to Product</h4>
                <p className="text-xs text-[#4F5B6A] leading-relaxed">
                  Building production codebases, automated tests, and MVP platforms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#5F2DEE] mb-3.5 shadow-2xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B1F3A] mb-1">Startup Support</h4>
                <p className="text-xs text-[#4F5B6A] leading-relaxed">
                  Entity formation, legal structuring, and venture readiness backing.
                </p>
              </div>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* STAGE 3: Practical Experience (3 Parallel Tracks)          */}
          {/* ────────────────────────────────────────────────────────── */}
          <div 
            className={`transition-all duration-700 ease-out bg-[#F8FAFC] border rounded-3xl p-8 sm:p-10 lg:p-12 ${
              revealed >= 3 
                ? "border-[#CBD5E1] shadow-xs translate-y-0 opacity-100" 
                : "border-[#E2E8F0] translate-y-4 opacity-50"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] mb-8">
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                  03
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE] block mb-1">
                    Stage 03 · Execution Layer
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">
                    Practical Experience
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-[#0B1F3A] bg-white border border-[#E2E8F0] px-4 py-2 rounded-xl self-start md:self-auto">
                3 Parallel Execution Tracks
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Track 1: Portfolio */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between hover:border-[#5F2DEE]/40 transition-colors">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#5F2DEE]/10 text-[#5F2DEE] flex items-center justify-center mb-4">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1F3A] mb-1">Portfolio</h4>
                  <p className="text-xs font-semibold text-[#5F2DEE] mb-3">Build & showcase your work</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Developing verified GitHub repositories, live software deployments, and client case studies proving commercial technical capability.
                  </p>
                </div>
              </div>

              {/* Track 2: Internship */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between hover:border-[#5F2DEE]/40 transition-colors">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#0B1F3A]/10 text-[#0B1F3A] flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1F3A] mb-1">Internship</h4>
                  <p className="text-xs font-semibold text-[#0B1F3A] mb-3">Gain workplace exposure</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Supervised team participation in Agile sprints, code review cycles, client standups, and structured enterprise delivery environments.
                  </p>
                </div>
              </div>

              {/* Track 3: Client Projects */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between hover:border-[#5F2DEE]/40 transition-colors">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FFB347]/20 text-[#0B1F3A] flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-[#0B1F3A]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1F3A] mb-1">Client Projects</h4>
                  <p className="text-xs font-semibold text-[#0B1F3A] mb-3">Work on real client projects</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Direct execution of commercial client deliverables under senior practitioner oversight, producing billable industry software assets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* STAGE 4: Career Pathways (Jobs · Freelancing · Business)   */}
          {/* ────────────────────────────────────────────────────────── */}
          <div 
            className={`transition-all duration-700 ease-out bg-white border-2 rounded-3xl p-8 sm:p-10 lg:p-12 ${
              revealed >= 4 
                ? "border-[#0B1F3A]/30 shadow-sm translate-y-0 opacity-100" 
                : "border-[#E2E8F0] translate-y-4 opacity-50"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] mb-8">
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                  04
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] block mb-1">
                    Stage 04 · Earning Realization
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">
                    Career Pathways
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-[#0B1F3A] bg-[#F1F5F9] px-4 py-2 rounded-xl self-start md:self-auto border border-[#E2E8F0]">
                3 Parallel Commercial Outcomes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Outcome 1: Jobs */}
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] bg-white px-3 py-1 rounded-md border border-[#E2E8F0] inline-block mb-4">
                    Pathway A
                  </span>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-1">Jobs</h4>
                  <p className="text-xs font-semibold text-[#5F2DEE] mb-3">Get hired by top companies</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Formal employment placement in software houses, technology consulting firms, and enterprise IT departments nationally and globally.
                  </p>
                </div>
              </div>

              {/* Outcome 2: Freelancing */}
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] bg-white px-3 py-1 rounded-md border border-[#E2E8F0] inline-block mb-4">
                    Pathway B
                  </span>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-1">Freelancing</h4>
                  <p className="text-xs font-semibold text-[#5F2DEE] mb-3">Work with global clients</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    High-ticket independent contracting, international freelance client acquisition, and cross-border digital service delivery.
                  </p>
                </div>
              </div>

              {/* Outcome 3: Business */}
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] bg-white px-3 py-1 rounded-md border border-[#E2E8F0] inline-block mb-4">
                    Pathway C
                  </span>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-1">Business</h4>
                  <p className="text-xs font-semibold text-[#5F2DEE] mb-3">Start & grow your own venture</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Commercial agency foundation, product company launch, and scalable technology startups backed by WISE-Teck incubation resources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* STAGE 5: Closing Outcome — Economic Independence           */}
          {/* ────────────────────────────────────────────────────────── */}
          <div 
            className={`transition-all duration-700 ease-out bg-[#0B1F3A] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-md ${
              revealed >= 5 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-50"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/15 mb-8">
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FFB347] text-[#0B1F3A] flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                  05
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FFB347] block mb-1">
                    Stage 05 · The Definitive Outcome
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    Economic Independence
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white self-start md:self-auto">
                <CheckCircle2 className="w-4 h-4 text-[#FFB347]" />
                <span>The Final Objective</span>
              </div>
            </div>

            {/* 3 Outcome Pillars: Empowered Skills. Meaningful Work. Sustainable Income. */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-[#FFB347] block mb-1">Pillar I</span>
                <h4 className="text-lg font-bold text-white mb-2">Empowered Skills</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Mastery of high-value computational tools and verified practical execution.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-[#FFB347] block mb-1">Pillar II</span>
                <h4 className="text-lg font-bold text-white mb-2">Meaningful Work</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Engagement on high-impact software products and commercial enterprise contracts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-[#FFB347] block mb-1">Pillar III</span>
                <h4 className="text-lg font-bold text-white mb-2">Sustainable Income</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Long-term financial autonomy through salaried jobs, freelancing, and venture equity.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
