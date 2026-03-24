import { useState, useEffect } from "react"
import ExperienceNode from "./ExperienceNode";
import ExperienceDetail from "./ExperienceDetail";
interface Experience {
    id: number,
    start_date: string,
    end_date: string | null,
    title: string,
    company: string,
    desc: string
}
export default function ExperienceGraph() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [currExp, setCurrExp] = useState<Experience>();


    useEffect(() => {
        fetchExperiences();
    }, []);

    const fetchExperiences = async () => {
        try {
            const response = await fetch("data/experiences.json")
            const data = await response.json()
            setExperiences(data["experiences"])
        }
        catch {
            console.error("Failed to fetch experiences")
        }
    }
    return (
        <div>
            <div className={currExp ? `hidden` : `inline-block`}>
                {experiences.slice().reverse().map((experience) => (
                    <ExperienceNode key={experience.id} experience={experience} onClick={setCurrExp} />
                ))}
            </div>
            {currExp && <ExperienceDetail experience={currExp} onClick={setCurrExp} />}
        </div>
    )
}