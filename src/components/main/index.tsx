import React from "react";
import RightIcons from "./RightIcons";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube, FaGithub, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Main = () => {
  return (
    <div>
      <h2 className="fixed top-2 md:top-9 left-9 md:left-20 font-unlock text-sm md:text-md text-dark dark:text-white">
        saadaouidev.com
      </h2>

      <div className="fixed bottom-16 md:bottom-20 left-3 md:left-9 flex flex-col space-y-4 text-xl text-text_light dark:text-text_dark">
        <FaLinkedinIn/>
        <FaYoutube/>
        <FaGithub/>
        <IoLogoWhatsapp/>
        <FaTelegram/>
      </div>

      <RightIcons />
    </div>
  );
};

export default Main;