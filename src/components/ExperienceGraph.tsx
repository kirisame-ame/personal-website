import { useState, useEffect } from "react"
interface Experience {
    id: number,
    start_date: Date | null,
    end_date: Date | null,
    title: string,
    company: string,
    desc: string
}
export default function ExperienceGraph() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
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
            {experiences[0].id}
        </div>
    )
}