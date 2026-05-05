import { Navbar } from "@/components/Navbar";
import { CyberFooter } from "@/components/CyberFooter";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { LabsSection } from "@/components/sections/Labs";
import { CertificationsSection } from "@/components/sections/Certifications";
import { ResumeSection } from "@/components/sections/Resume";
import { ContactSection } from "@/components/sections/Contact";

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="shimmer-line" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <LabsSection />
        <Divider />
        <CertificationsSection />
        <Divider />
        <ResumeSection />
        <Divider />
        <ContactSection />
      </main>
      <CyberFooter />
    </div>
  );
}
