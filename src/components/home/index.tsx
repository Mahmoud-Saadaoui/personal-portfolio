import React from 'react'
import Image from "next/image"
import profilePhoto from '../../../public/profile-photo.jpg'
import { useTranslations } from 'next-intl'

const HomeComponent = () => {
  const t = useTranslations("Home")
  return (
    <div className='mx-auto flex items-center justify-center'>
      <div className="px-2 md:px-4 flex flex-col items-start justify-center space-y-4 py-1">
      <div className='flex items-center'>
        <div className="flex-shrink-0 rounded-full overflow-hidden shadow-lg">
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            width={56}
            height={56}
          />
        </div>
        <div className='flex flex-col mx-4'>
          <h2 className='text-dark dark:text-white text-md md:text-lg font-bold'>{t('fullname')}</h2>
          <p className='text-text_light dark:text-text_dark text-sm md:text-md'>{t('role')}</p>
        </div>
      </div>

      <div className="max-w-lg space-y-4 text-text_light dark:text-text_dark">
        <p className="text-md md:text-lg sm:leading-relaxed">
          {t('about')}
        </p>

        <button className="mb-4 px-5 py-2 bg-primary bg-buttons text-dark dark:text-white font-semibold rounded-lg">
          {t('cv')}
        </button>
      </div>
    </div>
    </div>
  )
}

export default HomeComponent