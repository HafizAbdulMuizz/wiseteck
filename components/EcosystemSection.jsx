import React from "react";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";

/**
 * Section 3 — The WISE Ecosystem
 *
 * LOCKED CONTENT (Structure document):
 * - 4 Entities: WISE Support Hub · WISE Educational Hub · WISE Institute of Employability Skills · WISE-Teck Incubation Platform
 * - Journey Flow: WISE Projects → WISE-Teck → Real-Time Projects → Internship → Freelancing → Employment → Entrepreneurship
 * - "WISE Projects" is the confirmed approved term.
 * - "Portfolio" is intentionally absent from this journey.
 *
 * V3 VISUAL REDESIGN:
 * - One unified, large-scale editorial composition (not 4 separate small cards + separate bottom diagram)
 * - Text clipping bug resolved: "Entrepreneurship" and all journey labels render in full with zero clipping across all breakpoints
 * - Clear sub-1024px responsive flow
 */

export default function EcosystemSection() {
  const entities = [
    {
      num: "01",
      name: "WISE Support Hub",
      role: "Career Services & Mentorship",
      desc: "Student guidance layer providing career planning, portfolio reviews, and direct placement coordination.",
    },
    {
      num: "02",
      name: "WISE Educational Hub",
      role: "Academic Foundation",
      desc: "Delivering Intermediate (ICS) and Associate Degree Programs (ADP) as the computational curriculum baseline.",
    },
    {
      num: "03",
      name: "WISE Institute of Employability Skills",
      role: "Vocational & Technical Training",
      desc: "NAVTTC and PSDA accredited practical certifications across high-value coding, data, and digital trades.",
    },
    {
      num: "04",
      name: "WISE-Teck Incubation Platform",
      role: "Commercial Exposure & Enterprise",
      desc: "Physical technology labs, corporate client software delivery, and structured venture mentorship.",
    },
  ];

  const journeySteps = [
    { num: "01", title: "WISE Projects" },
    { num: "02", title: "WISE-Teck" },
    { num: "03", title: "Real-Time Projects" },
    { num: "04", title: "Internship" },
    { num: "05", title: "Freelancing" },
    { num: "06", title: "Employment" },
    { num: "07", title: "Entrepreneurship" },
  ];

  return (
    <section id="ecosystem" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 3 · The Integrated Structure
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            The WISE Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
            Four specialized institutional entities operating in direct synergy — transitioning learners from academic foundation into active commercial industry execution.
          </p>
        </div>

        {/* Unified Editorial Master Panel (Single Composed Idea) */}
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs overflow-hidden">
          
          {/* Top Panel Intro */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-10 border-b border-[#E2E8F0] mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE] mb-1">
                Institutional Framework
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
                Four Synergistic Institutional Pillars
              </h3>
            </div>
            <span className="self-start md:self-auto text-xs font-semibold text-[#0B1F3A] bg-[#F8FAFC] px-4 py-2 rounded-lg border border-[#E2E8F0]">
              WISE Education Society Governance
            </span>
          </div>

          {/* 4 Pillars in a Spacious 2x2 Flow with Generous Measure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
            {entities.map((entity) => (
              <div key={entity.num} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  {entity.num}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                    <h4 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
                      {entity.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#5F2DEE]">
                      • {entity.role}
                    </span>
                  </div>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    {entity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Approved Ecosystem Journey Strip */}
          <div className="bg-[#0B1F3A] rounded-2xl p-8 sm:p-10 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/15 mb-8">
              <h4 className="text-base font-bold text-white tracking-wide">
                Approved Linear Ecosystem Journey
              </h4>
              <span className="text-xs text-slate-300">
                From Initial Intake to Entrepreneurship
              </span>
            </div>

            {/* Desktop & Tablet: Flowing horizontal progression with NO text clipping */}
            <div className="hidden lg:grid grid-cols-7 gap-3 items-start">
              {journeySteps.map((step, idx) => (
                <div key={step.num} className="relative flex flex-col items-center text-center px-1">
                  {/* Step number badge & connector line */}
                  <div className="w-full flex items-center mb-3.5">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold flex items-center justify-center mx-auto shrink-0 shadow-2xs">
                      {step.num}
                    </div>
                  </div>
                  {/* Full label without truncation */}
                  <span className="text-xs font-bold text-white leading-snug break-words w-full px-0.5">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile & Tablet (< 1024px): Clear vertical sequence ensuring full text display */}
            <div className="lg:hidden space-y-3.5">
              {journeySteps.map((step, idx) => (
                <div
                  key={step.num}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/10 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {step.num}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {step.title}
                  </span>
                  {idx < journeySteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/40 ml-auto" />
                  )}
                </div>
              ))}
            </div>

            {/* Institutional note */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFB347]" />
                <span>Verified End-to-End Progression</span>
              </div>
              <span className="text-slate-400">
                Governed by WISE Education Society Board · Lahore, Pakistan
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
