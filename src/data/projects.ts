import { ProjectsTypes } from "../types/types";

export const projects: ProjectsTypes[] = [
  {
    id: 1,
    title: "Chat App",
    description: {
      intro: "chat_app_intro",
      technologies: ["React", "Zustand", "Tanstack Query", "Node", "Express", "MongoDB", "Prisma ORM"],
    },
    link: "https://github.com/Saadaoui-Forkan/WhatsApp-clone",
    demo: "https://whats-app-clone-three-jet.vercel.app",
  },
  {
    id: 2,
    title: "Bookly",
    description: {
      intro: "bookly_intro",
      technologies: ["React", "Redux Toolkit", "Node", "Express", "MongoDB"],
    },
    link: "https://github.com/Saadaoui-Forkan/Bookly",
    demo: "https://bookly-zeta.vercel.app",
  },
  {
    id: 3,
    title: "Property Pulse",
    description: {
      intro: "property_pulse_intro",
      technologies: ["Next", "Tailwind", "MongoDB"],
    },
    link: "https://github.com/Saadaoui-Forkan/ProrertyPulse",
    demo: "https://prorerty-pulse.vercel.app",
  },
];