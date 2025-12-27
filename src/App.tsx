import "./App.css";
import id_flag from "/src/assets/id.png";
import en_flag from "/src/assets/en.png";
import ja_flag from "/src/assets/ja.png";
import general_pp from "/src/assets/general_pp.jpg";
import kirisame_pp from "/src/assets/image_logo.png";

// Component imports
import ProfilePicContainer from "./components/ProfilePicContainer";
import FlagContainer from "./components/FlagContainer";
import LinkContainer from "./components/LinkContainer";
import Link from "./components/Link";
import ArrowDown from "./components/svg/ArrowDown";
import SideBar from "./components/SideBar";

// Section imports
import Intro from "./sections/Intro";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-x-bg text-center text-x-text">
      <SideBar />
      {/* Main content */}
      <div
        id="top"
        className="flex h-dvh flex-col items-center justify-center md:w-3xl"
      >
        <ProfilePicContainer paths={[general_pp, kirisame_pp]} />
        <p className="text-sm font-medium md:text-4xl">{t("name")}</p>
        <p className="text-xs font-light md:text-2xl">
          {t("interests")}
          <Link
            href="https://lit.link/kirisameame"
            children={t("music_producer")}
          />
        </p>
        <div className="my-3 bg-x-text p-3">
          <FlagContainer
            paths={[id_flag, en_flag, ja_flag]}
            languages={["id", "en", "ja"]}
          />
          <LinkContainer />
        </div>
        <div
          className="absolute bottom-10 left-1/2 flex h-20 w-full -translate-x-1/2 translate-y-1/2 animate-x-fade-in-down cursor-pointer items-center justify-center md:w-lg"
          onClick={() =>
            document
              .getElementById("intro")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown />
        </div>
      </div>
      <Intro />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
