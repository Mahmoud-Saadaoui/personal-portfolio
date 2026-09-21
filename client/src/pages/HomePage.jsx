import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [dir, setDir] = useState(document.documentElement.dir);

  useEffect(() => {
    setDir(document.documentElement.dir);
  }, [i18n.language]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {t("home.title")}
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        {t("home.description")}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
            {t("demo.language")}
          </h2>
          <p className="text-2xl font-bold text-gray-900">{i18n.language}</p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
            {t("demo.direction")}
          </h2>
          <p className="text-2xl font-bold text-gray-900">{dir}</p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
            {t("demo.staks")}
          </h2>
          <p className="text-2xl font-bold text-gray-900">{t("demo.status")}</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;