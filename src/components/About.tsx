import { useLocale, useTranslations } from 'next-intl'
import Image from "next/image";
import profilePhoto from "../../public/profile-photo.jpg";

const About = () => {
  const t = useTranslations("Home")
  const locale = useLocale();
  
  let CV;
  if (locale === 'ar') {
    CV = '/cv/cv-ar.pdf';
  } else if (locale === 'fr') {
    CV = '/cv/cv-fr.pdf';
  } else {
    CV = '/cv/cv-en.pdf';
  }
  return (
    <div className="flex-1 flex flex-col max-w-[960px] mx-auto justify-center">
      <div className="flex flex-col items-center gap-6 px-4 py-6 text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg">
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-[22px] md:text-2xl font-bold text-white dark:text-black">
            {t('fullname')}
          </h1>
          <p className="text-base md:text-lg text-[#adadad] dark:text-gray-700">
            {t('role')}
          </p>
        </div>

        <p className="text-white dark:text-black text-base max-w-2xl">
          {t('about')}
        </p>
        <button
          className="h-10 px-5 rounded-full font-bold text-sm transition-colors duration-300
                    bg-white text-black hover:bg-black hover:text-white
                    dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black
                    border border-neutral-300 dark:border-neutral-700"
        >
          <a download="CV" href={CV}>{t('cv')}</a>
        </button>
      </div>
    </div>
  )
}

export default About