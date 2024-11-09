import React from 'react'
import Image from "next/image"
import profilePhoto from '../../../public/profile-photo.jpg'
import { useTranslations } from 'next-intl'

const HomeComponent = () => {
  const t = useTranslations("Home")
  return (
    <div className="px-2 md:px-4 flex flex-col items-center justify-center space-y-4 py-1">
      <div className="flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-buttons">
        <Image
          src={profilePhoto}
          alt="Profile Photo"
          width={120}
          height={120}
        />
      </div>

      <div className="text-center max-w-lg space-y-4 text-text_light dark:text-text_dark">
        <p className="font font-semibold">Web Developer</p>
        <p className="text-md md:text-lg sm:leading-relaxed">
          {t('introduction')}
        </p>

        <button className="mb-4 px-5 py-2 bg-primary bg-buttons text-dark dark:text-white font-semibold rounded-lg">
          Download CV
        </button>
      </div>
    </div>
  )
}

export default HomeComponent