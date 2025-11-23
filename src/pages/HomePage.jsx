import { FaDownload } from "react-icons/fa";
import profile from "../assets/profile.png";
// import bg from "../assets/bg.jpg";
import { useTranslation } from "react-i18next";
import { socials } from "../data/data.about";
import cv_fr from "../assets/files/cv-fr.pdf";
import cv_ar from "../assets/files/cv-ar.pdf";
import cv_en from "../assets/files/cv-en.pdf";

const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  let cv;
  currentLang === "en"
    ? (cv = cv_en)
    : currentLang === "fr"
    ? (cv = cv_fr)
    : (cv = cv_ar);
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center"
    >

      {/* Card principale */}
      <div
        className="
      -mt-24
      px-8 md:px-16 py-12
      text-center
      rounded-2xl
      shadow-2xl
      max-w-3xl
      backdrop-blur-md
      z-10
      transition-all duration-500
    "
      >
        {/* Image profil */}
        <img
          className="
        w-36 h-36
        rounded-full
        mx-auto mb-6
        border-[5px]
        border-(--color-primary-light) dark:border-(--color-primary-dark)
        shadow-md
      "
          src={profile}
          alt="personal-img"
        />

        {/* Nom et titre */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-[50px] text-(--color-primary-light) dark:text-(--color-primary-dark)">
          {t("about.name")}
          <span className="block text-xl md:text-2xl mt-2 text-(--color-secondary-light) dark:text-(--color-secondary-dark)">
            {t("about.title")}
          </span>
        </h1>

        {/* Réseaux sociaux */}
        <ul className="flex justify-center gap-5 mb-10 text-3xl">
          {socials.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
              text-(--color-foreground-light) dark:text-(--color-foreground-dark)
              hover:text-(--color-primary-light) dark:hover:text-(--color-primary-dark)
              transition-colors duration-300
            "
              >
                <item.icon />
              </a>
            </li>
          ))}
        </ul>

        {/* Bio */}
        <p className="text-base md:text-lg leading-8 text-(--color-foreground-light)/90 dark:text-(--color-foreground-dark)/90 mb-10">
          {t("about.bio")}
        </p>

        {/* Bouton de téléchargement */}
        <a
          href={cv}
          download={`cv-${currentLang}`}
          className="
        inline-flex items-center gap-2
        text-lg font-semibold
        bg-(--color-primary-light) dark:bg-(--color-primary-dark)
        hover:bg-(--color-secondary-light) dark:hover:bg-(--color-secondary-dark)
        text-white
        px-6 py-3 rounded-full
        transition-all duration-300
        shadow-lg hover:shadow-xl
      "
        >
          <FaDownload className="text-xl" />
          {t("about.download")}
        </a>
      </div>
    </section>
  );
};

export default Home;