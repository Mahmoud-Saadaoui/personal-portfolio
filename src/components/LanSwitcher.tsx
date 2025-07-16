"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiGlobe } from "react-icons/fi";
import { useTranslations } from "next-intl";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
];

export default function LangSwitcher() {
  const t = useTranslations("LangSwitcher")
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; 
    const newPath = segments.join("/");

    router.replace(newPath);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center h-10 w-10 rounded-full
          dark:bg-neutral-300 dark:text-neutral-900
          bg-[#363636] text-white
          dark:hover:bg-neutral-400 hover:bg-[#4a4a4a]
          transition"
        aria-label="Switch Language"
      >
        <FiGlobe size={20} />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="dark:bg-white bg-gray-800 rounded-lg p-6 min-w-[200px] max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4 dark:text-gray-900 text-white">
              {t("selectLanguage")}
            </h3>

            <ul className="flex flex-col gap-3">
              {LANGUAGES.map(({ code, label }) => (
                <li key={code}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded
                      dark:hover:bg-gray-200 hover:bg-gray-700 dark:text-gray-900 text-gray-300
                      transition`}
                    onClick={() => changeLocale(code)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="mt-6 ml-auto block text-sm px-4 py-2 rounded 
                        text-gray-500 dark:text-gray-400 
                        hover:text-black hover:bg-gray-100 
                        dark:hover:text-white dark:hover:bg-gray-700 
                        transition"
              onClick={() => setOpen(false)}
            >
              {t('cancel')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}