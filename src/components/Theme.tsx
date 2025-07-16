// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { MdWbSunny, MdDarkMode } from "react-icons/md";

export default function Theme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center h-10 w-10 rounded-full 
                 dark:bg-neutral-200 dark:text-neutral-800 
                 bg-neutral-700 text-white 
                 dark:hover:bg-neutral-300 hover:bg-neutral-600 
                 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <MdWbSunny size={20} /> : <MdDarkMode size={20} />}
    </button>
  );
}