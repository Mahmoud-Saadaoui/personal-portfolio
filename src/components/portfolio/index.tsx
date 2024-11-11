import { projects } from '@/data/data'
import { useTranslations } from 'next-intl'
import React from 'react'
import { PiArrowSquareUpRightLight } from 'react-icons/pi'

const PortfolioComponent = () => {
  const t = useTranslations("Projects")
  return (
    <div className='container mx-auto'>
      <div className="px-2 md:px-4 space-y-4 text-text_light dark:text-text_dark">
      <p className='font-bold text-lg md:text-xl text-dark dark:text-white m-2'>
        {t('title')}
      </p>
      <div className="flex flex-col md:flex-row flex-wrap mb-2">
        {projects.map((el) => (
          <div key={el.id} className="w-11/12 lg:w-5/12 bg-light_card dark:bg-dark_card m-2 p-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-md md:text-lg dark:text-white">{el.title}</p>
              <div className="text-xl text-dark dark:text-light">
                <PiArrowSquareUpRightLight />
              </div>
            </div>
            <p className="text-md md:text-lg">{t(el.description.intro)}</p>
            <div className="flex flex-wrap items-center justify-start">
              {el.description.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-muted text-sm border rounded-sm p-[2px] mt-1 mr-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  )
}

export default PortfolioComponent