import React from "react";

const AboutComponent = () => {
  return (
    <div
      className="space-y-6 w-full h-full p-1 sm:p-2 md:p-4
    text-slate-800 dark:text-slate-50"
    >
      <h1 className="text-xl md:text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide text-center">
        Hello 👋😊 I'm Mahmoud Saadaoui
      </h1>

      <p className="leading-relaxed text-lg md:text-xl">
        Experienced Full-Stack Developer with a proven track record in
        spearheading notable projects across diverse industries. Proficient in
        building robust systems and implementing innovative solutions to meet
        complex business needs.
      </p>

      <p className="leading-relaxed text-lg md:text-xl">
        Skilled in API integration and leveraging a wide array of technologies
        to deliver exceptional results. Committed to continuous learning and
        fostering collaboration for successful project outcomes.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-6">
        Key Projects
      </h2>
      <p className="leading-relaxed text-lg md:text-xl">
        At <span className="font-bold">Alnaqil.sa</span>, I led the development
        of a comprehensive shipping company system, from core system
        architecture to API integration with third-party platforms such as{" "}
        <span className="font-bold">J&T</span>,{" "}
        <span className="font-bold">Zid</span>,{" "}
        <span className="font-bold">Salla</span>, and mobile API development. I
        designed and implemented full-featured dashboards, shipment tracking,
        and accounting systems.
      </p>

      <p className="leading-relaxed text-lg md:text-xl">
        Additionally, I contributed to{" "}
        <span className="font-bold">Almenu.io</span>, a SaaS platform for
        digital menu building and delivery management. This project involved
        enhancing user experience and streamlining operations for clients in the
        hospitality industry.
      </p>

      <p className="leading-relaxed text-lg md:text-xl">
        In 2022, I co-founded <span className="font-bold">Leemcode.com</span>,
        focusing on delivering cutting-edge solutions in software development.
        My key achievements include successfully building and maintaining the
        core system of the shipping company system, implementing upgrades, and
        driving customer satisfaction through improved system efficiency.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-6">
        Personal and Professional Growth
      </h2>
      <p className="leading-relaxed text-lg md:text-xl">
        I prioritize self-awareness, self-learning, and accountability to
        continuously improve my skills. Effective communication skills are
        crucial for facilitating collaboration and understanding among team
        members.
      </p>
    </div>
  );
};

export default AboutComponent;
