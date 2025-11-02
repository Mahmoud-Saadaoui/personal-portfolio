import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe } from "react-icons/fi";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(i18n.language || "en");

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrent(lang);
    setOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === current);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border 
                   border-(--color-accent-light) dark:border-(--color-accent-dark)
                   bg-(--color-background-light)/70 dark:bg-(--color-background-dark)/70
                   text-(--color-foreground-light) dark:text-(--color-foreground-dark)
                   hover:shadow-sm hover:bg-(--color-accent-light)/40 dark:hover:bg-(--color-accent-dark)/40
                   transition-all duration-200 backdrop-blur-md"
      >
        <FiGlobe className="text-(--color-primary-light)" size={18} />
        <span className="font-medium">{currentLang.flag}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-36 rounded-xl shadow-lg overflow-hidden 
                       border border-(--color-accent-light) dark:border-(--color-accent-dark)
                       bg-(--color-background-light) dark:bg-(--color-background-dark)
                       backdrop-blur-lg z-50"
          >
            {LANGUAGES.map(({ code, label, flag }) => (
              <button
                key={code}
                onClick={() => handleChange(code)}
                className={`w-full text-left px-4 py-2 flex items-center gap-2
                            hover:bg-(--color-accent-light) dark:hover:bg-(--color-accent-dark)
                            transition ${
                              current === code
                                ? "text-(--color-primary-dark) font-semibold"
                                : "text-(--color-foreground-light) dark:text-(--color-foreground-dark)"
                            }`}
              >
                <span className="text-lg">{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChangeLanguage;