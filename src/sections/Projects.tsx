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
      <div className="flex h-full w-3/4 flex-col items-center md:flex-row md:justify-between">
        <div className="flex">
          <h1 className="text-4xl font-bold">{t("projects_title")}</h1>
        </div>
        <div className="flex flex-col">
          <ProjectContainer />
        </div>
      </div>
      <div
        className="absolute bottom-20 flex h-20 w-full rotate-180 animate-x-fade-in-down cursor-pointer items-center justify-center md:w-lg"
        onClick={() =>
          document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown />
      </div>
    </div>
  );
}
