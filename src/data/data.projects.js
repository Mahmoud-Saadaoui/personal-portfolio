import bookly_frontend from "../assets/gallery/bookly_frontend.png";
import blog from "../assets/gallery/blog.png";
import bookly from "../assets/gallery/bookly.png";
import bookmark from "../assets/gallery/bookmark.png";
import fylo from "../assets/gallery/fylo.png";
import loopstudio from "../assets/gallery/loopstudio.png";
import chat_app from "../assets/gallery/chat_app.png";
import facebook_clone from "../assets/gallery/facebook_clone.png";
import maplibre from "../assets/gallery/maplibre.png";
import pshop from "../assets/gallery/PShop.png";

export const projects = [
  {
    id: 1,
    language: "javascript",
    key: "loopstudio",
    techStack: ["HTML", "Tailwind CSS", "JS"],
    image: loopstudio,
    liveDemo: "https://m-loopstudios.netlify.app",
  },
  {
    id: 2,
    language: "javascript",
    key: "bookmark",
    techStack: ["HTML", "Tailwind CSS", "JS"],
    image: bookmark,
    liveDemo: "https://m-bookmark-app.netlify.app",
  },
  {
    id: 3,
    language: "javascript",
    key: "fylo",
    techStack: ["HTML", "Tailwind CSS", "JS"],
    image: fylo,
    liveDemo: "https://m-fylo.netlify.app",
  },
  {
    id: 4,
    language: "javascript",
    key: "BlogApp",
    techStack: ["React", "Express.js", "MongoDB", "Redux Toolkit"],
    image: blog,
    // liveDemo: "https://blogapp.65.lebondeveloppeur.net",
    github: "https://github.com/Mahmoud-Saadaoui/Blog-App"
  },
  {
    id: 5,
    language: "javascript",
    key: "facebookClone",
    techStack: ["React"],
    image: facebook_clone,
    liveDemo: "https://m-face-book-clone.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/facebook-clone"
  },
  {
    id: 6,
    language: "typescript",
    key: "libreMap",
    techStack: ["React", "TypeScript", "MapLibre.js"],
    image: maplibre,
    liveDemo: "https://m-libremap.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/LibreMap"
  },
  {
    id: 7,
    language: "javascript",
    key: "booklyFront",
    techStack: ["React", "Context API", "React Router Dom"],
    image: bookly_frontend,
    liveDemo: "https://m-bookly-frontend.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/book-store"
  },
  {
    id: 8,
    language: "javascript",
    key: "bookly",
    techStack: ["React", "MongoDB", "Express", "Redux Toolkit", "Cloudinary"],
    image: bookly,
    liveDemo: "https://mbookly.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/Bookly"
  },
  {
    id: 9,
    language: "typescript",
    key: "chat",
    techStack: ["TypeScript", "React", "Zustand", "Tanstack Query", "Express", "MongoDB", "Prisma ORM", "Socket IO", "PWA"],
    image: chat_app,
    liveDemo: "https://mchattapp.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/WhatsApp-clone"
  },
  {
    id: 10,
    language: "javascript",
    key: "pshop",
    techStack: ["React", "React Query", "Bootstrap", "MongoDB", "Cloudinary"],
    image: pshop,
    liveDemo: "https://m-pshop.netlify.app",
    github: "https://github.com/Mahmoud-Saadaoui/PShop"
  },
];

export const filtersData = [
  { id: "all", key: "projects.filters.all" },
  { id: "javascript", key: "projects.filters.javascript" },
  { id: "typescript", key: "projects.filters.typescript" }
];

