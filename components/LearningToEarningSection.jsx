"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Section 4 — From Learning to Earning Model
 *
 * LOCKED 9-STAGE SEQUENCE (from approved Profile document — do NOT merge with Section 3):
 * Education → Skills Training → Practical Projects → Portfolio Development →
 * Internships → Freelancing → Employment → Entrepreneurship → Financial Independence
 *
 * This is a SEPARATE sequence from the Ecosystem journey in Section 3.
 * "Portfolio Development" belongs HERE and is required.
 * "Financial Independence" belongs HERE and is required.
 */

const STAGES = [
  {
    id: 1,
    label: "Education",
    sub: "Academic Foundation",
    detail: "ICS, ADP, and formal computational curriculum at WISE Educational Hub.",
    phase: "foundation",
  },
  {
    id: 2,
    label: "Skills Training",
    sub: "Industry Certification",
    detail: "NAVTTC-accredited technical programs in software, data, design, and digital trades.",
    phase: "foundation",
  },
  {
    id: 3,
    label: "Practical Projects",
    sub: "Hands-on Sprints",
    detail: "Building real production software from the first day inside WISE-Teck incubation labs.",
    phase: "incubation",
  },
  {
    id: 4,
    label: "Portfolio Development",
    sub: "Verified Work History",
    detail: "Curated GitHub repositories, case studies, and client deliverables that prove commercial capability.",
    phase: "incubation",
  },
  {
    id: 5,
    label: "Internships",
    sub: "Supervised Teams",
    detail: "Real team workflow, Agile sprints, code reviews, and professional accountability under senior leads.",
    phase: "incubation",
  },
  {
    id: 6,
    label: "Freelancing",
    sub: "Independent Earning",
    detail: "Direct client acquisition, proposal writing, and high-ticket project delivery on global platforms.",
    phase: "earning",
  },
  {
    id: 7,
    label: "Employment",
    sub: "Industry Placement",
    detail: "Structured placement into software houses and enterprise technology companies nationally and internationally.",
    phase: "earning",
  },
  {
    id: 8,
    label: "Entrepreneurship",
    sub: "Startup & Ventures",
    detail: "Founding technology ventures, product companies, and commercial digital agencies backed by real skills.",
    phase: "earning",
  },
  {
    id: 9,
    label: "Financial Independence",
    sub: "The Ultimate Outcome",
    detail: "Sustainable income, professional credibility, and the autonomy to build, work, or lead on your own terms.",
    phase: "outcome",
  },
];

const PHASE_COLORS = {
  foundation: { bg: "bg-[#0B1F3A]", border: "border-[#0B1F3A]", text: "text-white" },
  incubation: { bg: "bg-[#5F2DEE]", border: "border-[#5F2DEE]", text: "text-white" },
  earning: { bg: "bg-[#0B1F3A]/80", border: "border-[#0B1F3A]", text: "text-white" },
  outcome: { bg: "bg-[#FFB347]", border: "border-[#FFB347]", text: "text-[#0B1F3A]" },
};

const PHASE_LABELS = {
  foundation: "Foundation",
  incubation: "WISE-Teck Incubation",
  earning: "Earning",
  outcome: "Outcome",
};

export default function LearningToEarningSection() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          STAGES.forEach((_, i) => {
            setTimeout(() => setRevealed(i + 1), i * 220 + 300);
          });
        }
      },
      { threshold: 0.18 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="model"
      ref={sectionRef}
      className="section-padding bg-white border-b border-[#E2E8F0]"
    >
      <div className="site-container">

        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 4 · Core Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4">
            From Learning to Earning
          </h2>
          <p className="text-lg text-[#4F5B6A] leading-relaxed max-w-[52ch]">
            Our nine-stage progression framework — the structured path from academic intake to financial independence through employment, freelancing, and entrepreneurship.
          </p>
        </div>

        {/* ── Desktop: large horizontal timeline (scroll-animated, non-looping) ── */}
        <div className="hidden lg:block">
          {/* Phase legend */}
          <div className="flex flex-wrap gap-4 mb-8">
            {Object.entries(PHASE_LABELS).map(([key, label]) => {
              const col = PHASE_COLORS[key];
              return (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${col.bg}`} />
                  <span className="text-xs font-semibold text-[#4F5B6A]">{label}</span>
                </div>
              );
            })}
          </div>

          {/* Stage track */}
          <div className="relative">
            {/* Base track line */}
            <div className="absolute top-5 left-5 right-5 h-[3px] bg-[#E2E8F0] rounded-full z-0" />
            {/* Animated progress fill */}
            <div
              className="absolute top-5 left-5 h-[3px] rounded-full z-0 transition-all duration-300 ease-out"
              style={{
                width: revealed === 0 ? "0%" : `${((revealed - 1) / (STAGES.length - 1)) * 100}%`,
                background: "linear-gradient(90deg, #0B1F3A 0%, #5F2DEE 55%, #FFB347 100%)",
              }}
            />

            {/* Nodes */}
            <div className="relative z-10 grid grid-cols-9 gap-2">
              {STAGES.map((stage) => {
                const isActive = revealed >= stage.id;
                const col = PHASE_COLORS[stage.phase];
                return (
                  <div key={stage.id} className="flex flex-col items-center gap-3">
                    {/* Node circle */}
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? `${col.bg} ${col.border} ${col.text} shadow-md scale-110`
                          : "bg-white border-[#E2E8F0] text-[#94A3B8]"
                      }`}
                    >
                      <span className="text-[10px] font-bold tabular-nums">
                        {String(stage.id).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Label */}
                    <div className="text-center">
                      <p
                        className={`text-xs font-bold leading-snug transition-colors duration-300 min-h-[2rem] flex items-center justify-center text-center ${
                          isActive ? "text-[#0B1F3A]" : "text-[#94A3B8]"
                        }`}
                      >
                        {stage.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stage detail cards — 3 per row */}
          <div className="mt-14 grid grid-cols-3 gap-6">
            {/* Foundation */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8">
              <div className="w-2 h-6 rounded-full bg-[#0B1F3A] mb-4" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">Stages 01–02</p>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">Foundation & Skills</h3>
              <p className="text-sm text-[#4F5B6A] leading-relaxed">
                Academic credentials combined with high-demand technical certifications give learners the baseline to enter incubation with confidence.
              </p>
            </div>
            {/* Incubation */}
            <div className="bg-[#F8FAFC] border-2 border-[#5F2DEE]/25 rounded-2xl p-8">
              <div className="w-2 h-6 rounded-full bg-[#5F2DEE] mb-4" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE] mb-1">Stages 03–05</p>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">
                <span className="whitespace-nowrap">WISE-Teck</span> Incubation
              </h3>
              <p className="text-sm text-[#4F5B6A] leading-relaxed">
                Practical projects, portfolio development, and structured internships inside our six specialized labs — turning learning into verified, sellable work history.
              </p>
            </div>
            {/* Earning */}
            <div className="bg-[#0B1F3A] rounded-2xl p-8">
              <div className="w-2 h-6 rounded-full bg-[#FFB347] mb-4" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#FFB347] mb-1">Stages 06–09</p>
              <h3 className="text-lg font-bold text-white mb-3">Earning & Independence</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Three parallel commercial pathways — each a viable, proven route out of the program:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Freelancing", "Employment", "Entrepreneurship"].map((tag) => (
                  <span key={tag} className="text-xs font-bold bg-white/10 text-white px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile (< 1024px): vertical step list ── */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical track line */}
            <div className="absolute top-4 bottom-4 left-[18px] w-[3px] bg-[#E2E8F0] rounded-full" />
            {/* Animated fill */}
            <div
              className="absolute top-4 left-[18px] w-[3px] rounded-full transition-all duration-500 ease-out"
              style={{
                height: revealed === 0 ? "0%" : `${(revealed / STAGES.length) * 100}%`,
                background: "linear-gradient(180deg, #0B1F3A 0%, #5F2DEE 60%, #FFB347 100%)",
              }}
            />

            <div className="space-y-6">
              {STAGES.map((stage) => {
                const isActive = revealed >= stage.id;
                const col = PHASE_COLORS[stage.phase];
                return (
                  <div key={stage.id} className="relative flex items-start gap-5">
                    {/* Node */}
                    <div
                      className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 z-10 transition-all duration-400 ${
                        isActive
                          ? `${col.bg} ${col.border} ${col.text} shadow-sm`
                          : "bg-white border-[#E2E8F0] text-[#94A3B8]"
                      }`}
                    >
                      <span className="text-[10px] font-bold">{String(stage.id).padStart(2, "0")}</span>
                    </div>
                    {/* Content */}
                    <div
                      className={`flex-1 p-5 rounded-xl border transition-all ${
                        isActive ? "bg-white border-[#CBD5E1] shadow-sm" : "bg-white/60 border-[#E2E8F0]"
                      }`}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#5F2DEE] mb-1">
                        {stage.sub}
                      </p>
                      <h3 className="text-base font-bold text-[#0B1F3A] mb-1">{stage.label}</h3>
                      <p className="text-sm text-[#4F5B6A] leading-relaxed">{stage.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
