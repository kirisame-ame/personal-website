import ArrowDown from "../components/svg/ArrowDown";
import { useTranslation } from "react-i18next";
export default function Intro() {
  const { t } = useTranslation();

  return (
    <div
      id="intro"
      className="relative flex h-dvh w-full flex-col items-center justify-center bg-x-bocchi"
    >
      <div className="flex h-full w-3/4 flex-col justify-center items-center lg:flex-row lg:justify-between">
        <div className="flex mb-5 lg:mb-0 lg:w-1/2">
          <h1 className="text-5xl font-bold">{t("about_title")}</h1>
        </div>
        <div className="flex flex-col justify-center lg:w-1/2 text-left text-lg">
          <p>{t("about_description")}</p>
          <p>{t("about_description2")}</p>
          <p>{t("about_description3")}</p>
        </div>
      </div>
      <div
        className="absolute bottom-5 lg:bottom-10 flex h-10 lg:h-20 w-full animate-x-fade-in-down cursor-pointer items-center justify-center lg:w-lg"
        onClick={() => {
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "#experience");
        }}
      >
        <ArrowDown />
      </div>
    </div>
  );
}
