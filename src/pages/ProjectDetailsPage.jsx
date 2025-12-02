import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data/data.projects";
import { containerVariants, itemVariants } from "../utils/variants";
import Meta from "../components/common/Meta";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[var(--color-text-main)] mb-4">
                        {t('projects.notFound') || 'Project Not Found'}
                    </h1>
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-all"
                    >
                        {t('projects.backToProjects') || 'Back to Projects'}
                    </button>
                </div>
            </div>
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
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <motion.button
                        variants={itemVariants}
                        onClick={() => navigate('/projects')}
                        className="flex items-center gap-2 mb-8 text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">{t('projects.backToProjects') || 'Back to Projects'}</span>
                    </motion.button>

                    {/* Project Image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group"
                    >
                        <img
                            src={project.image}
                            alt={t(`projects.list.${project.key}.title`)}
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </motion.div>

                    {/* Project Title & Links */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)]">
                                {t(`projects.list.${project.key}.title`)}
                            </h1>

                            <div className="flex gap-3">
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl hover:bg-[var(--color-primary)]/90 transition-all shadow-lg hover:shadow-xl font-medium"
                                >
                                    <FaExternalLinkAlt />
                                    <span>{t('projects.liveDemo') || 'Live Demo'}</span>
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-12 h-12 bg-[var(--color-surface)] border-2 border-[var(--color-text-muted)]/20 text-[var(--color-text-main)] rounded-xl hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all shadow-md"
                                    >
                                        <FaGithub className="text-2xl" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <FaCode className="text-[var(--color-primary)] text-xl" />
                            <h2 className="text-2xl font-bold text-[var(--color-text-main)]">
                                {t('projects.techStack') || 'Tech Stack'}
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 text-[var(--color-primary)] rounded-xl font-medium border border-[var(--color-primary)]/20 shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-lg border border-[var(--color-text-muted)]/10"
                    >
                        <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">
                            {t('projects.aboutProject') || 'About This Project'}
                        </h2>
                        <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
                            {t(`projects.list.${project.key}.description`)}
                        </p>
                    </motion.div>

                    {/* Additional Info Section - You can expand this */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <div className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-lg border border-[var(--color-text-muted)]/10">
                            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">
                                {t('projects.category') || 'Category'}
                            </h3>
                            <p className="text-[var(--color-text-muted)] capitalize">
                                {project.language}
                            </p>
                        </div>

                        <div className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-lg border border-[var(--color-text-muted)]/10">
                            <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">
                                {t('projects.technologies') || 'Technologies'}
                            </h3>
                            <p className="text-[var(--color-text-muted)]">
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
