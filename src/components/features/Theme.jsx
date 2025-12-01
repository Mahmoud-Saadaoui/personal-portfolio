import { useState, useRef, useEffect } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

export const Theme = () => {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  const isRTL = i18n.language === "ar";

  const themes = {
    light: { label: "Light", icon: <FaSun size={16} /> },
    dark: { label: "Dark", icon: <FaMoon size={16} /> },
    system: { label: "System", icon: <FaDesktop size={16} /> },
  };

  const currentIcon = themes[theme]?.icon;

  // === AUTO-CLOSE when clicking outside ===
  useEffect(() => {
    const close = (e) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <div className="relative inline-block text-left select-none">

      {/* Button */}
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        aria-label="Select theme"
        className="
          flex items-center justify-center w-10 h-10
          text-(--color-text-main)
          transition-all duration-200 shadow-sm
        "
      >
        {currentIcon}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className={`
            absolute mt-2 w-36 rounded-xl shadow-lg
            bg-(--color-surface) border border-(--color-text-muted)/30
            animate-fade-slide z-50
            ${isRTL ? "left-0" : "right-0"}
          `}
        >
          {Object.entries(themes).map(([key, { label, icon }]) => (
            <button
              key={key}
              onClick={() => {
                setTheme(key);
                setOpen(false);
              }}
              className={`
                w-full flex items-center gap-2 px-4 py-2
                text-(--color-text-main)
                hover:bg-(--color-background)
                transition-all
                ${theme === key
                  ? "font-semibold text-(--color-primary)"
                  : ""
                }
              `}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};