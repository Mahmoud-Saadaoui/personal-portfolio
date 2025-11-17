import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { navLinks } from "../data/data.navbar";

const Header = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 backdrop-blur-md 
        bg-white/70 dark:bg-gray-900/70 
        border-b border-gray-200 dark:border-gray-700
        transform transition-transform duration-500
        translate-y-0
      "
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-800 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Link to={link.id}>{t(link.label)}</Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ChangeLanguage />

          {/* Toggle theme */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-10 h-10 rounded-full 
                       border border-gray-300 dark:border-gray-700
                       bg-white/70 dark:bg-gray-900/70
                       text-gray-800 dark:text-gray-200
                       hover:bg-gray-200/50 dark:hover:bg-gray-700/50
                       transition-all duration-200"
          >
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* Burger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full
                       border border-gray-300 dark:border-gray-700
                       bg-white/70 dark:bg-gray-900/70
                       text-gray-800 dark:text-gray-200
                       hover:bg-gray-200/50 dark:hover:bg-gray-700/50
                       transition-all duration-200"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — 100% CSS Animation */}
      <div
        className={`
          md:hidden overflow-hidden 
          transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-lg font-medium 
                       text-gray-800 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;