import Image from "next/image";
import React from "react";
import profilePhoto from "@/public/profile-photo.jpg";
import Title from "../heading";

const HomeComponent = () => {
  return (
    <div className="h-full w-full px-2 md:px-4 flex flex-col items-center justify-center space-y-4">
      <div className="flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-buttons ">
        <Image
          src={profilePhoto}
          alt="Profile Photo"
          width={120}
          height={120}
        />
      </div>

      <div className="text-center max-w-lg space-y-4 text-muted">
        <Title title="I'm Mahmoud Saadaoui"/>
        <p className="font font-semibold">Web Developer</p>
        <p className="text-md md:text-lg sm:leading-relaxed">
          I love building responsive and secure applications, 
          I use JavaScript along with the React.js and Node.js frameworks. 
          I am passionate about creating innovative and high-performance solutions with Next.js and TypeScript.
        </p>

        <button className="mb-4 px-5 py-2 bg-primary bg-buttons text-dark dark:text-white font-semibold rounded-lg">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
