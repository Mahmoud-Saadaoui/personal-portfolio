import { useEffect, useState } from "react";
import { FaCheck, FaRotateLeft, FaXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { themeOptions } from "../../data/portfolio";

const STORAGE_KEY = "personal-platform-theme-v1";

const ThemeSettings = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEY) || "coral");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  if (!open) return null;

  return (
    <aside className="theme-settings" aria-label={t("settings.title")}>
      <div className="theme-settings-header">
        <div>
          <p className="eyebrow">{t("settings.eyebrow")}</p>
          <h2>{t("settings.title")}</h2>
        </div>
        <button type="button" className="icon-button" onClick={onClose} aria-label={t("settings.close")}>
          <FaXmark aria-hidden="true" />
        </button>
      </div>
      <p className="theme-settings-copy">{t("settings.description")}</p>
      <div className="theme-options" role="radiogroup" aria-label={t("settings.colors")}>
        {themeOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`theme-option${theme === option.id ? " is-selected" : ""}`}
            onClick={() => setTheme(option.id)}
            role="radio"
            aria-checked={theme === option.id}
            aria-label={t(`settings.${option.id}`)}
          >
            <span className="theme-swatch" style={{ backgroundColor: option.color }} />
            <span>{t(`settings.${option.id}`)}</span>
            {theme === option.id && <FaCheck aria-hidden="true" />}
          </button>
        ))}
      </div>
      <button type="button" className="theme-reset" onClick={() => setTheme("coral")}>
        <FaRotateLeft aria-hidden="true" />
        {t("settings.reset")}
      </button>
    </aside>
  );
};

export default ThemeSettings;
