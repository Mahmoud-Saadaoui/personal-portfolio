import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  // 🔹 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight; 
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Gestion du thème
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 backdrop-blur-md ${
        isScrolled
          ? "bg-(--color-background-light)/90 dark:bg-(--color-background-dark)/90 shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <ul className="hidden md:flex gap-8 text-(--color-primary-light) dark:text-(--color-primary-dark) font-medium">
          <li className="hover:text-(--color-secondary-dark) dark:hover:text-(--color-secondary-light) cursor-pointer transition-colors">
            {t("navbar.about")}
          </li>
          <li className="hover:text-(--color-secondary-dark) dark:hover:text-(--color-secondary-light) cursor-pointer transition-colors">
            {t("navbar.skills")}
          </li>
          <li className="hover:text-(--color-secondary-dark) dark:hover:text-(--color-secondary-light) cursor-pointer transition-colors">
            {t("navbar.projects")}
          </li>
          <li className="hover:text-(--color-secondary-dark) dark:hover:text-(--color-secondary-light) cursor-pointer transition-colors">
            {t("navbar.contact")}
          </li>
        </ul>

        {/* Zone d’actions */}
        <div className="flex items-center gap-3 relative">
          <ChangeLanguage/>

          {/* 🌙 Toggle Dark/Light */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border bg-(--color-background-light) dark:bg-(--color-background-dark) transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FaMoon className="text-(--color-accent-dark)" />
            ) : (
              <FaSun className="text-(--color-accent-dark)" />
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;