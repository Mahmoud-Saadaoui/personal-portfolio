import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import { LANGUAGES } from "../data/data.navbar";

const Language = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(i18n.language || "en");
  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  const isRTL = current === "ar";

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrent(lang);
    setOpen(false);
  };

  // === AUTO-CLOSE outside click ===
  useEffect(() => {
    const handler = (e) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  return (
    <div className="relative inline-block text-left select-none">

      {/* Button */}
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2 px-3 py-2 
          text-(--color-text-main)
          transition shadow-sm backdrop-blur-md
        "
      >
        {current}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className={`
            absolute mt-3 w-36 rounded-xl shadow-lg overflow-hidden
            border border-(--color-text-muted)/30
            bg-(--color-surface)
            z-50 animate-fade-slide
            ${isRTL ? "left-0" : "right-0"}
          `}
        >
          {LANGUAGES.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => handleLanguage(code)}
              className={`
                w-full text-left px-4 py-2 flex items-center gap-2
                hover:bg-(--color-background)
                transition-all
                ${current === code
                  ? "font-semibold text-(--color-primary)"
                  : "text-(--color-text-main)"
                }
              `}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;