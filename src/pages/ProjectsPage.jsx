import { useState } from "react";
import { FaThLarge, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { filtersData, projects } from "../data/data.projects";
import Heading from "../components/common/Heading";
import { containerVariants, itemVariants } from "../utils/variants";
import { useNavigate } from "react-router-dom";
import Meta from "../components/common/Meta";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const isRTL = i18n.language === "ar";
  const navigate = useNavigate();
  const filters = filtersData.map(f => ({ ...f, label: t(f.key) }));

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.language === activeFilter);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
      <Meta
        title={t('seo.projects.title')}
        description={t('seo.projects.description')}
        keywords={t('seo.projects.keywords')}
      />
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
                  onClick={() => handleProjectClick(project.id)}
                  className="group relative bg-[var(--color-surface)] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[var(--color-text-muted)]/10 hover:-translate-y-2 hover:border-[var(--color-primary)]/30 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={t(`projects.list.${project.key}.title`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Overlay - Discover More */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-95 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <div className="relative">
                          <FaExternalLinkAlt className="text-white text-xl mb-3 mx-auto animate-pulse" />
                          <div className="absolute inset-0 text-white text-xl mb-3 mx-auto blur-xl opacity-50">
                            {/* <FaExternalLinkAlt /> */}
                          </div>
                        </div>
                        <p className="text-white font-bold text-xl tracking-wide">
                          {t('projects.discoverMore') || 'Discover More'}
                        </p>
                        <div className="mt-2 w-16 h-1 bg-white mx-auto rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                      {t(`projects.list.${project.key}.title`)}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full font-medium border border-[var(--color-primary)]/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1.5 text-xs text-[var(--color-text-muted)] font-medium">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;