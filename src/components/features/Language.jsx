import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../data/data.navbar";
import Dropdown from "../common/Dropdown";

const Language = () => {
  const { i18n } = useTranslation();
  const current = i18n.language || "en";
  const isRTL = current === "ar";

  const items = LANGUAGES.map(({ code, label }) => ({
    value: code,
    label: `${label}`,
  }));

  const currentLang = LANGUAGES.find(lang => lang.code === current);
  const currentLabel = currentLang ? `${currentLang.label}` : current.toUpperCase();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Dropdown
      trigger={({ open, setOpen }) => (
        <button
          onClick={() => setOpen(!open)}
          aria-label="Select language"
          aria-expanded={open}
          className="flex items-center gap-2 px-3 py-2 text-[var(--color-text-main)] transition shadow-sm backdrop-blur-md hover:bg-[var(--color-secondary)]/10 rounded-lg min-w-[100px]"
        >
          <span className="truncate">{currentLabel}</span>
        </button>
      )}
      items={items}
      value={current}
      onChange={handleLanguageChange}
      isRTL={isRTL}
    />
  );
};

export default Language;
