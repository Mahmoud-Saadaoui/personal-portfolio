import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCode, FaLayerGroup, FaCalendar } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data/data.projects";
import { containerVariants, itemVariants } from "../utils/variants";
import Meta from "../components/common/Meta";
import LazyImage from "../components/common/LazyImage";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4"
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[var(--color-error)]/10 text-[var(--color-error)] mb-6">
            <FaLayerGroup className="text-4xl" />
          </div>
          <h1 className="text-4xl font-bold text-[var(--color-text-main)] mb-4">
            {t('projects.notFound') || 'Project Not Found'}
          </h1>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
            {t('projects.subtitle')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
            className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-all"
          >
            {t('projects.backToProjects') || 'Back to Projects'}
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const projectTitle = t(`projects.list.${project.key}.title`);
  const projectDescription = t(`projects.list.${project.key}.description`);
  const metaTitle = t('seo.projectDetails.titleTemplate').replace('{projectTitle}', projectTitle);

  return (
    <>
      <Meta
        title={metaTitle}
        description={projectDescription}
        keywords={t('seo.projectDetails.keywords')}
      />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`py-8 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] min-h-screen ${isRTL ? "text-right" : "text-left"}`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.button
            variants={itemVariants}
            onClick={() => navigate('/projects')}
            whileHover={{ x: isRTL ? 5 : -5 }}
            className="flex items-center gap-2 mb-8 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors group font-medium"
          >
            <FaArrowLeft className={`transition-transform ${isRTL ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
            <span>{t('projects.backToProjects') || 'Back to Projects'}</span>
          </motion.button>

          {/* Hero Image Section */}
          <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-2xl)] mb-8 group">
            <div className="aspect-video w-full">
              <LazyImage
                src={project.image}
                alt={projectTitle}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          {/* Title & Actions */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-4"
                >
                  <span className="text-gradient">{projectTitle}</span>
                </motion.h1>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-2">
                    <FaCode className="text-[var(--color-primary)]" />
                    {project.language}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaLayerGroup className="text-[var(--color-accent)]" />
                    {project.techStack.length} {t('projects.technologiesUsed') || 'technologies'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white rounded-xl font-semibold shadow-[var(--shadow-primary)] hover:shadow-[var(--shadow-primary-lg)] transition-all"
                  >
                    <FaExternalLinkAlt />
                    <span>{t('projects.liveDemo') || 'Live Demo'}</span>
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-[var(--color-surface)] border-2 border-[var(--color-border-subtle)] text-[var(--color-text-main)] rounded-xl font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all shadow-[var(--shadow-md)]"
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-[var(--shadow-md)] border border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[var(--color-primary-light)] rounded-xl">
                  <FaCode className="text-[var(--color-primary)] text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)]">
                  {t('projects.techStack') || 'Tech Stack'}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 text-[var(--color-primary)] rounded-xl font-medium border border-[var(--color-primary)]/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Description */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-[var(--shadow-md)] border border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[var(--color-accent)]/10 rounded-xl">
                  <FaLayerGroup className="text-[var(--color-accent)] text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)]">
                  {t('projects.aboutProject') || 'About This Project'}
                </h2>
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
                {projectDescription}
              </p>
            </div>
          </motion.div>

          {/* Project Info Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-[var(--shadow-md)] border border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                  <FaCode className="text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-main)]">
                  {t('projects.category') || 'Category'}
                </h3>
              </div>
              <p className="text-[var(--color-text-muted)] capitalize text-lg">
                {project.language}
              </p>
            </div>

            <div className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-[var(--shadow-md)] border border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[var(--color-accent)]/10 rounded-lg">
                  <FaLayerGroup className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-main)]">
                  {t('projects.technologies') || 'Technologies'}
                </h3>
              </div>
              <p className="text-[var(--color-text-muted)] text-lg">
                {project.techStack.length} {t('projects.technologiesUsed') || 'technologies used'}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ProjectDetailsPage;
