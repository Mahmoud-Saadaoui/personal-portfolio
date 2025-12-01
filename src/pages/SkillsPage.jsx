import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaLayerGroup,
  FaGraduationCap
} from "react-icons/fa";
import { skillsKeys } from "../data/data.skills";

const iconMap = {
  "skills.frontend": <FaCode />,
  "skills.backend": <FaServer />,
  "skills.databases": <FaDatabase />,
  "skills.devops": <FaCloud />,
  "skills.systemDesign": <FaLayerGroup />,
};

const Skills = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className={`py-4 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] overflow-hidden ${isRTL ? "text-right" : "text-left"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
            <FaGraduationCap className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            {t("navbar.skills")}
          </h2>
          <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillsKeys.map((skill, index) => {
            const fullText = t(skill.key);
            const [title, description] = fullText.includes(":")
              ? fullText.split(":").map(s => s.trim())
              : [fullText, ""];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-[var(--color-surface)] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--color-text-muted)]/10 hover:-translate-y-1 hover:border-[var(--color-primary)]/30"
              >
                <div className={`absolute top-0 ${isRTL ? "left-0 rounded-br-2xl" : "right-0 rounded-bl-2xl"} w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent -z-10 transition-all group-hover:scale-150`} />

                <div className="flex flex-col h-full">
                  <div className="mb-4 text-4xl text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300 origin-left">
                    {iconMap[skill.key]}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {title}
                  </h3>

                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm md:text-base">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;