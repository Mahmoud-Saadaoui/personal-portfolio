import React from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-3">
      <div className="max-w-6xl mx-auto px-2">
        {/* Decorative horizontal line with subtle gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent mb-4"></div>

        {/* Top row: Connect label + Social Icons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left side: Label + Icons */}
          <div className="flex flex-col items-center gap-2">
            {/* Label above icons */}
            <span className="text-[var(--color-text-main)] text-sm font-medium">
              {t("footer.connect")}
            </span>

            {/* Social icons */}
            <div className="flex gap-2 text-lg text-[var(--color-text-muted)] transition-colors duration-300">
              <a
                href="https://github.com/Mahmoud-Saadaoui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saadaoui-mahmoud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:contact.saadaouimahmoud@gmail.com"
                aria-label="Email"
                className="hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/21627987081"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right side: Copyright / Rights */}
          <div className="text-xs text-[var(--color-text-muted)] text-center md:text-right opacity-80">
            {t("footer.rights")} © {year}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
