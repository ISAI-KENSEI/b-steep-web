import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorrySection from "@/components/WorrySection";
import SolutionSection from "@/components/SolutionSection";
import ValueSection from "@/components/ValueSection";
import AboutSection from "@/components/AboutSection";
import ReasonsSection from "@/components/ReasonsSection";
import PricingSection from "@/components/PricingSection";
import ContentSection from "@/components/ContentSection";
import StrengthSection from "@/components/StrengthSection";
import LecturerSection from "@/components/LecturerSection";

import CommunityVoicesSection from "@/components/CommunityVoicesSection";
import VoicesSection from "@/components/VoicesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <WorrySection />
        <SolutionSection />
        <ValueSection />
        <SectionDivider />
        <ContentSection />
        <SectionDivider />
        <StrengthSection />
        <SectionDivider />
        <VoicesSection />
        <SectionDivider />
        <CommunityVoicesSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <LecturerSection />
      </main>
      <Footer />
    </>
  );
}
