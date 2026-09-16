import ExperienceGraph from "./components/ExperienceGraph";
import ArrowDown from "../../components/svg/ArrowDown";
import { useTranslation } from "react-i18next";
export default function Experience() {
  const { t } = useTranslation();

  return (
    <div
      id="experience"
      className="relative flex h-dvh w-full flex-col items-center justify-center bg-x-nijika"
    >
      <div className="mx-4 flex h-full flex-col items-center justify-center lg:w-3/4 lg:flex-row lg:justify-between">
        <div className="mb-5 flex lg:mb-0">
          <h1 className="text-5xl font-bold">{t("experience_title")}</h1>
        </div>
        <div className="flex flex-col">
          <ExperienceGraph />
          {/* <p className="">TBA</p> */}
        </div>
      </div>
      <div
        className="absolute bottom-5 flex h-10 w-full animate-x-fade-in-down cursor-pointer items-center justify-center lg:bottom-10 lg:h-20 lg:w-lg"
        onClick={() => {
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "#projects");
        }}
      >
        <ArrowDown />
      </div>
    </div>
  );
}
