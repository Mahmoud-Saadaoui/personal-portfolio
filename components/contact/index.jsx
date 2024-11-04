import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube, FaGithub, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiUpwork } from "react-icons/si";
import { SiMalt } from "react-icons/si";
import { FaDotCircle } from "react-icons/fa";
import { PiNumberSquareFiveFill } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="mx-auto p-2 sm:p-3 md:p-4 space-y-4 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-white">
        Get in touch
      </h1>
      <p className="text-lg md:text-xl font-semibold text-center text-gray-800 dark:text-white">
        Feel free to reach out if you want to collaborate on a project, have a
        question, or just want to connect.
      </p>
      <div className="flex flex-col space-y-3">
      <div className="flex flex-wrap items-center justify-center space-x-2">
        <FaLinkedinIn className="text-xl text-blue-600" />
        <FaYoutube className="text-xl text-red-600" />
        <FaGithub className="text-xl text-gray-800 dark:text-gray-50" />
        <IoLogoWhatsapp className="text-xl text-green-500" />
        <FaTelegram className="text-xl text-blue-400" />
        <SiUpwork className="text-xl text-blue-400" />
        <SiMalt className="text-xl text-blue-400" />
        <FaDotCircle className="text-xl text-blue-400" />
        <PiNumberSquareFiveFill className="text-xl text-blue-400" />
        <IoMailSharp className="text-xl text-blue-400" />
      </div>
      <span className="text-center my-4 hover:underline">contact@saadaouidev.com</span>
      </div>
    </div>
  );
}
