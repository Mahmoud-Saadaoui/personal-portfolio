import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaFacebookSquare, FaDownload } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import bg from "../assets/bg.jpg";

const About = () => {
  return (
    <header
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-start"
    >
      {/* Background Image, fixe à 80vh */}
      <div
        className="w-full h-[80vh] bg-center bg-cover relative"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Card, légèrement décalée vers le bas */}
      <div
        className="
          bg-[var(--color-primary-light)]/80 dark:bg-[var(--color-primary-dark)]/80
          text-white
          px-8 md:px-16 py-12
          text-center
          rounded-2xl
          shadow-lg
          max-w-3xl
          mx-4
          -translate-y-9/12
          backdrop-blur-sm
        "
      >
        {/* Profile Image */}
        <img
          className="
            w-36 h-36
            rounded-full
            mx-auto mb-6
            border-[5px]
            border-[var(--color-accent-light)] dark:border-[var(--color-accent-dark)]
            shadow-lg
          "
          src={profile}
          alt="personal-img"
        />

        {/* Name & Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-[50px]">
          علاء محمود
          <span className="block text-xl md:text-2xl text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)] mt-1">
            مطور واجهة الاستخدام
          </span>
        </h1>

        {/* Social Media Links */}
        <ul className="flex justify-center gap-4 mb-10 text-3xl">
          {[{icon: FaGithubSquare, link: "https://github.com/"},
            {icon: FaLinkedin, link: "https://linkedin.com/"},
            {icon: FaTwitterSquare, link: "https://twitter.com/"},
            {icon: FaFacebookSquare, link: "https://facebook.com/"}].map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)] transition-colors duration-300"
              >
                <item.icon />
              </a>
            </li>
          ))}
        </ul>

        {/* Description */}
        <h2 className="text-sm md:text-base font-semibold leading-[30px] mb-4 text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)]">
          مطور واجهة الأستخدام مقيم بالقاهرة، أعمل في التصميم والتطوير منذ خمس سنوات
        </h2>

        <p className="text-sm md:text-base leading-[30px] text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)] mb-10">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
          أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعي.
        </p>

        {/* Download Button */}
        <a
          href="/files/cv.pdf"
          download="السيرة الذاتية"
          className="
            inline-flex items-center gap-2
            text-lg font-medium
            bg-[var(--color-secondary-light)] dark:bg-[var(--color-secondary-dark)]
            hover:bg-[var(--color-primary-light)] dark:hover:bg-[var(--color-primary-dark)]
            text-white
            px-6 py-3 rounded-full
            transition-all duration-300
            shadow-md
          "
        >
          <FaDownload className="text-xl" />
          تحميل السيرة الذاتية
        </a>
      </div>
    </header>
  );
};

export default About;