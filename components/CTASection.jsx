import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="site-container">
        
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F1F5F9] border border-[#E2E8F0] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#5F2DEE]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                Take the Next Step
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
              Ready to Transform Your Learning or Accelerate Your Technology?
            </h2>

            {/* Subtext */}
            <p className="text-base text-[#4F5B6A] leading-relaxed mb-8 max-w-2xl">
              Whether you are an aspiring technologist seeking practical skills and venture incubation, or a business looking for dedicated engineering services, <span className="whitespace-nowrap">WISE-Teck</span> provides the direct pathway to results.
            </p>

            {/* Maximum 2 CTAs: Primary Orange (#FFB347), Secondary Navy Outline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#incubators"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-[#FFB347] text-[#0B1F3A] font-semibold text-base shadow-xs hover:bg-[#FFA21A] transition-colors"
              >
                <span>Join a Program</span>
                <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-white border border-[#0B1F3A] text-[#0B1F3A] font-semibold text-base hover:bg-[#0B1F3A]/5 transition-colors"
              >
                <span>Start a Project</span>
              </a>
            </div>

            {/* Small note */}
            <p className="text-xs text-[#94A3B8] mt-6">
              Admissions Open for New Cohorts • Inquire for Corporate Engagements
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
