import React from "react";

const WorkCark = ({text, paragraph}) => {
  return (
    <div className="rounded-md shadow-lg p-6 transition duration-300 hover:shadow-xl bg-slate-200 border border-slate-30000 dark:bg-slate-700 dark:border-slate-800">
      <h3 className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-100 mb-2">
        {text}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {paragraph}
      </p>
    </div>
  )
}

const WorkComponent = () => {
  return (
    <div className="mx-auto p-2 sm:p-3 md:p-4 space-y-4 w-full h-full">
      <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-white">
        I love working on...
      </h1>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        <WorkCark
          text = "MERN Stack Mastery"
          paragraph = {`Leveraging my proficiency in MongoDB, Express.js, React, and Node.js, 
            I build robust, scalable, and responsive applications that adapt 
            seamlessly across devices. This stack enables the development of interactive 
            and performant applications tailored to modern web standards.`}
        />
        <WorkCark
          text = "Backend API Development"
          paragraph = {`I specialize in building secure and efficient backend APIs that
            streamline data flow and provide seamless integration with front-end
            interfaces. My services ensure high-performance server-side logic
            that enhances the overall application functionality.`}
        />
        <WorkCark
          text = "Next.js with TypeScript"
          paragraph = {`My expertise in Next.js with TypeScript allows me to build fast,
            SEO-friendly, and scalable front-end solutions. I focus on creating
            interactive, modern user experiences that deliver both visual appeal
            and functionality.`}
        />
        <WorkCark
          text = "Responsive and Accessible Design"
          paragraph = {`With Tailwind CSS, I implement responsive, clean, and accessible
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
