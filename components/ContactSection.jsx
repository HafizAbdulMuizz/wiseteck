"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

/**
 * Section 11 — Contact Information
 *
 * Approved Elements (Structure document):
 * - Contact Form
 * - Address (48-Main Gulberg, Lahore)
 * - Phone Numbers (+92-300-8410868 / +92-42-35755171)
 * - Email Address (info@wiseteck.org / admissions@wiseteck.org)
 * - Google Map Embed
 * - Social Media Links
 *
 * Rules:
 * - Form stacks cleanly on mobile (no cramped 2-column inputs)
 * - Never split "WISE-Teck" across a line
 * - Navy submit button
 */

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("incubation");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-[#F8FAFC]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5F2DEE] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]">
              Section 11 · Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
            Contact <span className="whitespace-nowrap">WISE-Teck</span>
          </h2>
          <p className="text-lg text-[#4F5B6A] leading-relaxed max-w-[52ch]">
            Visit our central Lahore campus, discuss corporate technology engagements, or inquire about incubation admissions.
          </p>
        </div>

        {/* 2-Column Layout: Contact Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Institutional Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#5F2DEE]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-1">Campus Location</h3>
                <p className="text-sm text-[#4F5B6A] leading-relaxed">
                  48-Main Gulberg, Lahore, Punjab, Pakistan
                </p>
                <p className="text-xs text-[#94A3B8] mt-1">Adjacent to Main Boulevard Gulberg</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#5F2DEE]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-1">Phone & Inquiries</h3>
                <p className="text-sm text-[#4F5B6A] font-semibold">
                  +92 300 8410868
                </p>
                <p className="text-sm text-[#4F5B6A]">
                  +92 42 35755171
                </p>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#5F2DEE]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-1">Official Correspondence</h3>
                <p className="text-sm text-[#4F5B6A]">
                  info@wiseteck.org
                </p>
                <p className="text-sm text-[#4F5B6A]">
                  admissions@wiseteck.org
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#5F2DEE]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-1">Operating Hours</h3>
                <p className="text-sm text-[#4F5B6A]">
                  Monday – Saturday: 08:30 AM – 06:00 PM PKT
                </p>
                <p className="text-xs text-[#94A3B8] mt-1">Sunday: Closed</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] h-52 relative bg-[#E2E8F0]">
              <iframe
                title="WISE-Teck Lahore Location"
                src="https://maps.google.com/maps?q=48-Main+Gulberg,+Lahore,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Accessible Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xs">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">
              Send an Inquiry
            </h3>
            <p className="text-sm text-[#4F5B6A] mb-8">
              Please specify whether your inquiry concerns student incubation or corporate technology services.
            </p>

            {submitted ? (
              <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[#0B1F3A] mb-2">
                  Inquiry Received
                </h4>
                <p className="text-sm text-[#4F5B6A] max-w-md mx-auto">
                  Thank you for contacting <span className="whitespace-nowrap font-semibold">WISE-Teck</span>. An institutional coordinator will respond to your submission within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inquiry Type Radio / Pill selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                    Inquiry Type <span className="text-[#5F2DEE]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${inquiryType === "incubation" ? "border-[#5F2DEE] bg-[#5F2DEE]/5" : "border-[#E2E8F0] bg-[#F8FAFC]"}`}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value="incubation"
                        checked={inquiryType === "incubation"}
                        onChange={() => setInquiryType("incubation")}
                        className="text-[#5F2DEE] focus:ring-[#5F2DEE]"
                      />
                      <span className="text-xs font-bold text-[#0B1F3A]">Student / Incubation Track</span>
                    </label>
                    <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${inquiryType === "corporate" ? "border-[#5F2DEE] bg-[#5F2DEE]/5" : "border-[#E2E8F0] bg-[#F8FAFC]"}`}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value="corporate"
                        checked={inquiryType === "corporate"}
                        onChange={() => setInquiryType("corporate")}
                        className="text-[#5F2DEE] focus:ring-[#5F2DEE]"
                      />
                      <span className="text-xs font-bold text-[#0B1F3A]">Corporate / Tech Services</span>
                    </label>
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                      Full Name <span className="text-[#5F2DEE]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Ahmad Khan"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0B1F3A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#5F2DEE] focus:ring-1 focus:ring-[#5F2DEE] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                      Email Address <span className="text-[#5F2DEE]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. ahmad@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0B1F3A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#5F2DEE] focus:ring-1 focus:ring-[#5F2DEE] transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="e.g. +92 300 1234567"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0B1F3A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#5F2DEE] focus:ring-1 focus:ring-[#5F2DEE] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-track" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="contact-track"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0B1F3A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#5F2DEE] focus:ring-1 focus:ring-[#5F2DEE] transition-all"
                    >
                      <option value="software">Software Development Incubator</option>
                      <option value="ai">AI & Data Science Incubator</option>
                      <option value="marketing">Digital Marketing Incubator</option>
                      <option value="ecommerce">E-Commerce Incubator</option>
                      <option value="design">Graphic Design & Video Incubator</option>
                      <option value="startup">Startup & Entrepreneurship</option>
                      <option value="services">Corporate Software Services</option>
                      <option value="other">General Institutional Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">
                    Message / Project Scope <span className="text-[#5F2DEE]">*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    required
                    placeholder="Tell us about your background, desired incubation track, or business software requirements..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] text-sm text-[#0B1F3A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#5F2DEE] focus:ring-1 focus:ring-[#5F2DEE] transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0B1F3A] text-white font-bold text-base hover:bg-[#163259] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Submit Institutional Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
