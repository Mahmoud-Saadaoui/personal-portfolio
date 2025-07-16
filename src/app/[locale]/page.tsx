"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Header } from "../../components/Header";
import Main from "../../components/Main";
import { SOCIALS } from "../../data/socials";

const NAV_ITEMS = ["about", "portfolio", "work"];

export default function HomePage() {
  const t = useTranslations("Slider");
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#1a1a1a] dark:bg-white transition-colors duration-300 overflow-x-hidden">
      <Header />

      {/* Body */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center px-4 sm:px-6 py-5 gap-4">
        {/* Social Icons */}
        <div className="flex justify-center sm:flex-col sm:items-center sm:justify-center gap-4 sm:gap-2 text-white dark:text-black">
          {SOCIALS.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="bg-[#363636] dark:bg-[#d4d4d4] p-2.5 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Main Dynamic Content */}
        <Main active={activeSection} />
      </div>

      {/* Footer Navigation */}
      <footer className="w-full fixed bottom-0 left-0 z-50 bg-[#1a1a1a] dark:bg-white text-center py-3">
        <nav className="flex justify-center text-[#adadad] dark:text-gray-700 text-sm sm:text-base">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`capitalize hover:text-white dark:hover:text-black transition mx-4 ${
                activeSection === item ? "font-bold text-white dark:text-black" : ""
              }`}
              onClick={() => setActiveSection(item)}
            >
              {t(item)}
            </button>
          ))}
        </nav>
      </footer>
    </div>
  );
}