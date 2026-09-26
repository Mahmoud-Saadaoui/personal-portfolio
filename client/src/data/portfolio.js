import {
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaMobileScreenButton,
} from "react-icons/fa6";

export const portfolioSections = ["about", "skills", "experience", "projects", "contact"];

export const skillGroups = [
  {
    icon: FaCode,
    key: "frontend",
    skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Redux Toolkit", "Zustand", "TanStack Query", "Tailwind CSS", "Ant Design", "Bootstrap"],
  },
  {
    icon: FaDatabase,
    key: "backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets", "JWT Authentication"],
  },
  {
    icon: FaLayerGroup,
    key: "workflow",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Docker", "GitHub Actions", "Nginx", "Linux", "VPS", "CI/CD"],
  },
  {
    icon: FaMobileScreenButton,
    key: "craft",
    skills: ["Git", "GitHub", "Claude Code", "OpenCode"],
  },
];

export const experienceProjects = [
  {
    number: "01",
    key: "platform",
    tags: ["React", "TypeScript", "Tailwind CSS", "Data Visualization"],
    accent: "coral",
  },
  {
    number: "02",
    key: "cocktail",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    accent: "lime",
  },
  {
    number: "03",
    key: "dashboard",
    tags: ["Full Stack", "PostgreSQL/MySQL", "Docker", "Linux"],
    accent: "violet",
  },
];

export const showcaseProjects = [
  {
    number: "01",
    key: "landing",
    tags: ["React", "Vite", "Tailwind CSS 4", "React Router", "i18next"],
    liveDemo: "https://react-landings.netlify.app/",
    github: "https://github.com/Mahmoud-Saadaoui/react-landing-pages",
    accent: "coral",
  },
  {
    number: "02",
    key: "blogApp",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    liveDemo: "https://mbookly.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/Bookly",
    accent: "lime",
  },
  {
    number: "03",
    key: "pshop",
    tags: ["React", "React Query", "Bootstrap", "MongoDB", "Cloudinary"],
    liveDemo: "https://m-pshop.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/PShop",
    accent: "violet",
  },
  {
    number: "04",
    key: "chat",
    tags: ["TypeScript", "React", "Zustand", "TanStack Query", "Socket.IO", "PWA"],
    liveDemo: "https://mchattapp.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/WhatsApp-clone",
    accent: "blue",
  },
];

export const themeOptions = [
  { id: "coral", color: "#ff5c5c" },
  { id: "lime", color: "#c5f467" },
  { id: "violet", color: "#b7a1ff" },
  { id: "blue", color: "#75c9ff" },
];
