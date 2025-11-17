import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import { LANGUAGES } from "../data/data.navbar";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(i18n.language || "en");
  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  const isRTL = current === "ar";

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrent(lang);
    setOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === current);

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="relative inline-block text-left select-none">
      {/* BUTTON */}
      <button
        ref={btnRef}
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2 px-3 py-2 rounded-full border
          border-neutral-300 dark:border-neutral-700
          bg-white/80 dark:bg-neutral-900/80
          text-neutral-700 dark:text-neutral-200
          hover:bg-neutral-200 dark:hover:bg-neutral-700
          transition-all duration-200 backdrop-blur-md shadow-sm
        "
      >
        <FiGlobe size={18} />
        <span className="font-medium">{currentLang.flag}</span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          ref={dropdownRef}
          className={`
            absolute mt-3 w-32 rounded-xl shadow-lg overflow-hidden
            border border-neutral-300 dark:border-neutral-700
            bg-neutral-50 dark:bg-neutral-900
            z-50
            ${isRTL ? "right-0" : "left-0"}
            animate-dropdown
          `}
        >
          {LANGUAGES.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => handleChange(code)}
              className={`
                w-full text-left px-4 py-2 flex items-center gap-2
                hover:bg-neutral-200 dark:hover:bg-neutral-700
                transition-all
                ${
                  current === code
                    ? "font-semibold text-blue-600 dark:text-blue-400"
                    : "text-neutral-700 dark:text-neutral-200"
                }
              `}
            >
              <span className="text-lg">{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;