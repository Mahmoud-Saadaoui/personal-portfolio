import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
};

export default App;