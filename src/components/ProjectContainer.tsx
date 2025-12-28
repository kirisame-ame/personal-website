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
        <div className="flex flex-col justify-center">
            {/*Card grid 2x2*/}
            <div className="grid grid-cols-2 gap-4">
                {
                    projects.map((project) => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
            {/*Pagination Buttons*/}
            <div className="flex justify-around">
                <button>prev</button>
                <button>next</button>
            </div>
        </div>

    )
}