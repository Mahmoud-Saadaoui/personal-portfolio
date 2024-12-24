import React from "react";
import RightIcons from "./RightIcons";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
// import { MdEmail } from "react-icons/md";

const Main = () => {
  return (
    <div>
      <h2 className="fixed top-2 md:top-9 left-9 md:left-20 font-unlock text-sm md:text-lg text-dark dark:text-white">
        <a href="mailto:contact.saadaouimahmoud@gmail.com">contact.saadaouimahmoud@gmail.com</a>
      </h2>

      <div className="fixed bottom-16 md:bottom-20 left-3 md:left-9 flex flex-col space-y-4 text-xl text-text_light dark:text-text_dark">
        <a href="https://www.linkedin.com/in/saadaoui-mahmoud" target="_blanc"><FaLinkedinIn/></a>
        <a href="https://www.youtube.com/@mahmoud_saadaoui" target="_blanc"><FaYoutube/></a>
        <a href="https://github.com/Saadaoui-Forkan" target="_blanc"><FaGithub/></a>
        <a href="https://wa.me/21627987081" target="_blanc"><IoLogoWhatsapp/></a>
        {/* <a href="mailto:saadaouidev@gmail.com"><MdEmail/></a> */}
      </div>

      <RightIcons />
    </div>
  );
};

export default Main;