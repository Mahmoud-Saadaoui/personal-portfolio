import Header from "@/components/header";
import LeftIcons from "@/components/icons/LeftIcons";
import RightIcons from "@/components/icons/RightIcons";
import HomeComponent from "@/components/home";
import AboutComponent from "@/components/about";
import WorkComponent from "@/components/work";


export default function Home() {
  
  return (
    <div className="w-screen h-screen bg-gray-50 dark:bg-slate-800 
      overflow-hidden p-8 sm:p-10 md:p-14 relative 
    ">
      <Header/>
      <LeftIcons/>
      <RightIcons/>
      <div className="overflow-y-auto bg-gray-200 border border-gray-300 dark:border-gray-600 dark:bg-slate-900 text-slate-900 dark:text-white h-full">
        <WorkComponent/>
      </div>
      
    </div>
  );
}
