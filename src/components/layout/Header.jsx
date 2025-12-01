import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/data.navbar";
import { Theme } from "../features/Theme";
import Language from "../features/Language";

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4 max-w-3xl mx-auto w-full">
        {/* === LEFT — Desktop Navigation === */}
        <div>
          <ul className="hidden md:flex gap-8 font-medium text-(--color-text-main)">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-(--color-primary) transition-colors"
              >
                <Link to={link.id}>{t(link.label)}</Link>
              </li>
            ))}
          </ul>
          {/* === Mobile Burger (separate block) === */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-10 h-10
                      text-(--color-text-main)"
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
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-lg font-medium
                       text-(--color-text-main)">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                onClick={() => setOpen(false)}
                className="hover:text-(--color-primary) transition-colors"
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