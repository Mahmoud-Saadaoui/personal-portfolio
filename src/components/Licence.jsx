import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const licences = [
  {
    date: "مارس 2010",
    title: "ماجستير في الهندسة",
    description:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة.",
  },
  {
    date: "مارس 2011",
    title: "كورس برمجة المواقع",
    description:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة.",
  },
  {
    date: "مارس 2012",
    title: "كورس الهكر الأخلاقي",
    description:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة.",
  },
  {
    date: "مارس 2015",
    title: "مطور ويب مستقل",
    description:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة.",
  },
];

const Licence = () => {
  return (
    <section
      id="licence"
      className="py-28 bg-[var(--color-accent-light)] dark:bg-[var(--color-accent-dark)] text-right relative overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)] flex flex-col items-center justify-center gap-2">
          <FaGraduationCap className="text-5xl" />
          الشهادات و المؤهلات
        </h2>
        <span className="block w-24 h-1 bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)] mx-auto mt-4 rounded"></span>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        {/* Ligne verticale */}
        <div className="absolute right-1/2 top-0 bottom-0 w-[3px] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)] transform translate-x-1/2 hidden md:block"></div>

        <ul className="space-y-16">
          {licences.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <li
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  isEven ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {/* Dot */}
                <span
                  className="hidden md:block absolute top-6 right-1/2 w-4 h-4 bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)] rounded-full transform translate-x-1/2"
                ></span>

                {/* Content box */}
                <div
                  className={`
                    bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)]
                    border border-[var(--color-surface-light)] dark:border-[var(--color-surface-dark)]
                    shadow-md rounded-2xl p-6 md:w-[46%] relative
                    ${isEven ? "md:mr-0 md:ml-auto" : "md:ml-0 md:mr-auto"}
                  `}
                >
                  <h4 className="text-lg md:text-xl font-semibold text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] mb-3 leading-relaxed">
                    <span className="bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)] text-white px-2 py-0.5 rounded ml-2 inline-block">
                      {item.date}
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-[var(--color-foreground-light)]/70 dark:text-[var(--color-foreground-dark)]/70 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Licence;