import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube, FaGithub, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const LeftIcons = () => {
  return (
    <div className='fixed bottom-5 left-2 flex flex-col space-y-4'>
        <FaLinkedinIn className='text-2xl text-blue-600'/>   
        <FaYoutube className='text-2xl text-red-600'/>       
        <FaGithub className='text-2xl text-gray-800 dark:text-gray-50'/>       
        <IoLogoWhatsapp className='text-2xl text-green-500'/>
        <FaTelegram className='text-2xl text-blue-400'/>
    </div>
  )
}

export default LeftIcons