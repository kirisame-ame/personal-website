import ArrowDown from "../components/svg/ArrowDown";
import { useTranslation } from "react-i18next";
export default function Intro() {
  const { t } = useTranslation();

  return (
    <div
      id="intro"
      className="relative flex h-dvh w-full flex-col items-center justify-center bg-x-bocchi"
    >
      <div className="flex h-full w-3/4 flex-col justify-center items-center md:flex-row md:justify-between">
        <div className="flex mb-5 md:mb-0 md:w-1/2">
          <h1 className="text-4xl font-bold">{t("about_title")}</h1>
        </div>
        <div className="flex flex-col justify-center md:w-1/2">
          <p className="">{t("about_description")}</p>
        </div>
      </div>
      <div
        className="absolute bottom-5 lg:bottom-10 flex h-10 lg:h-20 w-full animate-x-fade-in-down cursor-pointer items-center justify-center md:w-lg"
        onClick={() =>
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown />
      </div>
    </div>
  );
}
