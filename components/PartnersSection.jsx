import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PartnersSection() {
  const partners = [
    {
      name: "WISE Education Society",
      type: "Parent Institutional Body",
      details: "Premier educational governance & academic infrastructure",
      logo: "/images/branding/wiseteck logo.png",
      isCustomImg: true,
    },
    {
      name: "NAVTTC",
      type: "Government of Pakistan",
      details: "National Vocational & Technical Training Commission",
      logo: "/images/branding/navttc-logo.png",
      isCustomImg: true,
    },
    {
      name: "PSDA",
      type: "Government of Punjab",
      details: "Punjab Skills Development Authority Regulatory Alignment",
      isBadge: true,
      code: "PSDA",
    },
    {
      name: "PSDF",
      type: "Skills Development Partner",
      details: "Punjab Skills Development Fund Framework Collaborator",
      isBadge: true,
      code: "PSDF",
    },
    {
      name: "Corporate Tech Partners",
      type: "Industry Network",
      details: "Commercial software houses & enterprise client organizations",
      isBadge: true,
      code: "TECH",
    },
  ];

  return (
    <section id="partners" className="section-padding bg-white border-b border-[#E2E8F0]">
      <div className="site-container">
        
        {/* Section Header - Left Aligned */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
              Institutional Affiliations & Partners
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            Recognized by Government & Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-[#4F5B6A] leading-relaxed max-w-2xl">
            Our training and incubation programs operate in collaboration with national regulatory bodies, international certification standards, and commercial tech enterprises.
          </p>
        </div>

        {/* Substantial Normalized Partner Grid (Centered Composition & Original Colors) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-7 sm:p-8 flex flex-col items-center text-center justify-between transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-xs h-full"
            >
              {/* Logo / Badge container with generous height & original colors */}
              <div className="h-20 w-full flex items-center justify-center mb-5">
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
                <h3 className="text-base font-bold text-[#0B1F3A] mb-1.5 leading-snug [text-wrap:balance]">
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
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-start gap-8 text-xs text-[#4F5B6A]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#5F2DEE]" />
            <span className="font-semibold text-[#0B1F3A]">Official NAVTTC Accredited Training Center</span>
          </div>
          <span className="hidden sm:inline text-[#CBD5E1]">•</span>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#0B1F3A]" />
            <span className="font-semibold text-[#0B1F3A]">Microsoft Certified Curriculum & Testing Standards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
