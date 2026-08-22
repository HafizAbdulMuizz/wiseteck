import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  Layers, 
  Rocket, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "The WISE Ecosystem | WISE-Teck — Education, Incubation & Enterprise",
  description:
    "Explore the four pillars of the WISE Ecosystem: WISE Support Hub, WISE Educational Hub, WISE Institute of Employability Skills, and WISE-Teck Incubation Platform.",
};

/*
  THE WISE ECOSYSTEM PAGE
  =======================
  STRICT 4-SECTION ARCHITECTURE (EXACTLY 4 SECTIONS, NO MORE, NO LESS):
  1. WISE Support Hub
  2. WISE Educational Hub
  3. WISE Institute of Employability Skills
  4. WISE-Teck Incubation Platform (Includes Sub-block C: The Ecosystem Journey)
*/

export default function EcosystemPage() {
  const ecosystemJourney = [
    { num: "01", title: "WISE Projects" },
    { num: "02", title: "WISE-Teck" },
    { num: "03", title: "Real-Time Projects" },
    { num: "04", title: "Internship" },
    { num: "05", title: "Freelancing" },
    { num: "06", title: "Employment" },
    { num: "07", title: "Entrepreneurship" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4F5B6A]">
      {/* Global Minimalist Header Navigation */}
      <Navbar />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* PAGE HEADER — FULL-BLEED HERO (President Meeting Background)              */}
        {/* NOT a numbered section — standard page framing                            */}
        {/* ========================================================================= */}
        <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#071527] text-white py-20 lg:py-28 border-b border-[#E2E8F0]">
          {/* Full-Bleed Background Image with High Clarity & Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/impact/president-meeting.jpeg"
              alt="WISE-Teck Institutional Leadership & Ecosystem"
              fill
              priority
              className="object-cover object-center opacity-85 scale-100"
              sizes="100vw"
            />
            {/* Cinematic gradient overlay for crisp text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071527] via-[#0B1F3A]/65 to-[#071527]/85" />
            <div className="absolute inset-0 bg-[#0B1F3A]/30 backdrop-blur-[0.5px]" />
          </div>

          {/* Centered Content Container */}
          <div className="site-container relative z-10 w-full flex flex-col items-center text-center my-auto">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB347] shrink-0 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  Institutional Framework · 4 Unified Pillars
                </span>
              </div>

              {/* Page Title — strictly 1 to 2 lines */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.16] tracking-tight mb-6 max-w-4xl [text-wrap:balance] drop-shadow-sm">
                The <span className="text-[#FFB347]">WISE Ecosystem</span>
              </h1>

              {/* Verbatim Header Supporting Text */}
              <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto [text-wrap:pretty] drop-shadow-xs">
                <p>
                  <span className="whitespace-nowrap font-bold text-white">WISE-Teck</span> serves as the practical implementation platform for all projects of WISE Education Society. Students from the Wise Support Hub, Wise Educational Hub, and WISE Institute of Employability Skills ultimately become part of WISE-Teck, where they further develop their professional capabilities and gain practical industry experience.
                </p>
                <p>
                  Through this unique ecosystem, <span className="whitespace-nowrap font-bold text-white">WISE-Teck</span> transforms education into employability, skills into earning opportunities, and learners into confident, self-reliant professionals.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1 — WISE SUPPORT HUB                                              */}
        {/* ========================================================================= */}
        <section id="support-hub" className="section-padding bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="max-w-4xl mx-auto">
              
              {/* Section Badge & Number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                  Section 1 · Educational & Empowerment Initiative
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                WISE Support Hub
              </h2>

              {/* Exact Approved Tagline */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border-l-4 border-[#0B1F3A] border-y border-r border-[#E2E8F0] mb-8">
                <p className="text-sm sm:text-base font-bold text-[#0B1F3A]">
                  &ldquo;WISE Support Hub — Free Education. Practical Skills. Empowered Futures.&rdquo;
                </p>
              </div>

              {/* Exact Verbatim Intro Paragraph */}
              <div className="space-y-4 text-base text-[#4F5B6A] leading-relaxed mb-12 [text-wrap:pretty]">
                <p>
                  WISE Support Hub is an educational and empowerment initiative of WISE Education Society, established to provide female students with completely free education, comprehensive academic support, practical skills, and a pathway towards self-earning.
                </p>
                <p>
                  Through WISE Support Hub, female students are given the opportunity to pursue Intermediate in Computer Science (ICS) through an institution affiliated with the Board of Intermediate and Secondary Education (BISE), Lahore. The initiative ensures that financial limitations do not prevent deserving students from accessing quality education and building a secure future.
                </p>
              </div>

              {/* 3 Labeled Sub-blocks (Inside Section 1) */}
              <div className="space-y-8">
                
                {/* Sub-block A */}
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Completely Free Education &amp; Student Support
                  </h3>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-6 [text-wrap:pretty]">
                    WISE Support Hub provides a 100% free educational program, covering both academic education and essential student requirements throughout the course of study.
                  </p>
                  
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                    Students receive:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm font-semibold text-[#0B1F3A]">
                    {[
                      "Free ICS Education",
                      "Free Books",
                      "Free Stationery",
                      "Free Uniform",
                      "Free Lunch",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-[#E2E8F0]">
                        <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    This comprehensive support enables students to focus on their education and personal development without the burden of educational expenses.
                  </p>
                </div>

                {/* Sub-block B */}
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Education with Skills Development
                  </h3>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-4 [text-wrap:pretty]">
                    Alongside their ICS studies, students receive basic digital, technology, and professional skills training through <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>.
                  </p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    The training provides practical exposure to modern technologies, digital tools, and professional skills, helping students develop confidence, practical capabilities, and an understanding of emerging career and earning opportunities.
                  </p>
                </div>

                {/* Sub-block C */}
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Pathway to Self-Earning
                  </h3>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-4 [text-wrap:pretty]">
                    During their studies, students are progressively guided towards self-earning opportunities through <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>, enabling them to understand how their education and practical skills can be transformed into real-world earning potential.
                  </p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    This structured pathway prepares students for opportunities in freelancing, employment, entrepreneurship, remote work, and digital careers, supporting their journey from education to skills, skills to experience, and experience to earning.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2 — WISE EDUCATIONAL HUB                                          */}
        {/* ========================================================================= */}
        <section id="educational-hub" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="max-w-4xl mx-auto">
              
              {/* Section Badge & Number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#5F2DEE] text-white font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE]">
                  Section 2 · Higher Education Initiative
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                WISE Educational Hub
              </h2>

              {/* Exact Approved Tagline */}
              <div className="p-4 rounded-xl bg-white border-l-4 border-[#5F2DEE] border-y border-r border-[#E2E8F0] mb-8">
                <p className="text-sm sm:text-base font-bold text-[#0B1F3A]">
                  &ldquo;WISE Educational Hub — Affordable Education. Practical Skills. Career-Ready Futures.&rdquo;
                </p>
              </div>

              {/* Exact Verbatim Intro Paragraph */}
              <div className="space-y-4 text-base text-[#4F5B6A] leading-relaxed mb-12 [text-wrap:pretty]">
                <p>
                  WISE Educational Hub is a higher education initiative of WISE Education Society, providing students with access to quality, affordable, and career-focused higher education through Associate Degree Programs (ADP) affiliated with the University of the Punjab.
                </p>
                <p>
                  The Hub is committed to making higher education accessible by offering these programs at a nominal fee package, while combining academic learning with practical skills development and professional exposure.
                </p>
              </div>

              {/* 3 Labeled Sub-blocks (Inside Section 2) */}
              <div className="space-y-8">
                
                {/* Sub-block A */}
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Associate Degree Programs
                  </h3>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-6 [text-wrap:pretty]">
                    Students can pursue the following Punjab University-affiliated ADP programs:
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm font-semibold text-[#0B1F3A]">
                    {[
                      "ADP Artificial Intelligence",
                      "ADP Data Science",
                      "ADP Software Engineering",
                      "ADP eCommerce",
                    ].map((prog) => (
                      <li key={prog} className="flex items-center gap-2.5 p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                        <GraduationCap className="w-4 h-4 text-[#5F2DEE] shrink-0" />
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    These programs are designed to provide students with a strong academic foundation in emerging and high-demand fields while preparing them for the evolving requirements of the professional world.
                  </p>
                </div>

                {/* Sub-block B */}
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Academic Education with Practical Skills
                  </h3>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-4 [text-wrap:pretty]">
                    Alongside their degree programs, students gain practical and professional skills through <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>, where they are exposed to industry-oriented learning, practical assignments, real-time projects, and professional mentorship.
                  </p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    This integration of academic education and practical training enables students to develop market-relevant competencies, technical expertise, problem-solving abilities, and professional confidence.
                  </p>
                </div>

                {/* Sub-block C */}
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Pathway to Professional Growth &amp; Self-Earning
                  </h3>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-4 [text-wrap:pretty]">
                    Through <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>, students are guided towards applying their academic knowledge and practical skills in real-world environments. This exposure helps prepare them for freelancing, employment, entrepreneurship, remote work, and self-earning opportunities.
                  </p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    By combining Punjab University-affiliated higher education at a nominal fee with practical skills and industry exposure, WISE Educational Hub aims to develop qualified, skilled, career-ready, and financially independent professionals.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 — WISE INSTITUTE OF EMPLOYABILITY SKILLS                        */}
        {/* ========================================================================= */}
        <section id="employability-skills" className="section-padding bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="max-w-4xl mx-auto">
              
              {/* Section Badge & Number */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#163259] text-white font-bold text-xs flex items-center justify-center">
                    03
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#163259]">
                    Section 3 · Professional Skills Development
                  </span>
                </div>

                {/* Official NAVTTC Accreditation Badge */}
                <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-lg shadow-2xs">
                  <div className="relative h-6 w-16">
                    <Image
                      src="/images/branding/navttc-logo.png"
                      alt="NAVTTC Official Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#0B1F3A]">NAVTTC Registered</span>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                WISE Institute of Employability Skills
              </h2>

              {/* Exact Approved Tagline */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border-l-4 border-[#163259] border-y border-r border-[#E2E8F0] mb-8">
                <p className="text-sm sm:text-base font-bold text-[#0B1F3A]">
                  &ldquo;WISE Institute of Employability Skills — Advanced Skills. Real Experience. Global Opportunities.&rdquo;
                </p>
              </div>

              {/* Exact Verbatim Intro Paragraph */}
              <div className="space-y-4 text-base text-[#4F5B6A] leading-relaxed mb-12 [text-wrap:pretty]">
                <p>
                  WISE Institute of Employability Skills is a professional skills development initiative of WISE Education Society, registered with the National Vocational and Technical Training Commission (NAVTTC). The Institute is focused on bridging the gap between academic qualifications and industry requirements by providing advanced, market-driven training to educated but unemployed graduates and students from different universities.
                </p>
              </div>

              {/* 2 Labeled Sub-blocks (Inside Section 3) */}
              <div className="space-y-8">
                
                {/* Sub-block A */}
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    High-Tech &amp; Advanced Professional Training
                  </h3>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-4 [text-wrap:pretty]">
                    Students enroll in high-tech and high-end professional courses designed to equip them with advanced technical and market-relevant skills aligned with the evolving demands of the digital economy.
                  </p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Alongside professional training, students are also supported in pursuing international certifications, strengthening their professional profiles and enhancing their competitiveness in local and global markets.
                  </p>
                </div>

                {/* Sub-block B */}
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    From Skills to Professional Experience
                  </h3>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-4 [text-wrap:pretty]">
                    After developing the required skills, students progress to <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>, where they work in professional incubators under the supervision of industry experts.
                  </p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-4 [text-wrap:pretty]">
                    Within these incubators, students work on real-world projects, experience professional workflows, and learn how projects are managed and delivered according to the requirements of local and international markets.
                  </p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    This structured transition from professional training to supervised industry experience prepares participants for freelancing, employment, entrepreneurship, remote work, and sustainable career opportunities.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 — WISE-TECK INCUBATION PLATFORM                                 */}
        {/* ========================================================================= */}
        <section id="incubation-platform" className="section-padding bg-[#0B1F3A] text-white relative">
          <div className="site-container">
            <div className="max-w-4xl mx-auto">
              
              {/* Section Badge & Number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#FFB347] text-[#0B1F3A] font-extrabold text-xs flex items-center justify-center">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFB347]">
                  Section 4 · Implementation &amp; Convergence Core
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-12 [text-wrap:balance]">
                WISE-Teck Incubation Platform
              </h2>

              {/* 3 Labeled Sub-blocks (Inside Section 4) */}
              <div className="space-y-8">
                
                {/* Sub-block A */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Professional &amp; Paid Courses
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 [text-wrap:pretty]">
                    WISE-Teck offers a range of professional and paid courses designed for students, graduates, working professionals, freelancers, entrepreneurs, and individuals who want to upgrade their skills and stay competitive in today&apos;s rapidly evolving digital economy.
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 [text-wrap:pretty]">
                    Our courses focus on high-demand, market-oriented skills and combine professional training with practical application. Participants learn through hands-on assignments and project-based activities, enabling them to develop skills that can be applied in real professional environments.
                  </p>
                  
                  <div className="pt-5 border-t border-white/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#FFB347] mb-2">
                      Training areas include:
                    </p>
                    <p className="text-sm text-slate-200 leading-relaxed [text-wrap:pretty]">
                      Artificial Intelligence, Data Science, Software &amp; Web Development, Mobile App Development, UI/UX Design, Digital Marketing, WordPress Development, Shopify &amp; eCommerce, Freelancing, Business Automation, and other emerging technologies and professional skills.
                    </p>
                  </div>
                </div>

                {/* Sub-block B */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Incubation and Entrepreneurship Development
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 [text-wrap:pretty]">
                    WISE-Teck plays a major role in entrepreneurship development by supporting students who aspire to launch their own businesses.
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 [text-wrap:pretty]">
                    Through mentorship, startup guidance, business incubation, networking opportunities, and access to loan support facilities, WISE-Teck empowers young professionals to become entrepreneurs and achieve financial independence through self-employment.
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed [text-wrap:pretty]">
                    Students are encouraged to transform their ideas into startups and innovative businesses by utilizing the knowledge, experience, and professional support available through WISE-Teck.
                  </p>
                </div>

                {/* Sub-block C: The Ecosystem Journey (Closing content block inside Section 4) */}
                <div className="bg-white/10 border-2 border-[#FFB347]/40 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/15 mb-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#FFB347] block mb-1">
                        Sub-block C · Closing Visual Progression
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        The Ecosystem Journey
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-slate-300">
                      Approved 7-Step Progression
                    </span>
                  </div>

                  {/* Desktop & Tablet: Flowing Linear Journey (7 Steps) */}
                  <div className="hidden lg:grid grid-cols-7 gap-3 items-start">
                    {ecosystemJourney.map((step, idx) => (
                      <div key={step.num} className="relative flex flex-col items-center text-center px-1">
                        <div className="w-full flex items-center mb-3.5">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mx-auto shrink-0 shadow-sm ${idx === ecosystemJourney.length - 1 ? "bg-[#FFB347] text-[#0B1F3A] ring-4 ring-[#FFB347]/20" : "bg-white/15 border border-white/25 text-white"}`}>
                            {step.num}
                          </div>
                        </div>
                        <span className={`text-xs font-bold leading-snug w-full px-0.5 [overflow-wrap:normal] [word-break:keep-all] hyphens-none ${idx === ecosystemJourney.length - 1 ? "text-[#FFB347]" : "text-white"}`}>
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile & Tablet (< 1024px): Stacked Sequence */}
                  <div className="lg:hidden space-y-3">
                    {ecosystemJourney.map((step, idx) => (
                      <div
                        key={step.num}
                        className={`flex items-center gap-4 p-3.5 rounded-xl border ${idx === ecosystemJourney.length - 1 ? "bg-[#FFB347]/15 border-[#FFB347]/40 text-[#FFB347]" : "bg-white/5 border-white/10 text-white"}`}
                      >
                        <span className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${idx === ecosystemJourney.length - 1 ? "bg-[#FFB347] text-[#0B1F3A]" : "bg-white/15 text-white"}`}>
                          {step.num}
                        </span>
                        <span className="text-sm font-bold">
                          {step.title}
                        </span>
                        {idx < ecosystemJourney.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-white/40 ml-auto" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#FFB347]" />
                      <span>The Complete WISE Ecosystem Pathway</span>
                    </div>
                    <span className="text-slate-400">
                      Governed by WISE Education Society Board · Lahore
                    </span>
                  </div>

                </div>

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
