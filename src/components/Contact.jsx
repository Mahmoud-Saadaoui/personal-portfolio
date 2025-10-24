import React from "react";
import contact from "../assets/bg3.jpg"

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="relative py-20 text-right"
      style={{ backgroundImage: `url(${contact})` , backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-[rgba(227,252,236,0.6)] dark:bg-[rgba(5,46,22,0.6)]"></div>
      <div className="relative container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)]">
            تواصل معي
          </h3>
          <p className="mt-2 text[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)]/80">
            سعيد بالتواصل معك! أرسل رسالتك وسأجيب في أقرب وقت.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Form */}
          <div className="md:w-2/3">
            <form className="flex flex-col gap-4 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] p-6 rounded-xl shadow-lg transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم"
                  required
                  className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-[var(--color-primary-light)] dark:focus:border-[var(--color-primary-dark)] focus:ring focus:ring-[var(--color-primary-light)]/30 dark:focus:ring-[var(--color-primary-dark)]/30 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  required
                  className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-[var(--color-primary-light)] dark:focus:border-[var(--color-primary-dark)] focus:ring focus:ring-[var(--color-primary-light)]/30 dark:focus:ring-[var(--color-primary-dark)]/30 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] transition"
                />
              </div>
              <textarea
                name="message"
                placeholder="الرسالة"
                rows="5"
                required
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-[var(--color-primary-light)] dark:focus:border-[var(--color-primary-dark)] focus:ring focus:ring-[var(--color-primary-light)]/30 dark:focus:ring-[var(--color-primary-dark)]/30 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] transition"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)] text-[var(--color-background-light)] dark:text-[var(--color-background-dark)] font-semibold rounded-lg hover:brightness-110 transition-all"
              >
                ارسال
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start gap-6">
            <ul className="space-y-4 text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)] text-lg">
              <li className="flex items-center gap-2">
                <i className="fa fa-phone text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)]"></i> 012 3456 7890
              </li>
              <li className="flex items-center gap-2">
                <i className="fa fa-envelope-o text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)]"></i> email@domain.com
              </li>
            </ul>
            <hr className="w-full border-t border-gray-300 dark:border-gray-700" />
            <ul className="flex gap-4 mt-4">
              {["google-plus", "twitter", "facebook"].map((icon, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)] text-[var(--color-background-light)] dark:text-[var(--color-background-dark)] hover:scale-110 transition-transform"
                  >
                    <i className={`fa fa-${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 opacity-70 text-[var(--color-foreground-light)] dark:text-[var(--color-foreground-dark)]">
          <p>جميع الحقوق محفوظة © 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;