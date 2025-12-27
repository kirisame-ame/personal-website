import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
    title: string,
    imgSrc: string | undefined,
    desc: string,
    link: string
}


export default function ProjectContainer() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch("data/projects.json");
            const data = await response.json();
            setProjects(data["projects"])
        } catch {
            console.error("failed to load projects")
        }
    }
    return (
        <div>
            {/*Card grid 2x2*/}
            <div className="grid grid-cols-2">
                {
                    projects.map((project) => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
            {/*Pagination Buttons*/}
            <div>
                <button></button>
                <button></button>
            </div>
        </div>

    )
}