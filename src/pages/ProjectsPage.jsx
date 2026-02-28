import { useState, useMemo, memo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaThLarge, FaExternalLinkAlt, FaGithub, FaFilter } from "react-icons/fa";
import { filtersData, projects } from "../data/data.projects";
import Heading from "../components/common/Heading";
import { useNavigate } from "react-router-dom";
import Meta from "../components/common/Meta";
import LazyImage from "../components/common/LazyImage";

// ============================================
// ANIMATION VARIANTS
// ============================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  exit: { y: -30, opacity: 0, scale: 0.9 }
};

const filterVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.05, type: "spring", stiffness: 200 }
  }),
  tap: { scale: 0.95 }
};

// ============================================
// PROJECT CARD COMPONENT
// ============================================

const ProjectCard = memo(({ project, t, navigate, index, isRTL }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      onClick={() => navigate(`/projects/${project.id}`)}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ originY: 0 }}
    >
      {/* Card Container with 3D Effect */}
      <motion.div
        className="relative h-full cursor-pointer"
        animate={{
          rotateY: isHovered ? 2 : 0,
          rotateX: isHovered ? 2 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Main Card */}
        <div className="relative bg-[var(--color-surface)] rounded-3xl overflow-hidden shadow-[var(--shadow-md)] border border-[var(--color-border-subtle)] h-full">

          {/* Image Section */}
          <div className="relative h-56 overflow-hidden">
            <LazyImage
              src={project.image}
              alt={t(`projects.list.${project.key}.title`)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Tech Stack Badges - Floating */}
            <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} flex flex-col gap-2 ${isRTL ? "items-start" : "items-end"}`}>
              {project.techStack.slice(0, 2).map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
                  animate={{ x: isHovered ? 0 : (isRTL ? -50 : 50), opacity: isHovered ? 1 : 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 text-xs bg-[var(--color-surface)]/90 backdrop-blur-sm text-[var(--color-primary)] rounded-full font-medium border border-[var(--color-primary)]/20 shadow-lg"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* View Details Badge */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-4 rounded-2xl shadow-[var(--shadow-2xl)]">
                <FaExternalLinkAlt className="text-white text-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6 relative">
            {/* Animated Border Bottom */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />

            {/* Project Title */}
            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-1">
              {t(`projects.list.${project.key}.title`)}
            </h3>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full font-medium border border-[var(--color-primary)]/20"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-3 py-1 text-xs text-[var(--color-text-muted)] font-medium">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-subtle)]">
              <span className="text-xs text-[var(--color-text-muted)] capitalize">
                {project.language}
              </span>
              <motion.div
                className="flex items-center gap-1 text-[var(--color-primary)] text-sm font-medium"
                whileHover={{ x: isRTL ? -3 : 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>{t("projects.view")}</span>
                <FaExternalLinkAlt className="text-xs" />
              </motion.div>
            </div>
          </div>

          {/* Animated Corner Accent */}
          <motion.div
            className={`absolute top-0 ${isRTL ? "left-0 rounded-br-3xl" : "right-0 rounded-bl-3xl"} w-20 h-20 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20`}
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

// ============================================
// FILTER CHIP COMPONENT
// ============================================

const FilterChip = memo(({ filter, isActive, onClick, index }) => (
  <motion.button
    custom={index}
    variants={filterVariants}
    initial="hidden"
    animate="visible"
    whileTap="tap"
    whileHover={{ scale: 1.05 }}
    onClick={() => onClick(filter.id)}
    className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 overflow-hidden ${
      isActive
        ? "text-white"
        : "bg-[var(--color-surface)] text-[var(--color-text-main)] border border-[var(--color-border-subtle)]"
    }`}
  >
    {isActive && (
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
        layoutId="activeFilter"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
    <span className="relative z-10 flex items-center gap-2">
      {filter.label}
      {isActive && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-2 h-2 bg-white rounded-full"
        />
      )}
    </span>
  </motion.button>
));

FilterChip.displayName = "FilterChip";

// ============================================
// MAIN PROJECTS PAGE
// ============================================

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const isRTL = i18n.language === "ar";
  const navigate = useNavigate();

  // Memoized filters with translations
  const filters = useMemo(
    () => filtersData.map((f) => ({ ...f, label: t(f.key) })),
    [t]
  );

  // Memoized filtered projects
  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.language === activeFilter),
    [activeFilter]
  );

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <>
      <Meta
        title={t('seo.projects.title')}
        description={t('seo.projects.description')}
        keywords={t('seo.projects.keywords')}
      />

      {/* Hero Section with Animated Background */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className={`absolute top-20 ${isRTL ? "right-10" : "left-10"} w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl`}
            animate={{
              x: [0, isRTL ? -100 : 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={`absolute bottom-20 ${isRTL ? "left-10" : "right-10"} w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl`}
            animate={{
              x: [0, isRTL ? 100 : -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
              <FaThLarge className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-main)] mb-4">
              <span className="text-gradient">{t("projects.title")}</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </motion.div>

          {/* Stats Bar */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--color-primary)]">{projects.length}</div>
              <div className="text-sm text-[var(--color-text-muted)]">{t("projects.statsProjects")}</div>
            </div>
            <div className="w-px bg-[var(--color-border-subtle)]" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--color-accent)]">
                {new Set(projects.map(p => p.language)).size}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">{t("projects.statsTechnologies")}</div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-surface)] rounded-2xl shadow-[var(--shadow-sm)] border border-[var(--color-border-subtle)]">
              <FaFilter className="text-[var(--color-text-muted)]" />
              <span className="text-sm font-medium text-[var(--color-text-muted)]">{t("projects.filterLabel")}</span>
            </div>
            {filters.map((filter, index) => (
              <FilterChip
                key={filter.id}
                filter={filter}
                isActive={activeFilter === filter.id}
                onClick={handleFilterChange}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  t={t}
                  navigate={navigate}
                  index={index}
                  isRTL={isRTL}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-surface)] shadow-[var(--shadow-md)] mb-4">
                <FaThLarge className="text-3xl text-[var(--color-text-muted)]" />
              </div>
              <p className="text-[var(--color-text-muted)] text-lg">
                {t("projects.noProjects")}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-3xl p-12 text-center text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              {t("contact.title")}
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto relative z-10">
              {t("projects.cta")}
            </p>
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-8 py-4 bg-white text-[var(--color-primary)] font-bold rounded-xl shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-2xl)] transition-all"
            >
              {t("about.contact")}
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
