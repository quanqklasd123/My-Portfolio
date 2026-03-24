import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "about");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7]
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
