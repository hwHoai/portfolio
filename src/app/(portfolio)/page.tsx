import { ScrolldownIndicator } from "@/components/common/ScrolldownIndicator";
import { HeroSection } from "@/pages/portfolio/HeroSection";
import { AboutSection } from "@/pages/portfolio/AboutSection";
import { ExperienceSection } from "@/pages/portfolio/ExperienceSection";
import { ProjectSection } from "@/pages/portfolio/ProjectSection";
import { ContactSection } from "@/pages/portfolio/ContactSection";

export default function MainContent() {
  return (
    <div className="relative w-full h-full flex flex-col grow justify-start">
      <HeroSection />
      <ScrolldownIndicator />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
