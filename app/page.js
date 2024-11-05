"use client"
import { useState } from "react";
import HomeComponent from "@/components/home";
import AboutComponent from "@/components/about";
import WorkComponent from "@/components/work";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Main from "@/components/main";
import SlideNavigator from "@/components/slide-navigator";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('home')
  const [isAnimating, setIsAnimating] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <HomeComponent />;
      case 'About':
        return <AboutComponent />;
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
    <div className="w-screen h-screen bg-light dark:bg-dark overflow-hidden pb-16 px-10 pt-8 md:p-20">
      <Main/>
      <div className="h-full w-full overflow-y-auto border border-muted">
        <div className={`transition-container ${isAnimating ? "fade-out" : "fade-in"}`}>
          {renderComponent()}
        </div>     
      </div>
      <SlideNavigator setActiveComponent={handleSetActiveComponent}/>
    </div>
  );
}
