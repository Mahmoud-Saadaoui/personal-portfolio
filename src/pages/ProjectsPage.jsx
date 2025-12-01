import { useState } from "react";
import { FaThLarge, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { filtersData, projects } from "../data/data.projects";
import Heading from "../components/Heading";
import { containerVariants, itemVariants } from "../variants";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const isRTL = i18n.language === "ar";

  const filters = filtersData.map(f => ({ ...f, label: t(f.key) }));

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.language === activeFilter);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <section
      className={`py-4 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] ${isRTL ? "text-right" : "text-left"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Heading title={t("projects.title")} icon={FaThLarge} />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
                : "bg-[var(--color-surface)] text-[var(--color-text-main)] border border-[var(--color-text-muted)]/20 hover:border-[var(--color-primary)]/50 hover:scale-105"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                className="group relative bg-[var(--color-surface)] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[var(--color-text-muted)]/10 hover:-translate-y-2 hover:border-[var(--color-primary)]/30"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(`projects.list.${project.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {t(`projects.list.${project.key}.title`)}
                  </h3>

                  <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-3">
                    {t(`projects.list.${project.key}.description`)}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs text-[var(--color-text-muted)]">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-all text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-[var(--color-surface)] border border-[var(--color-text-muted)]/20 text-[var(--color-text-main)] rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;