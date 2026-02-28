import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/data.navbar";
import { Theme } from "../features/Theme";
import Language from "../features/Language";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4 max-w-3xl mx-auto w-full" aria-label="Main navigation">
        {/* === LEFT — Desktop Navigation === */}
        <div>
          <ul className="hidden md:flex gap-8 font-medium text-[var(--color-text-main)]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  className="hover:text-[var(--color-primary)] transition-colors
                           py-2 px-1 rounded-md focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                           relative after:content-[''] after:absolute after:bottom-0 after:left-0
                           after:w-0 after:h-0.5 after:bg-[var(--color-primary)]
                           after:transition-all after:duration-300
                           hover:after:w-full"
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
          {/* === Mobile Burger (separate block) === */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden flex items-center justify-center w-11 h-11
                      text-[var(--color-text-main)] rounded-lg
                      hover:bg-[var(--color-secondary)]/10 transition-colors
                      focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        {/* === RIGHT — Actions Wrapper === */}
        <div className="flex items-center gap-4">
          {/* === Actions: Theme + Language === */}
          <div className="flex items-center gap-2">
            <Theme />
            <Language />
          </div>
        </div>
      </nav>

      {/* === Mobile Dropdown Menu === */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        aria-hidden={!open}
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-lg font-medium
                       text-[var(--color-text-main)]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                onClick={() => setOpen(false)}
                className="hover:text-[var(--color-primary)] transition-colors
                         py-2 px-4 rounded-md focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                {t(link.label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;