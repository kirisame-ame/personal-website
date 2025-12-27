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
            <div>
                <h1>{project.title}</h1>
                <img src={project.imgSrc}></img>
                <p>{project.desc}</p>
            </div>
        </a>
    )
}