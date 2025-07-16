import { projects } from '../data/projects';
import { useTranslations } from 'next-intl';
import { FaGithub } from 'react-icons/fa';
import { PiArrowSquareUpRightLight } from 'react-icons/pi';

const Portfolio = () => {
  const t = useTranslations('Projects');

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold dark:text-gray-900 text-white mb-6 text-center">
        {t('title')}
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:bg-white bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-[1.01]"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg md:text-xl font-semibold text-white dark:text-gray-900">
                {project.title}
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-xl text-gray-300 dark:text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-1 text-sm md:text-base text-gray-300 dark:text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Demo
                  <PiArrowSquareUpRightLight className="text-lg" />
                </a>
              </div>
            </div>

            <p className="text-sm md:text-base dark:text-gray-700 text-gray-300 mb-4">
              {t(project.description.intro)}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.description.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 dark:bg-gray-100 bg-gray-700 dark:text-gray-800 text-gray-100 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
