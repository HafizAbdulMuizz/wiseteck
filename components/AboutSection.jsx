import React from "react";
import { ArrowRight } from "lucide-react";
import {
  SoftwareDevColorIcon,
  EduHubColorIcon,
  StartupColorIcon,
  SupportHubColorIcon,
} from "@/components/OriginalIcons";

export default function AboutSection() {
  const coreIdentities = [
    {
      icon: SoftwareDevColorIcon,
      title: "Technology",
      description:
        "Developing robust software solutions, modern digital architectures, and AI-driven systems for enterprises, educational bodies, and commercial clients.",
    },
    {
      icon: EduHubColorIcon,
      title: "Skills Development",
      description:
        "Delivering market-driven, high-value training in emerging technologies, accredited programs, and international certifications in partnership with NAVTTC.",
    },
    {
      icon: StartupColorIcon,
      title: "Innovation & Incubation",
      description:
        "Nurturing student-led ventures and technical ideas within 6 specialized incubation tracks equipped with physical labs, mentorship, and project resources.",
    },
    {
      icon: SupportHubColorIcon,
      title: "Professional Services",
      description:
        "Executing commercial client contracts, business automation, UI/UX design, and web/mobile engineering through supervised student and professional teams.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white border-b border-[#E2E8F0]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Factual Introduction */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5F2DEE]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                About <span className="whitespace-nowrap">WISE-Teck</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#0B1F3A] leading-tight mb-6 [text-wrap:balance]">
              Bridging Education, Technical Skills, and Enterprise Delivery
            </h2>

            <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed mb-5 [text-wrap:pretty]">
              <span className="whitespace-nowrap">WISE-Teck</span> is the dedicated technology, incubation, skills development, and professional services platform established by WISE Education Society in Lahore, Pakistan.
            </p>

            <p className="text-base text-[#4F5B6A] leading-relaxed mb-8 [text-wrap:pretty]">
              Unlike traditional institutions that stop at classroom lectures, <span className="whitespace-nowrap">WISE-Teck</span> operates as a dual-engine ecosystem: combining an innovative incubation platform with an active corporate technology services firm. We ensure every learner translates theoretical knowledge into tangible industry outcomes.
            </p>

            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#5F2DEE] hover:text-[#0B1F3A] transition-colors group"
            >
              <span>Explore the complete institutional ecosystem</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Four Core Identities List with Original Full-Color Icons */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] pb-4 mb-3 border-b border-[#E2E8F0] flex items-center justify-between">
              <span>Four Core Pillars of <span className="whitespace-nowrap">WISE-Teck</span></span>
              <span className="text-[11px] text-[#5F2DEE] font-bold">Institutional Standards</span>
            </div>

            <div className="divide-y divide-[#E2E8F0]">
              {coreIdentities.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="py-6 first:pt-3 last:pb-2 flex items-start gap-5">
                    <div className="shrink-0 flex items-center justify-center">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-1.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                        {item.description}
                      </p>
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
