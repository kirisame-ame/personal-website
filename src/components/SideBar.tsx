import SideBarButton from "./SideBarButton";

export const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  window.history.pushState(null, "", `#${sectionId}`);
};

export default function SideBar() {
  return (
    <div className="bg-x-sidebar fixed top-0 left-0 z-1 hidden h-screen flex-col items-start justify-center pl-4 lg:flex">
      <SideBarButton label="Top" onClick={() => scrollToSection("top")} />
      <SideBarButton label="Intro" onClick={() => scrollToSection("intro")} />
      <SideBarButton
        label="Experience"
        onClick={() => scrollToSection("experience")}
      />
      <SideBarButton
        label="Projects"
        onClick={() => scrollToSection("projects")}
      />
    </div>
  );
}
