import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "about");

  useEffect(() => {
    const getSections = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => Boolean(element));

    const updateActiveSection = () => {
      const sections = getSections();

      if (!sections.length) {
        return;
      }

      const viewportHeight = window.innerHeight;
      const headerOffset = 112;
      let nextActive = sections[0]?.id ?? "about";
      let bestVisibleHeight = -1;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, headerOffset);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > bestVisibleHeight) {
          bestVisibleHeight = visibleHeight;
          nextActive = section.id;
        }
      }

      const nearBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (nearBottom) {
        nextActive = sections[sections.length - 1]?.id ?? nextActive;
      }

      setActiveSection((current) => (current === nextActive ? current : nextActive));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
