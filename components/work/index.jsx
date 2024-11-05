import React from "react";
import Title from "../heading";

const WorkCark = ({ text, paragraph }) => {
  return (
    <div className="text-md md:text-lg text-muted pb-3">
      <p className="text-dark dark:text-white text-md md:text-lg font-semibold">
        {text}
      </p>
      <p className="">
        {paragraph}
      </p>
    </div>
  );
};

const WorkComponent = () => {
  return (
    <div className="mx-auto px-2 md:px-4 space-y-4 w-full h-full">
      <Title title="I love working on..."/>

      <div className="flex flex-col space-y-2 md:space-y-4">
        <WorkCark
          text="MERN Stack Mastery"
          paragraph={`Leveraging my proficiency in MongoDB, Express.js, React, and Node.js, 
            I build robust, scalable, and responsive applications that adapt 
            seamlessly across devices. This stack enables the development of interactive 
            and performant applications tailored to modern web standards.`}
        />
        <WorkCark
          text="Backend API Development"
          paragraph={`I specialize in building secure and efficient backend APIs that
            streamline data flow and provide seamless integration with front-end
            interfaces. My services ensure high-performance server-side logic
            that enhances the overall application functionality.`}
        />
        <WorkCark
          text="Next.js with TypeScript"
          paragraph={`My expertise in Next.js with TypeScript allows me to build fast,
            SEO-friendly, and scalable front-end solutions. I focus on creating
            interactive, modern user experiences that deliver both visual appeal
            and functionality.`}
        />
        <WorkCark
          text="Responsive and Accessible Design"
          paragraph={`With Tailwind CSS, I implement responsive, clean, and accessible
            designs that enhance usability and user engagement. This toolset
            allows for rapid styling with high consistency and customizability,
            ensuring that the user interface is both visually appealing and
            intuitive.`}
        />
      </div>
    </div>
  );
};


export default WorkComponent;
