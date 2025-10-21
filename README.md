## Portfolio multilangue

### project setup
#### installer react
#### setup tailwind css
#### setup i18n
1. install dependencies 
```
npm i i18next react-i18next
```

2. creer i18n.js dans src
`
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

 i18n
   .use(initReactI18next)
   .init({
     resources: {
        en: { translation: en },
        fr: { translation: fr },
        ar: { translation: ar },
     },
     lng: "en",
     fallbackLng: "en",
     interpolation: { escapeValue: false }
   });

 export default i18n;
`

3. creer le dossier de messages pour chaque langue
src/locales/en.json 
`
{
  "navbar": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "about": {
    "title": "Who we are",
    "description": "We are a dedicated team..."
  },
  "contact": {
    "title": "Contact Us",
    "email": "Email",
    "message": "Send Message"
  }
}
`
src/locales/rf.json
`
{
  "navbar": {
    "home": "Accueil",
    "about": "À propos",
    "contact": "Contact"
  },
  "about": {
    "title": "Qui sommes-nous ?",
    "description": "Nous sommes une équipe dédiée..."
  },
  "contact": {
    "title": "Contactez-nous",
    "email": "E-mail",
    "message": "Envoyer le message"
  }
}
`

src/locales/ar.json
`
{
  "navbar": {
    "home": "الرئيسية",
    "about": "من نحن",
    "contact": "اتصل بنا"
  },
  "about": {
    "title": "من نحن",
    "description": "نحن فريق مكرّس ..."
  },
  "contact": {
    "title": "اتصل بنا",
    "email": "البريد الإلكتروني",
    "message": "إرسال الرسالة"
  }
}
`
4. modifier App.jsx
`
import React, { useEffect } from "react";
import ChangeLanguage from "./components/ChangeLanguage";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
      <ChangeLanguage/>
      <Navbar/>
      <About/>
    </>
  )
};

export default App;
`

5. ajouter `import './i18n.js'` au fichier parent main.jsx

6. creer les deux composants 
* Navbar.jsx
`import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>{t("navbar.home")}</li>
        <li>{t("navbar.about")}</li>
        <li>{t("navbar.contact")}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
`
* About.jsx 
`
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
`

* ChangeLanguage.jsx
`
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
  )
};

export default ChangeLanguage;
`

7. pour conserver la langue sauveguarder meme au chargement de la page
* install `i18next-browser-languagedetector`
* modifier i18n.js comme suit 
`
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // 🔹 ajoute ce module

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },

    detection: {
      order: ["localStorage", "navigator", "cookie", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"],
      lookupLocalStorage: "i18nextLng", 
      lookupCookie: "i18next", 
    },
  });

export default i18n;
`
tu peux tester ton app maintenant
