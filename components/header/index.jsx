import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdHomeRepairService } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-screen flex flex-col sm:flex-row justify-between items-center p-4 dark:bg-gray-900">
      {/* Logo Section */}
      <h2 className="font-extrabold text-zinc-600 dark:text-white text-lg md:text-2xl">
        saadaouidev.com
      </h2>

      {/* Navigation Links */}
      <div className="flex flex-row space-x-4 md:space-x-6">
        {/* Home Button */}
        <button className="text-gray-600 dark:text-gray-100 transition duration-300 transform hover:text-red-400 dark:hover:text-red-500 hover:scale-110">
          <GoHomeFill className="text-2xl md:hidden text-slate-500" />
          <span className="hidden md:inline text-lg md:text-xl">Home</span>
        </button>

        {/* Services Button */}
        <button className="text-gray-600 dark:text-gray-100  transition duration-300 transform hover:text-red-400 dark:hover:text-red-500 hover:scale-110">
          <MdHomeRepairService className="text-2xl md:hidden text-slate-500" />
          <span className="hidden md:inline text-lg md:text-xl">Services</span>
        </button>

        {/* Projects Button */}
        <button className="text-gray-600 dark:text-gray-100  transition duration-300 transform hover:text-red-400 dark:hover:text-red-500 hover:scale-110">
          <FaFolderOpen className="text-2xl md:hidden text-slate-500" />
          <span className="hidden md:inline text-lg md:text-xl">Projects</span>
        </button>

        {/* Contact Button */}
        <button className="text-gray-600 dark:text-gray-100  transition duration-300 transform hover:text-red-400 dark:hover:text-red-500 hover:scale-110">
          <BiLogoTelegram className="text-2xl md:hidden text-slate-500" />
          <span className="hidden md:inline text-lg md:text-xl">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
