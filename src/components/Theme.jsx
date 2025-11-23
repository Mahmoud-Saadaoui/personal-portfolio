import React, { useState } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import useTheme from "../hooks/useTheme"; // adapte le chemin

export const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themes = {
    light: { label: "Light", icon: <FaSun size={16} /> },
    dark: { label: "Dark", icon: <FaMoon size={16} /> },
    system: { label: "System", icon: <FaDesktop size={16} /> },
  };

  // Icône affichée sur le bouton principal
  const currentIcon = themes[theme]?.icon;

  // Changer le thème
  const handleSelect = (value) => {
    setTheme(value);  // applique le thème
    setOpen(false);   // ferme le menu
  };

  return (
    <div className="relative inline-block text-left">
      {/* Bouton principal */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select theme"
        className="flex items-center justify-center w-10 h-10 rounded-full 
          border border-gray-300 dark:border-gray-700
          bg-white/70 dark:bg-gray-900/70
          text-gray-800 dark:text-gray-200
          hover:bg-gray-200/50 dark:hover:bg-gray-700/50
          transition-all duration-200"
      >
        {currentIcon}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-36 rounded-lg shadow-lg
            bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
            py-2 z-50"
        >
          {Object.entries(themes).map(([key, { label, icon }]) => (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left
                text-gray-800 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-gray-700
                transition ${
                  theme === key ? "font-semibold text-blue-600 dark:text-blue-400" : ""
                }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};