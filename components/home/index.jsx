import Image from "next/image";
import React from "react";
import profilePhoto from "@/public/profile-photo.jpg";

const HomeComponent = () => {
  return (
      <div className="h-full w-full px-2 flex flex-col items-center justify-center space-y-4">
        <div className="flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-slate-500 mt-8">
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            width={120}
            height={120}
          />
        </div>

        <div className="text-center max-w-lg space-y-4">
            <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                I'm Mahmoud Saadaoui
            </h1>
          <p className="text-lg md:text-xl sm:leading-relaxed text-slate-700 dark:text-gray-50">
            Web developer with 2-3 years of experience in developing responsive
            and secure applications using JavaScript, React.js, and Node.js.
            Holder of an engineering degree from the Tunisian Military Academy.
          </p>

          <button className="mt-4 px-6 py-3 bg-slate-400 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg shadow-lg hover:scale-105">
            Download CV
          </button>
        </div>
      </div>
  );
};

export default HomeComponent;
