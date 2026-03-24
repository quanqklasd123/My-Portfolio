import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/lib/data";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ProjectDetailPage = lazy(() => import("@/pages/ProjectDetailPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const sectionIds = navItems.map((item) => item.id);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection(sectionIds);

  const handleNavigateSection = (sectionId: string) => {
    const scrollToTarget = () => {
      if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      window.setTimeout(scrollToTarget, 140);
      return;
    }

    scrollToTarget();
  };

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="hero-orb left-[-7rem] top-12 h-56 w-56 bg-sky-400/20" />
        <div className="hero-orb right-[-6rem] top-28 h-72 w-72 bg-indigo-400/20" />
        <div className="hero-orb bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 bg-cyan-300/10" />
      </div>

      <Header
        activeSection={location.pathname === "/" ? activeSection : ""}
        onNavigateSection={handleNavigateSection}
      />

      <Suspense
        fallback={
          <div className="container flex min-h-screen items-center justify-center">
            <div className="glass-panel rounded-3xl px-6 py-4 text-sm text-muted-foreground">
              Loading portfolio experience...
            </div>
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage onNavigateSection={handleNavigateSection} />} />
            <Route
              path="/projects/:slug"
              element={<ProjectDetailPage onNavigateSection={handleNavigateSection} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
