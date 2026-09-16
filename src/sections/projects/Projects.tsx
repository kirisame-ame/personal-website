import ProjectContainer from "./components/ProjectContainer";
import ArrowDown from "../../components/svg/ArrowDown";
import { useTranslation } from "react-i18next";
export default function Projects() {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="relative flex h-dvh w-full flex-col items-center justify-center bg-x-ryo"
    >
      <div className="mx-4 flex h-full flex-col items-center justify-center lg:w-3/4 lg:flex-row lg:justify-between">
        <div className="mb-5 flex flex-col lg:mb-0">
          <h1 className="text-5xl font-bold text-white">
            {t("projects_title")}
          </h1>
          <h2 className="mt-2 text-white">{t("projects_subtitle")}</h2>
        </div>
        <div className="flex flex-col lg:ml-6">
          <ProjectContainer />
        </div>
      </div>
      <div
        className="absolute bottom-5 flex h-10 w-full rotate-180 animate-x-fade-in-down cursor-pointer items-center justify-center lg:bottom-10 lg:h-20 lg:w-lg"
        onClick={() => {
          document
            .getElementById("top")
            ?.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "#top");
        }}
      >
        <ArrowDown />
      </div>
    </div>
  );
}
