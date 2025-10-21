import { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  const handleChangeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage); 
    setCurrentLanguage(newLanguage);
  };

  return (
    <div className="p-6">
      <div className="flex gap-4">
        <button
          onClick={() => handleChangeLanguage("en")}
          className="px-4 py-2 border rounded hover:bg-gray-200"
        >
          English
        </button>

        <button
          onClick={() => handleChangeLanguage("fr")}
          className="px-4 py-2 border rounded hover:bg-gray-200"
        >
          Français
        </button>

        <button
          onClick={() => handleChangeLanguage("ar")}
          className="px-4 py-2 border rounded hover:bg-gray-200"
        >
          العربية
        </button>
      </div>
    </div>
  );
};

export default ChangeLanguage;