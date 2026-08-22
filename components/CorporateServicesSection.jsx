import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
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

/**
 * Section 6 — Corporate Technology Services
 *
 * Confirmed 11 Services (from approved Profile document):
 * 1. Software Development
 * 2. Web Development
 * 3. Mobile Application Development
 * 4. Artificial Intelligence & Machine Learning Solutions
 * 5. Data Analytics & Business Intelligence
 * 6. Business Automation Services (exact Profile name)
 * 7. UI/UX Designing & Prototyping
 * 8. Digital Marketing Services
 * 9. WordPress Development
 * 10. Shopify Solutions (exact Profile name)
 * 11. E-Commerce Solutions (exact Profile item)
 *
 * Rules:
 * - Large-scale grouped/editorial presentation (not 11 tiny cards)
 * - Communicate WISE-Teck as a genuine corporate technology services firm
 * - Left alignment is permitted for horizontal list-style rows inside grouped cards
 */

export default function CorporateServicesSection() {
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
    <section id="services" className="section-padding bg-[#0B1F3A] text-white relative">
      <div className="site-container">
        
        {/* Header with Commercial Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5F2DEE]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/90">
                Section 6 · Corporate Technology Division
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight mb-4 [text-wrap:balance]">
              Professional Technology & Software Services
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              In addition to incubation, <span className="whitespace-nowrap font-semibold text-white">WISE-Teck</span> operates as a dedicated commercial technology and digital solutions company — engineering high-reliability software, AI systems, and e-commerce platforms for national and international businesses.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-[#0B1F3A] font-bold text-base hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
            </a>
          </div>
        </div>

        {/* 4 Grouped Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
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
                <ShieldCheck className="w-4 h-4 text-[#5F2DEE]" />
                <span>Supervised by Senior Technical Leads & Industry Practitioners</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
