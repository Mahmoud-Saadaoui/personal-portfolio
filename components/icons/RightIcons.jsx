"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { IoLanguage } from "react-icons/io5";
import Image from "next/image";
import sun from "@/public/sun.png";
import moon from "@/public/moon.png";

const RightIcons = () => {
  const { darkMode, toggleMode } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const toggleTheme = () => {
    toggleMode();
  };
  return (
    <div className="flex flex-col items-center space-y-2 fixed 
      top-14 right-1">
      <div
        className=" flex flex-col items-center cursor-pointer space-y-2"
        onClick={toggleTheme}
      >
        {darkMode ? (
          <Image src={moon} alt="moon" width={20} height={20} />
        ) : (
          <Image src={sun} alt="sun" width={20} height={20} />
        )}
      </div>

      {/* Switch Language */}
      <div onClick={toggleOpen}>
        <IoLanguage className="text-xl text-blue-500"/>
      </div>
      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full right-0 mb-4 w-48 bg-white dark:bg-gray-700 
                   border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg 
                   py-2 transition-all duration-300"
        >
          <div className="p-2 text-darkBlue3 dark:text-white">
            <label className="font-bold" htmlFor="language-select">
              select
            </label>
            <select
              id="language-select"
            //   defaultValue={localActive}
            //   onChange={onSelectChange}
            //   disabled={isPending}
              className="mt-1 block w-full border border-coolGray dark:border-gray-600 
                       bg-white dark:bg-darkBlue text-darkBlue dark:text-white 
                       rounded-lg focus:outline-none focus:ring focus:ring-accentBlue"
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
