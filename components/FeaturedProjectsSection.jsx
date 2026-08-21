import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function FeaturedProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Workflow & Academic Portal",
      category: "Software & EdTech Engineering",
      deliverable: "Custom Learning & Grading Architecture",
      result: "Deployed across campus environments to streamline attendance, coursework, and automated grading workflows with high reliability.",
      image: "/images/services/employee work.jpeg",
      tags: ["Next.js", "PostgreSQL", "Role-Based Access"],
    },
    {
      id: 2,
      title: "Commercial Retail & Multi-Vendor Storefront",
      category: "E-Commerce & Platform Solutions",
      deliverable: "Omnichannel Shopify & Web Engine",
      result: "High-performance commercial digital storefront integrated with automated inventory tracking and localized payment gateways.",
      image: "/images/pathway/training room.jpeg",
      tags: ["Shopify Liquid", "Payment APIs", "SEO Optimized"],
    },
    {
      id: 3,
      title: "Corporate Operations & Data Analytics Suite",
      category: "AI & Business Automation",
      deliverable: "Automated Reporting Dashboard",
      result: "Centralized KPI data pipelines and executive reporting tools engineered for real-time institutional performance metrics.",
      image: "/images/impact/meeting room 2.jpeg",
      tags: ["Python", "PowerBI / SQL", "Automation"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white border-b border-[#E2E8F0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5F2DEE]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                Case Studies & Deliverables
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#0B1F3A] leading-tight mb-3 [text-wrap:balance]">
              Featured Client & Incubation Projects
            </h2>
            <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed">
              Every project developed at <span className="whitespace-nowrap">WISE-Teck</span> is governed by professional code quality, security audits, and real-world commercial viability.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-bold text-[#0B1F3A] bg-[#F8FAFC] px-4 py-2.5 rounded-lg border border-[#E2E8F0] self-start md:self-auto shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#5F2DEE]" />
            <span>Verified Commercial Deliverables</span>
          </div>
        </div>

        {/* 3 Substantial Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-md group h-full"
            >
              <div>
                {/* 16:9 Image container with subtle hover scale */}
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
                <div className="p-8">
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

                  {/* Tags with Uniform Sizing */}
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

              {/* Card Bottom */}
              <div className="px-8 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                <span>Production Stage</span>
                <span className="text-[#5F2DEE] flex items-center gap-1">
                  <span className="whitespace-nowrap">WISE-Teck</span> Lab
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
