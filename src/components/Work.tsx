import React from 'react';
import { useTranslations } from 'next-intl';
import { skills } from '../data/skills';
import { WorkCardProps } from '../types/types';

const WorkCard = ({ title, description }: WorkCardProps) => (
  <div className="w-11/12 md:w-5/12 m-2 p-4 rounded-lg dark:bg-gray-100 bg-gray-800 shadow hover:shadow-md transition">
    <h3 className="text-lg font-semibold dark:text-gray-900 text-white mb-2">{title}</h3>
    <p className="dark:text-gray-700 text-gray-300 text-sm md:text-base">{description}</p>
  </div>
);

const Work = () => {
  const t = useTranslations('Work');
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold dark:text-gray-900 text-white mb-6 text-center">
        {t('I_Love_Working_On')}
      </h2>

      <div className="flex flex-wrap justify-center">
        {skills.map(({ key, descKey }) => (
          <WorkCard
            key={key}
            title={t(key)}
            description={t(descKey)}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
