import React from "react";

/**
 * Section 3 — The WISE Ecosystem
 *
 * LOCKED CONTENT (do not modify without client approval):
 * Entities: WISE Support Hub · WISE Educational Hub · WISE Institute of Employability Skills · WISE-Teck Incubation Platform
 * Journey:  WISE Projects → WISE-Teck → Real-Time Projects → Internship → Freelancing → Employment → Entrepreneurship
 * "WISE Projects" is the confirmed approved term — not a placeholder.
 * "Portfolio" is intentionally absent from this journey (it belongs in Section 4 only).
 */
export default function EcosystemSection() {
  const entities = [
    {
      id: "support-hub",
      name: "WISE Support Hub",
      role: "Career Guidance & Placement",
      description:
        "Student onboarding, career planning, mentorship, portfolio reviews, and employer coordination — the student's primary support layer throughout the journey.",
    },
    {
      id: "edu-hub",
      name: "WISE Educational Hub",
      role: "Academic Foundation",
      description:
        "Delivering Intermediate (ICS) and Associate Degree Programs (ADP) as the formal academic backbone — the gateway into the WISE ecosystem.",
    },
    {
      id: "skills-inst",
      name: "WISE Institute of Employability Skills",
      role: "Vocational & Technical Training",
      description:
        "NAVTTC and PSDA affiliated practical certifications across software engineering, data, digital marketing, and applied technical trades.",
    },
    {
      id: "incubation",
      name: "WISE-Teck Incubation Platform",
      role: "Innovation & Commercial Exposure",
      description:
        "Six specialized physical incubators, real client project delivery, startup mentorship, and the bridge to professional technology careers.",
    },
  ];

  // Locked approved journey — exactly as per Structure document
  const journey = [
    "WISE Projects",
    "WISE-Teck",
    "Real-Time Projects",
    "Internship",
    "Freelancing",
    "Employment",
    "Entrepreneurship",
  ];

  return (
    <section id="ecosystem" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="site-container">

        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 3 · The Integrated Structure
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4">
            The WISE Ecosystem
          </h2>
          <p className="text-lg text-[#4F5B6A] leading-relaxed max-w-[52ch]">
            Four specialized institutional entities working in synergy — from formal education through to commercial technology careers.
          </p>
        </div>

        {/* ── Entity cards: 2×2 grid, max 2 per row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {entities.map((entity, idx) => (
            <div
              key={entity.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-9 sm:p-10 flex flex-col gap-4 hover:border-[#CBD5E1] hover:shadow-sm transition-all duration-200"
            >
              {/* Number accent */}
              <span className="text-xs font-bold tabular-nums text-[#5F2DEE] tracking-widest">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A] leading-snug mb-1">
                  {entity.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5F2DEE]">
                  {entity.role}
                </p>
              </div>

              <p className="text-sm text-[#4F5B6A] leading-relaxed">
                {entity.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Journey flow — single connected composition ── */}
        <div className="bg-[#0B1F3A] rounded-2xl p-10 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">
            Approved Ecosystem Journey
          </p>

          {/* Desktop: horizontal connected track */}
          <div className="hidden md:flex items-center gap-0 overflow-x-auto pb-2">
            {journey.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center gap-3 min-w-max px-4 first:pl-0 last:pr-0">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white/70 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-white text-center leading-snug max-w-[9ch]">
                    {step}
                  </span>
                </div>
                {idx < journey.length - 1 && (
                  <div className="flex-1 min-w-[24px] h-[2px] bg-white/15 mx-1" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden space-y-0">
            {journey.map((step, idx) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-white/70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {idx < journey.length - 1 && (
                    <div className="w-[2px] h-6 bg-white/15 mt-1" />
                  )}
                </div>
                <p className="text-sm font-semibold text-white pt-2">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/40 mt-8 pt-6 border-t border-white/10">
            Governed by WISE Education Society Board · Lahore, Pakistan
          </p>
        </div>

      </div>
    </section>
  );
}
