"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  GraduationCap, 
  Wrench, 
  Lightbulb, 
  FolderGit2, 
  Layers, 
  Building, 
  Briefcase, 
  TrendingUp, 
  CheckCircle
} from "lucide-react";

export default function LearningToEarningSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      phase: "01",
      title: "Education",
      subtitle: "Academic Baseline",
      detail: "ICS, ADP & foundational computational curriculum",
      icon: GraduationCap,
      color: "#0B1F3A",
    },
    {
      id: 2,
      phase: "02",
      title: "Skills Training",
      subtitle: "Industry Alignment",
      detail: "High-value coding, data & digital trades",
      icon: Wrench,
      color: "#0B1F3A",
    },
    {
      id: 3,
      phase: "03",
      title: "Incubation",
      subtitle: "WISE-Teck Labs",
      detail: "Physical workstation & dedicated mentorship",
      icon: Lightbulb,
      color: "#5F2DEE",
    },
    {
      id: 4,
      phase: "04",
      title: "Practical Projects",
      subtitle: "Hands-on Sprints",
      detail: "Building production software from day one",
      icon: FolderGit2,
      color: "#5F2DEE",
    },
    {
      id: 5,
      phase: "05",
      title: "Portfolio",
      subtitle: "Verified Assets",
      detail: "Production codebases & client case studies",
      icon: Layers,
      color: "#5F2DEE",
    },
    {
      id: 6,
      phase: "06",
      title: "Internship",
      subtitle: "Supervised Teams",
      detail: "Real team workflow & Agile sprint practices",
      icon: Building,
      color: "#5F2DEE",
    },
    {
      id: 7,
      phase: "07",
      title: "Client Projects",
      subtitle: "Commercial Delivery",
      detail: "Live deliverables for external enterprises",
      icon: Briefcase,
      color: "#5F2DEE",
    },
    {
      id: 8,
      phase: "08",
      title: "Career Pathway",
      subtitle: "Placement & Scale",
      detail: "Tailored interview prep & track mapping",
      icon: TrendingUp,
      color: "#0B1F3A",
    },
    {
      id: 9,
      phase: "09",
      title: "Employment • Freelancing • Entrepreneurship",
      subtitle: "Commercial Earning",
      detail: "Formal Job Placement, High-Ticket Freelancing & Startup Ventures",
      icon: CheckCircle,
      color: "#FFB347",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Sequentially trigger nodes over ~2.2 seconds (single run, no loop)
          const totalSteps = steps.length;
          const intervalTime = 240;
          
          for (let i = 1; i <= totalSteps; i++) {
            setTimeout(() => {
              setActiveStep(i);
            }, i * intervalTime);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, steps.length]);

  return (
    <section 
      id="model" 
      ref={sectionRef} 
      className="section-padding bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="site-container">
        
        {/* Section Title & Context */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
              Core Transformation Methodology
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            From Learning to Earning Model
          </h2>
          <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-2xl">
            Our signature career progression framework bridges the divide between student education and commercial earning through guided incubation, verified portfolios, and client execution across three definitive outcomes: Employment, Freelancing, and Entrepreneurship.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Horizontal Connected Track with Drawing Line Animation     */}
        {/* ========================================================================= */}
        <div className="hidden xl:block bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-10 shadow-xs mb-10">
          
          {/* Progress bar line container */}
          <div className="relative mb-14">
            {/* Background base track line */}
            <div className="absolute top-1/2 left-6 right-6 h-[4px] -translate-y-1/2 bg-[#E2E8F0] rounded-full z-0" />
            
            {/* Animated progress track line */}
            <div 
              className="absolute top-1/2 left-6 h-[4px] -translate-y-1/2 rounded-full z-0 transition-all duration-300 ease-out"
              style={{
                width: hasAnimated ? `${Math.min(100, (activeStep / (steps.length - 1)) * 96)}%` : "0%",
                background: "linear-gradient(90deg, #0B1F3A 0%, #5F2DEE 60%, #FFB347 100%)",
              }}
            />

            {/* Step Nodes Row with Substantial Badge Size */}
            <div className="relative z-10 grid grid-cols-9 gap-3">
              {steps.map((step) => {
                const isActivated = activeStep >= step.id;
                const IconComponent = step.icon;
                const isLast = step.id === 9;
                
                return (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    
                    {/* Node Circle Badge */}
                    <div 
                      className={`w-13 h-13 rounded-full flex items-center justify-center border-2 transition-all duration-500 ease-out ${
                        isActivated
                          ? isLast
                            ? "bg-[#FFB347] border-[#FFA21A] text-[#0B1F3A] shadow-md scale-110"
                            : step.id >= 3 && step.id <= 7
                            ? "bg-[#5F2DEE] border-[#5F2DEE] text-white shadow-md scale-110"
                            : "bg-[#0B1F3A] border-[#0B1F3A] text-white shadow-md scale-110"
                          : "bg-white border-[#CBD5E1] text-[#94A3B8]"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Step label */}
                    <span 
                      className={`text-[11px] font-bold tracking-wider uppercase mt-4 mb-1.5 transition-colors duration-300 ${
                        isActivated ? "text-[#0B1F3A]" : "text-[#94A3B8]"
                      }`}
                    >
                      Phase {step.phase}
                    </span>

                    {/* Step Title */}
                    <h3 
                      className={`text-xs font-bold leading-snug transition-colors duration-300 min-h-[2.5rem] flex items-center justify-center ${
                        isActivated 
                          ? isLast 
                            ? "text-[#0B1F3A] font-extrabold" 
                            : "text-[#0B1F3A]" 
                          : "text-[#64748B]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Substantial Detailed Cards for Each Stage in Grid */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#E2E8F0] items-stretch">
            
            {/* Tier 1: Intake & Skills */}
            <div className="p-7 rounded-xl bg-white border border-[#E2E8F0] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A] bg-[#F1F5F9] px-2.5 py-1 rounded-md">
                    Stages 01 – 02
                  </span>
                  <span className="text-sm font-bold text-[#0B1F3A]">Foundations & Skills</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  Learners build computational discipline and master high-demand software engineering stacks through certified instruction.
                </p>
              </div>
            </div>

            {/* Tier 2: Incubation & Projects */}
            <div className="p-7 rounded-xl bg-white border-2 border-[#5F2DEE]/30 shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F2DEE] bg-[#5F2DEE]/10 px-2.5 py-1 rounded-md">
                    Stages 03 – 07
                  </span>
                  <span className="text-sm font-bold text-[#5F2DEE]"><span className="whitespace-nowrap">WISE-Teck</span> Incubation</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  Immersion in our 6 physical incubators, building verified Git repositories, undertaking structured internships, and fulfilling commercial client deliverables.
                </p>
              </div>
            </div>

            {/* Tier 3: Career Realization */}
            <div className="p-7 rounded-xl bg-white border-2 border-[#FFB347] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A] bg-[#FFB347]/30 px-2.5 py-1 rounded-md">
                    Stages 08 – 09
                  </span>
                  <span className="text-sm font-bold text-[#0B1F3A]">Earning & Enterprise</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4F5B6A] leading-relaxed mb-3 [text-wrap:pretty]">
                  Structured pathways into three core outcomes:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold text-[#0B1F3A] bg-[#F1F5F9] px-3 py-1 rounded-md border border-[#E2E8F0]">
                    Employment
                  </span>
                  <span className="text-xs font-bold text-[#0B1F3A] bg-[#F1F5F9] px-3 py-1 rounded-md border border-[#E2E8F0]">
                    Freelancing
                  </span>
                  <span className="text-xs font-bold text-[#0B1F3A] bg-[#F1F5F9] px-3 py-1 rounded-md border border-[#E2E8F0]">
                    Entrepreneurship
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* TABLET / MOBILE VIEW: Vertical Sequential Track                          */}
        {/* ========================================================================= */}
        <div className="xl:hidden bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
          <div className="relative pl-6 sm:pl-8 space-y-6">
            
            {/* Vertical Base Line */}
            <div className="absolute top-4 bottom-4 left-[19px] sm:left-[27px] w-[3px] bg-[#E2E8F0] rounded-full" />
            
            {/* Vertical Animated Line */}
            <div 
              className="absolute top-4 left-[19px] sm:left-[27px] w-[3px] rounded-full transition-all duration-500 ease-out"
              style={{
                height: hasAnimated ? `${Math.min(100, (activeStep / steps.length) * 100)}%` : "0%",
                background: "linear-gradient(180deg, #0B1F3A 0%, #5F2DEE 60%, #FFB347 100%)",
              }}
            />

            {steps.map((step) => {
              const isActivated = activeStep >= step.id;
              const IconComponent = step.icon;
              const isLast = step.id === 9;

              return (
                <div key={step.id} className="relative flex items-start gap-4">
                  {/* Left Node Badge */}
                  <div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 shrink-0 z-10 transition-all duration-400 ${
                      isActivated
                        ? isLast
                          ? "bg-[#FFB347] border-[#FFA21A] text-[#0B1F3A] shadow-sm"
                          : step.id >= 3 && step.id <= 7
                          ? "bg-[#5F2DEE] border-[#5F2DEE] text-white shadow-sm"
                          : "bg-[#0B1F3A] border-[#0B1F3A] text-white shadow-sm"
                        : "bg-white border-[#CBD5E1] text-[#94A3B8]"
                    }`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 p-4 sm:p-5 rounded-xl border transition-all ${
                    isActivated ? "bg-white border-[#CBD5E1] shadow-2xs" : "bg-white/60 border-[#E2E8F0]"
                  }`}>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F2DEE]">
                        Phase {step.phase}
                      </span>
                      <span className="text-xs text-[#64748B] font-medium">
                        {step.subtitle}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4F5B6A] mt-1.5">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
