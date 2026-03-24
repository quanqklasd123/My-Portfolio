import { useState } from "react";
import { motion } from "framer-motion";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ProjectPreviewDialog } from "@/components/ProjectPreviewDialog";
import { type Project } from "@/lib/data";

export default function HomePage({
  onNavigateSection
}: {
  onNavigateSection: (sectionId: string) => void;
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pb-10"
    >
      <HeroSection onNavigateSection={onNavigateSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onPreviewProject={setSelectedProject} />
      <TimelineSection />
      <ContactSection />
      <ProjectPreviewDialog
        project={selectedProject}
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
          }
        }}
      />
    </motion.main>
  );
}
