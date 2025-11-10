import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight / 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion du thème
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const navLinks = [
    { id: "about", label: t("navbar.about") },
    { id: "skills", label: t("navbar.skills") },
    { id: "projects", label: t("navbar.projects") },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 backdrop-blur-md ${
        isScrolled
          ? "bg-(--color-background-light)/90 dark:bg-(--color-background-dark)/90 shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        {/* 🔹 Liens Desktop */}
        <ul className="hidden md:flex gap-8 text-(--color-primary-light) dark:text-(--color-primary-dark) font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-(--color-secondary-dark) dark:hover:text-(--color-secondary-light) cursor-pointer transition-colors"
            >
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* 🔹 Zone d’actions */}
        <div className="flex items-center gap-3">
          {/* Bouton Langue */}
          <ChangeLanguage />

          {/* Bouton Thème */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border 
                     border-(--color-accent-light) dark:border-(--color-accent-dark)
                     bg-(--color-background-light)/70 dark:bg-(--color-background-dark)/70
                     text-(--color-primary-light) dark:text-(--color-primary-dark)
                     hover:bg-(--color-accent-light)/40 dark:hover:bg-(--color-accent-dark)/40
                     transition-all duration-200 backdrop-blur-md"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* Bouton Burger (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full
                       border border-(--color-accent-light) dark:border-(--color-accent-dark)
                       bg-(--color-background-light)/70 dark:bg-(--color-background-dark)/70
                       text-(--color-primary-light) dark:text-(--color-primary-dark)
                       hover:bg-(--color-accent-light)/40 dark:hover:bg-(--color-accent-dark)/40
                       transition-all duration-200 backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* 🔹 Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-(--color-background-light)/95 dark:bg-(--color-background-dark)/95 
                       shadow-lg backdrop-blur-md absolute top-full left-0 w-full py-6 z-40"
          >
            <ul className="flex flex-col items-center gap-6 text-lg font-medium text-(--color-primary-light) dark:text-(--color-primary-dark)">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-(--color-secondary-dark) dark:hover:text-(--color-secondary-light) transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;