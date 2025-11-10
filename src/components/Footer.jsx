import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../data/data.navLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer
      className="w-full border-t transition-colors duration-500 
                 border-(--color-accent-light) dark:border-(--color-accent-dark)
                 bg-(--color-background-light) dark:bg-(--color-background-dark)
                 text-(--color-foreground-light) dark:text-(--color-foreground-dark)"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-6 gap-4">
        
        {/* 🔗 Liens simples */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className="cursor-pointer hover:text-(--color-primary-light) dark:hover:text-(--color-primary-dark)
                         transition-colors duration-300"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        {/* 🌐 Icônes sociales */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/Mahmoud-Saadaoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-(--color-secondary-light) dark:hover:text-(--color-secondary-dark)
                       transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/saadaoui-mahmoud"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-(--color-secondary-light) dark:hover:text-(--color-secondary-dark)
                       transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:contact.saadaouimahmoud@gmail.com"
            aria-label="Email"
            className="hover:text-(--color-secondary-light) dark:hover:text-(--color-secondary-dark)
                       transition-colors duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/21627987081"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-(--color-secondary-light) dark:hover:text-(--color-secondary-dark)
                       transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* 📜 Copyright */}
        <p className="text-xs text-center opacity-80">
          © {year} Saadaoui Mahmoud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;