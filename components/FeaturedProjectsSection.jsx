import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

/**
 * Section 7 — Featured Projects
 *
 * Approved Categories (Structure document):
 * Corporate Projects · Student Projects · Websites Developed · Mobile Applications ·
 * AI & Data Science Projects · Case Studies · Client Success Stories
 *
 * Rules:
 * - Curated minimal presentation: exactly 3 substantial case study cards (max 3 per row on desktop)
 * - Approved imagery only (from public/images/home/)
 * - Equal height across cards
 * - Generous internal padding (p-8 sm:p-10)
 */

export default function FeaturedProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Academic & Workflow Management Portal",
      category: "Corporate Projects",
      deliverable: "Web Application & Database System",
      result:
        "Centralized student records, attendance automation, and course administration workflows engineered with role-based security.",
      image: "/images/home/computer using.jpeg",
      tags: ["Next.js", "PostgreSQL", "Role-Based Access"],
    },
    {
      id: 2,
      title: "Commercial Multi-Vendor Retail & E-Commerce Platform",
      category: "Websites Developed",
      deliverable: "Omnichannel Commerce Engine",
      result:
        "High-performance digital storefront integrated with automated inventory tracking, localized checkout, and payment gateway APIs.",
      image: "/images/home/training.jpeg",
      tags: ["Shopify Liquid", "Payment APIs", "SEO Architecture"],
    },
    {
      id: 3,
      title: "Institutional Performance & Data Analytics Dashboard",
      category: "AI & Data Science Projects",
      deliverable: "Business Intelligence Suite",
      result:
        "Custom analytics pipelines and interactive reporting tools delivering real-time institutional metrics and KPI tracking.",
      image: "/images/home/computer lab.jpeg",
      tags: ["Python", "PowerBI / SQL", "Automated Pipelines"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white border-b border-[#E2E8F0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                Section 7 · Case Studies & Deliverables
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-3 [text-wrap:balance]">
              Featured Client & Incubation Projects
            </h2>
            <p className="text-lg text-[#4F5B6A] leading-relaxed">
              Every deliverable developed at <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span> is governed by commercial code quality, security standards, and real-world viability.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0] self-start md:self-auto shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#5F2DEE]" />
            <span>Verified Commercial Deliverables</span>
          </div>
        </div>

        {/* 3 Substantial Project Cards (Max 3 per row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-md group h-full"
            >
              <div>
                {/* 16:9 Image Container */}
                <div className="relative w-full aspect-video bg-[#F1F5F9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-md">
                    {project.category}
                  </div>
                </div>

                {/* Card Body with Generous Padding */}
                <div className="p-8 sm:p-9">
                  <div className="min-h-[3.75rem] flex items-center mb-2">
                    <h3 className="text-xl font-bold text-[#0B1F3A] leading-snug group-hover:text-[#5F2DEE] transition-colors [text-wrap:balance]">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs font-semibold text-[#5F2DEE] mb-3">
                    {project.deliverable}
                  </p>

                  <p className="text-sm text-[#4F5B6A] leading-relaxed mb-6 [text-wrap:pretty]">
                    {project.result}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F1F5F9]">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold bg-[#F8FAFC] text-[#4F5B6A] px-2.5 py-1 rounded-md border border-[#E2E8F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-8 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                <span>Production Standard</span>
                <span className="text-[#5F2DEE] flex items-center gap-1">
                  WISE-Teck Lab
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
