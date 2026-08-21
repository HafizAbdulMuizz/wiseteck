"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, Clock, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "incubation",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="site-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F1F5F9] border border-[#E2E8F0] mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                  Contact & Campus Info
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0B1F3A] leading-tight mb-4 [text-wrap:balance]">
                Get in Touch with <span className="whitespace-nowrap">WISE-Teck</span>
              </h2>

              <p className="text-base text-[#4F5B6A] leading-relaxed mb-8">
                Visit our physical incubation labs in Gulberg or speak directly with our program coordinators and technical leads.
              </p>

              {/* Contact Information List */}
              <div className="space-y-5 mb-8">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0B1F3A] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#5F2DEE]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Campus Location</h3>
                    <p className="text-sm font-semibold text-[#0B1F3A] mt-0.5">
                      48-Main Gulberg, Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0B1F3A] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#5F2DEE]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Phone Number</h3>
                    <a href="tel:+923008410868" className="text-sm font-semibold text-[#0B1F3A] hover:text-[#5F2DEE] transition-colors mt-0.5 block">
                      +92-300-8410868
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0B1F3A] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#5F2DEE]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Official Email</h3>
                    <a href="mailto:info@wiseteck.co" className="text-sm font-semibold text-[#0B1F3A] hover:text-[#5F2DEE] transition-colors mt-0.5 block">
                      info@wiseteck.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0B1F3A] shrink-0 mt-0.5">
                    <Globe className="w-5 h-5 text-[#5F2DEE]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Website</h3>
                    <p className="text-sm font-semibold text-[#0B1F3A] mt-0.5">
                      www.wiseteck.co
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Operating Hours Note */}
            <div className="p-4 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-3 text-xs text-[#4F5B6A]">
              <Clock className="w-4 h-4 text-[#0B1F3A] shrink-0" />
              <span>Campus & Lab Hours: Mon – Sat, 9:00 AM – 6:00 PM (PKT)</span>
            </div>
          </div>

          {/* Right Column: Accessible Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">
              Send an Official Inquiry
            </h3>
            <p className="text-xs text-[#4F5B6A] mb-6">
              Complete the details below and our admissions or corporate accounts desk will respond within 24 business hours.
            </p>

            {submitted ? (
              <div className="p-6 bg-white border border-[#CBD5E1] rounded-lg text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#5F2DEE]/10 flex items-center justify-center text-[#5F2DEE] mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#0B1F3A]">Inquiry Received</h4>
                <p className="text-xs text-[#4F5B6A] mt-1 max-w-sm">
                  Thank you for reaching out to <span className="whitespace-nowrap">WISE-Teck</span>. A representative will contact you at {formData.email || "your provided email"}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#5F2DEE] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Muhammad Ahmed"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#CBD5E1] text-sm text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#CBD5E1] text-sm text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#CBD5E1] text-sm text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="interest" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#CBD5E1] text-sm text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors"
                    >
                      <option value="incubation">Student Admission & Incubation</option>
                      <option value="services">Corporate Software Services</option>
                      <option value="navttc">NAVTTC / Skills Certification</option>
                      <option value="partnership">Institutional Partnership</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                    Message Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your admission requirements or corporate project specifications..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#CBD5E1] text-sm text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button - NAVY (#0B1F3A), NOT Orange */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[#0B1F3A] text-white font-semibold text-sm hover:bg-[#163259] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
