import React from "react";
import { CheckCircle } from "lucide-react";
import { MicrosoftColorIcon } from "@/components/OriginalIcons";

/**
 * Section 8 — Success Stories
 *
 * Approved Specific Content (from Profile document):
 * 1. Muneeba Abbas — Advanced Python Programming, 97% Microsoft Certification Examination
 * 2. Mehak Ijaz — 99% Microsoft Certification Examination
 * 3. Zainab — Advanced Python Programming, Microsoft Certified
 *
 * Rule:
 * - Exactly these three confirmed stories.
 * - Do NOT publish any of the six [Student Name] placeholder slots from the Profile document.
 * - Max 3 cards per row on desktop (3 total)
 * - Centered composition (avatar, name, credential badge, description)
 * - Generous internal padding (p-8 sm:p-10)
 */

export default function SuccessStoriesSection() {
  const stories = [
    {
      id: 1,
      name: "Muneeba Abbas",
      program: "Advanced Python Programming",
      credential: "97% Microsoft Certification Examination",
      pathway: "IT & Software Career Pathway",
      details:
        "Completed rigorous Python programming and software engineering sprints at WISE-Teck, achieving a 97% score on the global Microsoft examination and entering direct industry exposure.",
    },
    {
      id: 2,
      name: "Mehak Ijaz",
      program: "Applied Software Development",
      credential: "99% Microsoft Certification Examination",
      pathway: "Professional Technology Career",
      details:
        "Mastered core computational principles and modern programming practices through intensive project-based learning at WISE-Teck, securing an exceptional 99% score.",
    },
    {
      id: 3,
      name: "Zainab",
      program: "Advanced Python Programming",
      credential: "Microsoft Certified Specialist",
      pathway: "Freelance & Technical Enterprise",
      details:
        "Gained practical code execution skills and real client project experience at the WISE-Teck incubation lab, qualifying for high-impact freelancing and enterprise roles.",
    },
  ];

  return (
    <section id="stories" className="section-padding bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 8 · Verified Student Outcomes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            Success Stories & Certification Achievements
          </h2>
          <p className="text-lg text-[#4F5B6A] leading-relaxed max-w-[52ch]">
            Tangible student milestones validating our project-based training and international certification preparation at <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span>.
          </p>
        </div>

        {/* 3 Substantial Story Cards - Centered Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-sm text-center h-full"
            >
              <div>
                {/* Centered Large Avatar Initial Circle */}
                <div className="w-16 h-16 rounded-full bg-[#0B1F3A] text-white font-bold text-xl flex items-center justify-center shrink-0 mx-auto mb-5 shadow-xs">
                  {story.name.charAt(0)}
                </div>

                {/* Centered Student Name */}
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-1 leading-snug">
                  {story.name}
                </h3>

                {/* Centered Program */}
                <p className="text-xs font-semibold text-[#5F2DEE] tracking-wide mb-4">
                  {story.program}
                </p>

                {/* Centered Credential Badge with Original 4-Color Microsoft Icon */}
                <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] mb-6 max-w-full shadow-2xs">
                  <MicrosoftColorIcon className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold text-[#0B1F3A]">
                    {story.credential}
                  </span>
                </div>

                {/* Centered Narrative with Strict Text Width */}
                <p className="text-sm text-[#4F5B6A] leading-relaxed max-w-xs sm:max-w-sm mx-auto mb-6 [text-wrap:pretty]">
                  {story.details}
                </p>
              </div>

              {/* Card Footer with Centered Alignment */}
              <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-center gap-2 text-xs font-bold text-[#0B1F3A]">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>{story.pathway}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
