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
      <About/>
    </>
  )
};

export default App;