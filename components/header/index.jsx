import React from "react";

const Button = ({text}) => {
  return (
    <button className="dark:text-gray-100">
      {text}
    </button>
  )
}

const Header = () => {
  const buttonsArr = ["Home", "About", "Work", "Projects", "Contact"]
  return (
    <div className="">
      <h2 className="fixed top-1 left-1 font-extrabold text-slate-800 dark:text-white text-lg">
        saadaouidev.com
      </h2>

      <button className="fixed top-1 right-1 text-red-500 hover:font-bold font-semibold">Resume</button>

      <div className="fixed bottom-0 sm:bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 sm:space-x-3 md:space-x-5">
        {
          buttonsArr.map((btnArr, index) => (
            <Button text={btnArr} key={index}/>
          ))
        }
      </div>
    </div>
  );
};

export default Header;
