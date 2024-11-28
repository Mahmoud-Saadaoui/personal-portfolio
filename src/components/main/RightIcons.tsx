"use client";
import React, { useContext, useState, useTransition } from "react";
import { AppContext } from "@/context/AppContext";
import { IoLanguage } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useRouter } from "next/navigation";

const RightIcons = () => {
  const [isPending, startTransition] = useTransition();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { darkMode, toggleMode } = context
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    toggleMode();
  };

  const router = useRouter();

  const onSelectChange = (lang: string) => {
    startTransition(() => {
      router.replace(`/${lang}`);
      setOpen(false);
    });
  };

  return (
    <div className="flex flex-col items-center space-y-5 fixed top-8 md:top-20 right-1 md:right-8">
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

      <div className="flex items-center justify-center">
        <button 
          onClick={() => setOpen(!open)}
          className="py-2 px-1 relative group transition-all duration-200 focus:overflow-visible overflow-hidden flex flex-col items-center justify-center dark:bg-dark text-text_light dark:text-text_dark"
        >
          <span className="text-xl border-white dark:border-dark">
            <IoLanguage />
          </span>
        </button>
        
        {open && (
            <div 
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="absolute shadow-lg -bottom-32 right-0 w-[50px] dark:text-light bg-[#A4A4A4] border border-zinc-200 dark:border-text_dark flex flex-col z-[100]"
            >
              <span
                className="flex flex-row gap-1 items-center justify-center hover:text-blue-500 hover:font-bold p-2 cursor-pointer w-full"
                onClick={() => onSelectChange("en")}
              >
                En
              </span>
              <span
                className="flex flex-row gap-1 items-center justify-center p-2 cursor-pointer w-full hover:text-blue-500 hover:font-bold"
                onClick={() => onSelectChange("fr")}
              >
                Fr
              </span>
              <span
                className="flex flex-row gap-1 items-center justify-center hover:text-blue-500 hover:font-bold p-2 cursor-pointer w-full"
                onClick={() => onSelectChange("ar")}
              >
                ع
              </span>
            </div>
          )}
      </div>
    </div>
  );
};

export default RightIcons;