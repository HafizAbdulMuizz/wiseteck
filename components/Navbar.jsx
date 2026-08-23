"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Incubators", href: "/incubators" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Model", href: "/#model" },
    { label: "Stories", href: "/#stories" },
    { label: "Partners", href: "/#partners" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-xs">
      <div className="site-container">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Official Brand Logo */}
          <Link href="/" className="relative flex items-center shrink-0">
            <div className="relative h-12 w-44 sm:w-52">
              <Image
                src="/images/branding/wiseteck logo.png"
                alt="WISE-Teck Official Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links with Premium Corporate Hover Effect */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? "text-[#0B1F3A]" : "text-[#4F5B6A] hover:text-[#5F2DEE]"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Refined animated underline indicator (180-220ms smooth scale from center) */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-200 ease-out origin-center ${
                      isActive
                        ? "bg-[#5F2DEE] scale-x-100"
                        : "bg-[#5F2DEE] scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#0B1F3A] text-white text-xs font-bold hover:bg-[#163259] transition-colors shadow-xs"
            >
              <span>Contact Desk</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-lg text-[#0B1F3A] hover:bg-[#F1F5F9] transition-colors"
            suppressHydrationWarning
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-6 py-6 shadow-md">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold text-[#0B1F3A] hover:text-[#5F2DEE] py-2 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 rounded-lg bg-[#0B1F3A] text-white text-xs font-bold hover:bg-[#163259] transition-colors"
              >
                <span>Contact Desk</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
