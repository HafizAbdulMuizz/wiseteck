import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white border-b border-[#E2E8F0]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: Large editorial text block */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
                About WISE-Teck
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0B1F3A] leading-[1.18] tracking-tight mb-6 max-w-[22ch]">
              Where Education Meets Enterprise
            </h2>

            {/* Identity statement 1 — from approved Profile document */}
            <p className="text-lg text-[#4F5B6A] leading-relaxed mb-5 max-w-[54ch]">
              <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span> is the technology, incubation, skills development, and professional services platform of WISE Education Society — operating at the intersection of formal education and the commercial technology industry.
            </p>

            {/* Identity statement 2 — from approved Profile document */}
            <p className="text-lg text-[#4F5B6A] leading-relaxed mb-8 max-w-[54ch]">
              Beyond its educational mission, <span className="whitespace-nowrap font-semibold text-[#0B1F3A]">WISE-Teck</span> is a professional technology and digital solutions company — delivering enterprise software, AI systems, e-commerce platforms, and digital services to national and international clients.
            </p>

            {/* Two anchors — one per identity */}
            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-1 h-10 rounded-full bg-[#5F2DEE] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0B1F3A] mb-0.5">Incubation & Skills</p>
                  <p className="text-sm text-[#4F5B6A]">Six specialized tracks, NAVTTC-affiliated training, and career placement support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-10 rounded-full bg-[#FFB347] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0B1F3A] mb-0.5">Corporate Technology</p>
                  <p className="text-sm text-[#4F5B6A]">Professional services firm delivering real client projects through supervised teams</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Supporting image */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#F1F5F9]">
              <Image
                src="/images/home/executives .jpeg"
                alt="WISE-Teck institutional leadership and professional team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
