"use client"
import { SetStateAction, useState } from "react";
import HomeComponent from "@/components/home";
import PortfolioComponent from "@/components/portfolio";
import WorkComponent from "@/components/work";
import Main from "@/components/main";
import SlideNavigator from "@/components/slide-navigator";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Slider")
  const [activeComponent, setActiveComponent] = useState('home')
  const [isAnimating, setIsAnimating] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case t('about'):
        return <HomeComponent />;
      case t('work'):
        return <WorkComponent />;
      case t('portfolio'):
        return <PortfolioComponent />;
      default:
        return <HomeComponent />;
    }
  };

  const handleSetActiveComponent = (component: SetStateAction<string>) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveComponent(component);
      setIsAnimating(false);
    }, 300);
  };
  
  return (
    <div className="w-screen h-screen bg-light dark:bg-dark overflow-hidden pb-20 px-10 pt-8 md:p-20">
      <Main/>
      <div className="h-full w-full border border-text_light dark:border-text_dark flex flex-col justify-center">
        <div className={`transition-container ${isAnimating ? "fade-out" : "fade-in"} overflow-y-auto`}>
          {renderComponent()}
        </div>     
      </div>
      <SlideNavigator setActiveComponent={handleSetActiveComponent}/>
    </div>
  );
}