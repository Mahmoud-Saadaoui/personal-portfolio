import { FaArrowUpRightFromSquare, FaBars, FaGear, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";

// const PortfolioMark = () => (
//   <svg
//     className="portfolio-mark"
//     viewBox="0 0 56 56"
//     role="img"
//     aria-label="Personal Platform"
//   >
//     <path d="M8 9h16l8 10 8-10h8L36 27v20h-8V27L8 9Z" />
//     <path d="M17 17h22" />
//     <circle cx="32" cy="42" r="3" />
//   </svg>
// );

const PortfolioHeader = ({ settingsOpen, onToggleSettings }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="portfolio-header">
      <Link className="portfolio-brand" to="/" aria-label={t("brand.name")}>
        {/* <PortfolioMark /> */}
        <span className="portfolio-brand-name">
          <span>{t("brand.firstName")}</span>
          <span>{t("brand.lastName")}</span>
        </span>
      </Link>

      <button
        className="portfolio-menu-toggle"
        type="button"
        aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>

      <nav className={`portfolio-nav${menuOpen ? " is-open" : ""}`} aria-label={t("nav.label")}>
        <Link
          className={`portfolio-nav-link${pathname === "/" ? " is-active" : ""}`}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          {t("nav.portfolio")}
        </Link>
        <Link
          className={`portfolio-nav-blog${pathname === "/blog" ? " is-active" : ""}`}
          to="/blog"
          onClick={() => setMenuOpen(false)}
        >
          {t("nav.blog")}
          <FaArrowUpRightFromSquare aria-hidden="true" />
        </Link>
      </nav>

      <div className="portfolio-header-actions">
        <LanguageSwitcher variant="portfolio" />
        <button
          className={`settings-trigger${settingsOpen ? " is-active" : ""}`}
          type="button"
          onClick={onToggleSettings}
          aria-label={t("settings.open")}
          aria-expanded={settingsOpen}
        >
          <FaGear aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default PortfolioHeader;
