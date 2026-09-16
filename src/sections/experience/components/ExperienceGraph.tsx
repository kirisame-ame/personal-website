import { useState, useEffect } from "react";
import ExperienceNode from "./ExperienceNode";
import ExperienceDetail from "./ExperienceDetail";
interface Experience {
  id: number;
  start_date: string;
  end_date: string;
  title: string;
  company: string;
  desc: string;
}
export default function ExperienceGraph() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [currExp, setCurrExp] = useState<Experience>();

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch("data/experiences.json");
      const data = await response.json();
      const exp: Experience[] = data["experiences"].sort(
        (a: Experience, b: Experience) => {
          if (a.end_date === "Ongoing" && b.end_date !== "Ongoing") {
            return 1;
          }
          if (b.end_date === "Ongoing" && a.end_date !== "Ongoing") {
            return -1;
          }
          if (a.end_date > b.end_date) {
            if (a.start_date < b.start_date) {
              return 1;
            }
            return 0;
          }
          if (a.start_date < b.start_date) {
            return -1;
          }
        },
      );

      setExperiences(exp);
    } catch {
      console.error("Failed to fetch experiences");
    }
  };
  return (
    <div>
      <div className={currExp ? `hidden` : `inline-block`}>
        {experiences
          .slice()
          .reverse()
          .map((experience) => (
            <ExperienceNode
              key={experience.id}
              experience={experience}
              onClick={setCurrExp}
            />
          ))}
      </div>
      {currExp && (
        <ExperienceDetail experience={currExp} onClick={setCurrExp} />
      )}
    </div>
  );
}
