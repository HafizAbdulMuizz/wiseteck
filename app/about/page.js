import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Target, 
  Compass, 
  TrendingUp, 
  CheckCircle2, 
  Users2, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Cpu,
  GraduationCap,
  Briefcase
} from "lucide-react";

export const metadata = {
  title: "About Us | WISE-Teck — Education, Incubation & Enterprise",
  description:
    "Learn about WISE-Teck, the technology, incubation, skills development, and professional services platform of WISE Education Society in Lahore, Pakistan.",
};

/*
  WISE-TECK ABOUT US PAGE (v2 Visual Fix Architecture)
  ====================================================
  LOCKED PAGE STRUCTURE (EXACTLY 6 SECTIONS IN THIS EXACT ORDER):
  1. Introduction to WISE-Teck
  2. Mission
  3. Our Journey
  4. Our Impact
  5. Why Choose WISE-Teck?
  6. Our Team
*/

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4F5B6A]">
      {/* Global Minimalist Header Navigation */}
      <Navbar />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* SECTION 1 — INTRODUCTION TO WISE-TECK (Left-Aligned + Supporting Photo)   */}
        {/* ========================================================================= */}
        <section id="introduction" className="section-padding bg-white border-b border-[#E2E8F0] relative overflow-hidden">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Left-Aligned Editorial Text */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-6 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                    Section 1 · Introduction to WISE-Teck
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0B1F3A] leading-[1.16] tracking-tight mb-6 [text-wrap:balance]">
                  Bridging Education, Innovation, and Commercial Enterprise
                </h1>

                {/* Integrated Approved Tagline */}
                <div className="w-full p-5 rounded-xl bg-[#F8FAFC] border-l-4 border-[#5F2DEE] border-y border-r border-[#E2E8F0] mb-6">
                  <p className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                    &ldquo;WISE-Teck — Learn Skills. Gain Experience. Create Opportunities.&rdquo;
                  </p>
                </div>

                {/* Dual Identity Editorial Passages */}
                <div className="space-y-4 text-base sm:text-lg text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  <p>
                    <span className="whitespace-nowrap font-bold text-[#0B1F3A]">WISE-Teck</span> is the dedicated technology, incubation, skills development, and professional services platform established by WISE Education Society in Lahore, Pakistan. Operating at the intersection of computational education and commercial industry, the platform transforms theoretical learners into commercially viable technology practitioners.
                  </p>
                  
                  <p>
                    Beyond its educational and incubation mission, <span className="whitespace-nowrap font-bold text-[#0B1F3A]">WISE-Teck</span> operates as a professional technology and digital solutions company — engineering custom enterprise software systems, AI pipelines, modern web applications, and digital capabilities for businesses.
                  </p>

                  {/* Our Commitment Passage */}
                  <div className="pt-3">
                    <h2 className="text-lg font-bold text-[#0B1F3A] mb-1.5">Our Commitment</h2>
                    <p className="text-base text-[#4F5B6A] leading-relaxed">
                      Our commitment is to empower youth by connecting disciplined academic foundation with real client deliverables, verified portfolio creation, and dedicated incubation labs — preparing every learner for sustainable professional earning.
                    </p>
                  </div>
                </div>

                {/* Two Core Anchors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E2E8F0] w-full">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#5F2DEE]/10 text-[#5F2DEE] flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0B1F3A]">Incubation & Skills Core</h3>
                      <p className="text-xs text-[#4F5B6A]">Six physical incubation tracks and NAVTTC accredited training.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0B1F3A]/10 text-[#0B1F3A] flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0B1F3A]">Corporate Services</h3>
                      <p className="text-xs text-[#4F5B6A]">Commercial software delivery and enterprise engineering.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Large Real Supporting Photo */}
              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#F1F5F9]">
                  <Image
                    src="/images/about/classroom.jpeg"
                    alt="WISE-Teck practical technology training room and academic environment in Lahore"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-[#E2E8F0] rounded-xl px-4 py-2 shadow-xs max-w-[260px]">
                    <p className="text-xs font-bold text-[#0B1F3A]">WISE-Teck Campus</p>
                    <p className="text-[11px] text-[#4F5B6A]">48-Main Gulberg, Lahore</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2 — MISSION (Bold, Spacious, Confident Quote Band)                */}
        {/* ========================================================================= */}
        <section id="mission" className="section-padding bg-[#0B1F3A] text-white relative overflow-hidden">
          <div className="site-container">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 mb-8 shadow-xs">
                <Target className="w-3.5 h-3.5 text-[#FFB347]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/90">
                  Section 2 · Mission
                </span>
              </div>

              {/* Exact Approved Mission Statement Verbatim */}
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.25] tracking-tight mb-8 [text-wrap:balance]">
                &ldquo;To prepare our youth for earning through market demanding skills training to reduce unemployment.&rdquo;
              </blockquote>

              <p className="text-xs uppercase tracking-widest text-[#FFB347] font-semibold">
                Official Institutional Mission · WISE-Teck & WISE Education Society
              </p>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 — OUR JOURNEY (Large Connected Horizontal Progression)          */}
        {/* ========================================================================= */}
        <section id="journey" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            
            {/* Header */}
            <div className="max-w-3xl mb-14 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6 shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-[#5F2DEE]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                  Section 3 · Our Journey
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                Thematic Educational & Professional Progression
              </h2>
              <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
                <span className="whitespace-nowrap font-bold text-[#0B1F3A]">WISE-Teck</span> brings together education, professional training, physical incubation, real-world projects, technology services, and earning opportunities into one continuous thematic pathway:
              </p>
            </div>

            {/* Large Connected Flow Progression (NOT 4 bordered boxes) */}
            <div className="relative pt-4 pb-2">
              
              {/* Desktop Horizontal Connecting Track */}
              <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[3px] bg-[#CBD5E1] z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                
                {/* Stage 1: Learning */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                      01
                    </div>
                    <span className="lg:hidden text-xs font-bold uppercase tracking-wider text-[#5F2DEE]">Stage 01</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B1F3A] mb-1.5">Learning</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE] mb-3">Academic & Skills Foundation</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Building computational discipline, core programming logic, and accredited technical competencies.
                  </p>
                </div>

                {/* Stage 2: Practice */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#5F2DEE] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                      02
                    </div>
                    <span className="lg:hidden text-xs font-bold uppercase tracking-wider text-[#5F2DEE]">Stage 02</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B1F3A] mb-1.5">Practice</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE] mb-3">Hands-on Lab Incubation</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Writing production code, prototyping software, and mastering modern frameworks inside dedicated incubators.
                  </p>
                </div>

                {/* Stage 3: Experience */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                      03
                    </div>
                    <span className="lg:hidden text-xs font-bold uppercase tracking-wider text-[#5F2DEE]">Stage 03</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B1F3A] mb-1.5">Experience</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE] mb-3">Real-World Projects</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Fulfilling live commercial deliverables, supervised client contracts, and verified portfolio development.
                  </p>
                </div>

                {/* Stage 4: Earning */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFB347] text-[#0B1F3A] flex items-center justify-center font-extrabold text-lg shadow-sm shrink-0">
                      04
                    </div>
                    <span className="lg:hidden text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">Stage 04</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B1F3A] mb-1.5">Earning</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">Commercial Independence</p>
                  <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    Achieving sustainable careers through industry job placement, global freelancing, or venture entrepreneurship.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 — OUR IMPACT (3 Large Grouped Cards)                            */}
        {/* ========================================================================= */}
        <section id="impact" className="section-padding bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            
            {/* Header */}
            <div className="max-w-3xl mb-14 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-6 shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5 text-[#5F2DEE]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                  Section 4 · Our Impact
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                Delivering Measurable Institutional Impact
              </h2>
              <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
                Our impact is defined by sustainable human empowerment, enterprise software delivery, and meaningful career generation across all key sectors:
              </p>
            </div>

            {/* All 7 Approved Impact Concepts Verbatim across 3 Spacious Groupings */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Group A: Employment & Careers */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center mb-6 shadow-xs">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Employment & Economic Empowerment
                  </h3>
                  <ul className="space-y-4 text-sm text-[#4F5B6A]">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0B1F3A]">Reducing unemployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0B1F3A]">Promoting self-earning opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0B1F3A]">Creating sustainable careers</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Group B: Skills & Entrepreneurship */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#5F2DEE] text-white flex items-center justify-center mb-6 shadow-xs">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Talent & Venture Development
                  </h3>
                  <ul className="space-y-4 text-sm text-[#4F5B6A]">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0B1F3A]">Developing skilled professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0B1F3A]">Supporting entrepreneurship</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0B1F3A]">Empowering youth through technology and innovation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Group C: Enterprise & Commercial Solutions */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center mb-6 shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    Corporate Technology Delivery
                  </h3>
                  <ul className="space-y-4 text-sm text-[#4F5B6A]">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0B1F3A] leading-relaxed">
                        Delivering innovative technology solutions to businesses and organizations
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-xs text-[#64748B]">
                  Applied commercial software and digital solutions across diverse industries.
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5 — WHY CHOOSE WISE-TECK? (2-Column Flowing Running List)         */}
        {/* ========================================================================= */}
        <section id="why-choose" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            
            {/* Header with Exact Approved Heading */}
            <div className="max-w-3xl mb-14 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5F2DEE]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                  Section 5 · Distinct Value Proposition
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                Why Choose WISE-Teck?
              </h2>
              <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
                Eight institutional advantages that set our ecosystem apart as a leader in technical education, incubation, and software engineering:
              </p>
            </div>

            {/* 2-Column Clean Running List with Large Inline Numerals (NOT 8 boxed cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10 mb-14">
              {[
                {
                  num: "01",
                  title: "Unique bridge between education and industry",
                  detail: "Connecting theoretical academic curricula directly with live commercial software demands and enterprise practices.",
                },
                {
                  num: "02",
                  title: "Real-time project experience and practical learning",
                  detail: "Every participant works on production codebases, automated pipelines, and verified client deliverables.",
                },
                {
                  num: "03",
                  title: "Professional mentorship from industry experts",
                  detail: "Dedicated technical guidance from seasoned software architects, marketing specialists, and corporate leads.",
                },
                {
                  num: "04",
                  title: "Complete incubation and entrepreneurship support",
                  detail: "Workstation facilities, legal guidance, MVP development, and investor pitch preparation for student founders.",
                },
                {
                  num: "05",
                  title: "Innovative and affordable technology solutions",
                  detail: "High-grade commercial software engineering and digital services delivered efficiently for client organizations.",
                },
                {
                  num: "06",
                  title: "Opportunities for freelancing, employment, and self-employment",
                  detail: "Multiple viable career avenues tailored to individual strengths and market opportunities.",
                },
                {
                  num: "07",
                  title: "Industry-oriented training and professional development",
                  detail: "NAVTTC accredited certifications structured according to modern workplace standards.",
                },
                {
                  num: "08",
                  title: "Commitment to youth empowerment and sustainable development",
                  detail: "A social and institutional mission dedicated to generating long-term financial independence for Pakistan's youth.",
                },
              ].map((reason) => (
                <div
                  key={reason.num}
                  className="flex items-start gap-6 pb-8 border-b border-[#E2E8F0]"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#5F2DEE] tabular-nums shrink-0 mt-0.5">
                    {reason.num}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A] mb-2 leading-snug">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                      {reason.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Integrated Approved Closing Taglines */}
            <div className="bg-[#0B1F3A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xs">
              <p className="text-xl sm:text-2xl font-extrabold mb-2 text-white [text-wrap:balance]">
                &ldquo;Where Education Meets Industry and Skills Become Careers&rdquo;
              </p>
              <p className="text-sm sm:text-base text-slate-300 [text-wrap:balance]">
                Transforming Learning into Earning through Technology, Innovation and Entrepreneurship
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6 — OUR TEAM (Distinct Institutional Governance Framework)       */}
        {/* ========================================================================= */}
        {/* 
          CONTENT NOTE: 
          Individual team member data has not yet been supplied and must not be fabricated. 
          This section maintains the approved institutional governance framework. 
        */}
        <section id="team" className="section-padding bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            
            {/* Header */}
            <div className="max-w-3xl mb-14 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-6 shadow-2xs">
                <Users2 className="w-3.5 h-3.5 text-[#5F2DEE]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                  Section 6 · Leadership & Governance
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                Our Team
              </h2>
              <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
                Governed by the leadership of WISE Education Society and guided by senior industry practitioners, technical directors, and incubation mentors.
              </p>
            </div>

            {/* Distinct Governance Framework Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              <div className="bg-[#0B1F3A] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-[#FFB347] flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFB347] block mb-1">
                    Governance Tier I
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Board of Governors
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mb-4">
                    WISE Education Society
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed [text-wrap:pretty]">
                    Providing executive oversight, institutional policy guidance, academic standards, and long-term strategic growth direction.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/15 text-xs font-bold text-[#FFB347]">
                  Executive Oversight
                </div>
              </div>

              <div className="bg-[#5F2DEE] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 text-white flex items-center justify-center mb-6">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90 block mb-1">
                    Governance Tier II
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Technical Leadership
                  </h3>
                  <p className="text-xs font-semibold text-white/90 mb-4">
                    Engineering & Solutions
                  </p>
                  <p className="text-sm text-white/95 leading-relaxed [text-wrap:pretty]">
                    Leading corporate technology contracts, architecture reviews, software engineering sprints, and production quality benchmarks.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/25 text-xs font-bold text-white">
                  Commercial Delivery
                </div>
              </div>

              <div className="bg-[#0B1F3A] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-[#5F2DEE] flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7 text-[#FFB347]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFB347] block mb-1">
                    Governance Tier III
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Incubation Mentors
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mb-4">
                    Applied Practice Labs
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed [text-wrap:pretty]">
                    Guiding student founders, conducting code reviews, providing career counseling, and fostering startup venture ideation.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/15 text-xs font-bold text-[#FFB347]">
                  Student Acceleration
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
