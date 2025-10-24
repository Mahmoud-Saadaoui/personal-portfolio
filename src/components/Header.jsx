import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChangeLanguage from "./ChangeLanguage";

const Navbar = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contacts" },
  ];

  return (
    <>
      {/* Overlay blur when menu is open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-20 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav className="fixed w-full top-0 left-0 z-30 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)]">
            MyPortfolio
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] hover:text-[var(--color-primary-light)] dark:hover:text-[var(--color-primary-dark)] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Dark Mode Dropdown */}
            <li className="relative">
              <button className="px-3 py-1 border rounded text-sm">
                {theme === "light" ? "Light" : "Dark"}
              </button>
              <ul className="absolute right-0 mt-2 w-28 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] shadow-md rounded">
                <li>
                  <button
                    onClick={() => toggleTheme("light")}
                    className="w-full text-left px-4 py-2 hover:bg-[var(--color-accent-light)] dark:hover:bg-[var(--color-accent-dark)]"
                  >
                    Light
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => toggleTheme("dark")}
                    className="w-full text-left px-4 py-2 hover:bg-[var(--color-accent-light)] dark:hover:bg-[var(--color-accent-dark)]"
                  >
                    Dark
                  </button>
                </li>
              </ul>
            </li>

            {/* Language Dropdown */}
            <li>
              <ChangeLanguage />
            </li>
          </ul>

          {/* Mobile Burger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] shadow-md overflow-hidden"
            >
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-gray-200 dark:border-gray-700">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] hover:bg-[var(--color-accent-light)] dark:hover:bg-[var(--color-accent-dark)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* Dark Mode Toggle */}
              <li className="border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
                  className="w-full text-left px-6 py-3 text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] hover:bg-[var(--color-accent-light)] dark:hover:bg-[var(--color-accent-dark)] transition-colors"
                >
                  {theme === "light" ? "Switch to Dark" : "Switch to Light"}
                </button>
              </li>

              {/* Language Switcher */}
              <li className="px-6 py-3">
                <ChangeLanguage />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;