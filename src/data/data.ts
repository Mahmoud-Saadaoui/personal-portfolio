import { ProjectsTypes } from "@/types/types";

export const projects: ProjectsTypes[] = [
    {
        id: 1,
        title: "Developers Tawassol",
        description: {
            intro: "Developers_Tawassol_Intro",
            technologies: ["React", "Redux Toolkit", "Tailwind", "Node", "Express", "MongoDB"]
        },
        link: "https://github.com/Saadaoui-Forkan/dev_tawassol",
        demo: "https://www.youtube.com/watch?v=DnMbkiuwMqY"
    },
    {
        id: 2,
        title: "Bookly",
        description: {
            intro: "Bookly_Intro",
            technologies: ["React", "Redux Toolkit", "Node", "Express", "MongoDB"]
        },
        link: "https://github.com/Saadaoui-Forkan/Bookly",
        demo: "https://www.youtube.com/watch?v=H9IEJoS_b64"
    },
    {
        id: 3,
        title: "Property Pulse",
        description: {
            intro: "Property_Pulse_Intro",
            technologies: ["Next", "Tailwind", "MongoDB"]
        },
        link: "https://github.com/Saadaoui-Forkan/ProrertyPulse",
        demo: "https://prorerty-pulse.vercel.app"
    }
];