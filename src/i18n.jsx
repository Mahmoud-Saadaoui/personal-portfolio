import React, { useState, useMemo, useEffect } from "react";
import { IntlProvider } from "react-intl";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

const messages = { en, fr, ar };

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale]);

  const changeLang = (newLang) => {
    setLocale(newLang);
    localStorage.setItem("lang", newLang);
  };

  const contextValue = useMemo(
    () => ({ locale, setLocale: changeLang }),
    [locale]
  );

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {React.cloneElement(children, contextValue)}
    </IntlProvider>
  );
};
