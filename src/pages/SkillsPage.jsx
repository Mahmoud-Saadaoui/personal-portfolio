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
import Heading from "../components/common/Heading";
import Meta from "../components/common/Meta";
import Card from "../components/common/Card";
import { containerVariants, itemVariants } from "../utils/variants";

const iconMap = {
  "capabilities.frontend": <FaCode />,
  "capabilities.backend": <FaServer />,
  "capabilities.databases": <FaDatabase />,
  "capabilities.devops": <FaCloud />,
  "capabilities.systemDesign": <FaLayerGroup />,
};

const Skills = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <>
      <Meta
        title={t('seo.skills.title')}
        description={t('seo.skills.description')}
        keywords={t('seo.skills.keywords')}
      />
      <section className={`py-4 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] overflow-hidden ${isRTL ? "text-right" : "text-left"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <Heading title={t("navbar.skills")} icon={FaGraduationCap} />

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
                <Card key={index} hover>
                  <div className="flex flex-col h-full">
                    <div className={`absolute top-0 ${isRTL ? "left-0 rounded-br-2xl" : "right-0 rounded-bl-2xl"} w-24 h-24 bg-[var(--color-primary-light)] -z-10 transition-transform group-hover:scale-150`} />

                    <div className={`mb-4 text-4xl text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300 ${isRTL ? "origin-right" : "origin-left"}`}>
                      {iconMap[skill.key]}
                    </div>

                    <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                      {title}
                    </h3>

                    <p className="text-[var(--color-text-muted)] leading-relaxed text-sm md:text-base">
                      {description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
