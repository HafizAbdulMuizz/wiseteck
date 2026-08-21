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

export default function CorporateServicesSection() {
  const serviceGroups = [
    {
      groupTitle: "Software & Web Engineering",
      groupBadge: "Engineering",
      services: [
        {
          name: "Software Development",
          desc: "Bespoke enterprise software, microservices architectures, and high-performance backend systems.",
          icon: SoftwareDevColorIcon,
        },
        {
          name: "Web Development",
          desc: "Modern responsive web applications built with Next.js, React, Node, and secure REST/GraphQL APIs.",
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
      groupTitle: "AI, Data & Business Automation",
      groupBadge: "Intelligent Systems",
      services: [
        {
          name: "AI & Machine Learning Solutions",
          desc: "Predictive models, natural language processing, and custom AI pipeline integration.",
          icon: AIDataColorIcon,
        },
        {
          name: "Data Analytics & Business Intelligence",
          desc: "Interactive dashboards, data warehouse modeling, and actionable business reporting.",
          icon: AIDataColorIcon,
        },
        {
          name: "Business Automation Services",
          desc: "Workflow automation, robotic process automation (RPA), and enterprise system integration.",
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
          desc: "User research, wireframing, high-fidelity Figma prototypes, and complete design systems.",
          icon: UIUXColorIcon,
        },
        {
          name: "Digital Marketing Services",
          desc: "Targeted PPC campaigns, search engine optimization, content strategy, and social lead generation.",
          icon: MarketingColorIcon,
        },
      ],
    },
    {
      groupTitle: "Commerce & Platform Solutions",
      groupBadge: "E-Commerce",
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
          desc: "Omnichannel retail systems, multi-currency checkout, inventory sync, and custom marketplaces.",
          icon: EcommerceColorIcon,
        },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#0B1F3A] text-white relative">
      <div className="site-container">
        
        {/* Header with Title & Commercial Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 pb-8 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 border border-white/15 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5F2DEE]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Corporate Technology Division
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-white leading-tight mb-3 [text-wrap:balance]">
              Professional Technology & Software Services
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              In addition to incubation, <span className="whitespace-nowrap">WISE-Teck</span> operates as a dedicated commercial software and technology partner. We engineer high-reliability digital solutions for national and international businesses.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#0B1F3A] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
            </a>
          </div>
        </div>

        {/* Grouped Multi-Column Presentation with Original Full-Color Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {serviceGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-9 flex flex-col justify-between h-full"
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
                <div className="space-y-5">
                  {group.services.map((service, sIdx) => {
                    const IconComp = service.icon;
                    return (
                      <div key={sIdx} className="flex items-start gap-4">
                        <div className="shrink-0 mt-0.5 flex items-center justify-center">
                          <IconComp className="w-9 h-9" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white mb-0.5">
                            {service.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed [text-wrap:pretty]">
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
