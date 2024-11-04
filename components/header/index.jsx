"use client"
import React, { useState } from "react";

const Header = ({setActiveComponent}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const buttonsArr = ["Home", "About", "Work", "Projects", "Contact"]

  const showActiveComponent = (text, index) => {
    setActiveComponent(text)
    setActiveIndex(index)
  }
  return (
    <div className="">
      <h2 className="fixed top-1 left-1 font-extrabold text-slate-800 dark:text-white text-lg">
        saadaouidev.com
      </h2>

      <button className="fixed top-1 right-1 text-red-500 hover:font-bold font-semibold">Resume</button>

      <div className="fixed bottom-1 sm:bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 sm:space-x-3 md:space-x-5 bg-slate-200 dark:bg-slate-700 p-2 rounded-xl">
        {
          buttonsArr.map((btnArr, index) => (
            <button
              key={index}
              onClick={() => showActiveComponent(btnArr, index)}
              className={`md:px-3 md:py-1 rounded-lg transition-all duration-500 ${
                index === activeIndex ? "active text-white" : "dark:text-gray-100"
              }`}
            >
            {btnArr}
          </button>
          ))
        }
      </div>
    </div>
  );
};

export default Header;
