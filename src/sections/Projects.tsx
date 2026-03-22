import ProjectContainer from "../components/ProjectContainer";
import ArrowDown from "../components/svg/ArrowDown";
import { useTranslation } from "react-i18next";
export default function Projects() {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="relative flex h-dvh w-full flex-col items-center justify-center bg-x-ryo"
    >
      <div className="flex h-full w-3/4 flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="flex flex-col mb-5 lg:mb-0">
          <h1 className="text-5xl font-bold">{t("projects_title")}</h1>
          <h2 className="mt-2">{t("projects_subtitle")}</h2>
        </div>
        <div className="flex flex-col lg:ml-6">
          <ProjectContainer />
        </div>
      </div>
      <div
        className="absolute lg:bottom-10 bottom-5 flex h-10 lg:h-20 w-full rotate-180 animate-x-fade-in-down cursor-pointer items-center justify-center lg:w-lg"
        onClick={() =>
          document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown />
      </div>
    </div>
  );
}
