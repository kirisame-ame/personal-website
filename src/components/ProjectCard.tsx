import { useTranslation } from "react-i18next"

interface Project {
    id: number,
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
    const { t } = useTranslation();
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col h-30 w-30 lg:h-48 lg:w-48 md:h-40 md:w-40 items-center justify-center bg-gray-50 rounded-3xl p-2">
                {project.imgSrc && <img src={project.imgSrc} className="h-16 lg:h-24 md:h-20"></img>}


                <h1 className="font-medium">{project.title}</h1>
                <p className="hidden md:block">{t("desc_project_" + project.id)}</p>
            </div>
        </a>
    )
}