"use client"
import Header from "@/components/header";
import LeftIcons from "@/components/icons/LeftIcons";
import RightIcons from "@/components/icons/RightIcons";
import HomeComponent from "@/components/home";
import AboutComponent from "@/components/about";
import WorkComponent from "@/components/work";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import { useState } from "react";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('home')
  const [isAnimating, setIsAnimating] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <HomeComponent />;
      case 'About':
        return <AboutComponent />;
      case 'Contact':
        return <Contact />;
      case 'Work':
        return <WorkComponent />;
      case 'Projects':
        return <Portfolio />;
      default:
        return <HomeComponent />;
    }
  };

  const handleSetActiveComponent = (component) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveComponent(component);
      setIsAnimating(false);
    }, 300);
  };
  
  return (
    <div className="w-screen h-screen bg-gray-50 dark:bg-slate-800 
      overflow-hidden pb-14 px-10 pt-8 md:p-20">
      <Header setActiveComponent={handleSetActiveComponent}/>
      <LeftIcons/>
      <RightIcons/>
      <div className="overflow-y-auto bg-gray-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-900 text-slate-900 dark:text-white h-full">
        <div className={`transition-container ${isAnimating ? "fade-out" : "fade-in"}`}>
          {renderComponent()}
        </div>
      </div>
      
    </div>
  );
}
