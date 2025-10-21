import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t("about.title")}</h1>
      <p>{t("about.description")}</p>
    </section>
  );
};

export default About;