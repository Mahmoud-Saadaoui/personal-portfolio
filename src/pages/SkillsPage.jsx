import { useTranslation } from "react-i18next";
import { FaGraduationCap } from "react-icons/fa";
import { skillsKeys } from "../data/data.skills";

const Skills = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      id="skills"
      className={`pt-28 pb-10 ${
        isRTL ? "text-right" : "text-left"
      } bg-(--color-accent-light) dark:bg-(--color-accent-dark) relative overflow-hidden`}
    >
      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary-light) dark:text-(--color-primary-dark) flex flex-col items-center justify-center gap-2">
          <FaGraduationCap className="text-5xl" />
          {t("skills.skillsTitle")}
        </h2>
        <span className="block w-24 h-1 bg-(--color-primary-light) dark:bg-(--color-primary-dark) mx-auto mt-4 rounded"></span>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <div className="absolute right-1/2 top-0 bottom-0 w-[3px] bg-(--color-primary-light) dark:bg-(--color-primary-dark) transform translate-x-1/2 hidden md:block"></div>
        <ul className="space-y-3">
          {skillsKeys.map((skill, index) => {
            const isEven = index % 2 === 0;
            const alignRight = isRTL ? !isEven : isEven;
            return (
              <li
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  alignRight ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <span className="hidden md:block absolute top-6 right-1/2 w-4 h-4 bg-(--color-primary-light) dark:bg-(--color-primary-dark) rounded-full transform translate-x-1/2 shadow-lg"></span>
                <div
                  className={`
                    bg-(--color-background-light) dark:bg-(--color-background-dark)
                    border border-(--color-surface-light) dark:border-(--color-surface-dark)
                    shadow-md rounded-2xl p-6 md:w-[46%] relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                    ${
                      alignRight
                        ? isRTL
                          ? "md:ml-0 text-right"
                          : "md:mr-0 text-left"
                        : isRTL
                        ? "md:mr-0 md:ml-auto text-left"
                        : "md:ml-0 md:mr-auto text-left"
                    }
                  `}
                >
                  <h4 className="text-lg md:text-xl font-semibold text-(--color-foreground-light) dark:text-(--color-foreground-dark) mb-3 leading-relaxed">
                    {t(skill.title)}
                  </h4>
                  <p className="text-(--color-foreground-light)/70 dark:text-(--color-foreground-dark)/70 leading-relaxed text-sm md:text-base">
                    {t(skill.description)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;