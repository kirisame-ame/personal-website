import { useEffect, useState } from "react";
import SideBarButton from "./SideBarButton";

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  window.history.pushState(null, "", `#${sectionId}`);
};

export default function SideBar() {
  const [switchToLight, setSwitchToLight] = useState(false);

  useEffect(() => {
    const projects = document.getElementById("projects");
    if (!projects) return;

    const observer = new IntersectionObserver(
      ([entry]) =>
        setSwitchToLight(
          entry.isIntersecting && entry.intersectionRatio >= 0.5,
        ),
      { threshold: [0, 0.5] },
    );

    observer.observe(projects);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`bg-x-sidebar fixed top-0 left-0 z-1 hidden h-screen flex-col items-start justify-center pl-4 transition-colors duration-300 lg:flex ${
        switchToLight ? "text-white" : "text-x-text"
      }`}
    >
      <SideBarButton
        label="Top"
        onClick={() => scrollToSection("top")}
        isLight={switchToLight}
      />
      <SideBarButton
        label="Intro"
        onClick={() => scrollToSection("intro")}
        isLight={switchToLight}
      />
      <SideBarButton
        label="Experience"
        onClick={() => scrollToSection("experience")}
        isLight={switchToLight}
      />
      <SideBarButton
        label="Projects"
        onClick={() => scrollToSection("projects")}
        isLight={switchToLight}
      />
    </div>
  );
}
