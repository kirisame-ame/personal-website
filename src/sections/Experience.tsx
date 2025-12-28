import ArrowDown from "../components/svg/ArrowDown";
import { useTranslation } from "react-i18next";
export default function Experience() {
  const { t } = useTranslation();

  return (
    <div
      id="experience"
      className="relative flex h-dvh w-full flex-col items-center justify-center bg-x-nijika"
    >
      <div className="flex h-full w-3/4 flex-col items-center md:flex-row md:justify-between">
        <div className="flex">
          <h1 className="text-4xl font-bold">{t("experience_title")}</h1>
        </div>
        <div className="flex flex-col">
          <p className="">TBA</p>
        </div>
      </div>
      <div
        className="absolute bottom-10 flex h-20 w-full animate-x-fade-in-down cursor-pointer items-center justify-center md:w-lg"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown />
      </div>
    </div>
  );
}
