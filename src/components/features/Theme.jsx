import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import Dropdown from "../common/Dropdown";

export const Theme = () => {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const themes = {
    light: { label: "Light", icon: <FaSun size={16} /> },
    dark: { label: "Dark", icon: <FaMoon size={16} /> },
    system: { label: "System", icon: <FaDesktop size={16} /> },
  };

  const items = Object.entries(themes).map(([key, { label, icon }]) => ({
    value: key,
    label,
    icon,
  }));

  return (
    <Dropdown
      trigger={({ open, setOpen }) => (
        <button
          onClick={() => setOpen(!open)}
          aria-label="Select theme"
          aria-expanded={open}
          className="flex items-center justify-center w-10 h-10 text-[var(--color-text-main)] transition-all duration-200 shadow-sm hover:bg-[var(--color-secondary)]/10 rounded-lg"
        >
          {themes[theme]?.icon}
        </button>
      )}
      items={items}
      value={theme}
      onChange={setTheme}
      isRTL={isRTL}
    />
  );
};
