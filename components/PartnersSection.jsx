import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

/**
 * Section 9 — Partners & Clients
 *
 * Approved Categories (Structure document):
 * - WISE Education Society (Official logo asset)
 * - NAVTTC (Official logo asset)
 * - PSDA (Regulatory Alignment)
 * - PSDF (Skills Development Partner)
 * - Corporate Clients & Industry Partners (Merged to reduce visual fragmentation)
 *
 * Rules:
 * - Official logos rendered in 100% ORIGINAL COLORS
 * - Clean typography for badges without logo assets
 * - Spacious layout, generous padding (p-8)
 */

export default function PartnersSection() {
  const partners = [
    {
      name: "WISE Education Society",
      type: "Parent Institutional Body",
      details: "Premier educational governance & academic infrastructure across Lahore.",
      logo: "/images/branding/wiseteck logo.png",
      isCustomImg: true,
    },
    {
      name: "NAVTTC",
      type: "Government of Pakistan",
      details: "National Vocational & Technical Training Commission accredited partner.",
      logo: "/images/branding/navttc-logo.png",
      isCustomImg: true,
    },
    {
      name: "PSDA",
      type: "Government of Punjab",
      details: "Punjab Skills Development Authority regulatory curriculum alignment.",
      isBadge: true,
      code: "PSDA",
    },
    {
      name: "PSDF",
      type: "Skills Development Partner",
      details: "Punjab Skills Development Fund collaborative vocational framework.",
      isBadge: true,
      code: "PSDF",
    },
    {
      name: "Corporate Clients & Industry Partners",
      type: "Commercial Technology Network",
      details: "Commercial software houses and enterprise firms engaging live project teams.",
      isBadge: true,
      code: "TECH",
    },
  ];

  return (
    <section id="partners" className="section-padding bg-white border-b border-[#E2E8F0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 9 · Institutional Affiliations & Partners
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            Recognized by Government & Industry Leaders
          </h2>
          <p className="text-lg text-[#4F5B6A] leading-relaxed max-w-[52ch]">
            Our incubation and professional training tracks operate in collaboration with national regulatory bodies, international standards, and corporate tech enterprises.
          </p>
        </div>

        {/* Partner Cards Grid (Max 3 on medium, 5-col balanced layout with p-8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 flex flex-col items-center text-center justify-between transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-xs h-full"
            >
              {/* Logo / Badge container with generous height & original colors */}
              <div className="h-20 w-full flex items-center justify-center mb-6">
                {partner.isCustomImg ? (
                  <div className="relative h-14 w-36 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Official Logo`}
                      width={144}
                      height={56}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-[#0B1F3A] text-white font-bold text-sm flex items-center justify-center tracking-wider shadow-xs">
                    {partner.code}
                  </div>
                )}
              </div>

              {/* Partner Information */}
              <div className="w-full">
                <h3 className="text-base font-bold text-[#0B1F3A] mb-1 leading-snug [text-wrap:balance]">
                  {partner.name}
                </h3>
                <span className="text-xs font-semibold text-[#5F2DEE] block mb-3">
                  {partner.type}
                </span>
                <p className="text-xs text-[#4F5B6A] leading-relaxed [text-wrap:pretty]">
                  {partner.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-start gap-8 text-xs text-[#4F5B6A]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#5F2DEE]" />
            <span className="font-semibold text-[#0B1F3A]">Official NAVTTC Accredited Training Center</span>
          </div>
          <span className="hidden sm:inline text-[#CBD5E1]">•</span>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#0B1F3A]" />
            <span className="font-semibold text-[#0B1F3A]">Microsoft Certified Testing & Curriculum Standards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
