interface Experience {
    id: number,
    start_date: Date | null,
    end_date: Date | null,
    title: string,
    company: string,
    desc: string
}

export default function ExperienceNode(experience: Experience) {
    return (
        <div></div>
    )
}