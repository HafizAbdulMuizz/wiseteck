import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck, Users2, CheckCircle2 } from "lucide-react";
import {
  SoftwareDevColorIcon,
  WebDevColorIcon,
  MobileDevColorIcon,
  AIDataColorIcon,
  AutomationColorIcon,
  UIUXColorIcon,
  MarketingColorIcon,
  WordPressColorIcon,
  ShopifyColorIcon,
  EcommerceColorIcon,
} from "@/components/OriginalIcons";

export const metadata = {
  title: "Corporate Technology Services | WISE-Teck — Education, Incubation & Enterprise",
  description:
    "Explore the full suite of 11 commercial technology and software engineering services delivered by WISE-Teck in Lahore, Pakistan.",
};

/*
  WISE-TECK CORPORATE TECHNOLOGY SERVICES PAGE
  ============================================
  LOCKED STRUCTURE (PER APPROVED STRUCTURE DOCUMENT):
  1. Page Header (Unnumbered framing)
  2. ONE Services Section (4 internal groups covering all 11 approved services)
     - Closes with the approved "Our Professional Team" supporting content inside this section.

  CONTENT RULE:
  Strictly uses verbatim approved content from the Profile document and Home page.
  Zero invented claims, zero extra sections.
*/

export default function ServicesPage() {
  const serviceGroups = [
    {
      groupTitle: "Software & Web Engineering",
      groupBadge: "Engineering Division",
      services: [
        {
          name: "Software Development",
          desc: "Bespoke enterprise software, microservices architectures, and high-performance backend systems.",
          icon: SoftwareDevColorIcon,
        },
        {
          name: "Web Development",
          desc: "Modern responsive web applications built with Next.js, React, Node, and secure API architectures.",
          icon: WebDevColorIcon,
        },
        {
          name: "Mobile Application Development",
          desc: "Native and cross-platform mobile apps for iOS and Android with optimized UX and offline capabilities.",
          icon: MobileDevColorIcon,
        },
      ],
    },
    {
      groupTitle: "AI, Data & Automation",
      groupBadge: "Intelligent Systems",
      services: [
        {
          name: "Artificial Intelligence & Machine Learning Solutions",
          desc: "Predictive modeling, natural language processing, LLM workflows, and custom AI pipeline integrations.",
          icon: AIDataColorIcon,
        },
        {
          name: "Data Analytics & Business Intelligence",
          desc: "Interactive reporting dashboards, data warehouse modeling, and actionable business intelligence.",
          icon: AIDataColorIcon,
        },
        {
          name: "Business Automation Services",
          desc: "End-to-end workflow automation, robotic process automation (RPA), and enterprise system integration.",
          icon: AutomationColorIcon,
        },
      ],
    },
    {
      groupTitle: "Design & Digital Growth",
      groupBadge: "Design & Media",
      services: [
        {
          name: "UI/UX Designing & Prototyping",
          desc: "User research, wireframing, high-fidelity Figma prototypes, and complete enterprise design systems.",
          icon: UIUXColorIcon,
        },
        {
          name: "Digital Marketing Services",
          desc: "Targeted PPC campaigns, search engine optimization, content strategy, and multi-channel lead generation.",
          icon: MarketingColorIcon,
        },
      ],
    },
    {
      groupTitle: "E-Commerce & Digital Commerce",
      groupBadge: "Commerce Division",
      services: [
        {
          name: "WordPress Development",
          desc: "Custom theme creation, headless CMS implementations, speed optimization, and security audits.",
          icon: WordPressColorIcon,
        },
        {
          name: "Shopify Solutions",
          desc: "Turnkey Shopify store builds, custom liquid apps, payment integrations, and scaling.",
          icon: ShopifyColorIcon,
        },
        {
          name: "E-Commerce Solutions",
          desc: "Omnichannel retail systems, multi-currency checkout, inventory sync, and custom digital marketplaces.",
          icon: EcommerceColorIcon,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4F5B6A]">
      {/* Global Minimalist Header Navigation */}
      <Navbar />

      <main className="flex-1">

        {/* ========================================================================= */}
        {/* PAGE HEADER (Standard Unnumbered Framing Band)                            */}
        {/* ========================================================================= */}
        <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="site-container">
            <div className="max-w-4xl">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                  Commercial Delivery · 11 Specialized Services
                </span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1F3A] leading-[1.15] tracking-tight mb-6 [text-wrap:balance]">
                Corporate Technology Services
              </h1>

              {/* Exact Approved Intro Paragraph Verbatim */}
              <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-3xl [text-wrap:pretty]">
                <span className="whitespace-nowrap font-bold text-[#0B1F3A]">WISE-Teck</span> is a trusted technology partner providing innovative, reliable, and result-oriented digital solutions to businesses, startups, educational institutions, and organizations. Backed by a team of experienced software engineers, developers, designers, AI specialists, and digital professionals, WISE-Teck delivers end-to-end technology services that help organizations accelerate digital transformation, improve operational efficiency, and achieve sustainable growth.
              </p>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SINGLE SERVICES SECTION (4 Internal Groups on Dark Navy + Team Close)     */}
        {/* ========================================================================= */}
        <section id="services" className="section-padding bg-[#0B1F3A] text-white relative">
          <div className="site-container">

            {/* Section Lead Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB347] block mb-1">
                  Technology Portfolio
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Comprehensive Enterprise &amp; Digital Solutions
                </h2>
              </div>

              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/15 text-xs text-slate-200 self-start sm:self-auto">
                <ShieldCheck className="w-4 h-4 text-[#5F2DEE]" />
                <span>Production &amp; Commercial SLA Benchmark</span>
              </div>
            </div>

            {/* 4 Grouped Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
              {serviceGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Group Header */}
                    <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {group.groupTitle}
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-white/10 text-slate-200">
                        {group.groupBadge}
                      </span>
                    </div>

                    {/* Sub-services list with Original Full-Color Icons */}
                    <div className="space-y-6">
                      {group.services.map((service, sIdx) => {
                        const IconComp = service.icon;
                        return (
                          <div key={sIdx} className="flex items-start gap-4">
                            <div className="shrink-0 mt-0.5 flex items-center justify-center">
                              <IconComp className="w-8 h-8" />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-white mb-1">
                                {service.name}
                              </h4>
                              <p className="text-sm text-slate-300 leading-relaxed [text-wrap:pretty]">
                                {service.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Group Footer indicator */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2.5 text-xs text-slate-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#5F2DEE]" />
                    <span>Supervised by Senior Technical Leads &amp; Industry Practitioners</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ========================================================================= */}
            {/* CLOSING CONTENT: OUR PROFESSIONAL TEAM (Inside this single section)       */}
            {/* ========================================================================= */}
            <div className="bg-[#F8FAFC] text-[#0B1F3A] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E2E8F0] shadow-sm">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#5F2DEE] text-xs font-bold uppercase tracking-wider">
                    <Users2 className="w-3.5 h-3.5" />
                    <span>Institutional Capability</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">
                    Our Professional Team
                  </h3>

                  {/* Exact Approved Team Paragraph Verbatim */}
                  <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                    <span className="whitespace-nowrap font-bold text-[#0B1F3A]">WISE-Teck</span> is powered by a highly experienced team of software engineers, AI specialists, web developers, mobile application developers, UI/UX designers, data analysts, digital marketers, graphic designers, project managers, and business consultants who are committed to delivering innovative and high-quality technology solutions.
                  </p>
                </div>

                <div className="shrink-0 self-stretch md:self-auto flex md:flex-col justify-end">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0B1F3A] text-white font-bold text-sm hover:bg-[#163259] transition-all shadow-sm hover:shadow-md shrink-0 w-full md:w-auto"
                  >
                    <span>Initiate a Project</span>
                    <ArrowRight className="w-4 h-4 text-[#FFB347]" />
                  </Link>
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
