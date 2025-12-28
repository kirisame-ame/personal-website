interface Project {
    title: string,
    imgSrc: string | undefined,
    desc: string,
    link: string
}

export default function ProjectCard({
    project
}: {
    project: Project
}) {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col h-48 w-48 items-center justify-center bg-gray-50 rounded-3xl p-2">
                {project.imgSrc && <img src={project.imgSrc} className="h-24"></img>}


                <h1 className="font-medium">{project.title}</h1>
                <p>{project.desc}</p>
            </div>
        </a>
    )
}