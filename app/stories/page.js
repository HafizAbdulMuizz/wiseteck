import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Rocket, MessageSquareQuote, Video, ShieldCheck, ArrowRight } from "lucide-react";
import { MicrosoftColorIcon } from "@/components/OriginalIcons";

export const metadata = {
  title: "Success Stories | WISE-Teck — Education, Incubation & Enterprise",
  description:
    "Explore verified student achievements, Microsoft certifications, and career outcomes from WISE-Teck's incubation and skills programs in Lahore, Pakistan.",
};

/*
  WISE-TECK SUCCESS STORIES PAGE
  ==============================
  LOCKED 5-SECTION ARCHITECTURE (EXACTLY 5 SECTIONS, NO MORE, NO LESS):
  1. Students Working in Leading Companies (Real Content - 2 Stories)
  2. Successful Freelancers (Real Content - 1 Story)
  3. Entrepreneurs and Startup Founders (Holding Line - Dark Navy Band)
  4. Student Testimonials (Holding Line)
  5. Video Success Stories (Holding Line)
*/

export default function SuccessStoriesPage() {
  const companyStudents = [
    {
      id: "muneeba-abbas",
      name: "Muneeba Abbas",
      program: "Advanced Python Programming",
      credential: "97% Microsoft Certification Examination",
      pathway: "IT & Software Career Pathway",
      details:
        "Completed rigorous Python programming and software engineering sprints at WISE-Teck, achieving a 97% score on the global Microsoft examination and entering direct industry exposure.",
    },
    {
      id: "mehak-ijaz",
      name: "Mehak Ijaz",
      program: "Applied Software Development",
      credential: "99% Microsoft Certification Examination",
      pathway: "Professional Technology Career",
      details:
        "Mastered core computational principles and modern programming practices through intensive project-based learning at WISE-Teck, securing an exceptional 99% score.",
    },
  ];

  const freelancerStudent = {
    name: "Zainab",
    program: "Advanced Python Programming",
    credential: "Microsoft Certified Specialist",
    pathway: "Freelance & Technical Enterprise",
    details:
      "Gained practical code execution skills and real client project experience at the WISE-Teck incubation lab, qualifying for high-impact freelancing and enterprise roles.",
  };

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
                  Verified Student Outcomes · Certifications
                </span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1F3A] leading-[1.15] tracking-tight mb-4 [text-wrap:balance]">
                Success Stories
              </h1>

              {/* Established One-Line Subtitle */}
              <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-[54ch]">
                Verified outcomes from <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>&apos;s incubation and skills programs.
              </p>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1 — STUDENTS WORKING IN LEADING COMPANIES (2 Stories)             */}
        {/* ========================================================================= */}
        <section id="leading-companies" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-10 lg:mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                  Section 1 · Industry Placement
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1F3A] leading-tight mb-2 [text-wrap:balance]">
                Students Working in Leading Companies
              </h2>
            </div>

            {/* 2 Symmetrical Story Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {companyStudents.map((story) => (
                <div
                  key={story.id}
                  className="bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-xs hover:border-[#CBD5E1] transition-all duration-300 group text-center"
                >
                  <div>
                    {/* Centered Large Avatar Initial Circle */}
                    <div className="w-16 h-16 rounded-full bg-[#0B1F3A] text-white font-bold text-xl flex items-center justify-center shrink-0 mx-auto mb-5 shadow-xs">
                      {story.name.charAt(0)}
                    </div>

                    {/* Student Name */}
                    <h3 className="text-2xl font-bold text-[#0B1F3A] mb-1 leading-snug">
                      {story.name}
                    </h3>

                    {/* Program */}
                    <p className="text-xs font-semibold text-[#5F2DEE] tracking-wide mb-5">
                      {story.program}
                    </p>

                    {/* Microsoft Credential Badge with Authentic 4-Color Tiles */}
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6 max-w-full shadow-2xs">
                      <MicrosoftColorIcon className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold text-[#0B1F3A]">
                        {story.credential}
                      </span>
                    </div>

                    {/* Verbatim Description */}
                    <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed max-w-md mx-auto mb-8 [text-wrap:pretty]">
                      {story.details}
                    </p>
                  </div>

                  {/* Card Meta Footer */}
                  <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-center gap-2 text-xs font-bold text-[#0B1F3A]">
                    <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0" />
                    <span>{story.pathway}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2 — SUCCESSFUL FREELANCERS (1 Story)                              */}
        {/* ========================================================================= */}
        <section id="freelancers" className="section-padding bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-10 lg:mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#5F2DEE] text-white font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE]">
                  Section 2 · Independent Practice
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1F3A] leading-tight mb-2 [text-wrap:balance]">
                Successful Freelancers
              </h2>
            </div>

            {/* Editorial Story Card (Full Container Width Layout) */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs hover:border-[#CBD5E1] transition-all duration-300 group text-center max-w-3xl mx-auto">
              <div>
                {/* Centered Large Avatar Initial Circle */}
                <div className="w-16 h-16 rounded-full bg-[#5F2DEE] text-white font-bold text-xl flex items-center justify-center shrink-0 mx-auto mb-5 shadow-xs">
                  {freelancerStudent.name.charAt(0)}
                </div>

                {/* Student Name */}
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-1 leading-snug">
                  {freelancerStudent.name}
                </h3>

                {/* Program */}
                <p className="text-xs font-semibold text-[#5F2DEE] tracking-wide mb-5">
                  {freelancerStudent.program}
                </p>

                {/* Microsoft Credential Badge with Authentic 4-Color Tiles */}
                <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] mb-6 max-w-full shadow-2xs">
                  <MicrosoftColorIcon className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold text-[#0B1F3A]">
                    {freelancerStudent.credential}
                  </span>
                </div>

                {/* Verbatim Description */}
                <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed max-w-xl mx-auto mb-8 [text-wrap:pretty]">
                  {freelancerStudent.details}
                </p>
              </div>

              {/* Card Meta Footer */}
              <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-center gap-2 text-xs font-bold text-[#0B1F3A]">
                <CheckCircle2 className="w-4 h-4 text-[#5F2DEE] shrink-0" />
                <span>{freelancerStudent.pathway}</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 — ENTREPRENEURS AND STARTUP FOUNDERS (Dark Navy Highlight Band) */}
        {/* ========================================================================= */}
        {/* PENDING: no approved content yet */}
        <section id="entrepreneurs" className="py-14 lg:py-16 bg-[#0B1F3A] text-white border-b border-[#163259] relative">
          <div className="site-container">
            <div className="bg-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#FFB347] text-[#0B1F3A] font-extrabold text-xs flex items-center justify-center">
                    03
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFB347]">
                    Section 3 · Venture Creation
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 [text-wrap:balance]">
                  Entrepreneurs and Startup Founders
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
                  Startup founders emerging from WISE-Teck&apos;s incubation and entrepreneurship support programs.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2.5 text-xs font-bold text-[#0B1F3A] bg-[#FFB347] px-4 py-2.5 rounded-xl shadow-xs">
                <Rocket className="w-4 h-4 text-[#0B1F3A]" />
                <span>Venture Incubation</span>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 — STUDENT TESTIMONIALS (Structured Holding Section)             */}
        {/* ========================================================================= */}
        {/* PENDING: no approved content yet */}
        <section id="testimonials" className="py-12 lg:py-14 bg-white border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#5F2DEE] text-white font-bold text-xs flex items-center justify-center">
                    04
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5F2DEE]">
                    Section 4 · Student Testimonials
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2 [text-wrap:balance]">
                  Student Testimonials
                </h2>
                <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  First-hand accounts from students who completed WISE-Teck&apos;s incubation and skills programs.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                <MessageSquareQuote className="w-4 h-4 text-[#5F2DEE]" />
                <span>Student Feedback</span>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5 — VIDEO SUCCESS STORIES (Structured Holding Section)            */}
        {/* ========================================================================= */}
        {/* PENDING: no approved content yet */}
        <section id="video-stories" className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center">
                    05
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                    Section 5 · Video Success Stories
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2 [text-wrap:balance]">
                  Video Success Stories
                </h2>
                <p className="text-sm sm:text-base text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  Video accounts of student outcomes across WISE-Teck&apos;s incubation tracks.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-500 bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0]">
                <Video className="w-4 h-4 text-[#0B1F3A]" />
                <span>Video Documentation</span>
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
