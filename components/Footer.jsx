import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

/**
 * Global Institutional Footer
 *
 * Rules:
 * - Logo treatment on dark background: seamless reversed white lockup directly on dark surface (no white box)
 * - Original asset proportions
 * - Static copyright year to prevent SSR hydration mismatches
 * - Navigation links + legal notices
 */

export default function Footer() {
  const quickLinks = [
    { label: "About WISE-Teck", href: "/about" },
    { label: "The WISE Ecosystem", href: "/#ecosystem" },
    { label: "Learning to Earning Model", href: "/#model" },
    { label: "Our Incubators", href: "/#incubators" },
    { label: "Corporate Services", href: "/#services" },
    { label: "Featured Projects", href: "/#projects" },
    { label: "Success Stories", href: "/#stories" },
    { label: "Partners & Clients", href: "/#partners" },
  ];

  const incubatorTracks = [
    "Software Development Incubator",
    "AI & Data Science Incubator",
    "Digital Marketing Incubator",
    "E-Commerce Incubator",
    "Graphic Design & Video Incubator",
    "Startup & Entrepreneurship Incubator",
  ];

  return (
    <footer className="bg-[#071527] text-white border-t border-white/10 pt-16 pb-12">
      <div className="site-container">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Institutional Identity */}
          <div className="lg:col-span-4 flex flex-col items-start">
            
            {/* Seamless Reversed White Logo Lockup — Zero White Box */}
            <div className="relative h-11 w-44 sm:w-48 mb-6">
              <Image
                src="/images/branding/wiseteck logo.png"
                alt="WISE-Teck Official Logo"
                fill
                className="object-contain object-left brightness-0 invert opacity-95"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm [text-wrap:pretty]">
              The technology, incubation, skills development, and professional services platform of WISE Education Society. Bridging formal education and enterprise software delivery in Lahore, Pakistan.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>NAVTTC & PSDA Recognized Partner</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Institutional Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FFB347] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Incubation Tracks */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Incubation Labs
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {incubatorTracks.map((track) => (
                <li key={track}>
                  <Link href="/#incubators" className="hover:text-[#5F2DEE] transition-colors">
                    {track}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Summary */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Lahore Campus
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFB347] shrink-0 mt-0.5" />
                <span>48-Main Gulberg, Lahore, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FFB347] shrink-0 mt-0.5" />
                <span>+92 300 8410868</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FFB347] shrink-0 mt-0.5" />
                <span>info@wiseteck.org</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Governance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2025–2026 <span className="whitespace-nowrap text-white font-semibold">WISE-Teck</span>. All rights reserved. Governed by WISE Education Society Board.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy & Governance</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Admissions Desk</Link>
            <Link href="/#services" className="hover:text-white transition-colors">Enterprise Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
