import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PortfolioHeader from "../components/portfolio/PortfolioHeader";
import ThemeSettings from "../components/portfolio/ThemeSettings";

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const Arrow = i18n.dir() === "rtl" ? FaArrowLeft : FaArrowRight;

  return (
    <main className="blog-page">
      <PortfolioHeader
        settingsOpen={settingsOpen}
        onToggleSettings={() => setSettingsOpen((open) => !open)}
      />
      <ThemeSettings open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <div className="blog-content">
        <p className="eyebrow">{t("blog.eyebrow")}</p>
        <FaRegNewspaper className="blog-icon" aria-hidden="true" />
        <h1>{t("blog.title")}</h1>
        <p>{t("blog.description")}</p>
        <Link className="text-link" to="/">
          {t("blog.back")} <Arrow aria-hidden="true" />
        </Link>
      </div>
      <p className="blog-footer">{t("blog.status")}</p>
    </main>
  );
};

export default BlogPage;
