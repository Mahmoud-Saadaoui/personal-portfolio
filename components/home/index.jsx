import Image from "next/image";
import React from "react";
import profilePhoto from "@/public/profile-photo.jpg";

const HomeComponent = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex flex-col items-center justify-center p-6 dark:bg-darkBlue text-darkBlue dark:text-white space-y-6">
        <div className="flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-accentCyan dark:border-accentBlue">
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            width={120}
            height={120}
          />
        </div>

        <div className="text-center max-w-lg space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold text-accentCyan dark:text-accentBlue">
                Hello 😀 I'm Mahmoud Saadaoui
            </h1>
          <p className="text-lg leading-relaxed text-darkBlue3 dark:text-gray-300">
            Web developer with 2-3 years of experience in developing responsive
            and secure applications using JavaScript, React.js, and Node.js.
            Holder of an engineering degree from the Tunisian Military Academy.
          </p>

          <button className="mt-4 px-6 py-3 bg-accentBlue dark:bg-accentCyan text-darkBlue dark:text-darkBlue1 font-semibold rounded-full shadow-lg hover:bg-lightRed dark:hover:bg-accentBlue transition duration-300 transform hover:scale-105">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
