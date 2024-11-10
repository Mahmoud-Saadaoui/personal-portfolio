import { ProjectsTypes } from "@/types/types";

export const projects: ProjectsTypes[] = [
    {
        id: 1,
        title: "Developers Tawassol",
        description: {
            intro: "Developers_Tawassol_Intro",
            technologies: ["React", "Redux Toolkit", "Node", "Express", "MongoDB"]
        },
        links: "https://github.com/Saadaoui-Forkan/dev_tawassol"
    },
    {
        id: 2,
        title: "Bookly",
        description: {
            intro: "Bookly_Intro",
            technologies: ["React", "Redux Toolkit", "Tailwind", "Node", "Express", "MongoDB"]
        },
        links: "https://github.com/Saadaoui-Forkan/Bookly"
    },
    {
        id: 3,
        title: "Property Pulse",
        description: {
            intro: "Property_Pulse_Intro",
            technologies: ["Next", "Tailwind", "MongoDB"]
        },
        links: "https://github.com/Saadaoui-Forkan/ProrertyPulse" 
    }
];