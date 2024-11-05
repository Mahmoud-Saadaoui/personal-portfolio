"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { IoLanguage } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const RightIcons = () => {
  const { darkMode, toggleMode } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const toggleTheme = () => {
    toggleMode();
  };
  return (
    <div className="flex flex-col items-center space-y-4 fixed top-8 md:top-20 right-3 md:right-9">
      <div
        className="flex flex-col items-center cursor-pointer space-y-2"
        onClick={toggleTheme}
      >
        {darkMode ? (
          <MdWbSunny className="text-xl text-muted  cursor-pointer"/>
        ) : (
          <FaMoon className="text-xl text-muted  cursor-pointer"/>
        )}
      </div>

      {/* Switch Language */}
      <div onClick={toggleOpen}>
        <IoLanguage className="text-xl text-muted  cursor-pointer"/>
      </div>

      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full right-0 mb-4 w-48 border bg-white dark:bg-dark text-dark dark:text-light border-muted rounded-lg shadow-lg py-2 transition-all duration-300"
        >
          <div className="p-2 text-dark dark:text-light">
            <label className="font-bold" htmlFor="language-select">
              Select Language
            </label>
            <select
              id="language-select"
              // defaultValue={localActive}
              // onChange={onSelectChange}
              // disabled={isPending}
              className="mt-1 block w-full border border-muted rounded-lg focus:outline-none bg-light text-dark dark:bg-dark dark:text-white"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightIcons;
