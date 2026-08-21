import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071527] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-sm">
      <div className="site-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Institutional Identity & Logo */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-md border border-slate-700/50 mb-5">
              <Image
                src="/images/branding/wiseteck logo.png"
                alt="WISE-Teck Official Logo"
                width={160}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              <span className="whitespace-nowrap">WISE-Teck</span> is the technology, incubation, skills development, and professional services platform of WISE Education Society, transforming learning into earning through practical execution.
            </p>
            <div className="text-xs text-slate-400 space-y-1.5">
              <p className="font-semibold text-white">WISE Education Society</p>
              <p>Registered Educational Society • Lahore, Pakistan</p>
            </div>
          </div>

          {/* Col 2: Six Incubators */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Incubation Tracks
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Software Development Incubator</li>
              <li>AI & Data Science Incubator</li>
              <li>Digital Marketing Incubator</li>
              <li>E-Commerce Incubator</li>
              <li>Graphic Design & Video Production</li>
              <li>Startup & Entrepreneurship</li>
            </ul>
          </div>

          {/* Col 3: Corporate Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Technology Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Software Development</li>
              <li>Web & Mobile Apps</li>
              <li>AI & Machine Learning</li>
              <li>Business Automation</li>
              <li>UI/UX Design & Prototyping</li>
              <li>Shopify & E-Commerce</li>
            </ul>
          </div>

          {/* Col 4: Campus & Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Campus Headquarters
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5F2DEE] shrink-0 mt-0.5" />
                <span>48-Main Gulberg, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5F2DEE] shrink-0" />
                <a href="tel:+923008410868" className="hover:text-white transition-colors">+92-300-8410868</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5F2DEE] shrink-0" />
                <a href="mailto:info@wiseteck.co" className="hover:text-white transition-colors">info@wiseteck.co</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#5F2DEE] shrink-0" />
                <span>www.wiseteck.co</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} <span className="whitespace-nowrap">WISE-Teck</span>. A Division of WISE Education Society. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">About Society</a>
            <a href="#ecosystem" className="hover:text-slate-300 transition-colors">Ecosystem</a>
            <a href="#partners" className="hover:text-slate-300 transition-colors">NAVTTC Affiliation</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
