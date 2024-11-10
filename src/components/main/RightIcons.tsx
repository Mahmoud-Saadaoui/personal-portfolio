"use client";
import React, { ChangeEvent, useContext, useState, useTransition } from "react";
import { AppContext } from "@/context/AppContext";
import { IoLanguage } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const RightIcons = () => {
  const [isPending, startTransition] = useTransition();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { darkMode, toggleMode } = context
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const toggleTheme = () => {
    toggleMode();
  };

  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <div className="flex flex-col items-center space-y-4 fixed top-8 md:top-20 right-3 md:right-9">
      <div
        className="flex flex-col items-center cursor-pointer space-y-2"
        onClick={toggleTheme}
      >
        {darkMode ? (
          <MdWbSunny className="text-xl text-text_light dark:text-text_dark  cursor-pointer" />
        ) : (
          <FaMoon className="text-xl text-text_light dark:text-text_dark  cursor-pointer" />
        )}
      </div>

      {/* Switch Language */}
      {open ? (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute top-2 -right-2 mb-4 w-10 text-dark dark:text-light transition-all duration-300 z-50"
        >
          <div className="p-2 text-text_light dark:text-text_dark">
            <select
              id="language-select"
              defaultValue={localActive}
              onChange={onSelectChange}
              disabled={isPending}
              className="mt-1 block w-full border border-text_light dark:border-text_dark rounded-sm focus:outline-none bg-light text-dark_text dark:bg-dark dark:text-dark_text"
            >
              <option value="en">En</option>
              <option value="fr">Fr</option>
              <option value="ar">ع</option>
            </select>
          </div>
        </div>
      ) : (
        <div onClick={toggleOpen}>
          <IoLanguage className="text-xl text-text_light dark:text-text_dark  cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default RightIcons;