import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import LearningToEarningSection from "@/components/LearningToEarningSection";
import IncubatorsSection from "@/components/IncubatorsSection";
import CorporateServicesSection from "@/components/CorporateServicesSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4F5B6A]">
      {/* Global Minimalist Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1 — Hero Banner */}
        <HeroSection />

        {/* Section 2 — About WISE-Teck */}
        <AboutSection />

        {/* Section 3 — The WISE Ecosystem */}
        <EcosystemSection />

        {/* Section 4 — From Learning to Earning Model */}
        <LearningToEarningSection />

        {/* Section 5 — Our Incubators */}
        <IncubatorsSection />

        {/* Section 6 — Corporate Technology Services */}
        <CorporateServicesSection />

        {/* Section 7 — Featured Projects */}
        <FeaturedProjectsSection />

        {/* Section 8 — Success Stories */}
        <SuccessStoriesSection />

        {/* Section 9 — Partners & Clients */}
        <PartnersSection />

        {/* Section 10 — Call to Action */}
        <CTASection />

        {/* Section 11 — Contact Information */}
        <ContactSection />
      </main>

      {/* Global Institutional Footer */}
      <Footer />
    </div>
  );
}
