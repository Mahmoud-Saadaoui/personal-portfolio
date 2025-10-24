import React, { useEffect } from "react";
import ChangeLanguage from "./components/ChangeLanguage";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import About from "./components/About";
import Licence from "./components/Licence";
import Projects from "./components/Projcts";
import Contacts from "./components/Contact";

const App = () => {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
      <Header/>
      <About/>
      <Licence/>
      <Projects/>
      <Contacts/>
    </>
  )
};

export default App;