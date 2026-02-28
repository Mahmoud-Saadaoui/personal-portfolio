import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import { socials } from "../data/data.about";
import { containerVariants, itemVariants } from "../utils/variants";
import Meta from "../components/common/Meta";
import Button from "../components/common/Button";

const Home = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRTL = lang === "ar";
  const textAlign = isRTL ? "text-right" : "text-left";

  return (
    <>
      <Meta
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
      />
      <section className="min-h-[80vh] flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className={`max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 ${textAlign}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* === Text Content === */}
          <div className="flex-1 flex flex-col items-center lg:items-start space-y-4">
            <motion.div variants={itemVariants} className={`space-y-2 text-center ${isRTL ? "lg:text-right" : "lg:text-left"} w-full`}>
              <h2 className="text-lg md:text-xl font-medium text-[var(--color-accent)] tracking-wide uppercase">
                {t("about.title")}
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold pb-4 tracking-tight text-gradient">
                {t("about.name")}
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-2xl text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}
            >
              {t("about.bio")}
            </motion.p>

            {/* === Social Icons === */}
            <motion.ul variants={itemVariants} className="flex gap-4 mt-4">
              {socials.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-surface)] text-[var(--color-accent)] shadow-[var(--shadow-md)] hover:text-[var(--color-primary)] hover:shadow-[var(--shadow-primary)] transition-all duration-300 border border-[var(--color-border-subtle)]"
                  >
                    <item.icon className="text-xl" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* === CTA Button === */}
            <motion.div variants={itemVariants} className="flex gap-4 mt-6">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                iconPosition="right"
              >
                {t("about.contact")}
              </Button>
            </motion.div>
          </div>

          {/* === Profile Image === */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end relative"
            variants={itemVariants}
          >
            {/* Decorative Circle Background */}
            <div className="absolute inset-0 gradient-bg-subtle rounded-full blur-3xl transform scale-90 -z-10 animate-pulse" />

            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border-2 border-[var(--color-accent)]/30 animate-[spin_15s_linear_infinite_reverse]" />
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover rounded-full border-4 border-[var(--color-surface)] shadow-[var(--shadow-2xl)] z-10 relative"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
