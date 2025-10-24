import React, { useState } from "react";
import { FaThLarge } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import img_1 from "../assets/gallery/1.jpg"
import img_2 from "../assets/gallery/2.jpg"
import img_3 from "../assets/gallery/3.jpg"
import img_4 from "../assets/gallery/4.jpg"
import img_5 from "../assets/gallery/5.jpg"
import img_6 from "../assets/gallery/6.jpg"

// 🔸 Données des projets (scalable)
const projects = [
  {
    id: 1,
    category: "تصميم",
    type: "design",
    image: img_1,
  },
  {
    id: 2,
    category: "تطبيق موبايل",
    type: "mobile",
    image: img_2,
  },
  {
    id: 3,
    category: "برمجة موقع",
    type: "web",
    image:img_3,
  },
  {
    id: 4,
    category: "برمجة موقع",
    type: "web",
    image: img_4
  },
  {
    id: 5,
    category: "تصميم",
    type: "design",
    image: img_5,
  },
  {
    id: 6,
    category: "تطبيق موبايل",
    type: "mobile",
    image: img_6,
  },
];

// 🔸 Catégories disponibles
const filters = [
  { id: "all", label: "الكل" },
  { id: "design", label: "تصميم" },
  { id: "web", label: "برمجة مواقع" },
  { id: "mobile", label: "تطبيقات الموبايل" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // 🔸 Filtrage dynamique
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section
      id="gallery"
      className="py-24 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] text-right"
    >
      {/* === Section Title === */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)] flex flex-col items-center justify-center gap-2">
          <FaThLarge className="text-5xl" />
          الأعمال السابقة
        </h2>
        <span className="block w-24 h-1 bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)] mx-auto mt-4 rounded"></span>
      </div>

      {/* === Filters === */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2 rounded-md border-2 transition-all duration-300 font-medium
              ${
                activeFilter === filter.id
                  ? "bg-(--color-primary-light) dark:bg-(--color-primary-dark) text-white border-(--color-primary-light) dark:border-(--color-primary-dark)"
                  : "bg-(--color-background-light) dark:bg-(--color-background-dark) border-(--color-surface-light) dark:border-(--color-surface-dark) text-(--color-foreground-light) dark:text-(--color-foreground-dark) hover:bg-(--color-primary-light) hover:text-white dark:hover:bg-(--color-primary-dark)"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* === Gallery Grid === */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer border border-[var(--color-surface-light)] dark:border-[var(--color-surface-dark)] bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)]"
              >
                <img
                  src={project.image}
                  alt={project.category}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-(--color-primary-light)/80 dark:bg-(--color-primary-dark)/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-lg font-semibold">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
