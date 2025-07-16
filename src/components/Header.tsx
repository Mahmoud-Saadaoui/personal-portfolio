import React from 'react'
import Theme from './Theme'
import LangSwitcher from './LanSwitcher'
import { useTranslations } from 'next-intl'

export const Header = () => {
  const t = useTranslations("Home")
  return (
    <header
        className="flex items-center justify-between 
                   border-b dark:border-neutral-300 border-neutral-700 
                   px-6 md:px-10 py-3 
                   dark:bg-white bg-[#1a1a1a] 
                   dark:text-neutral-900 text-white 
                   transition-colors duration-300"
      >
        {/* Left side: Logo + title */}
        <div className="flex items-center gap-4">
          <div className="w-5 h-5 text-inherit">
            <svg
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path d="M8.578 8.578a23.998 23.998 0 0 0 0 33.844L24 24 8.578 8.578z" />
              <path d="M24 24l15.422 15.422a23.998 23.998 0 0 0 0-33.844L24 24z" />
            </svg>
          </div>
          <h2 className="text-lg md:text-xl font-bold tracking-tight">
            {t("welcome")}
          </h2>
        </div>

        {/* Right side: Theme + Language toggles */}
        <div className="flex items-center gap-4 md:gap-6">
          <Theme />
          <LangSwitcher/>
        </div>
      </header>
  )
}
