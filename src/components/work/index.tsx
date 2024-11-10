import { useTranslations } from 'next-intl';
import React from 'react'

type WorkCardProps = {
  text: string,
  paragraph: string
}

const WorkCark = ({ text, paragraph }: WorkCardProps) => {
  return (
    <div className="w-11/12 md:w-5/12 m-2 text-md md:text-lg text-text_light dark:text-text_dark p-3 bg-light_card dark:bg-dark_card">
      <p className="text-dark dark:text-white font-semibold">
        {text}
      </p>
      <p className="">
        {paragraph}
      </p>
    </div>
  );
};

const WorkComponent = () => {
  const t = useTranslations("Work")
  return (
    <div className='container mx-auto'>
    <div className="px-2 md:px-4 space-y-4">
      <p className="font-bold text-lg md:text-xl text-dark dark:text-white m-2">
        {t("I_Love_Working_On")}
      </p>

      <div className="flex flex-wrap flex-col md:flex-row">
        <WorkCark text={t("React_js")} paragraph={t("React_js_Paragraph")} />
        <WorkCark text={t("Node_js")} paragraph={t("Node_Paragraph")} />
        <WorkCark text={t("Next_js")} paragraph={t("Next_js_paragraph")} />
        <WorkCark text={t("Tailwind")} paragraph={t("Tailwind_Paragraph")} />
      </div>
    </div>
    </div>
  );
}

export default WorkComponent