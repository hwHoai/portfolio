import { ScrolldownIndicator } from "@/components/common/ScrolldownIndicator";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ContactSection } from "@/components/sections/ContactSection";

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
