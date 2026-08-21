import React from "react";
import {
  SupportHubColorIcon,
  EduHubColorIcon,
  SkillsInstColorIcon,
  StartupColorIcon,
  SoftwareDevColorIcon,
} from "@/components/OriginalIcons";

export default function EcosystemSection() {
  const educationEntities = [
    {
      id: "support-hub",
      icon: SupportHubColorIcon,
      badge: "Guidance & Placement",
      name: "WISE Support Hub",
      role: "Career Services & Mentorship",
      details:
        "Providing comprehensive student onboarding, career trajectory planning, portfolio code reviews, and direct employer placement coordination.",
      type: "education",
    },
    {
      id: "edu-hub",
      icon: EduHubColorIcon,
      badge: "Academic Foundation",
      name: "WISE Educational Hub",
      role: "Formal Degree Curricula",
      details:
        "Delivering foundational Intermediate (ICS) and Associate Degree Programs (ADP) with disciplined computational and mathematical coursework.",
      type: "education",
    },
    {
      id: "skills-inst",
      icon: SkillsInstColorIcon,
      badge: "Accredited Skills",
      name: "WISE Institute of Employability Skills",
      role: "Vocational & Technical Training",
      details:
        "NAVTTC and PSDA affiliated practical certifications in cutting-edge software, data, digital marketing, and applied technological trades.",
      type: "education",
    },
  ];

  const wiseteckEntities = [
    {
      id: "wiseteck-incubation",
      icon: StartupColorIcon,
      badge: "Incubation Core",
      name: "WISE-Teck Innovation & Incubation",
      role: "Physical Labs & Venture Studio",
      details:
        "Six specialized physical incubators providing student venture backing, high-spec compute workstations, project labs, and dedicated technical leadership.",
      type: "wiseteck",
    },
    {
      id: "wiseteck-services",
      icon: SoftwareDevColorIcon,
      badge: "Commercial Arm",
      name: "WISE-Teck Professional Services",
      role: "Corporate Technology Delivery",
      details:
        "Executing commercial client contracts, enterprise software engineering, AI pipelines, cloud deployments, and managed digital services for external firms.",
      type: "wiseteck",
    },
  ];

  const pipelineSteps = [
    { step: "01", title: "WISE Education", desc: "ICS, ADP & Vocational Foundation" },
    { step: "02", title: "Specialized Skills", desc: "Advanced Technical Competency" },
    { step: "03", title: "WISE-Teck Incubation", desc: "Project Labs & Mentorship" },
    { step: "04", title: "Practical Portfolio", desc: "Verified GitHub & Case Studies" },
    { step: "05", title: "Client Delivery", desc: "Live Commercial Exposure" },
    { step: "06", title: "Career Realization", desc: "Employment, Freelancing & Business" },
  ];

  return (
    <section id="ecosystem" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-[#E2E8F0] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
              The Integrated Structure
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            The WISE Ecosystem & Student Journey
          </h2>
          <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-2xl">
            <span className="whitespace-nowrap">WISE-Teck</span> operates in direct harmony with the broader WISE Education Society ecosystem. Five specialized institutional entities work in synergy to transition students into commercial practitioners.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TOP ROW: 3 Substantial Educational & Support Foundation Cards (Centered)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-stretch">
          {educationEntities.map((entity) => {
            const IconComp = entity.icon;
            return (
              <div
                key={entity.id}
                className="bg-white border border-[#E2E8F0] rounded-xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-sm text-center h-full"
              >
                <div>
                  {/* Centered Original Full-Color Icon */}
                  <div className="flex items-center justify-center mx-auto mb-5">
                    <IconComp className="w-14 h-14" />
                  </div>

                  {/* Centered Badge */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#F1F5F9] text-[#0B1F3A] border border-[#E2E8F0]">
                      {entity.badge}
                    </span>
                  </div>

                  {/* Centered Title with Fixed Alignment Height */}
                  <div className="min-h-[3.5rem] flex items-center justify-center mb-2">
                    <h3 className="text-xl font-bold text-[#0B1F3A] leading-snug [text-wrap:balance]">
                      {entity.name}
                    </h3>
                  </div>

                  {/* Centered Role */}
                  <p className="text-xs font-semibold text-[#64748B] tracking-wide mb-4">
                    {entity.role}
                  </p>

                  {/* Centered Description with Strict Text Width */}
                  <p className="text-sm text-[#4F5B6A] leading-relaxed max-w-xs sm:max-w-sm mx-auto [text-wrap:pretty]">
                    {entity.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ROW: 2 Substantial WISE-Teck Pillar Cards (Spacious, Centered)     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
          {wiseteckEntities.map((entity) => {
            const IconComp = entity.icon;
            return (
              <div
                key={entity.id}
                className="bg-white border-2 border-[#5F2DEE]/30 rounded-xl p-8 sm:p-10 flex flex-col justify-between shadow-xs transition-all duration-200 hover:border-[#5F2DEE]/60 text-center h-full"
              >
                <div>
                  {/* Centered Original Full-Color Icon */}
                  <div className="flex items-center justify-center mx-auto mb-5">
                    <IconComp className="w-14 h-14" />
                  </div>

                  {/* Centered Badge */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-md bg-[#5F2DEE]/15 text-[#5F2DEE] border border-[#5F2DEE]/30">
                      {entity.badge}
                    </span>
                  </div>

                  {/* Centered Title */}
                  <div className="min-h-[3.5rem] flex items-center justify-center mb-2">
                    <h3 className="text-2xl font-bold text-[#0B1F3A] leading-snug [text-wrap:balance]">
                      {entity.name}
                    </h3>
                  </div>

                  {/* Centered Role */}
                  <p className="text-xs font-semibold text-[#5F2DEE] tracking-wide mb-4">
                    {entity.role}
                  </p>

                  {/* Centered Description with Controlled Width */}
                  <p className="text-sm text-[#4F5B6A] leading-relaxed max-w-md mx-auto [text-wrap:pretty]">
                    {entity.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* JOURNEY FLOW INFOGRAPHIC (Editorial Style - 100% Static - No Animation)   */}
        {/* ========================================================================= */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                The Student Ingestion & Advancement Pipeline
              </h3>
              <p className="text-sm text-[#4F5B6A] mt-1">
                How learners progress from academic intake to commercial earning
              </p>
            </div>
            <span className="text-xs font-bold text-[#0B1F3A] bg-[#F1F5F9] px-3.5 py-1.5 rounded-md border border-[#E2E8F0] self-start sm:self-auto">
              Linear Ecosystem Flow
            </span>
          </div>

          {/* Desktop Flow (6 nodes in a clean connected line with uniform text blocks) */}
          <div className="hidden lg:grid grid-cols-6 gap-4 relative">
            {pipelineSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B1F3A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div className={`h-[2px] flex-1 ${idx === 5 ? "hidden" : "bg-[#E2E8F0]"}`} />
                </div>
                <h4 className="text-base font-bold text-[#0B1F3A] leading-snug mb-1.5 min-h-[2.5rem]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Tablet & Mobile Flow (Vertical Step List) */}
          <div className="lg:hidden space-y-4">
            {pipelineSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="w-8 h-8 rounded-md bg-[#0B1F3A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {step.step}
                </span>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-[#0B1F3A]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#4F5B6A] mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom institutional note */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4F5B6A]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5F2DEE]" />
              <span>Integrated with WISE Support Hub for placement and career counseling</span>
            </div>
            <span className="font-semibold text-[#0B1F3A]">
              Governed by WISE Education Society Board
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
