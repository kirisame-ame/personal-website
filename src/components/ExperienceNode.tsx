interface Experience {
    id: number,
    start_date: string,
    end_date: string | null,
    title: string,
    company: string,
    desc: string
}

export default function ExperienceNode({ experience, onClick }: { experience: Experience, onClick: (detail: Experience) => void }) {
    return (
        <div className="flex flex-col px-2 items-baseline text-left hover:bg-x-exp-hover cursor-pointer" onClick={() => onClick(experience)}>
            <h1 className="font-bold">{experience.title}</h1>
            <div className="flex flex-col items-baseline">
                <h2>@  {experience.company}</h2>
                <h2>{experience.start_date}-{'>'}{experience.end_date && <span>{experience.end_date}</span>}</h2>
            </div>
        </div>
    )
}