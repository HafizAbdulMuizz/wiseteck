import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Section 10 — Call to Action
 *
 * Rules:
 * - Simple, spacious, confident, focused
 * - Addresses both audiences: learners (incubation) and businesses (corporate tech services)
 * - Two distinct buttons: Primary Orange + Secondary Outline
 */

export default function CTASection() {
  return (
    <section className="section-padding bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="site-container">
        
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-10 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto shadow-xs relative">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#5F2DEE]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 10 · Next Steps
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            Ready to Build Your Future in Technology?
          </h2>

          {/* Dual Audience Copy */}
          <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-2xl mx-auto mb-10 [text-wrap:pretty]">
            Whether you are a student seeking practical skills and venture incubation, or an enterprise looking for reliable software engineering and AI solutions — <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span> is your platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#FFB347] text-[#0B1F3A] font-bold text-base shadow-sm hover:bg-[#FFA21A] transition-colors"
            >
              <span>Apply for Incubation</span>
              <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border-2 border-[#0B1F3A] text-[#0B1F3A] font-bold text-base hover:bg-[#0B1F3A] hover:text-white transition-colors"
            >
              <span>Hire WISE-Teck Services</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
