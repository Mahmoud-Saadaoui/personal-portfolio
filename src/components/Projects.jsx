import React, { useState } from "react";
import { FaThLarge, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { filtersData, projects } from "../data/data.projects";

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = filtersData.map(f => ({ ...f, label: t(f.key) }));
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);
  return (
    <section
      id="gallery"
      className="py-10 bg-(--color-background-light) dark:bg-(--color-background-dark) text-right"
    >
      {/* === Section Title === */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary-light) dark:text-(--color-primary-dark) flex flex-col items-center justify-center gap-2">
          <FaThLarge className="text-5xl" />
          {t("projects.title")}
        </h2>
        <span className="block w-24 h-1 bg-(--color-primary-light) dark:bg-(--color-primary-dark) mx-auto mt-4 rounded"></span>
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
                className="project-card relative rounded-xl overflow-hidden shadow-md border bg-white dark:bg-gray-900 dark:border-gray-700"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={t(`projects.list.${project.key}.title`)}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="project-overlay">
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`projects.list.${project.key}.title`)}
                  </h3>
                  <p className="text-sm mb-3">
                    {t(`projects.list.${project.key}.description`)}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="underline hover:text-gray-200"
                    >
                      Live Demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-white hover:text-gray-200 text-lg"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
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