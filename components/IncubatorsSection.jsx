import React from "react";
import { ArrowRight } from "lucide-react";
import {
  SoftwareDevColorIcon,
  AIDataColorIcon,
  MarketingColorIcon,
  EcommerceColorIcon,
  DesignVideoColorIcon,
  StartupColorIcon,
} from "@/components/OriginalIcons";

/**
 * Section 5 — Our Incubators
 *
 * Exact 6 Incubators (as approved in Structure document):
 * - Software Development Incubator
 * - Artificial Intelligence & Data Science Incubator
 * - Digital Marketing Incubator
 * - E-Commerce Incubator
 * - Graphic Design & Video Production Incubator
 * - Startup & Entrepreneurship Incubator
 *
 * Rules:
 * - Max 3 cards per row on desktop (3x2 grid)
 * - Generous internal card padding (32-40px: p-8 sm:p-10)
 * - Centered icon + heading composition
 * - Identical card height per row via vertical centering and consistent layout
 */

export default function IncubatorsSection() {
  const incubators = [
    {
      id: "software",
      title: "Software Development Incubator",
      icon: SoftwareDevColorIcon,
      focus: "Full-Stack • Mobile • Cloud Microservices",
      description:
        "Equipping developers to engineer enterprise web platforms, native mobile applications, and scalable microservices architectures.",
    },
    {
      id: "ai-data",
      title: "Artificial Intelligence & Data Science Incubator",
      icon: AIDataColorIcon,
      focus: "Machine Learning • Data Analytics • Automation",
      description:
        "Training technical practitioners in production AI modeling, automated data pipelines, predictive intelligence, and commercial integrations.",
    },
    {
      id: "marketing",
      title: "Digital Marketing Incubator",
      icon: MarketingColorIcon,
      focus: "Performance Marketing • SEO • Growth",
      description:
        "Mastering data-driven customer acquisition, conversion optimization, search ranking architecture, and enterprise digital campaigns.",
    },
    {
      id: "ecommerce",
      title: "E-Commerce Incubator",
      icon: EcommerceColorIcon,
      focus: "Shopify • Multi-Vendor • Global Marketplaces",
      description:
        "Building turnkey commercial storefronts, dropshipping ecosystems, automated inventory synchronization, and digital retail platforms.",
    },
    {
      id: "design-video",
      title: "Graphic Design & Video Production Incubator",
      icon: DesignVideoColorIcon,
      focus: "UI/UX • Commercial Video • Visual Identity",
      description:
        "Producing high-fidelity UI/UX design systems, commercial video production, interactive motion assets, and brand design collateral.",
    },
    {
      id: "startup",
      title: "Startup & Entrepreneurship Incubator",
      icon: StartupColorIcon,
      focus: "Venture Ideation • Product Validation • Seed Scale",
      description:
        "Guiding student founders through rapid product validation, legal governance, unit economics, investor pitch decks, and commercial launch.",
    },
  ];

  return (
    <section id="incubators" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 5 · Specialized Incubation Tracks
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            Our Six Technology Incubators
          </h2>
          <p className="text-lg text-[#4F5B6A] leading-relaxed max-w-[52ch]">
            Operating from our centralized facilities in Lahore, <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span> provides dedicated physical workstations, specialized mentorship, and compute infrastructure across six high-growth domains.
          </p>
        </div>

        {/* 3x2 Grid - Substantial cards (Max 3 per row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {incubators.map((incubator) => {
            const IconComponent = incubator.icon;
            return (
              <div
                key={incubator.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-sm group h-full text-center"
              >
                <div>
                  {/* Centered Original Full-Color Icon */}
                  <div className="flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-14 h-14" />
                  </div>

                  {/* Centered Badge */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#5F2DEE] bg-[#5F2DEE]/10 px-3 py-1 rounded-md">
                      Active Lab Track
                    </span>
                  </div>

                  {/* Centered Heading with Consistent Row Height */}
                  <div className="min-h-[3.75rem] flex items-center justify-center mb-2">
                    <h3 className="text-xl font-bold text-[#0B1F3A] leading-snug [text-wrap:balance]">
                      {incubator.title}
                    </h3>
                  </div>

                  {/* Centered Subtitle */}
                  <p className="text-xs font-semibold text-[#64748B] tracking-wide mb-4">
                    {incubator.focus}
                  </p>

                  {/* Centered Description with Strict Text Width */}
                  <p className="text-sm text-[#4F5B6A] leading-relaxed max-w-xs sm:max-w-sm mx-auto mb-6 [text-wrap:pretty]">
                    {incubator.description}
                  </p>
                </div>

                {/* Footer with Balanced Alignment */}
                <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-bold text-[#0B1F3A] group-hover:text-[#5F2DEE] transition-colors"
                  >
                    <span>Inquire for Admission</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <span className="text-[#94A3B8] font-medium">Lahore Campus</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
